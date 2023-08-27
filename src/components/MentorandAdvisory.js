import React from "react";
import { styled } from "styled-components";

const MentorandAdvisory = () => {
  // const sendEmail = async () => {
  //   try {
  //     const response = await fetch('/api/send-email', {
  //       method: 'POST', // Use the appropriate HTTP method
  //       headers: {
  //         'Content-Type': 'application/json', // Adjust the content type if needed
  //         // Add other headers as necessary
  //       },
  //       body: JSON.stringify({
  //         // Include any necessary data in the request body
  //         recipient: 'mufudcrz@gmail.com',
  //         subject: 'Hello from React',
  //         message: 'This is a test email sent from React.',
  //       }),
  //     });

  //     if (response.ok) {
  //       console.log('Email sent successfully');
  //     } else {
  //       console.error('Email sending failed');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email', error);
  //   }
  // };

  return (
    <MentorandAdvContainer>
      <div className="container">
        <div className="card">
          <h2 className="heading">Mentor & Advisor</h2>
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
          </div>
          <div className="info">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="message-cont">
            <div className="message">
              <a href="mailto:recipient@example.com?subject=Hello">
                Message him now
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="heading">Mentor & Advisor</h2>
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdJeYZKCb_DMc_6BBWnqB8m-l8BX0uHduQ&usqp=CAU"
              alt="mentor-pic"
            />
          </div>
          <div className="info">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="message-cont">
            <div className="message">
              <a href="mailto:recipient@example.com?subject=Hello">
                Message him now
              </a>
            </div>
          </div>
        </div>
      </div>
    </MentorandAdvContainer>
  );
};

const MentorandAdvContainer = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;
  .container {
    margin-top: 10rem;
    /* margin-left: 7rem; */
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    .card {
      width: 250px;
      text-align: center;
      border-radius: 1rem;
      height: 490px;
      width: 25%;
      /* border: 0.001px solid #ccc; */
      background-color: white;
      transition: box-shadow 0.3s ease;
      box-shadow: 2px 8px 16px rgba(0, 0, 0, 0.1);
      &:hover {
        box-shadow: 6px 16px 40px rgba(0, 0, 0, 0.2);
        border: none;
      }
      .heading {
        color: blueviolet;
      }
      img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
      }
      .info {
        font-size: medium;
        h2 {
          color: #1f3d7a;
        }
        p {
          color: #2f5cb6;
        }
      }
      .message-cont {
        margin-top: 1.5rem;
        background-color: white;
        width: 100%;
        border-radius: 3rem;
        height: 2.5rem;
        border: solid #1a3365;
        cursor: pointer;
        .message {
          margin-top: -0.8rem;
          text-align: center;
          margin-top: 0.2rem;
          text-decoration: none;
          a{
            font-size: 20px;
            text-decoration: none;

          }
        }
      }
    }
  }
`;

export default MentorandAdvisory;
