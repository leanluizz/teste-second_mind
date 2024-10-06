import { useState } from 'react';
export default function Section (){
    const [Sobre, setSobre] = useState(
    )
    const MostrarSobre = () => {
        if (process.browser) {
            const iconJornal = document.querySelector(".jornal")
            iconJornal.classList.remove("animate__infinite");
            iconJornal.classList.add("animate__slideOutDown")
        }
        setTimeout(() => {
            setSobre(
                <div>
                <p className="text-yellow-500 animate__animated animate__bounceIn w-8/12 text-start md:text-center m-auto p-3 text-2xl">
                A Second Mind se destaca como uma renomada fábrica de software e empresa de tecnologia, especializada na customização de sistemas e desenvolvimento de soluções inovadoras, visando aprimorar e modernizar os processos administrativos de seus clientes, proporcionando-lhes um ambiente empresarial mais eficiente e competitivo.   
                </p>
            </div>
            )
        }, 1100);
    }
  function verificarSeChegouNaSecaoRecursos() {
    const secaoRecursos = process.browser ? document.querySelector('#recursos-h1') : null;
    const posicao = secaoRecursos.getBoundingClientRect();

    if (posicao.y <= 1000) {
      MostrarSobre()
      window.removeEventListener('change', verificarSeChegouNaSecaoRecursos);
    }else{ null }
  }
  process.browser ? window.addEventListener('scroll', verificarSeChegouNaSecaoRecursos) : null;
    return(
        <>
        <div className="bg-gradient-to-b from-zinc-800 to-zinc-700 flex flex-col justify-center">
        <div>
        <h1 id='sobre' className="text-yellow-500 text-5xl text-center p-12 font-bold">Sobre</h1>
        {Sobre}
        <svg onClick={MostrarSobre} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="rgb(255, 185, 51)" className="text-yellow-500 rounded-lg p-2 bg-zinc-900 animate__animated animate__infinite animate__tada m-auto bi bi-newspaper jornal" viewBox="0 0 16 16">
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
        </svg>
        </div>
        </div>
        </>
    )
}