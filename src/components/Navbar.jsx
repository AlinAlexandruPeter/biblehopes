import logo from "../assets/logo.png";

import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="BibleHope" />
      <nav>
        <a href="/">Home</a>
        <a href="/biblia">Biblia</a>
        <a href="/versete">Versete</a>
        <a href="" className="donate">
          Doneaza
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
