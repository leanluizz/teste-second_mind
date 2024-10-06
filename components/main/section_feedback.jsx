import Image from "next/image";
import { useEffect } from "react";

//Animations
import 'animate.css';

export default function Feedback({p, brainDepoimento, conexusDepoimento, astesegDepoimento}){
    useEffect(() => {
     
        const cards = document.querySelectorAll('.card');
    
        cards.forEach((card) => {
          const handleMouseEnter = () => {
            card.classList.remove('animate__animated');
          };
    

          card.addEventListener('mouseenter', handleMouseEnter);

    
          // Remove os event listeners quando o componente desmonta
          return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
          };
        });
      }, []); 
    return (
        <>
        <div className="md:flex justify-around relative">
            <div className="card animate__animated animate__slow	3s animate__infinite animate__shakeY rounded-lg md:w-96 p-5 m-5 shadow-lg shadow-zinc-900">
                <Image className="p-2" src={brainDepoimento} alt="Depoimento da Brain Brand Strategy"/>
                <q className={`${p} italic`}>
                    A Second Mind foi uma excelente parceria da Brain no processo de transformar uma idéia em uma solução integrada. Nossa jornada envolveu integrar uma série de atividades individuais e pouco engrenadas em um software de gestão dos nossos processos operacionais, garantindo mais velocidade, controle, precisão e escala na prestação dos nossos serviços.
                    O Deyvison é um profissional comprometido e engajado, preocupado em entender as necessidades do usuário e encontrar a melhor solução de desenvolvimento, mantendo uma visão holística do problema e uma excelente capacidade técnica.
                    Brain Brand Strategy
                </q>
                <p className="italic text-xl text-center m-2">Flávia Lage -  Brain Brand Strategy - CEO</p>
            </div>
            <div className="card animate__animated animate__slow	3s animate__infinite animate__shakeY relative rounded-lg md:w-96 p-5 m-5 shadow-lg shadow-zinc-900">
                <Image className="p-2" src={conexusDepoimento} alt="Depoimento da Conexsus" />
                <q className="block italic p-2">
                    Mais que uma fábrica de Software, a Second Mind é uma parceira de tecnologia. Por dois anos contratei os serviços da Second Mind e posso destacar três grandes qualidades: compromisso com os prazos, preocupação com a entrega de valor, e cuidado com as pessoas, clientes e colaboradores. Espero voltar a trabalhar com eles. Super recomendo.
                </q>
                <p className="italic text-xl text-center mt-12">
                André Eloy - Conexsus – Catalisador de Conexões  Criativas
                </p>
            </div>

            <div className="card animate__animated animate__slow	3s animate__infinite animate__shakeY rounded-lg md:w-96 p-5 m-5 shadow-lg shadow-zinc-900">
                <Image className="p-2" src={astesegDepoimento} alt="Depoimento da Asteseg"/>
                <q className={`${p} italic`}>   
                Equipe nota 10, elaborou o sistema de gestão conforme a necessidade de nossa empresa. Super indico.Equipe nota 10, elaborou o sistema de gestão conforme a necessidade de nossa empresa. Super indico.
                </q>
                <p className="italic text-xl text-center mt-12">
                Daniela Mara de Oliveira
                Asteseg – Assistente Comercial</p>
            </div>
        </div>
        </>
    )
}