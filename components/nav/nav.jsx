import { useState, useEffect } from 'react';

//Component
import Menu from './menu';

export default function Nav({ src, textColor }) {
  const [background, setBackground] = useState('bg');

  useEffect(() => {
    const Scroll = () => {
      if (window.scrollY > 50) {
        setBackground('bg-white');
      } else {
        setBackground('bg');
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', Scroll);

    return () => {
      window.removeEventListener('scroll', Scroll);
    };
  }, []);

  return (
    <div id='nav' className={`${background} flex items-center justify-around sm:justify-around pt-2 sticky top-0 z-50`}>
      <Menu icon={src} textColor={textColor} />
    </div>
  );
}
