import Image from "next/image"
export default function AgileTrakce({agiletrack}){
    return (
        <>
        <div id="agiletrack" className="bg-gradient-to-r from-yellow-500 to-yellow-300 md:h-dvh md:flex justify-center items-center p-12">
        <div className="md:w-5/12">
        <h1 className="text-4xl md:p-12 font-bold text-center">Agile Track</h1>
        <p className="font-semibold md:text-2xl">
        Crie projetos, atribua tarefas, gerencie sprints e lançamentos de horas de todo o time.
        Crie projetos, atribua tarefas, gerencie sprints e lançamentos de horas de todo o time.
        Conecte os membros de sua equipe para que todos saibam exatamente o que precisa ser feito e por quais responsáveis.Conecte os membros de sua equipe para que todos saibam exatamente o que precisa ser feito e por quais responsáveis.
        </p>
        <a href="https://www.agiletrack.com.br/" target="__blank" className="cursor-pointer text-blue-600 md:text-xl underline">Agile Track</a>
        </div>
        <Image className="md:w-5/12" src={agiletrack} alt="imagem sobre o aplicativo agile track"/>
        </div>
        </>
    )
}