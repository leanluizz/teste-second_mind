//Next
import Image from 'next/image';

//Firestore
import { db, storage } from '@/pages/api/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//React Hooks
import { useState } from 'react';

export default function Formulario({ icon }) {
  
  //Dados a serem enviados pro firestore
  const [status, setstatus] = useState()
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [curriculo, setCurriculo] = useState(null);

  // Função para enviar dados para Firestore
  const Submit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'contatos'), {
        nome,
        email,
        celular,
        mensagem,
      });

      if (curriculo) {
        // Se o usuário tiver anexado um currículo, enviá-lo pro Firebase Storage
        const storageRef = ref(storage, `curriculos/${curriculo.name}`);
        await uploadBytes(storageRef, curriculo);

        // Obter a URL e enviar pro FireStore
        const downloadURL = await getDownloadURL(storageRef);

        // Armazenar a URL do currículo no Firestore
        await addDoc(collection(db, 'curriculos'), {
          nome,
          email,
          curriculoURL: downloadURL,
        });
      }

      setstatus('Dados enviados com sucesso!')
      setTimeout(() => {
        setstatus('')
      }, 2000);
    } catch (error) {
      setstatus('Erro ao enviar os dados!')
      setTimeout(() => {
        setstatus('')
      }, 2000);
    }
  };

  return (
    <form onSubmit={Submit} id="trabalheConosco" className="bg-zinc-900 flex flex-col justify-center p-12">
      <Image src={icon} className="w-16 md:m-0 m-auto" alt="icone" />
      <h1 className="text-4xl font-bold text-center text-yellow-500">Entre em contato com nossa equipe</h1>
      <div className="flex flex-col space-y-10 md:p-12 m-auto">
        <h3 className="text-2xl text-white">Nome</h3>
        <input required className="md:w-80 p-2 rounded-lg" type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <h3 className="text-2xl text-white">Email</h3>
        <input required className="md:w-80 p-2 rounded-lg" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <h3 className="text-2xl text-white">Celular</h3>
        <input required className="md:w-80 p-2 rounded-lg" type="tel" placeholder="Digite seu número de celular" value={celular} onChange={(e) => setCelular(e.target.value)} />
        <h3 className="text-2xl text-white">Enviar currículo</h3>
        <input className="w-32" type="file" onChange={(e) => setCurriculo(e.target.files[0])} />
        <h3 className="text-2xl text-white">Deixe sua mensagem</h3>
        <textarea className="rounded-lg" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        <input className="cursor-pointer p-2 font-semibold rounded-lg shadow-lg shadow-zinc-900 bg-gradient-to-b from-yellow-300 to-yellow-600" type="submit" value="Enviar" />
      </div>
      <p className='text-center text-xl text-yellow-500'>{status}</p>
    </form>
  );
}
