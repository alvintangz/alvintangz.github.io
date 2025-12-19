import { useEffect, useState } from "react";
import { RotatableImage } from "../../../../types";

interface TouchScrollRotatorProps {
    images: RotatableImage[];
    onImageChange: (newImage: RotatableImage, isCompleted: boolean) => void;
}

const TouchScrollRotator = ({ images, onImageChange }: TouchScrollRotatorProps) => {
    // Sort images based on scrollOrder
    const sortedImages = images
        .slice()
        .sort((a, b) => a.scrollOrder - b.scrollOrder);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);

    const touchThreshold = 40; // Threshold in pixels for touch movement

    useEffect(() => {
        const handleTouchStart = (event: TouchEvent) => {
            if (event.touches.length === 1) {
                setTouchStartY(event.touches[0].clientY);
            }
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (touchStartY === null) return;

            const touchCurrentY = event.touches[0].clientY;
            const deltaY = touchStartY - touchCurrentY;

            if (deltaY > touchThreshold) {
                // Scrolling down
                if (currentImageIndex < sortedImages.length - 1) {
                    onImageChange(sortedImages[currentImageIndex + 1], sortedImages[currentImageIndex + 1] === sortedImages[sortedImages.length - 1]);
                    setCurrentImageIndex((prevIndex) => prevIndex + 1);
                    setTouchStartY(touchCurrentY);
                }
            } else if (deltaY < -touchThreshold) {
                // Scrolling up
                if (currentImageIndex > 0) {
                    onImageChange(sortedImages[currentImageIndex - 1], false);
                    setCurrentImageIndex((prevIndex) => prevIndex - 1);
                    setTouchStartY(touchCurrentY);
                }
            }
        };

        const handleTouchEnd = () => {
            setTouchStartY(null);
        };

        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentImageIndex, onImageChange, sortedImages, sortedImages.length, touchStartY]);

    const currentImage = sortedImages[currentImageIndex];

    return (
        <div className="px-7">
            <img
                src={currentImage.imagePath}
                alt={currentImage.alt}
            />
        </div>
    );
};

export default TouchScrollRotator;
