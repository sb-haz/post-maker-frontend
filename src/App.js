import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';

import Navbar from './components/Navbar';
import Home from './Home';
import Tool from './Tool';
import Footer from './Footer';

function App() {
  const makers = {
    'quote': {
      'type': 'quote',
      'title': 'Quote Maker',
      'desc': `Share a Tweet link to make a quote image. The image will be produced in a 1:1 format with a watermark.`,
      'tag': 'render'
    },
    'image': {
      'type': 'image',
      'title': 'Image Maker',
      'desc': `Share a Tweet link to make an image of a tweet with an image. The image will be produced in a 1:1 format with a watermark.`,
      'tag': 'render'
    },
    'video': {
      'type': 'video',
      'title': 'Video Maker',
      'desc': `Share a Tweet link to generate a video. The video will be produced in a 1:1 format with an animated watermark. You will receive the complete video through email.`,
      'tag': 'example'
    },
    'reel': {
      'type': 'reel',
      'title': 'Reel Maker',
      'desc': `Share a Tweet link to make a reels video. The video will be produced in a 16:9 format with an animated watermark. You will receive the complete video through email.`,
      'tag': 'example'
    }
  }
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quote' element={<Tool type={makers.quote.type} title={makers.quote.title} desc={makers.quote.desc} tag={makers.quote.tag} />} />
          <Route path='/image' element={<Tool type={makers.image.type} title={makers.image.title} desc={makers.image.desc} tag={makers.image.tag} />} />
          <Route path='/video' element={<Tool type={makers.video.type} title={makers.video.title} desc={makers.video.desc} tag={makers.video.tag} />} />
          <Route path='/reel' element={<Tool type={makers.reel.type} title={makers.reel.title} desc={makers.reel.desc} tag={makers.reel.tag} />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
