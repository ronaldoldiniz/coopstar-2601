# Coopstar - Refatoração (v2)

Este repositório contém a nova versão da landing page da **Coopstar**, refatorada para uma arquitetura moderna, performática e escalável.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **[Next.js](https://nextjs.org/)** (v16+) - Framework React para produção.
*   **[React](https://react.dev/)** (v19) - Biblioteca para interfaces de usuário.
*   **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Framework CSS utilitário para estilização rápida.
*   **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca para animações fluidas e interativas.
*   **[Lucide React](https://lucide.dev/)** - Conjunto de ícones consistentes.
*   **TypeScript** - Garantia de tipagem e maior segurança no código.

## 🛠️ Como Iniciar

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Acesse o projeto:**
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📦 Exportação Estática (SSG)

O projeto está configurado para gerar um build estático, facilitando a hospedagem em serviços como GitHub Pages ou Vercel.

Para gerar os arquivos estáticos:
```bash
npm run build
```
Os arquivos serão gerados na pasta `/out`.

## 📂 Estrutura do Projeto

*   `/src/app`: Contém as rotas e o layout principal da aplicação.
*   `/src/components`: Componentes reutilizáveis da interface (Hero, Serviços, FAQ, etc).
*   `/public`: Arquivos estáticos como imagens e ícones.
*   `.env.example`: Modelo de variáveis de ambiente necessárias para o projeto.

## 🔐 Segurança e Configuração

Lembre-se de nunca commitar arquivos `.env` com chaves reais. Use o arquivo `.env.example` como referência para configurar seu ambiente local.

---

Desenvolvido com ❤️ para a **Coopstar**.
