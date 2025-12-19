import { RotatableImage } from "../../../types";
import MouseRotator from "./MouseRotator/MouseRotator";
import TouchScrollRotator from "./TouchScrollRotator/TouchScrollRotator";


interface ImageRotatorProps {
    images: RotatableImage[];
    onImageChange: (newImage: RotatableImage, isCompleted: boolean) => void;
}

const ImageRotator: React.FC<ImageRotatorProps> = ({ images, onImageChange }) => {
    const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) return <TouchScrollRotator images={images} onImageChange={onImageChange} />;
    return <MouseRotator images={images} onImageChange={onImageChange} />;
};

export default ImageRotator;
