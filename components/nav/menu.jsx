import Image from "next/image";
import { useEffect } from "react";

export default function Menu({ icon, textColor }) {
  const scrollTo = (selector) => {
    const section = process.browser ? document.querySelector(selector) : null; 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a href="/"><Image src={icon} className="w-16" alt="icone" /></a>
      <nav>
        <ul className={`text-lg md:flex hidden space-x-4`}>
          <li onClick={() => scrollTo('#nav')}><a className="border-b-2 border-yellow-400" href="#">Ínicio</a></li>
          <li onClick={() => scrollTo('#sobre')}><a className="border-b-2 border-yellow-400" href="#">Sobre</a></li>
          <li onClick={() => scrollTo('#agiletrack')}><a className="border-b-2 border-yellow-400" href="#">Agile Track</a></li>
          <li><a className="border-b-2 border-yellow-400" href="#">Serviços</a></li>
          <li onClick={() => scrollTo('#trabalheConosco')}><a className="border-b-2 border-yellow-400" href="#">Trabalhe Conosco</a></li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="md:hidden block m-3 bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </nav>
    </>
  );
}
