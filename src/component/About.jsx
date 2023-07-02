import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="content ">
        <div className="image-container">
          <img src="https://source.unsplash.com/500x500/?house" alt="..." />
        </div>
        <div className="text-container">
          <h2 style={{textAlign:"center"}}>About</h2>
          <p>
          RentTent is an exceptional platform that revolutionizes the way you rent properties. With its user-friendly interface and extensive listing database, RentTent is your go-to destination for finding the perfect rental space. Whether you're searching for an apartment, house, or commercial property, RentTent offers a comprehensive range of options to suit your preferences and budget. Our website's intuitive search and filtering system allows you to easily navigate through numerous listings, saving you valuable time and effort.
          <br />
          <br />       </p>
         
<p>
At RentTent, we understand the importance of personalized experiences. That's why our advanced algorithms match your specific requirements to available rentals, ensuring you find the ideal space tailored to your needs. From cozy studios to luxurious penthouses, RentTent showcases an extensive collection of properties, accompanied by detailed descriptions, high-quality images, and accurate location information. You can explore every aspect of a rental before making a decision, empowering you to make an informed choice.
<br />
<br />
</p>


   
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
  }

  .image-container {
    flex: 1;
    margin-right: 20px;
    max-width: 400px;
    width: 100%;
   
  }

  .text-container {
    flex: 1;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: contain;
  

  }

  @media (max-width: 768px) {

    .content {
      display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 20px;
    flex-direction: column;
    }

    ${'' /* .image-container {
      max-width: 400px;
      width: 50%;
    } */}

    ${'' /* .text-container {
      width: 50%;
    } */}
  }
`;
