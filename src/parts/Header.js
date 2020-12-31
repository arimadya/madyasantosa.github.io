import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Brand from "../components/Logo";

export default function Header() {
  const [menu, setMenu] = useState("");
  return (
    <div>
      <nav className="navbar container">
        <Button type="link" href="/" className="nav-brand">
          <Brand />
        </Button>
        <Button
          type="button"
          className="nav-toggle ml-auto"
          onClick={menu === "show" ? () => setMenu("") : () => setMenu("show")}
        >
          <i
            className={
              menu === "show" ? "fa fa-fw fa-times" : "fa fa-fw fa-bars"
            }
          ></i>
        </Button>
        <ul
          className={
            menu === "show" ? "navbar-nav ml-auto show" : "navbar-nav ml-auto"
          }
        >
          <li className="nav-item">
            <Button type="link" href="/project" className="nav-link ">
              Project
            </Button>
          </li>
          <li className="nav-item">
            <Button type="link" href="/blog" className="nav-link">
              Blog
            </Button>
          </li>
          <li className="nav-item">
            <Button
              type="link"
              href="https://www.youtube.com/channel/UCLIwVcY_upUxmLf-3Oj3bpA"
              className="nav-link"
              isExternal
            >
              Youtube
            </Button>
          </li>
          <li className="nav-item">
            <Button
              type="link"
              href="mailto:adaperlusamamadya@gmail.com"
              className="nav-link"
              isExternal
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
