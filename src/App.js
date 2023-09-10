import './App.css';
import audio from './assets/audio.mp3'

import Background from './assets/l.jpg';
import Background2 from './assets/1.jpg';
import Background3 from './assets/3.jpg';
import Background4 from './assets/4.jpg';
import Background5 from './assets/5.jpg';
import { useEffect, useState } from "react";

function App() {
    const [s, setS] =  useState(0);

    useEffect(() => {
        const d = setInterval(() => setS(getRandomImage()), 1800)

        return () => clearInterval(d)
    }, [s])

    const getRandomImage = () => {
        const value = Math.floor(Math.random() * 5);

        if (value === 0)  {
            return Background;
        }
        if (value === 1) {
            return Background2;
        }
        if (value === 2) {
            return Background3;
        }
        if (value === 3) {
            return Background4;
        }
        if (value === 4) {
            return Background5;
        }
    }

    const audioStyle = {
        backgroundColor: '#ffcccc',
        border: '2px solid #ff3366',
        color: '#ff3366',
        borderRadius: '10px',
        padding: '10px',
        position: 'relative',
        backgroundPosition: 'center center',
        overflow: 'hidden',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '195px',
        backgroundImage: `url("${s}")`
    }


  return (
    <div className="App">
        <audio controls style={audioStyle} autoPlay={true} loop>
            <source src={audio} type="audio/mp3" autoFocus />
            <p>
                Your browser doesn't support HTML5 audio. Here is a
            </p>
        </audio>
    </div>
  );
}

export default App;
