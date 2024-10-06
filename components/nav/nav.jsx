import { useState, useEffect } from 'react';
import Menu from './menu';

export default function Nav({ src, textColor }) {
  const [background, setBackground] = useState('bg');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBackground('bg-white'); 
      } else {
        setBackground('bg'); 
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='nav' className={`${background} flex items-center justify-between sm:justify-around pt-2 sticky top-0 z-50`}>
      <Menu icon={src} textColor={textColor} />
    </div>
  );
}
