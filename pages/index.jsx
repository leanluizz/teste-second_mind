import Head from 'next/head';

//Styles
import styles from '../styles/Home.module.css';
import styleTexts from '../styles/textos.module.css';
import styleMain from '../styles/main.module.css';

//Components
import Nav from '../components/nav/nav.jsx';
import Inicio from '../components/main/section_inicio.jsx';
import Services from '../components/main/section_recursos.jsx';
import Sobre from '../components/main/section_sobre.jsx';
import AgileTrack from '../components/main/section_agiletrack.jsx';
import Clientes from '../components/main/section_clientes.jsx';
import Feedback from '../components/main/section_feedback.jsx';
import Footer from '../components/footer/footer.jsx';

//Images
import Icon from '../assets/images/header/icon.png';
import BackgroundInicio from '../assets/images/main/section 1/background.png';
import BackgroundInicioPhone from '../assets/images/main/section 1/background-phone.png';
import Consultoria from '../assets/images/main/section 2/consultoria.jpg';
import Suporte from '../assets/images/main/section 2/suporte.png';
import Codigo from '../assets/images/main/section 2/codigo.jpg';
import NewandOld from '../assets/images/main/section 2/newandold.png';
import ImageAgileTrack from '../assets/images/main/section 3/agile-track.png';

//Clientes
import MedicoSemFila from '../assets/images/main/section 4/medicosemfila.png';
import Unimed from '../assets/images/main/section 4/unimed-bh2.png';
import Conexsus from '../assets/images/main/section 4/logo_conexsus.png';
import Brain2 from '../assets/images/main/section 4/logo_brain2.png';
import Hexagon from '../assets/images/main/section 4/hexagon.jpg';
import PrefeituraDeQueluzito from '../assets/images/main/section 4/cropped-prefeitura_queluzito.png';
import Cropped from '../assets/images/main/section 4/cropped-logotipo-vertical-esdb2.png';
import Instaletec from '../assets/images/main/section 4/cropped-instaletec.jpg';
import GDois from '../assets/images/main/section 4/cropped-g2.png'; 
import DocfDois from '../assets/images/main/section 4/cropped-docf2.png';
import Asteseg from '../assets/images/main/section 4/cropped-asteseg.png';
import Aipass from '../assets/images/main/section 4/cropped-aipass.png';

//Formulário
import Form from '../components/formulario/form.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Second Mind</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Nav src={Icon} textColor={styleTexts.textGradient} />
      <main className={styles.main}>
        <Inicio background={BackgroundInicio} bgPhone={BackgroundInicioPhone} textColor={styleTexts.textGradient} />
        <Sobre />
        <Services
          consultoria={Consultoria}
          suporte={Suporte}
          codigo={Codigo}
          newandold={NewandOld}
        />
        <AgileTrack agiletrack={ImageAgileTrack} />
        <Clientes
        imgOne={MedicoSemFila}
        imgTwo={Unimed}
        imgThree={Conexsus}
        imgFour={Brain2}
        imgFive={Hexagon}
        imgSix={PrefeituraDeQueluzito}
        imgSeven={Cropped}
        imgEight={Instaletec}
        imgNine={GDois}
        imgTen={DocfDois}
        imgEleven={Asteseg}
        imgTwelve={Aipass}
        />
        <Feedback
        brainDepoimento={Brain2}
        conexusDepoimento={Conexsus}
        astesegDepoimento={Asteseg}
        p={styleMain.cardP}
        />
      </main>
      <Form icon={Icon} />
      <Footer 
      icon={Icon}
      style={styles.footer}
      />
    </div>
  )
}
