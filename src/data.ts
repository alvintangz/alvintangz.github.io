import defaultImage from "./assets/introduction/1.png";
import rightImage from "./assets/introduction/2.png";
import upRightImage from "./assets/introduction/3.png";
import upImage from "./assets/introduction/4.png";
import upLeftImage from "./assets/introduction/5.png";
import leftImage from "./assets/introduction/6.png";
import downImage from "./assets/introduction/7.png";
import { AlvinsDirectionEnum } from "./enums";
import { JourneyItem, RotatableImage } from "./types";
import {
    faBriefcase,
    faBuildingColumns,
    faGraduationCap,
    faHandshake,
    faPeopleGroup,
    faStar,
    faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import openTextImage from "./assets/journey/opentext.jpg";
import liveCompImage from "./assets/journey/live-competition.jpg";

const INTRODUCTION_IMAGES: RotatableImage[] = [
    {
        imagePath: defaultImage,
        alt: "Alvin Tang",
        fromAngle: null,
        toAngle: null,
        scrollOrder: 0,
        direction: AlvinsDirectionEnum.NONE,
        default: true,
    },
    {
        imagePath: leftImage,
        alt: "Alvin Tang facing left",
        fromAngle: 325,
        toAngle: 20,
        scrollOrder: 2,
        direction: AlvinsDirectionEnum.LEFT,
        default: false,
    },
    {
        imagePath: upLeftImage,
        alt: "Alvin Tang facing up-left",
        fromAngle: 20,
        toAngle: 70,
        scrollOrder: 3,
        direction: AlvinsDirectionEnum.UP_LEFT,
        default: false,
    },
    {
        imagePath: upImage,
        alt: "Alvin Tang facing up",
        fromAngle: 70,
        toAngle: 110,
        scrollOrder: 4,
        direction: AlvinsDirectionEnum.UP,
        default: false,
    },
    {
        imagePath: upRightImage,
        alt: "Alvin Tang facing up-right",
        fromAngle: 110,
        toAngle: 160,
        scrollOrder: 5,
        direction: AlvinsDirectionEnum.UP_RIGHT,
        default: false,
    },
    {
        imagePath: rightImage,
        alt: "Alvin Tang facing right",
        fromAngle: 160,
        toAngle: 225,
        scrollOrder: 6,
        direction: AlvinsDirectionEnum.RIGHT,
        default: false,
    },
    {
        imagePath: downImage,
        alt: "Alvin Tang pointing down",
        fromAngle: 225,
        toAngle: 325,
        scrollOrder: 7,
        direction: AlvinsDirectionEnum.DOWN,
        default: false,
    },
];

const JOURNEY_ITEMS: JourneyItem[] = [
    {
        time: "2011",
        icon: faStar,
        title: "First Website",
        description:
            "Built my first site in grade 8, sparking my interest in programming.",
        image: null,
    },
    {
        time: "2016",
        icon: faBuildingColumns,
        title: "Started Computer Science Degree",
        description:
            "Began studying Computer Science at the University of Toronto.",
        image: null,
    },
    {
        time: "2018",
        icon: faBriefcase,
        title: "Web Developer, Government of Canada",
        description:
            "Developed and maintained internal web apps during my first co-op at Public Services and Procurement Canada.",
        image: null,
    },
    {
        time: "2019",
        icon: faBriefcase,
        title: "Software Developer, OpenText",
        description:
            "Completed an 8-month co-op, building more advanced systems.",
        image: openTextImage,
    },
    {
        time: "2020",
        icon: faPeopleGroup,
        title: "VP Engineering, LIVE Competition",
        description:
            "Led a team of 8 to deploy Blueboard, a reusable business case competition platform.",
        image: liveCompImage,
    },
    {
        time: "2021",
        icon: faGraduationCap,
        title: "Graduated University",
        description:
            "Earned a Honours Bachelor of Science in Computer Science from the University of Toronto.",
        image: null,
    },
    {
        time: "2021",
        icon: faHandshake,
        title: "Lead Developer, Vaccine Hunters Canada",
        description:
            "Developed a tool used by over 2 million Canadians to find COVID-19 vaccines.",
        image: null,
    },
    {
        time: "2021",
        icon: faBriefcase,
        title: "Software Engineer, Varicent",
        description:
            "Joined Varicent's Sales Planning team as a Software Engineer.",
        image: null,
    },
    {
        time: "2022",
        icon: faUpLong,
        title: "Senior Software Engineer, Varicent",
        description:
            "Promoted to Senior Software Engineer on the Sales Planning team.",
        image: null,
    },
    {
        time: "2024",
        icon: faUpLong,
        title: "Staff Software Engineer, Varicent",
        description:
            "Joined the Generative AI team, working directly with the Chief of Staff on internal AI solutions.",
        image: null,
    },
];

const REQUEST_RESUME_PROPS = {
    subject: "Friendly Resume Request 😊",
    message: `Hello. I recently visited your "My Tech Trek" section and would love to review your resume. Could you please send it over at your earliest convenience?

Thanks!`
}

export { INTRODUCTION_IMAGES, JOURNEY_ITEMS, REQUEST_RESUME_PROPS };