import Image from "next/image"

export default function Section({consultoria, suporte, newandold,codigo}){
    return(
        <>
        <div className="">
            <h1 id="recursos-h1" className="text-5xl text-center p-12 font-bold">Recursos</h1>
            <div>
                <div className=" md:flex md:items-center md:p-4 md:m-4">
                    <div className="md:w-3/12 p-5">
                    <h1 className="text-3xl text-center md:text-start pb-5 font-bold">Consultoria</h1>
                    <p className="text-xl text-center md:text-start">Ajudamos a nossos clientes a atingir seus objetivos e aumentar sua produtividade  de forma eficaz e eficiente através de soluções que garantam uma maior segurança na tomada de decisão.</p>
                    </div>
                    <Image className="rounded-lg md:p-0 p-2 md:w-5/12 h-96 mt-12" src={consultoria} alt="imagem de duas pessoas segurando uma caneta e papel" />
                </div>
                
                <div className=" md:flex md:items-center md:justify-end ">
                    <div className="md:w-3/12 p-5">
                    <h1 className="text-3xl text-center md:text-start pb-5 font-bold">Suporte</h1>
                    <p className="text-xl text-center md:text-start">Suporte corporativo com atendimento técnico remoto, central help-desk, visitas in-loco emergenciais e planos de suporte específicos para cada demanda.</p>
                    </div>
                    <Image className="rounded-lg md:p-0 p-2 md:w-5/12 mt-12" src={suporte} alt="mulher atendendo em um computador" />
                </div>

                <div className=" md:flex md:items-center md:p-12 md:m-12">
                    <div className="md:w-3/12 p-5">
                    <h1 className="text-3xl text-center md:text-start pb-5 font-bold">Código Flexível</h1>
                    <p className="text-xl text-center md:text-start">Trabalhamos com grande variedade de linguagens de forma organizada e refatorável garantindo um código mais limpo e reutilizável através de boas práticas de desenvolvimento.</p>
                    </div>
                    <Image className="rounded-lg  md:p-0 p-2 md:w-5/12" src={codigo} alt="código de html" />
                </div>

                <div className=" md:flex md:items-center md:justify-end">
                    <div className="md:w-3/12 p-5">
                    <h1 className="text-3xl text-center md:text-start pb-5 font-bold">New and Old School</h1>
                    <p className="text-xl text-center md:text-start">Nossos projetos podem ser criados tanto utilizando a metodologia tradicional, atendendo  um escopo específico ou utilizando  metodologias ágeis.</p>
                    </div>
                    <Image className="rounded-lg md:p-0 p-2 md:w-5/12" src={newandold} alt="um fusca antigo e um fusca mais moderno" />
                </div>
            </div>
        </div>
        </>
    )
}