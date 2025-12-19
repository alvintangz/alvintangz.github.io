import { useRef, useState, useEffect } from "react";
import { RotatableImage } from "../../../../types";

interface MouseRotatorProps {
    images: RotatableImage[];
    onImageChange: (newImage: RotatableImage, isCompleted: boolean) => void;
}

const MouseRotator = ({ images, onImageChange }: MouseRotatorProps) => {
    const mouseRotatorRef = useRef<HTMLDivElement>(null);
    const defaultRotatableImage =
        images.find((image) => image.default) || images[0];
    const [currentImage, setCurrentImage] = useState<RotatableImage>(defaultRotatableImage);

    // On component first mount
    useEffect(() => {
        // Function to calculate the center position of the component
        const getDRCenterPosition = (): [number, number] | undefined => {
            const mouseRotatorDOMRect =
                mouseRotatorRef.current?.getBoundingClientRect();
            if (!mouseRotatorDOMRect) {
                return;
            }

            const { left, top, width, height } = mouseRotatorDOMRect;
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            return [centerX, centerY];
        };

        // Function to check if the mouse is over the component
        const isPositionOverDR = (mousePosition: [number, number]): boolean => {
            const mouseRotatorDOMRect =
                mouseRotatorRef.current?.getBoundingClientRect();
            if (!mouseRotatorDOMRect) {
                return false;
            }

            const { left, top, width, height } = mouseRotatorDOMRect;
            return (
                mousePosition[0] > left &&
                mousePosition[0] < left + width &&
                mousePosition[1] > top &&
                mousePosition[1] < top + height
            );
        };

        const get360Angle = (
            pointA: [number, number],
            pointB: [number, number],
        ): number => {
            const dy = pointB[1] - pointA[1];
            const dx = pointB[0] - pointA[0];
            const radians = Math.atan2(dy, dx);
            return (radians * (180 / Math.PI) + 360) % 360;
        };

        const setImagePathByAngle = (angle: number) => {
            for (const rotatableImage of images) {
                if (
                    rotatableImage.fromAngle !== null &&
                    rotatableImage.toAngle !== null &&
                    ((rotatableImage.fromAngle > rotatableImage.toAngle &&
                        (angle >= rotatableImage.fromAngle ||
                            angle < rotatableImage.toAngle)) ||
                        (angle >= rotatableImage.fromAngle &&
                            angle < rotatableImage.toAngle))
                ) {
                    setCurrentImage(rotatableImage);
                    onImageChange(rotatableImage, false);
                    return;
                }
            }
            // If no matching image is found, set to default image
            setCurrentImage(defaultRotatableImage);
            onImageChange(defaultRotatableImage, false);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const mousePosition: [number, number] = [event.clientX, event.clientY];
            const centerPosition = getDRCenterPosition();

            if (!centerPosition) return;

            if (isPositionOverDR(mousePosition)) {
                setCurrentImage(defaultRotatableImage);
                return;
            }

            const angle = get360Angle(mousePosition, centerPosition);
            setImagePathByAngle(angle);
        };

        const handleMouseOut = () => {
            setCurrentImage(defaultRotatableImage);
            onImageChange(defaultRotatableImage, false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <div ref={mouseRotatorRef}>
            <img
                src={currentImage.imagePath}
                alt={currentImage.alt}
            />
        </div>
    );
};

export default MouseRotator;
