import React from 'react';
import gTranslate from '../assets/g_translate@2x.png';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl text-white relative h-[20%] font-dosis font-bold pt-12 mb-4">Fruits.ai</h1>
      <h1 className="text-3xl text-white relative h-[10%] font-dosis font-semibold mb-12">"Be healthy!"</h1>
      <div className="flex flex-wrap relative w-full h-[75%] max-w-6xl justify-evenly gap-12">
        <div className="w-[20%] min-w-[250px] h-[65%] bg-[#ffe5c2] text-[#C84AD3] font-dosis text-6xl font-bold text-center flex items-center justify-center rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/chat')}>
          Chat.
        </div>
        <div className="w-[20%] min-w-[250px] h-[65%] bg-[#c2f0ff] text-white text-center flex items-center justify-center rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/translate')}>
          <img src={gTranslate} alt="" />
        </div>
        <div className="w-[20%] min-w-[250px] h-[65%] bg-[#dbcbfc] font-dosis font-bold text-[#3B5998] text-6xl text-center flex items-center justify-center rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/faqs')}>
          FAQ
        </div>
        <div className="w-[20%] min-w-[250px] h-[65%] bg-[#ebc7f1] font-dosis font-bold text-5xl text-[#C84AD3] text-center flex items-center justify-center rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/about')}>
          About Us
        </div>
      </div>
    </div>
  );
}

export default HomePage;
