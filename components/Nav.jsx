import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "animate.css";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const pagesLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  const socialMediaIcons = [
    {
      icon: faFacebook,
      path: "https://www.facebook.com/Waxif.Alee",
    },
    {
      icon: faGithub,
      path: "https://www.github.com/WaxifAlee",
    },
    {
      icon: faInstagram,
      path: "https://instagram.com/Waxif.Alee",
    },
    {
      icon: faYoutube,
      path: "https://www.youtube.com/channel/UCTpzt54KWDRP_4icWkHo04Q",
    },
  ];
  return (
    <div className={navStyles.header}>
      <nav className={navStyles.nav}>
        <div className={navStyles.logo}>
          <b>
            <Link className={navStyles.logo} href={"/"}>
              WORDY WASIF
            </Link>
          </b>
        </div>

        <div className={navStyles.pagesLinks}>
          <ul>
            {pagesLinks.map((link) => (
              <li key={pagesLinks.indexOf(link)}>
                <b>
                  <Link href={link.path}>{link.name}</Link>
                </b>
              </li>
            ))}
          </ul>
        </div>

        <div className={navStyles.brandIcons}>
          <ul>
            {socialMediaIcons.map((icon) => (
              <li key={socialMediaIcons.indexOf(icon)}>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={icon.path}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px", cursor: "pointer" }}
                    icon={icon.icon}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
