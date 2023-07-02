import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const state = useSelector((state) => state.sidebar.payload);

  return (
    <>
      <Wrapper>
        <div className={`main_container ${state ? "collapsed" : ""}`}>
          {!state ? (
            <ul>
              <li className="sidebarli">
                <Link to="/">Home</Link>
              </li>
              <li className="sidebarli">
                <Link to="/login">Sign In</Link>
              </li>
              <li className="sidebarli">
                <Link to="/register">Sign Up</Link>
              </li>
              <li className="sidebarli">
                <Link to="/about">About Us</Link>
              </li>
              <li className="sidebarli">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="sidebarli">
                <Link to="/service">Service</Link>
              </li>
              <li className="sidebarli">
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Sidebar;

const Wrapper = styled.section`


  .main_container {
    margin: 0px;
    padding: 0px;
    height: 87vh;
    background-color: rgba(248, 249, 250);
    transition: width 0.3s ease-in-out; /* Add a smooth transition */
    overflow: hidden; /* Disable scrolling */
    position:sticky;
    top:20px !important;
    

  }

  .main_container.collapsed {
    width: 0;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 87px;
  }

  ul li a {
    text-decoration: none;
    color: black;
  }

  ul li {
    display: block;
    padding: 0 0 17px 0;
    width: 100%;
  }

  /* Media query for mobile and tablet devices */
  @media (max-width: 1024px) {
    .main_container {
      width: 30vw;
    }

    .main_container.collapsed {
      width: 0;
    }
  }

  /* Media query for desktop and laptop devices */
  @media (min-width: 1025px) {
    .main_container {
      width: 14vw;
    }

    .main_container.collapsed {
      width: 0;
    }
  }
`;
