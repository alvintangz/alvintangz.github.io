import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JourneyItem } from "../../types";
import './Journey.css';
import { faFile } from "@fortawesome/free-solid-svg-icons";

interface JourneyProps {
    items: JourneyItem[];
    onRequestResume: () => void;
}

const Journey: React.FC<JourneyProps> = ({ items, onRequestResume }) => {
    return (
        <section
            id="journey"
            className="min-w-dvh min-h-dvh bg-tertiary text-quinary p-16"
        >
            <SectionHeading
                title="My Tech Trek"
                tagline="a peek into my journey as a software developer"
            />
            <div className="py-8">
                <div className="timeline">
                    <div className="timeline-line"></div>
                    <div className="timeline-list space-y-12 relative">
                        {items.map((item, index) => {
                            const [ref, inView] = useInView({
                                threshold: 0.1,
                                triggerOnce: false,
                            });

                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className={`timeline-item w-full md:flex justify-end ${
                                        index % 2 === 0
                                            ? "md:justify-start"
                                            : "md:justify-end"
                                    } relative py-8`}
                                >
                                    <div
                                        className={`pl-12 md:pl-0 md:w-5/12 transform transition-all duration-500 ${
                                            inView
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-10 opacity-0"
                                        } ${
                                            index % 2 === 0
                                                ? "md:text-right flex-row-reverse"
                                                : "md:text-left flex-row-reverse md:flex-row"
                                        } flex flex-row items-center ml-5 md:ml-5`}
                                    >
                                        {
                                            item.image && (
                                                <div className={`hidden md:block flex-none h-24 w-28 rounded-md bg-center bg-no-repeat bg-cover ${
                                                    index % 2 === 0
                                                    ? "ml-5 md:ml-5"
                                                    : "ml-5 md:mr-5 md:ml-0"
                                        }`}
                                                style={{
                                                    backgroundImage: `url(${item.image})`
                                                }}>
                                                </div>
                                            )
                                        }
                                        <div className="shrink">
                                            <h3 className="font-bold text-xl">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm">
                                                {item.description}
                                            </p>
                                            <small className="text-xs cursor-default">
                                                {item.time}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 top-1/2 md:-translate-y-1/2">
                                        <div className="timeline-item-point">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex md:justify-center items-center">
                <div className="pr-4">
                    <p className="text-sm">
                        Want more info?
                    </p>
                </div>
                <button className="request-resume-button" onClick={() => onRequestResume()}>
                    Request Resume
                    <FontAwesomeIcon
                        icon={faFile}
                        className="ml-2"
                    />
                </button>
            </div>
        </section>
    );
};

export default Journey;
