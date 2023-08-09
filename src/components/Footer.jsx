import logo from "../assets/logo-simple.png";

import "../styles/footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="first-line">
        <img src={logo} alt="BibleHopes" />
        <div className="contact">
          <h1>Contact</h1>
          <a href="mailto:contact.biblehopes@gmail.com">
            <i className="fa-sharp fa-regular fa-envelope"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twiiter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://facebook.com">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </div>
        <div className="more">
          <button>Doneaza</button>
          <button
            onClick={() => window.location.replace("localhost:3000/despre-noi")}
          >
            Despre Noi
          </button>
          <button>Biblia</button>
        </div>
      </div>
      <div className="second-line">
        <div>Copyright, {year}</div>
        <div>BibleHopes, All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
