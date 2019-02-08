import React, { Component } from 'react';
import './Assets/css/default.min.css';
import './Assets/css/header.min.css';
import './Assets/css/popup.min.css';
import './Assets/css/home.min.css';
import './Assets/css/section1.min.css';
import './Assets/css/services.min.css';
import './Assets/css/about.min.css';
import './Assets/css/blog.min.css';
import './Assets/css/section2.min.css';
import './Assets/css/footer.min.css';




//components
import Header from './components/headerComponent/header';
import Home from './components/pagesComponent/home';
import Services from './components/pagesComponent/services';
import About from './components/pagesComponent/about';
import Footer from './components/footerComponent/footer';
import Blog from './components/pagesComponent/blog';
import Section1 from './components/pagesComponent/section1';
import Section2 from './components/pagesComponent/section2';


class App extends Component {
  render() {
    return (
      <div className="App">
              <Header />
              <Home />
              <Section1 />
              <Services />
              <About />
              <Blog />
              <Section2 />
              <Footer />
      </div>
    );
  }
}

export default App;
