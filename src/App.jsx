import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Chatbot from './components/ChatbotPage';
import TranslatorPage from './components/TranslatorPage';
import FAQList from './components/FAQList';
import FAQForm from './components/FAQForm';
import FAQDetails from './components/FAQDetails';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/translate" element={<TranslatorPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/faqs/new" element={<FAQForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
