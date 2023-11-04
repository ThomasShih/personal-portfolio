import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";

const links_metadata = [
    {
        icon: faLinkedin,
        link: INFO.socials.linkedin,
    },
    {
        icon: faGithub,
        link: INFO.socials.github,
    },
    {
        icon: faInstagram,
        link: INFO.socials.instagram,
    },
    {
        icon: faMailBulk,
        link: `mailto:${INFO.main.email}`,
    }
]

const SocialMediaLinks = () => {
    return (
        <div className="homepage-socials">
            {
                links_metadata.map(({ link, icon }) => (
                    <a href={link} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon={icon}
                            className="homepage-social-icon"
                        />
                    </a>
                ))
            }
        </div>
    )
}

export default SocialMediaLinks;