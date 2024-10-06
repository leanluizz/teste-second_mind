import Image from "next/image";

//Animations
import 'animate.css'

export default function Inicio({background}){
    
    return (
<div className="relative w-full h-screen">
  <Image className="opacity-90 absolute inset-0 w-full h-full object-cover" src={background} alt="background do inicio" />
  
  <div className="absolute top-0 left-0 p-12">
    <h1 className="text-white font-bold text-3xl animate__animated animate__backInLeft animate__delay-1s	1s">Second Mind</h1>
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-center space-y-8 p-5">
    <h2 className="text-yellow-500 font-bold text-5xl text-start animate__animated animate__backInLeft">Bem vindo(a) à Second Mind, fábrica de software e serviços de TI</h2>
    <p className="text-white font-bold text-base animate__animated animate__backInLeft animate__delay-2s	2s">Conheça mais sobre os nossos serviços</p>
    <button className="cursor-pointer ml-12 rounded-lg shadow-lg shadow-zinc-900 bg-gradient-to-b from-yellow-300 to-yellow-600 p-2 font-bold text-base animate__animated animate__fadeIn animate__delay-1s	1s"> Solicitar serviços</button>
  </div>
</div>
)
}