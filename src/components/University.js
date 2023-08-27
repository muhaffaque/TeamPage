import React from "react";
import { styled } from "styled-components";

const University = () => {
  const institute = [
    "Cambridge University",
    "Harvard University",
    "University of California",
    "Stanford University",
    "Columbia University",
    "ETH Zürich",
    "Duke University",
    "University of Michigan",
  ];
  return (
    <HeroContainer>
      <div className="hero">
        <div className="heading-bar">
          <h2 className="span">Our</h2>
          <h1 className="heading">Top Institutes</h1>
        </div>
        <div className="main-card">
          {institute.map((e, index) => {
            return <button className="buttons">{e}</button>;
          })}
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  .hero {
    margin-top: 5rem;
    .heading-bar {
      text-align: center;
      color: #a230ed;
      .span {
        color: black;
        font-size: 2rem;
      }
      .heading {
        margin-top: -1.3rem;
        font-weight: bold;
        font-size: 3rem;
      }
    }
    .main-card {
      margin-left: 4.2rem;
      .buttons {
        width: 17rem;
        height: 6rem;
        background-color: #cccccc;
        border-radius: 3%;
        margin: 2rem;
        font-size: 20px;
        font-weight: bold;
        color: black;
        border: none;
      }
    }
  }
`;

export default University;
