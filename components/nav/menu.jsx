import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu({ icon }) {

  //Evento scroll pra auxiliar o usuário a encontrar as informações
  const scrollTo = (selector) => {
    const section = process.browser ? document.querySelector(selector) : null;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [Open, setOpen] = useState(false); // Estado do menu pra dispositivos menores que 768px

  return (
    <>
      <Link href="/"><Image src={icon} className="w-16" alt="icone" /></Link>
      <nav>

        <ul className={`text-lg md:flex hidden space-x-4`}>
          <li onClick={() => scrollTo('#nav')}><Link className="border-b-2 border-yellow-400" href="/">Ínicio</Link></li>
          <li onClick={() => scrollTo('#sobre')}><a className="border-b-2 border-yellow-400" href="#">Sobre</a></li>
          <li onClick={() => scrollTo('#agiletrack')}><a className="border-b-2 border-yellow-400" href="#">Agile Track</a></li>
          <li><Link className="border-b-2 border-yellow-400" href="/servicos">Serviços</Link></li>
          <li onClick={() => scrollTo('#trabalheConosco')}><a className="border-b-2 border-yellow-400" href="#">Trabalhe Conosco</a></li>
        </ul>


        <svg
          onClick={() => setOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="md:hidden block m-3 bi bi-list"
          viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>


        <div className={`fixed top-0 right-0 w-full max-w-md bg-white h-screen transition-all duration-500 transform ${Open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <div className="flex justify-between items-center p-4">
            <Link href="/"><Image src={icon} className="w-16" alt="icone" /></Link>
            <svg
              onClick={() => setOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="red"
              className="cursor-pointer mb-12 m-2 bi bi-x-circle-fill"
              viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </div>


          <ul className="p-3 text-lg flex flex-col items-start space-y-10">
            <li onClick={() => scrollTo('#nav')}><Link className="border-b-2 border-yellow-400" href="/">Ínicio</Link></li>
            <li onClick={() => scrollTo('#sobre')}><a className="border-b-2 border-yellow-400" href="#">Sobre</a></li>
            <li onClick={() => scrollTo('#agiletrack')}><a className="border-b-2 border-yellow-400" href="#">Agile Track</a></li>
            <li><Link className="border-b-2 border-yellow-400" href="/servicos">Serviços</Link></li>
            <li onClick={() => scrollTo('#trabalheConosco')}><a className="border-b-2 border-yellow-400" href="#">Trabalhe Conosco</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
