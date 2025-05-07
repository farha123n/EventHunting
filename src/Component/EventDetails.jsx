import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify'; // for success message
import 'react-toastify/dist/ReactToastify.css';

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const singleEvent = data.find(d => d.id == id);
    setEvent(singleEvent);
  }, [data, id]);

  const { thumbnail, name, category, date, location, entryFee } = event;
     console.log(event)
  // Handle form submission
  const handleReserve = (e) => {
    e.preventDefault();
    toast.success('Seat reserved successfully!');
    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center gap-10 py-8">
            <Helmet>
                            <title>Event | Event Details</title>
                        </Helmet>
      {/* Event Card */}
      <div className="card bg-base-100 w-96 shadow-sm" data-aos="fade-up">
        <figure>
          <img className="h-40 w-60" src={thumbnail} alt="Event" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary h-10 m-3">
              <p className="p-2">category: {category}</p>
            </div>
            <div className="badge badge-secondary h-20 m-3">
              <p className="p-2">location: {location}</p>
            </div>
          </h2>
          <p>Entry Fee: {entryFee}</p>
          <p>Date: {date}</p>
        </div>
      </div>

      {/* Reservation Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">Reserve a Seat</h3>
        <form onSubmit={handleReserve}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input type="text" name="name" required className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-sky-400" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" required className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-sky-400" />
          </div>
          <button type="submit" className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition">
            Reserve Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
