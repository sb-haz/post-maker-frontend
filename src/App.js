import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Tool from './Tool'
// import QuoteTool from './QuoteTool';
// import ImageTool from './ImageTool';
// import VideoTool from './VideoTool';
// import ReelTool from './ReelTool';
import Footer from './Footer';

function App() {
  const makers = {
    'quote': {
      'type': 'quote',
      'title': 'Quote Maker',
      'desc': `Share a Tweet link to make a quote image. The image will be produced in a 1:1 format with a watermark.`
    },
    'image': {
      'type': 'image',
      'title': 'Image Maker',
      'desc': `Share a Tweet link to make an image of a tweet with an image. The image will be produced in a 1:1 format with a watermark.`
    },
    'video': {
      'type': 'video',
      'title': 'Video Maker',
      'desc': `Share a Tweet link to generate a video. The video will be produced in a 1:1 format with an animated watermark. You will receive the complete video through email.`
    },
    'reel': {
      'type': 'reel',
      'title': 'Reel Maker',
      'desc': `Share a Tweet link to make a reels video. The video will be produced in a 16:9 format with an animated watermark. You will receive the complete video through email.`
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quote' element={<Tool type={makers.quote.type} title={makers.quote.title} desc={makers.quote.desc}/>} />
        <Route path='/image' element={<Tool type={makers.image.type} title={makers.image.title} desc={makers.image.desc}/>} />
        <Route path='/video' element={<Tool type={makers.video.type} title={makers.video.title} desc={makers.video.desc}/>} />
        <Route path='/reel' element={<Tool type={makers.reel.type} title={makers.reel.title} desc={makers.reel.desc}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
