import { useState, useEffect } from "react";

import bibleImg from "../assets/bible-img.png";
import formImg from "../assets/form-image.png";
import workImg1 from "../assets/ef-3-20.png";
import workImg2 from "../assets/ps-46-10.jpg";
import workImg3 from "../assets/ier-29-13.png";
import workImg4 from "../assets/ia-1-22.jpg";
import workImg5 from "../assets/cross.jpeg";
import workVideo1 from "../assets/mt-7-7-video.mp4";

import "../styles/home.scss";

const Home = () => {
  return (
    <>
      <Welcome />
      <Work />
      <Form />
    </>
  );
};

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={bibleImg} alt="Bible Image" />
      <div className="text">
        <h1>BibleHopes</h1>
        <h2>cuvantul Sau, speranta Ta</h2>
        <span>citeste Biblia, concentreaza-te pe ce este important</span>
        <br />
        <span>2 Timotei 3:16</span>
        <br />
        <br />
        <br />
        <br />
        <a href="">Exploreaza Acum</a>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="work">
      <div className="work-container-1">
        <img src={workImg1} alt="Efeseni 3:20" />
        <img src={workImg2} alt="Psalmii 46:10" />
      </div>
      <div className="work-container-2">
        <div>
          <img src={workImg3} alt="Ieremia 29:13" />
          <img src={workImg4} alt="Iacov 1:22" />
        </div>
        <video loop autoPlay muted>
          <source src={workVideo1} type="video/mp4" />
        </video>
      </div>
      <div className="work-container-3">
        <img src={workImg5} alt="Cross Image" />
      </div>
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (targetInput, newValue) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [targetInput]: newValue,
      };
    });
    console.log(formData.name);
  };

  return (
    <div className="form">
      <img src={formImg} alt="Study Image" />
      <form>
        <h1>Hai sa ne cunoastem</h1>
        <label htmlFor="name">Nume*</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="name"
          id="name"
          placeholder="numele tau"
        />
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="email"
          id="email"
          placeholder="email-ul tau"
        />
        <label htmlFor="message">Mesaj*</label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="message"
          id="nmessage"
          cols="30"
          rows="10"
          placeholder="ce vrei sa ne spui?"
        ></textarea>
        <button>Trimite</button>
      </form>
    </div>
  );
};

export default Home;
