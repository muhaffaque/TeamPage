import React from "react";
import { styled } from "styled-components";

const Mentor = () => {
  return (
    <MentorContainer>
      <div className="container">
        <div className="heading-bar">
          <h2 className="span">Our</h2>
          <h1 className="heading">Mentors</h1>
        </div>
        <div className="image-container">
          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>
          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>
          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>
          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>
          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>

          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>
          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>
          <div className="profile-info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
            <h3>Name</h3>
            <h3>University</h3>
          </div>
        </div>
      </div>
    </MentorContainer>
  );
};

const MentorContainer = styled.div`
  .container {
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
    .image-container {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      margin-left: 2rem;
      text-align: center;
      .profile-info img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }
`;

export default Mentor;
