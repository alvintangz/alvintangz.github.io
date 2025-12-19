import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { AlvinsDirectionEnum } from "./enums";

export interface RotatableImage {
    imagePath: string;
    alt: string;
    fromAngle: number | null;
    toAngle: number | null;
    scrollOrder: number;
    direction: AlvinsDirectionEnum;
    default: boolean;
}

export interface JourneyItem {
    time: string;
    icon: IconDefinition;
    title: string;
    description: string;
    image: string | null;
}