import React from 'react';
import HotelCardStyles from '../elements/HotelCardStyles';


function HotelCard({hotelsData}){
    return (
        <>
            {
                hotelsData.map((singleHotel)=>{
                    return (
                        <HotelCardStyles key={singleHotel.name}>
                            <div>
                                <div>
                                    <img src={singleHotel.photo} alt="" />
                                </div>
                                <div className="information">
                                    <h2>{singleHotel.name}</h2>
                                    <div className="location">
                                        <img src="../images/location.png" alt="location" />
                                        <h4>{singleHotel.country} {singleHotel.city}</h4>
                                    </div>
                                    <p>{singleHotel.description}</p>

                                    <div className="features">
                                        <div>
                                            <img src="../images/bed.png" alt="bed" />
                                            <span>{singleHotel.rooms} Habitaciones</span>
                                        </div>
                                        <div className="prices">
                                            {singleHotel.price === 1 && <span>$</span>}
                                            {singleHotel.price === 2 && <span>$$</span>}
                                            {singleHotel.price === 3 && <span>$$$</span>}
                                            {singleHotel.price === 4 && <span>$$$$</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </HotelCardStyles>
                    )
                })
            }
        </>
    )
}

export default HotelCard;
