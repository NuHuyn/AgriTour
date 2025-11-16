import React, { useContext, useRef, useEffect } from 'react';
import './Tour.css';
import { list_tour_1, list_tour_2, tour } from '../../assets/assets';
import RegionSelector from '../../components/region/RegionSelector';
import { StoreContext } from '../../context-store/StoreContext';
import { Link } from 'react-router-dom';
import TourDetail from './TourDetail';
const Tour = () => {
  const { region } = useContext(StoreContext);
  const regionSectionRef = useRef(null);
  
  // ✅ Lọc theo region (nếu chọn All thì không hiện)
  const showRegionTours = region !== 'All';

  const regionToursMain = tour.filter(tour => tour.region === region);
  const regionTours1 = list_tour_1.filter(tour => tour.region === region);
  const regionTours2 = list_tour_2.filter(tour => tour.region === region);
  const allRegionTours = [...regionToursMain, ...regionTours1, ...regionTours2];
  useEffect(() => {
  if (region !== 'All' && regionSectionRef.current) {
    regionSectionRef.current.scrollIntoView({ behavior: 'smooth' });
   }
  }, [region]);


  return (
    <>
      <div className='explore-tour' id='explore-tour'>
        <h1>Explore Tour</h1>
        <p className="explore-welcome">
         Welcome to AgriTour where is your gateway to Vietnam’s most authentic and breathtaking landscapes.  
  From the misty mountains of the North, the cultural heartlands of the Central region  
  to the peaceful rivers and vibrant fields of the South, every journey carries its own charm.  
  Choose your region and begin an unforgettable adventure crafted just for you.
        </p>

        {/* ✅ Chọn vùng */}
        <RegionSelector />

        
        {/* ✅ Phần tour mặc định */}
        <h2>Tour hot in all season !!!</h2>
        <p className='explore-tour-description'>
          Discover the beauty and diversity of Vietnam through our carefully curated tours.
        </p>

        <div className='explore-tour-list'>
          {list_tour_1.map((tour, index) => (
            <div key={tour.id || index} className='explore-tour-item'>
              <img src={tour.tour_image} alt={tour.tour_name} />
              <h3>{tour.tour_name}</h3>
              <p>Start Date: {tour.start_date}</p>
              <p>Period: {tour.period}</p>
              <p>Slot: {tour.available ? "Available" : "Fully booked"}</p>
              <div className="tour-price-row">
              <p className="tour-price">{tour.price}</p>
              <Link to={`/tour-details/${tour.id}`} className="tour-link-button">
               <button>View Details</button>
              </Link>
            </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Tour 2 */}
      <div className='explore-tour-2' id='explore-tour-2'>
        <h2>Tour with education</h2>
        <p className='explore-tour-description'>
          Learn by doing — immerse yourself in Vietnam’s rural life while gaining hands-on knowledge through every journey.
        </p>

        <div className='explore-tour-list'>
          {list_tour_2.map((tour, index) => (
            <div key={tour.id || index} className='explore-tour-item'>
              <img src={tour.tour_image} alt={tour.tour_name} />
              <h3>{tour.tour_name}</h3>
              <p>Start Date: {tour.start_date}</p>
              <p>Period: {tour.period}</p>
              <p>Slot: {tour.available ? "Available" : "Fully booked"}</p>
              <div className="tour-price-row">
              <p className="tour-price">{tour.price}</p>
              <Link to={`/tour-details/${tour.id}`} className="tour-link-button">
                <button>View Details</button>
              </Link>
            </div>
            </div>
          ))}
        </div>
      </div>
       
      {showRegionTours && (
         
         
        <div className="main-region-tour" ref={regionSectionRef}>
         <h2>Tour in {region}</h2>
          <div className="main-tour-list">
          {allRegionTours.map((tour, index) => (
          <div key={tour.id || `${tour.tour_name}-${index}`} className="main-tour-item">
            <img src={tour.tour_image} alt={tour.tour_name} />
            <h3>{tour.tour_name}</h3>
            <p>Start Date: {tour.start_date}</p>
            <p>Period: {tour.period}</p>
            <p>Slot: {tour.available ? "Available" : "Fully booked"}</p>
            <div className="tour-price-row">
              <p className="tour-price">{tour.price}</p>
              <Link to={`/tour-details/${tour.id}`} className="tour-link-button">
                <button>View Details</button>
              </Link>
            </div>
          </div>
          ))}
          </div> 
        </div>
     )}
    </>
  );
};

export default Tour;


