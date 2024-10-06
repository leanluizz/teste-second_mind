import Image from "next/image";

export default function Formulario({icon}){
    return(
        <>
        <form id="trabalheConosco" className="bg-zinc-900  flex flex-col justify-center p-12">
        <Image src={icon} className="w-16 md:m-0 m-auto" alt="icone"/>
        <h1 className="text-4xl font-bold text-center text-yellow-500">Entre em contato com nossa equipe</h1>
        <div className="p-8 text-center">
        <h2 className="italic text-2xl font-bold text-center text-yellow-500">Informações de contato</h2>
        <ul className="text-yellow-500">
            <li className="italic">+55 31 98396-6061</li>
            <li className="italic">contato@secondmind.com.br</li>
            <li className="italic">Rua Cataguases, 323 A</li>
            <li className="italic">36406-109</li>
            <li className="italic">Conselheiro Lafaiete – MG</li>
        </ul>
        </div>
            <div className="flex flex-col space-y-10 md:p-12 m-auto">
            <h3 className="text-2xl text-white">Nome</h3>
            <input className="md:w-80 p-2 rounded-lg" type="text" placeholder="Digite seu nome"/>
            <h3 className="text-2xl text-white">Email</h3>
            <input className="md:w-80 p-2 rounded-lg" type="email" placeholder="Digite seu email"/>
            <h3 className="text-2xl text-white">Celular</h3>
            <input className="md:w-80 p-2 rounded-lg" type="tel" placeholder="Digite seu número de celular"/>
            <h3 className="text-2xl text-white">Enviar currículo</h3>
            <input className="w-32" type="file" name="currículo" />
            <h3 className="text-2xl text-white">Deixe sua mensagem</h3>
            <textarea className="rounded-lg" name="mensagem" />
            <input className="cursor-pointer p-2 font-semibold rounded-lg shadow-lg shadow-zinc-900 bg-gradient-to-b from-yellow-300 to-yellow-600" type="submit" />
            </div>
        </form>
        </>
    )
}