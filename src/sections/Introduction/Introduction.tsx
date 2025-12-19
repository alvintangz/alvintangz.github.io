import { useState } from "react";
import { RotatableImage } from "../../types";
import ImageRotator from "./ImageRotator/ImageRotator";

interface IntroductionProps {
    images: RotatableImage[];
}

const Introduction: React.FC<IntroductionProps> = ({ images }) => {
    const [shouldTouchScrollBeNone, setShouldTouchScrollBeNone] = useState<boolean>(true);

    const handleImageChange = (_: RotatableImage, isCompleted: boolean) => {
        setShouldTouchScrollBeNone(!isCompleted);
    };

    return (
        <header className={`min-w-dvh min-h-dvh bg-primary py-16 text-white flex flex-col md:flex-row justify-center items-center ${shouldTouchScrollBeNone && "touch-none"}`}>
            <div className="lg:pr-3">
                <div className="w-rotator h-rotator">
                    <div className="hidden bg-secondary h-40 w-80 absolute left-1/3 top-1/4 z-0 origin-center rotate-45"></div>
                    <div className="z-10 relative">
                        <ImageRotator images={images} onImageChange={handleImageChange} />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="cursor-default font-bold text-md md:text-lg">
                    Hello, I am
                </div>
                <h1 className="md:text-6xl after:content-['.'] after:text-quinary">
                    Alvin Tang
                </h1>
                <div className="mt-5">Runner, traveller, and software engineer</div>
            </div>
        </header>
    );
};

export default Introduction;
