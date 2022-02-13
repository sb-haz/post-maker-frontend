import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';

import Navbar from './components/Navbar';
import Home from './Home';
import Tool from './Tool';
import Guide from './components/Guide';
import Footer from './Footer';
import NotFound from './components/NotFound';

function App() {
  const makers = {
    quote: {
      type: 'quote',
      title: 'Quote Maker',
      desc: `Share a Tweet link to make a quote image. The image will be produced in a 1:1 format with a watermark.`,
      tag: 'render',
      media_src: '/examples/quote_maker.png'
    },
    image: {
      type: 'image',
      title: 'Image Maker',
      desc: `Share a Tweet link to make an image of a tweet with an image. The image will be produced in a 1:1 format with a watermark.`,
      tag: 'render',
      media_src: '/examples/image_maker.png'
    },
    video: {
      type: 'video',
      title: 'Video Maker',
      desc: `Share a Tweet link to generate a video. The video will be produced in a 1:1 format with an animated watermark.`,
      tag: 'example',
      media_src: '/examples/video_maker.mp4'
    },
    reel: {
      type: 'reel',
      title: 'Reel Maker',
      desc: `Share a Tweet link to make a reels video. The video will be produced in a 16:9 format with an animated watermark.`,
      tag: 'example',
      media_src: '/examples/reels_maker.mp4'
    }
  }
  return (
    <>
      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/tool/quote' element={<Tool type={makers.quote.type} title={makers.quote.title} desc={makers.quote.desc} tag={makers.quote.tag} media_src={makers.quote.media_src} />} />
          <Route path='/tool/video' element={<Tool type={makers.video.type} title={makers.video.title} desc={makers.video.desc} tag={makers.video.tag} media_src={makers.video.media_src} />} />
          <Route path='/tool/reel' element={<Tool type={makers.reel.type} title={makers.reel.title} desc={makers.reel.desc} tag={makers.reel.tag} media_src={makers.reel.media_src} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ScrollToTop>

      <div className="spacer divider-animated-waves-footer"></div>
      <Footer />
    </>
  );
}

export default App;
