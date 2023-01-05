import React from 'react';
import screen2 from '../assets/screen2.png';
import screen1 from '../assets/screen1.png';
import screen3 from '../assets/screen3.png';
import screen4 from '../assets/screen4.png';



const HomePage = () => {
    return (
   <div>
      <div className="content-container">
        <div className="titlebtn-container">
          <p className="title-page"> Find perfect plants <br/> for your home </p>
        <p className="sub-title"> Beautiful plants that encourage <br/> you to get creative</p>
        <div><button className="shopbtn"> SHOP NOW </button></div>
        </div>
        <div>
        <img className="image-title" src={screen1} alt="davfamily" />
        </div>
      </div>

      <div className="catebr"><p> Categories </p></div>

      <div className="menu">
           <div> <img className="pics-size" src={screen2} /> <p>Jungle Plants</p> </div>
           
           <div> <img className="pics-size" src={screen3} /> <p>Outdoor Plants</p> </div> 

           <div> <img className="pics-size" src={screen3} /> <p>Bedroom Plants</p> </div>
           
           <div> <img className="pics-size" src={screen2} /> <p>Indoor Plants</p></div>
      </div>

    <div className="text-quotes-wrapper">
      <p> Love and work are to people what <br /> water and sunshine are to plants</p>
    </div>
    <div className="features-wrapper">
        <div className="featurePbtn">
              <div> <h2> Featured </h2> </div>
              <div> <p>Our plants are 100% organic, <br/> we don't use pesticiders or <br/> harmful chemicals. </p> </div>
                  <div><p> But please dont eat them </p> </div>
        <div> <button> Shop all Favourites </button></div>
        </div>  
        <div className="feature-images">
            <div> <img className="pics-size_ff" src={screen4} /> <p>Plant 1 <br/> 150£ </p> </div>
  
            <div> <img className="pics-size_ff" src={screen2} /> <p>Plant 2 <br/> 70£ </p> </div> 

            <div> <img className="pics-size_ff" src={screen3} /> <p>Plant 3 <br/> 50£ </p> </div>
        </div>        
    </div>

    <div className="featfooter-wrapper">
       <div> <img className="featfooter" src={screen4} /> <p>Bedroom Plants</p> </div>
           
       <div> <img className="featfooter" src={screen2} /> <p>Indoor Plants</p></div>
      
    </div>
  </div>
);
};
export default HomePage;
