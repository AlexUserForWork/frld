import './App.css';
import animationData from './frok.json';
import mainImg from "./web.webp"

import Lottie from 'lottie-react';
const interactivity = {
   mode: 'scroll',
   actions: [
      {
         visibility: [0.01, 0.45],
         type: 'seek',
         frames: [-29, 100]
      }
   ]
};

function App() {
   return (
      <div className='App at-item'>
         <img src={mainImg} alt=''></img>
         {/* <Lottie
            // interactivity={interactivity}
            animationData={animationData}
            // options={defaultOptions}
            loop={true}
         /> */}
      </div>
   );
}

export default App;
