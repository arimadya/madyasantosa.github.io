import React from "react";
import Button from "../components/Button";
import BackgroundImage from "../assets/images/backgound.jpg";
import Madya from "../assets/images/madya.jpg";
export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="profile">
        <div
          className="rounded image"
          style={{ backgroundImage: `url(${Madya})` }}
        />
        <div className="text">
          <h1 className="name mt-24">Madya Santosa</h1>
          <p className="desc mt-4">I am a Web Developer</p>
        </div>
        <div className="social-media">
          <Button
            type="link"
            target="_blank"
            href="https://www.instagram.com/madya.santosa/"
            isExternal
            className="social-media-icon"
          >
            <i className="fab fa-instagram"></i>
          </Button>
          <Button
            type="link"
            target="_blank"
            href="https://www.facebook.com/madya.santosa.92"
            isExternal
            className="social-media-icon"
          >
            <i className="fab fa-facebook"></i>
          </Button>
          <Button
            type="link"
            target="_blank"
            href="https://www.linkedin.com/in/madya-santosa-138191200/"
            isExternal
            className="social-media-icon"
          >
            <i className="fab fa-linkedin"></i>
          </Button>
          <Button
            type="link"
            target="_blank"
            href="https://github.com/madyasantosa"
            isExternal
            className="social-media-icon"
          >
            <i className="fab fa-github"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
