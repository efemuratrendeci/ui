import { Github, Instagram, Linkedin, Mail, MapPinHouse } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_items">
        <div className="nav_item">
          <a href="https://www.linkedin.com/in/efe-murat-rendeci/" aria-label="LinkedIn">
            <Linkedin className="nav_icon" />
          </a>
        </div>
        <div className="nav_item">
          <a href="https://github.com/efemuratrendeci" aria-label="GitHub">
            <Github className="nav_icon" />
          </a>
        </div>
        <div className="nav_item">
          <a href="mailto:eferendeci@gmail.com" aria-label="Email">
            <Mail className="nav_icon" />
          </a>
        </div>
        <div className="nav_item">
          <a href="https://www.instagram.com/efemuratrendeci/" aria-label="Instagram">
            <Instagram className="nav_icon" />
          </a>
        </div>
        <div className="nav_location">
          <MapPinHouse className="nav_icon" />
          <p>Kocaeli/Türkiye</p>
        </div>
      </div>
    </div>
  );
}
