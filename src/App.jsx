import React from "react";
import './App.css'
import Header from "./components/header/Header.jsx";
import NavigationBar from "./components/header/NavigationBar.jsx";
import Application from "./components/application/Application.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import CTA_section from "./components/freeTrialSection/CTA_section.jsx";
import FotterContent from "./components/footer/FotterContent.jsx";
import CopyRight from "./components/footer/CopyRight.jsx";
import AnalyticsComponent from './components/analytics/AnalyticsComponent';
import FAQComponent from './components/faqs/FAQComponent';
import BlogPosts from './components/blogPosts/BlogPosts';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Application />
      <AnalyticsComponent/>
      <Testimonial/>
      <FAQComponent/>
      <BlogPosts/>
      <CTA_section />
      <FotterContent />
      <CopyRight />
    </div>
  );
}

export default App;