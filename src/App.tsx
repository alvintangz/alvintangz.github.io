import { useEffect, useRef, useState } from "react";
import { INTRODUCTION_IMAGES, JOURNEY_ITEMS, REQUEST_RESUME_PROPS } from "./data";
import Footer from "./sections/Footer/Footer";
import Hobbies from "./sections/Hobbies/Hobbies";
import Introduction from "./sections/Introduction/Introduction";
import Journey from "./sections/Journey/Journey";

const App = () => {
    const [requestResumeCounter, setRequestResumeCounter] = useState(0);
    const footerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (requestResumeCounter > 0 && footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [requestResumeCounter]);

    return (
        <div className="h-dvh w-full snap-y snap-mandatory overflow-x-hidden">
            <div className="snap-always snap-start">
                <Introduction images={INTRODUCTION_IMAGES} />
            </div>
            <div className="snap-always snap-start">
                <Journey items={JOURNEY_ITEMS} onRequestResume={() => setRequestResumeCounter((prev) => prev + 1)} />
            </div>
            <div className="snap-always snap-start">
                <Hobbies />
            </div>
            <div className="snap-always snap-start" ref={footerRef}>
                <Footer {...(requestResumeCounter > 0 ? REQUEST_RESUME_PROPS : {})} />
            </div>
        </div>
    );
};

export default App;
