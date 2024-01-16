import React from 'react';
import doctor1 from '../Assets/doctor1.jpeg';

const doctorsData = [
  {
    id: 1,
    imageUrl: doctor1,
    title: 'Lorem ipsum',
    description1: '(Lorem ipsum)',
    description2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    imageUrl: doctor1,
    title: 'Lorem ipsum',
    description1: '(Lorem ipsum)',
    description2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    imageUrl: doctor1,
    title: 'Lorem ipsum',
    description1: '(Lorem ipsum)',
    description2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    imageUrl: doctor1,
    title: 'Lorem ipsum',
    description1: '(Lorem ipsum)',
    description2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    imageUrl: doctor1,
    title: 'Lorem ipsum',
    description1: '(Lorem ipsum)',
    description2: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

function Doctors() {
  return (
    <div className='doctors  px-0'>
      <h2 className="doctors_heading align-items-center text-center">Meet Our New Faces</h2>

      <div className="row justify-content-between m-3">
  {doctorsData.map((doctor) => (
    <div key={doctor.id} className="col-lg-2 col-md-4 col-sm-6">
      <div className="doctors_card card rounded ">
        <img src={doctor.imageUrl} className="card-img-top" alt={doctor.title} />
        <div className="card-body">
          <h1 className="card-title">{doctor.title}</h1>
          <p className="card-text text-center">{doctor.description1}</p>
          <p className="card-text">{doctor.description2}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Doctors;
