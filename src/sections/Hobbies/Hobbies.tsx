import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandBackFist,
    faPlaneDeparture,
    faPersonRunning,
    faUtensils,
    faLocationDot,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import travellingImage1 from "../../assets/hobbies/travelling/1.jpg";
import travellingImage2 from "../../assets/hobbies/travelling/2.jpg";
import travellingImage3 from "../../assets/hobbies/travelling/3.jpg";
import runningImage1 from "../../assets/hobbies/running/1.jpg";
import runningImage2 from "../../assets/hobbies/running/2.jpg";
import runningImage3 from "../../assets/hobbies/running/3.jpg";
import climbingImage1 from "../../assets/hobbies/climbing/1.jpg";
import climbingImage2 from "../../assets/hobbies/climbing/2.jpg";
import climbingImage3 from "../../assets/hobbies/climbing/3.jpg";
import foodImage1 from "../../assets/hobbies/food/1.jpg";
import foodImage2 from "../../assets/hobbies/food/2.jpg";
import foodImage3 from "../../assets/hobbies/food/3.jpg";
import './Hobbies.css';

const Hobbies = () => {
    const images = [
        {
            label: "Travelling",
            icon: faPlaneDeparture,
            images: [
                {
                    ratio: 610 / 768,
                    imageSrc: travellingImage1,
                    comment: "Macchu Picchu, Peru",
                    commentIcon: faLocationDot,
                },
                {
                    ratio: 610 / 500,
                    imageSrc: travellingImage2,
                    comment: "Lisbon, Portugal",
                    commentIcon: faLocationDot,
                },
                {
                    ratio: 610 / 566,
                    imageSrc: travellingImage3,
                    comment: "Mürren, Switzerland",
                    commentIcon: faLocationDot,
                }
            ],
        },
        {
            label: "Running",
            icon: faPersonRunning,
            images: [
                {
                    ratio: 610 / 598,
                    imageSrc: runningImage1,
                    comment: "My 1st Marathon in New York City, USA",
                    commentIcon: faComment,
                },
                {
                    ratio: 580 / 812,
                    imageSrc: runningImage2,
                    comment: "My 2nd Marathon in Toronto, Canada",
                    commentIcon: faComment,
                },
                {
                    ratio: 610 / 382,
                    imageSrc: runningImage3,
                    comment: "My 1st Half Marathon in San Diego",
                    commentIcon: faComment,
                }
            ],
        },
        {
            label: "Rock Climbing",
            icon: faHandBackFist,
            images: [
                {
                    ratio: 582 / 812,
                    imageSrc: climbingImage1,
                    comment: "Ha Lan Bay, Vietnam",
                    commentIcon: faLocationDot,
                },
                {
                    ratio: 610 / 464,
                    imageSrc: climbingImage2,
                    comment: "Indoor Top Rope Climbing",
                    commentIcon: faComment,
                },
                {
                    ratio: 610 / 520,
                    imageSrc: climbingImage3,
                    comment: "Indoor Speed Wall Climbing",
                    commentIcon: faComment,
                }
            ],
        },
        {
            label: "Food & Dining",
            icon: faUtensils,
            images: [
                {
                    ratio: 610 / 422,
                    imageSrc: foodImage1,
                    comment: "Don Alfonso 1890 (Toronto, Canada)",
                    commentIcon: faLocationDot,
                },
                {
                    ratio: 483 / 812,
                    imageSrc: foodImage2,
                    comment: "Tầm Vị (Hanoi, Vietnam)",
                    commentIcon: faLocationDot,
                },
                {
                    ratio: 610 / 388,
                    imageSrc: foodImage3,
                    comment: "Lisbon, Portugal",
                    commentIcon: faLocationDot,
                }
            ],
        },
    ];

    return (
        <section className="min-w-dvh min-h-dvh bg-quaternary text-quinary p-16 flex justify-center items-center">
            <div>
                <SectionHeading title="My Hobbies" tagline="off the keyboard" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 container mx-auto">
                    {
                        images.map((hobby, imageGroupIdx) => (
                            <div className="grid gap-4 pt-3" key={imageGroupIdx}>
                                <div className="text-center">
                                    <FontAwesomeIcon
                                        icon={hobby.icon}
                                    />
                                    <h3>{hobby.label}</h3>
                                </div>
                                {hobby.images.map((image, imgIndex) => (
                                    <div key={imgIndex}
                                        className="image-container h-auto max-w-full rounded-lg bg-center bg-no-repeat bg-cover"
                                        style={{
                                            aspectRatio: image.ratio,
                                            backgroundImage: `url(${image.imageSrc})`
                                        }}>
                                        <div className="comment-container h-full w-full bg-quaternary bg-opacity-50 p-5 mt-auto flex">
                                            <div className="mt-auto">
                                                <p className="text-xs [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                                    <FontAwesomeIcon
                                                        icon={image.commentIcon}
                                                        className="mr-2"
                                                    />
                                                    {image.comment}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
