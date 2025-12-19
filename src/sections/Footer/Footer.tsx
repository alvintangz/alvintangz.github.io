import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCanadianMapleLeaf,
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm/ContactForm";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface FooterProps {
    subject?: string;
    message?: string;
}

const Footer = ({ subject, message }: FooterProps) => {
    const [lastCommit, setLastCommit] = useState(null);

    useEffect(() => {
        fetch(
            "https://api.github.com/repos/alvintangz/alvintangz.github.io/commits/master",
        )
            .then((response) => response.json())
            .then((json) => setLastCommit(json?.commit?.author?.date));
    }, []);

    return (
        <footer
            id="footer"
            className="min-w-dvh min-h-dvh bg-quinary text-tertiary p-16 flex justify-center"
        >
            <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center w-10/12">
                <div className="md:mr-16 lg:mr-32">
                    <div className="pb-6 pt-10 md:pt-0">
                        <h3 className="mb-1">Want to connect?</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/alvintangz"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="mr-1"
                                    />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/alvintangz/"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="mr-1"
                                    />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="pb-10">
                        <h3 className="mb-1">Want to get personal?</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://www.instagram.com/_alvintang/"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="mr-1"
                                    />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="pb-5">
                        <div className="cursor-default font-bold text-md lg:text-lg">
                            Cheers,
                        </div>
                        <div className="text-4xl md:text-3xl lg:text-5xl after:content-['.'] after:text-quaternary font-bold cursor-default">
                            Alvin Tang
                        </div>
                    </div>
                    <div className="text-xs">
                        {lastCommit && (
                            <div>
                                <p>
                                    Last updated {dayjs(lastCommit).fromNow()}.
                                </p>
                            </div>
                        )}
                        <div className="font-bold">
                            <p>
                                Made with{" "}
                                <FontAwesomeIcon
                                    icon={faMugHot}
                                    className="text-quaternary"
                                />{" "}
                                in Toronto,{" "}
                                <FontAwesomeIcon
                                    icon={faCanadianMapleLeaf}
                                    className="text-quaternary"
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <ContactForm subject={subject} message={message} />
            </div>
        </footer>
    );
};

export default Footer;
