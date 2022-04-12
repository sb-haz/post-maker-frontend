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
  const tools = [
    {
      type: 'quote',
      path: '/quote',
      title: 'Quote Maker',
      desc: `Share a Tweet link to make a quote image. The image will be produced in a 1:1 format with a watermark.`,
      media_src: '/examples/quote_maker.png'
    }, {
      type: 'video',
      path: '/video',
      title: 'Video Maker',
      desc: `Share a Tweet link to generate a video. The video will be produced in a 1:1 format with an animated watermark.`,
      media_src: '/examples/tool_video_maker.gif'
    }, {
      type: 'reel',
      path: '/reel',
      title: 'Reel Maker',
      desc: `Share a Tweet link to make a reels video. The video will be produced in a 16:9 format with an animated watermark.`,
      media_src: '/examples/tool_reel_maker.gif'
    }];

  return (
    <>
      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/guide' element={<Guide />} />
          {tools.map(
            ({ type, path, title, desc, media_src }, key) =>
              <Route path={path} element={<Tool type={type} title={title} desc={desc} media_src={media_src} />} key={key} />)}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </>
  );
}

export default App;
