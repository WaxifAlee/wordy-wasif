import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
    <div>
      <div className="header">
        <nav>
          <div className="logo">WORDY WASIF</div>

          <div className="page-links">
            <ul>
              {pagesLinks.map((link) => (
                <li key={pagesLinks.indexOf(link)}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="social-media-icons">
            <ul>
              {socialMediaIcons.map((icon) => (
                <li key={socialMediaIcons.indexOf(icon)}>
                  <Link href={icon.path}>
                    <FontAwesomeIcon
                      style={{ fontSize: "20px" }}
                      icon={icon.icon}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
