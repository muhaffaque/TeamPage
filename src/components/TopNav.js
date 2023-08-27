import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const TopNav = () => {
  const navlinks = [
    { name: "HOME", link: "/" },
    { name: "COURSES", link: "/courses" },
    { name: "SELECTION", link: "/selection" },
    { name: "BLOGS", link: "/blogs" },
    { name: "MATERIALS", link: "/materials" },
    { name: "TEAM", link: "/team" },
    { name: "CONTACT US", link: "/contact" },
  ];

  return (
    <NavContainer>
      <div className="navbar">
        <img
          className="logo"
          src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
          alt="logo"
        />

        <ul className="links">
          {navlinks.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .navbar {
    display: flex;
  }
  .logo {
    border-radius: 100%;
    object-fit: cover;
    height: 65px;
    width: 65px;
    margin-left: 3.5rem;
    margin-top: 1rem;
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 6rem;
    margin-top: 2.3rem;
    padding-left: 8rem;

    li {
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

export default TopNav;
