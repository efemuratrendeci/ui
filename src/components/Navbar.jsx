export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_items">
        <a href="https://www.linkedin.com/in/efe-murat-rendeci/">
          <img src="/linkedin.png" alt="" className="nav_icon" />
        </a>
        <a href="https://github.com/efemuratrendeci">
          <img src="/github.png" alt="" className="nav_icon" />
        </a>
        <a href="mailto:eferendeci@gmail.com">
          <img src="/mail.png" alt="" className="nav_icon" />
        </a>
        <a href="https://www.instagram.com/efemuratrendeci/">
          <img src="/instagram.png" alt="" className="nav_icon" />
        </a>
        <img src="/location.png" alt="" className="nav_icon" />
        <p>Istanbul/Turkiye</p>
      </div>
    </div>
  );
}
