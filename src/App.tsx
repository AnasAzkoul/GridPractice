import {useState} from 'react'; 
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import Realtors from './components/Realtors/Realtors';
import Features from './components/Features/Features';
import StoryPictures from './components/StoryPictures/StoryPictures';
import StoryContent from './components/StoryContent/StoryContent';
import Homes from './components/Homes/Homes';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

import {galleryIMGs, footerLinks, realtorsData} from './Utils/constants';

import './sass/main.scss'; 

function App() {


  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors data={realtorsData}/>
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery images={galleryIMGs}/>
      <Footer links={footerLinks}/>
    </div>
  )
}

export default App
