import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router';
const Events = ({ dat }) => {
    const { id, thumbnail, name, category, date, location } = dat

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm" data-aos='fade-up'>
                <figure>
                    <img className='h-40 w-60'
                        src={dat.thumbnail}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary h-10 m-3">
                            <p className=' p-2'>category {category}</p>

                        </div>
                        <div className="badge badge-secondary h-20 m-3">
                            <p className=' p-2'>location {location}</p>

                        </div>
                    </h2>
                    <p>date {date}</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/details/${id}`} className="badge badge-outline">
                            View More
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;