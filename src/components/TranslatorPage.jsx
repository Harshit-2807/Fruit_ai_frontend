import React, { useState } from 'react';
import axios from 'axios';

const TranslatorPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('hi'); // Default to Hindi ('hi')

  const apiKey = import.meta.env.VITE_TRANSLATOR_API_KEY;  // Replace with your actual API key

  const handleTranslate = () => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    axios.post(url, {
      q: inputText,
      target: targetLanguage,
    })
    .then(response => {
      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated);
    })
    .catch(error => {
      console.error('Error translating text:', error);
    });
  };

  return (
    <div className='mx-auto py-10 px-10 w-screen h-screen flex flex-col items-center justify-center' >
      <div className='flex-col h-[80%] w-[70%] bg-white rounded-xl'>
        <h1 className='text-center mt-10 text-4xl font-bold mb-16'>Translator</h1>

        {/* Layout Container */}
        <div className='flex items-center justify-between px-10'>
          {/* Input Text Box */}
          <textarea
            rows="6"
            placeholder="Enter text to translate"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className='w-[38%] h-72 bg-gray-100 p-5 rounded-lg border-4 border-gray-300 text-2xl'
          />

          <div className='flex flex-col items-center gap-5'>
            {/* Language Selector */}
            <div className='text-lg'>
              <label>Target Language:</label><br />
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className='w-full border-2 mt-2 border-gray-400 rounded-md max-h-40 overflow-auto hover:bg-gray-50 focus:outline-none focus:border-gray-300 transition-colors duration-300'
              >
                <option value="zh">Chinese</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="ml">Malayalam</option>
                <option value="pa">Punjabi</option>
                <option value="ru">Russian</option>
                <option value="es">Spanish</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
              </select>
            </div>

            {/* Translate Button */}
            <button 
              onClick={handleTranslate}
              className='bg-black-shadow2 text-white text-lg py-2 px-4 rounded hover:bg-blue-700'
            >
              Translate
            </button>
          </div>

          {/* Translated Text Box */}
          <div className='w-[38%] h-72 bg-gray-200 p-5 pt-2 rounded-lg border-4 border-gray-300'>
            <h2 className='text-center text-2xl font-bold mb-4'>Translated Text</h2>
            <p className='text-2xl'>
              {translatedText || "Your translated text will appear here..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslatorPage;
