import "./Cicon.scss";

// ICONS
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Cicon() {
  return (
    <div className="Cicon">
      <a href="#Contact">
        <FiMail size={40} />
      </a>

      <a target="_blank" href="https://github.com/JQui-dev">
        <FaGithub size={40} />
      </a>

      <a target="_blank" href="https://www.instagram.com/jquiroz___/">
        <FaInstagram size={40} />
      </a>
    </div>
  );
}
export default Cicon;
