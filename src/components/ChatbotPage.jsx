import React, { useState, useEffect, useRef } from 'react';
import fruitData from './fruitData.json';  // Import the JSON data
import boticon from "../assets/bot-icon.jpeg"

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [expandedFruit, setExpandedFruit] = useState(null); // Keep track of expanded fruit
  const endOfMessagesRef = useRef(null); // Reference to the end of messages container

  // Initial greeting message
  useEffect(() => {
    setMessages([{ sender: 'bot', text: 'Hello! I can help you with information about fruits. Click any fruit to learn more:' }]);
  }, []);

  // Scroll to the bottom of the chat window whenever messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Generate the list of fruit buttons with icons
  const renderFruitList = () => {
    return fruitData.fruits.map(fruit => (
      <button
        key={fruit.name}
        className="flex items-center w-full text-left px-4 py-3 bg-green-400 text-white hover:bg-green-500 transition"
        onClick={() => handleFruitClick(fruit)}
      >
        <img
          src={fruit.icon}  // Assume fruitData contains an "icon" field for each fruit's icon image
          alt={fruit.name}
          className="w-10 h-10 mr-3 rounded-full object-cover shadow-md"
        />
        <span className="text-lg font-semibold">{fruit.name}</span>
      </button>
    ));
  };

  // Handle fruit selection
  const handleFruitClick = (fruit) => {
    const isExpanded = expandedFruit && expandedFruit.name === fruit.name;

    if (isExpanded) {
      setExpandedFruit(null);  // Collapse the fruit details
    } else {
      // Add user message showing which fruit they clicked
      setMessages([
        ...messages,
        { sender: 'user', text: `Tell me about ${fruit.name}` },  // User input
        { sender: 'bot', text: `Here is the information about ${fruit.name}:`, image: fruit.image },  // Bot response
        { sender: 'bot', text: fruit.description }
      ]);
      setExpandedFruit(fruit);  // Show the clicked fruit's details
    }
  };

  return (
    <div className="flex h-screen w-full">
      
      {/* Left section for chat window (70%) */}
      <div className="flex-1 flex flex-col">
        <div className="mx-auto mt-4 mb-4 max-w-2xl bg-white shadow-lg rounded-lg flex flex-col h-[calc(100vh-80px)] overflow-hidden">
          <div className="sticky top-0 bg-chat-header p-4 shadow-md flex items-center">
            <img
              src={boticon}  // Replace with the URL of your bot image
              alt="Bot"
              className="w-10 h-10 rounded-full mr-3"
            />
            <h1 className="text-white text-2xl font-dosis font-semibold">Fruit.ai</h1>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div className={`inline-block px-5 py-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {message.text}
                </div>
                {message.image && (
                  <div className="mt-3">
                    <img src={message.image} alt="fruit" className="w-40 h-40 object-cover rounded-lg shadow-md" />
                  </div>
                )}
              </div>
            ))}
            <div ref={endOfMessagesRef} /> {/* This div is used to scroll to the bottom */}
          </div>
        </div>
      </div>

      {/* Right section for fruit list (30%) */}
      <div className="w-3/12 bg-green-50 font-dosis p-4 shadow-lg h-full overflow-y-auto">
        <div className="sticky top-0 bg-green-50 p-4 shadow-md">
          <h2 className="text-xl text-center font-semibold text-gray-800">Fruits List</h2>
        </div>
        <div className="flex flex-col">
          {renderFruitList()}
        </div>
      </div>
      
    </div>
  );
};

export default Chatbot;
