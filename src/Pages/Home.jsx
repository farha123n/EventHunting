import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router';
import Events from '../Component/Events';
import { Helmet } from 'react-helmet-async';
import { FaSun } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import eventImg from '../assets/Event.PNG'
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
            <section className='my-16 mx-auto p-8'>
                <h1 className='text-4xl text-sky-500 text-center m-12' data-aos='fade-right'>Why should you join our event</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               <div className='bg-sky-500 m-4 p-4' data-aos='fade-up'>
                     <h1 className='text-xl my-3 text-white mx-2'>Learn From Industry Experts</h1>
                     <p  className='text-sm p-2 m-2 text-slate-200'>Get direct insights and practical knowledge from seasoned professionals who’ve been where you want to go.</p>
                </div>
               <div className='bg-violet-600 m-4 p-4' data-aos='fade-up'>
                     <h1 className='text-xl text-white my-3 mx-2'>Network With Like-Minded People</h1>
                     <p className='text-sm p-2 m-2 text-slate-200'>Meet participants who share your interests, goals, and passions – build valuable connections and even future collaborations..</p>
                </div>
               <div className='bg-cyan-600 m-4 p-4' data-aos='fade-up'>
                     <h1 className='text-xl text-white my-3 mx-2'> Real-World Experience & Takeaways</h1>
                     <p  className='text-sm p-2 m-2 text-slate-200'>Participate in hands-on sessions, Q&As, and interactive activities that offer practical skills and fresh perspectives you can use right away</p>
                </div>
               </div>
            </section>
             <section className='my-16 mx-auto p-8 md:flex bg-blue-600'>
             <div>
             <h1 className='text-8xl  p-8 text-white font-semibold text-center'>Event Champ</h1>
               <p className='text-5xl flex mx-4 my-8 text-white'><FaSun className='text-orange-500 text-4xl mx-6 mt-2' /> Best Event Conference </p>
               <p className='my-4 flex   text-white'><TiTick className='text-white mx-4 text-4xl mb-2 ' /> <span className='text-3xl'>multiple event listing</span></p>
               <p className='my-4 flex   text-white'><TiTick className='text-white mx-4 text-4xl mb-2 ' /> <span className='text-3xl'>Recurring events, schedules and tickets </span></p>
               <p className='my-4 flex   text-white'><TiTick className='text-white mx-4 text-4xl mb-2 ' /> <span className='text-3xl'>Speaker, Venues and organizer</span></p>
               <p className='my-4 flex   text-white'><TiTick className='text-white mx-4 text-4xl mb-2 ' /> <span className='text-3xl'>Ticket sales, event importer and sponsors</span></p>
               <p className='my-4 flex   text-white'><TiTick className='text-white mx-4 text-4xl mb-2 ' /> <span className='text-3xl'>Event Calender And Search System</span></p>
             </div>
             <div className='flex flex-col items-center justify-center lg:ml-28'>
                <img src={eventImg} alt="" />
             </div>
             </section >
        </div>
    );
};

export default Home;