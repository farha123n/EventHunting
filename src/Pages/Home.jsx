import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router';
import Events from '../Component/Events';
import { Helmet } from 'react-helmet-async';
const Home = () => {

    const data=useLoaderData()
      console.log(data)
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        
        <div>
             <Helmet>
                            <title>Event | Home</title>
                        </Helmet>
            <div className=' text-center text-sky-700 text-5xl p-8 m-4 w-11/12 mx-auto' data-aos='fade-left'>Explore the best events happening near you</div>
            <div className='my-14 mx-auto w-4/5 ' data-aos='fade-up'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg"
                            className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-full" />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className='my-16'>

             <h1 className='text-center text-5xl my-6 text-sky-500' data-aos='fade-up'>UPCOMING EVENT</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
                  {data.map(dat=><Events key={dat.id} dat={dat}></Events>)}
              </div>
            </div>
        </div>
    );
};

export default Home;