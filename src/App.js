import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Mast from './containers/mast';
import ImageMoonRekt from './containers/moonRekt';
import WaterWave from './containers/waterWave';
import Faq from './containers/faq';
import Perm from './containers/perm';

function App() {
  return (
    <div className='WrapperBgGrid'>
      <Header />
      <Mast />
      <ImageMoonRekt />
      <WaterWave />
      <Faq/>
      <Perm/>
      <Footer />
    </div>
  );
}

export default App;
