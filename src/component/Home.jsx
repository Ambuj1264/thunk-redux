import React, { useEffect } from 'react'

const Home = (props) => {
  props.setProgress(0)
  useEffect(()=>{
  props.setProgress(0)
  document.getElementById("carouselExampleDark").style.display="none";
 setTimeout(()=>{
    document.getElementById("carouselExampleDark").style.display="flex";
    props.setProgress(100)
   },4000)

   
  
  },[])

  
   
  return (
 <>
<div className='container-fluid d-flex justify-content-center my-3' style={{color:"white", backgroundColor:"#001C30", borderRadius: "10px"}}>
  <h3 className='py-2'>RentTent is Best plateform to Renting Appartment/Rooms</h3>
</div>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://source.unsplash.com/1400x500/?appartment" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 color='white' style={{color:"white"}}>Pack Your bag</h5>
        <p color='white' style={{color:"white"}}>Don't Affraid for Leaving our city</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://source.unsplash.com/1400x500/?room" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:"white"}}>Choose your perfect Destiny</h5>
        <p style={{color:"white"}}>Unlock your wing</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1400x500/?house" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:"white"}}>No Broker </h5>
        <p style={{color:"white"}}>Choose you favorite Appartment/Room</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

 </>
  )
}

export default Home