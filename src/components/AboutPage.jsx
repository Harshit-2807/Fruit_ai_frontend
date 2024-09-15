import React from 'react';
import image from '../assets/mypic.jpg'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient h-screen bg-gray-100 flex items-center justify-center">
      {/* Container */}
      <div className="flex flex-col md:flex-row abbg w-[80%] h-[80%] bg-white p-10 rounded-lg shadow-lg items-center justify-around">
        
        {/* Image Box */}
        <div className=" bg-gray-300 rounded-lg flex justify-center h-auto w-96 items-center mr-20">
          <img src={image} alt="" className=' rounded-lg' />
        </div>
        
        {/* Info Section */}
        <div className="flex max-w-[60%] flex-col justify-center text-center text-white ">
          <h1 className="text-4xl font-bold mb-4 bg-black-shadow">HARSHIT PATEL</h1>
          <p className="text-xl font-semibold mb-4 bg-black-shadow">
            <a href="mailto:harshitpatel264@gmail.com">harshitpatel264@gmail.com</a>
          </p>
          <p className=" bg-black-shadow text-base hidden md:block">
            <strong>Career Overview:</strong> <br />
            Skilled software developer with a strong Java knowledge and good experience in the MERN
stack web development. Possesses problem solving and code optimization skills together with
excellent history of individual and team performance. Looking for a position to utilize IT skills
and logistic mind in order to achieve successful software projects and corporate goals while
continuing personal development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
