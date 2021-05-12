import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import arrow from "../assets/down-arrow.png";
import video from "../Videos/videoProjectMediumDark.mp4";

const Hero = () => {
  return (
    <Wrapper>
      <div className="video-container">
        <video width="100%" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>

        <div className="hero-text-container">
          <h1>
            Welcome to <br /> CasaShop
          </h1>
          <p>The Best Shop For Your House</p>
          <Link to="/products" className="btn">
            Start Shopping
          </Link>
        </div>
      </div>
      <div className="centered-text-container">
        <img className="arrow" src={arrow} alt="arrow" />

        <h3>
          The best shop <br />
          for your house
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque esse
          quisquam, enim inventore rem nobis? Repellendus reiciendis distinctio
          odit nam doloremque sapiente voluptates nesciunt blanditiis voluptate,
          optio veniam ab quo.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  // min-height: 60vh;
  // display: grid;
  // place-items: center;
  // .img-container {
  //   display: none;
  // }

  // p {
  //   line-height: 2;
  //   max-width: 45em;
  //   margin-bottom: 2rem;
  //   color: var(--clr-grey-5);
  //   font-size: 1rem;
  // }
  // @media (min-width: 992px) {
  //   height: calc(100vh - 5rem);
  //   grid-template-columns: 1fr 1fr;
  //   gap: 8rem;
  //   h1 {
  //     margin-bottom: 2rem;
  //   }
  //   p {
  //     font-size: 1.25rem;
  //   }
  //   .hero-btn {
  //     padding: 0.75rem 1.5rem;
  //     font-size: 1rem;
  //   }
  //   .img-container {
  //     display: block;
  //     position: relative;
  //   }
  //   .main-img {
  //     width: 100%;
  //     height: 550px;
  //     position: relative;
  //     border-radius: var(--radius);
  //     display: block;
  //     object-fit: cover;
  //   }
  //   .accent-img {
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     width: 250px;
  //     transform: translateX(-50%);
  //     border-radius: var(--radius);
  //   }
  //   .img-container::before {
  //     content: '';
  //     position: absolute;
  //     width: 10%;
  //     height: 80%;
  //     background: var(--clr-primary-9);
  //     bottom: 0%;
  //     left: -8%;
  //     border-radius: var(--radius);
  //   }
  // }
  .video-container {
    width: 100%;
    height: 88vh;
    overflow: hidden;
  }

  .hero-text-container {
    width: 70%;
    height: 70%;
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-40%);
    z-index: 3;

    // color: var(--clr-primary-5);
    color: white;

    h1 {
      font-size: 7vw;
      line-height: 6vw;
      letter-spacing: 0.6vw;

      margin-bottom: 3vw;
    }
    p {
      font-size: 2vw;
      line-height: 2vw;
      margin-bottom: 3vw;
      font-weight: 700;
    }
  }

  .centered-text-container {
    width: 50%;

    background: var(--clr-grey-10);
    position: relative;
    top: -4vh;
    z-index: 2;
    margin: auto;

    padding: 2rem;
    font-family: $poppins;

    h3 {
      text-align: center;
      font-weight: 500;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    p {
      text-align: center;
      padding: 0 5rem;
    }
  }
  .arrow {
    width: 7vh;
    position: relative;
    top: -8vh;
    left: 50%;
    animation: bouncing 2s infinite linear;
  }

  @keyframes bouncing {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-25px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  @media (max-width: 1100px) {
    .video-container {
      height: auto;
    }
    .centered-text-container {
      padding: 1rem 1rem;

      p {
        padding: 0;
      }
    }
    .arrow {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .centered-text-container {
      width: 80%;
      position: static;
    }
  }
`;

export default Hero
