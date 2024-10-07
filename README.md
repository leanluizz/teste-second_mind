# Documentação do Site Landing Page - **SecondMind-Test**

## Sumário
1. Visão Geral do Projeto
2. Objetivo
5. Tecnologias Utilizadas
6. Estrutura de Código
7. Instalação e Configuração
8. Deploy
9. Considerações Finais

---

## 1. Visão Geral do Projeto

O projeto **SecondMind-Test** é uma landing page de teste pra uma empresa corporativa cujo objetivo é recriar o site e mostrar os serviços oferecidos pela empresa SecondMind, destacando suas soluções tecnológicas. O site também exibe informações sobre a empresa, suas áreas de atuação, tecnologias utilizadas, e uma seção de contato.

---

## 2. Objetivo

O objetivo do site é fornecer uma plataforma de fácil navegação para que visitantes possam aprender mais sobre os serviços oferecidos pela **SecondMind-Test** e entrar em contato com a equipe. A página é projetada para ser visualmente atraente e intuitiva, além de fornecer uma boa experiência de usuário (UX).

---

## 3. Funcionalidades

- **Apresentação de Serviços:** Seção dedicada à descrição dos serviços oferecidos pela empresa.
- **Informações sobre a Empresa:** Seção "Sobre nós" que detalha a missão, visão e valores da SecondMind.
- **Tecnologias Utilizadas:** Seção destacando as tecnologias e ferramentas empregadas pela empresa, como **React**, **Next.js**, **Firebase** e **Tailwind CSS**.
- **Formulário de Contato:** Permite que os visitantes entrem em contato com a equipe da empresa.
- **Responsividade:** Design responsivo para uma ótima experiência em dispositivos móveis e desktops.
- **Envio de Currículos:** Formulário para que os interessados possam enviar currículos, armazenados no Firebase.

---

## 4. Estrutura de Páginas

### Página Inicial (`/`)
- **Cabeçalho:** Contém o logotipo da empresa e o menu de navegação.
- **Banner Principal:** Destaque visual com mensagem de boas-vindas e um call-to-action.
- **Tecnologias Usadas:** Seção com logos e descrições breves das tecnologias empregadas (Next.js, React, Firebase, Tailwind CSS).
- **Contato:** Formulário de contato para visitantes se comunicarem diretamente com a empresa.
- **Rodapé:** Informações de contato e links para redes sociais.

### Página de Serviços (`/servicos`)
- Explica detalhadamente os serviços prestados pela empresa em várias áreas (ex: Desenvolvimento Web, Automação, Consultoria em TI).

- **Cabeçalho:** Contém o logotipo da empresa e o menu de navegação.
- **Serviços:** Seção explicando os principais serviços oferecidos pela SecondMind.
- **Rodapé:** Informações de contato e links para redes sociais.
---

## 5. Tecnologias Utilizadas

### **Next.js**
- Framework React para desenvolvimento de aplicações web otimizadas e com boa performance. Utilizado para a criação de rotas dinâmicas e SSR (Server-Side Rendering).

### **React**
- Biblioteca JavaScript para construção de interfaces de usuário reutilizáveis e reativas.

### **Firebase**
- **Firestore:** Utilizado como banco de dados para armazenar informações de contato e currículos dos usuários.
- **Storage:** Armazenamento de currículos e outros arquivos enviados pelo formulário.

### **Tailwind CSS**
- Framework CSS para estilização rápida e personalizada de componentes, proporcionando um design responsivo e moderno.

---

## 6. Estrutura de Código

A estrutura do projeto segue a organização padrão de um projeto Next.js:

```bash
.
├── assets/                # Arquivos estatícos como imagens, vídeos, gifs
├── components/            # Componentes reutilizáveis
├── pages/ 
│   └── api/  
│   ├── _app.jsx           # Configuração
│   ├── index.jsx          # Página inicial
│   ├── servicos.jsx       # Página de serviços
├── public/                # Arquivos públicos
├── styles/                # Arquivos de estilo
├── firestore.indexes      # Configuração do Firebase
├── firestore.rules        # Configuração de regras de leitura e escrita no Firebase
└── package.json           # Dependências do projeto
```

---

## 7. Instalação e Configuração

### Pré-requisitos:
- Node.js instalado (versão recomendada: 16.x ou superior)
- Conta no Firebase para configuração do Firestore e Storage

### Passos para instalação:

1. Clone o repositório:
   ```bash
   git clone https://github.com/leanluizz/teste-second_mind.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd teste-second_mind
   ```

3. Instale as dependências:
   ```bash
   npm install 
   ```

4. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Ative o Firestore e o Firebase Storage.
   - Crie um arquivo de configuração `firebaseConfig` e insira o SDK

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

---

## 8. Deploy

### Deploy no Vercel
O Next.js é nativamente integrado com o [Vercel](https://vercel.com/), o que facilita o deploy do projeto.

1. Faça login no Vercel e conecte seu repositório.
2. Configure as variáveis de ambiente (Firebase API, etc).
3. Realize o deploy diretamente pelo painel do Vercel.

---

## 9. Considerações Finais

Este projeto de landing page da **SecondMind-Test** foi desenvolvido para de fácil manutenção, utilizando as melhores práticas de desenvolvimento web com Next.js, React, Firebase e Tailwind CSS. A aplicação oferece uma experiência de usuário fluida e moderna, com funcionalidades avançadas como envio de currículos e integração com o Firestore.

--- 