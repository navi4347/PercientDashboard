import { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

const Birds = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const initializeVantaEffect = () => {
      if (!vantaEffect && myRef.current) {
        setVantaEffect(BIRDS({
          el: myRef.current,
          backgroundAlpha: 0,
          color1: 0xff0000,
          color2: 0xd1ff,
          colorMode: 'varianceGradient',
          quantity: 4,
          birdSize: 1,
          wingSpan: 30,
          speedLimit: 5,
          separation: 20,
          alignment: 20,
          cohesion: 20,
        }));
      }
    };

    initializeVantaEffect();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    >
    </div>
  );
};

export default Birds;
