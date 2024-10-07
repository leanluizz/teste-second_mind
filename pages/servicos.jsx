//Next
import Head from 'next/head';

//React hooks
import { useState } from 'react';

//Styles
import styles from '../styles/Home.module.css';
import styleTexts from '../styles/textos.module.css';

//Anmations
import 'animate.css';

//Components
import Nav from '../components/nav/nav.jsx';
import Footer from '../components/footer/footer.jsx';

//Imagens
import Icon from '../assets/images/header/icon.png';

export default function Services() {
    const [Content, setContent] = useState();

    //Evento de scroll das informações dos serviços
    const scrollTo = () => {
        if (window.innerWidth <= 767) {
            const section = process.browser ? document.querySelector('#sobre_service') : null;
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const ApiComponent = () => {
        return (
            <div>
                <p>“Application Programming Interface“ ou API é uma forma de integração de sistemas baseada na segurança dos dados e na facilidade de intercâmbio de informações entre diferentes linguagens de programação. As APIs podem se comunicar entre si sem intervenção de usuários e com diferentes ambientes. Elas utilizam uma interface que define seus comportamentos específicos e liga diversas funções dos sistemas de maneira que possam ser utilizadas em variadas aplicações.Qualquer empresa pode ser beneficiada com este tipo solução, pois as APIs possibilitam a integração entre aplicações, elas colaboram para que a empresa dona da plataforma que está sendo acessada pelo usuário tenha acesso a informações importantes sobre quem navega no ambiente e descomplica as integrações de forma geral.</p>
            </div>
        );
    }

    const AplicacoesWebComponent = () => {
        return (
            <div>
                <p>Construímos aplicações personalizadas para sustentar os processos executados na sua empresa de forma a garantir o crescimento acelerado da sua empresa. Trabalhamos como os mais diversos tipos de tecnologias para atender o cliente de maneira diferenciada e pontual. Aplicamos um gerenciamento tático e operacional, baseado na combinação dos métodos tradicionais e ágeis, para alavancar a transformação dos seus processos em soluções web. Garantimos a qualidade do software através de longas operações assistidas sem custo adicional para os clientes.</p>
            </div>
        );
    }

    const AppComponent = () => {
        return (
            <div>
                <p>O mundo hoje encontra-se todo conectado e estar disponível na hora e no formato correto é primordial para todos os setores da indústria. Os dispositivos móveis ganharam uma importânciacia enorme no nosso dia a dia, fazendo-nos viver diferentes experiências e compartilhar nossos pensamentos de forma ímpar. O desenvolvimento de aplicativos possibilita a integração de diferentes serviços e processos com a finalidade de aproximar mais as pessoas dentro e fora do ambiente de trabalho. Aplicativos sob medida reduzem o custo e aumentam a produtividade e garantindo o retorno do investimento.</p>
            </div>
        );
    }

    const BigDataComponent = () => {
        return (
            <div>
                <p>Criação de modelos que analisam e antecipam o comportamento e a dinâmica de processos e interações complexas, reunindo a imensa quantidade de dados digitais, sintetizando em resultados concretos para o cliente. Não existe uma fórmula única que se enquadre nesse serviço. Cada cliente terá seus dados processados e cruzados de maneira a identificar e criar índices que sejam pontuais para cada cliente, sendo o Big Data apenas a ferramenta que será usada para medir e demonstrar esses índices.</p>
            </div>
        );
    }

    const IntegracoesDoSistemaComponent = () => {
        return (
            <div>
                <p>Quando nos referimos a “integração de sistemas” estamos referenciando a uma atividade de desenvolvimento de software em que componentes de software separados são combinados em aplicação. As empresas muitas vezes não conseguem fazer com que sua própria estrutura gerencial acompanhe o crescimento financeiro de projetos, fazendo com que fique cada vez mais difícil gerenciar seus recursos o que acaba desconectando áreas, devido a falta de acesso à informação ou à sua perda durante os diversos processos existentes.</p>
            </div>
        );
    }

    const ReportsComponent = () => {
        return (
            <div>
                <p>Desenvolvemos servidor de relatórios com níveis de acesso bem definidos e relatórios customizados de acordo com sua necessidade e demanda. Trabalhamos como variados tipos de tecnologia como o Report Server, Power BI e Tableau. Esses servidores permitem nivelar o acesso aos mais diferentes relatórios limitando os usuários de acordo com os papéis que eles ocupam na empresa permitindo um maior controle de acessos a dados. Os relatórios agregam métricas de itens de trabalho e resultados de testes. A maioria dos relatórios fornece filtros que podem ser usados para especificar conteúdos a incluir no relatório. Os filtros incluem período de tempo, iteração e caminhos de área, tipos de item de trabalho e estados do item de trabalho. As perguntas que eles respondem relacionam-se a todos os tipos de itens de trabalho.</p>
            </div>
        );
    }


    return (
        <>
            <Head>
                <title>Second Mind</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>
            <Nav src={Icon} textColor={styleTexts.textGradient} />
            <h1 className="md:text-5xl text-xl font-bold p-12">Selecione um dos serviços para saber mais</h1>
            <div className='grid md:space-y-0 space-y-10 md:flex items-center justify-around'>
                <button onClick={() => { setContent(ApiComponent), scrollTo() }} className='overflow-hidden animate__zoomIn animate__animated font-bold p-3 bg-gradient-to-b from-yellow-600 via-bg-yellow-500 to bg-yellow-400 rounded-lg w-48 h-12 '>API</button>
                <button onClick={() => { setContent(AplicacoesWebComponent), scrollTo() }} className='overflow-hidden animate__zoomIn animate__animated font-bold p-3 bg-gradient-to-b from-yellow-600 via-bg-yellow-500 to bg-yellow-400 rounded-lg w-48 h-12 '>Aplicações Web</button>
                <button onClick={() => { setContent(AppComponent), scrollTo() }} className='overflow-hidden animate__zoomIn animate__animated font-bold p-3 bg-gradient-to-b from-yellow-600 via-bg-yellow-500 to bg-yellow-400 rounded-lg w-48 h-12 '>Aplicativos</button>
                <button onClick={() => { setContent(BigDataComponent), scrollTo() }} className='overflow-hidden animate__zoomIn animate__animated font-bold p-3 bg-gradient-to-b from-yellow-600 via-bg-yellow-500 to bg-yellow-400 rounded-lg w-48 h-12 '>Big Data</button>
                <button onClick={() => { setContent(IntegracoesDoSistemaComponent), scrollTo() }} className='overflow-hidden animate__zoomIn animate__animated font-bold p-3 bg-gradient-to-b from-yellow-600 via-bg-yellow-500 to bg-yellow-400 rounded-lg w-48 h-12 '>Integrações de Sistema</button>
                <button onClick={() => { setContent(ReportsComponent), scrollTo() }} className='overflow-hidden animate__zoomIn animate__animated font-bold p-3 bg-gradient-to-b from-yellow-600 via-bg-yellow-500 to bg-yellow-400 rounded-lg w-48 h-12 '>Reports</button>
            </div>
            <div className='md:m-12 md:p-12 '>
                <h2 id='sobre_service' className="text-3xl font-bold p-5 md:text-start">Sobre</h2>
                <p className='text-center text-start p-5'>{Content}</p>
            </div>
            <Footer
                icon={Icon}
                style={styles.footer}
            />
        </>
    )
}