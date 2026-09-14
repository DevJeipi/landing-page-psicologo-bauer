# 🌿 Psicólogo Bauer — Landing Page de Alta Conversão

Landing page profissional, de alta performance e conversão desenvolvida para o **Psicólogo Bauer** (atuação clínica desde 1988, +8.000 mentes autorrealizadas, consultório na *Zape Reequilíbrio* em Novo Hamburgo / RS, atendimento online global e apresentador do podcast *Inspire com Psicólogo Bauer* no YouTube).

Construída com **Astro**, **Tailwind CSS** e **Lucide Icons**.

---

## ✨ Principais Características

- **⚡ Performance Extrema**: Geração de HTML estático ultra-rápido com Astro (Zero JS desnecessário no bundle).
- **🎨 Design System Botânico & Editorial**:
  - Paleta com verde floresta profundo (`#0c2417`), sálvia suave e destaques em verde limão orgânico (`#c2e28f`).
  - Tipografia dual refinada: `EB Garamond` (serif editorial) e `Inter` (sans-serif moderno).
  - Componentes modulares com cantos arredondados generosos (`rounded-[2.5rem]`, `rounded-3xl`).
- **💬 Conversão Direta via WhatsApp Contextual**:
  - Links com mensagens personalizadas para cada intenção:
    - *Presencial na Zape Reequilíbrio (Novo Hamburgo)*
    - *Atendimento Online (Brasil e Exterior)*
    - *Dúvidas e Orientações Gerais*
    - *Espectadores do Inspire com Psicólogo Bauer no YouTube*
- **🎥 Depoimentos Reais em Vídeo**:
  - Vídeos reais de pacientes com carregamento estritamente sob demanda (sob clique do visitante), sem consumo desnecessário de dados ou impacto na velocidade da página.
- **📱 100% Responsivo & Acessível**: Experiência fluida em mobile, tablet e desktop.
- **🔒 Conformidade Ética**: Alinhado às diretrizes do Código de Ética Profissional do Psicólogo (CFP).

---

## 🛠️ Stack Tecnológica

| Tecnologia | Finalidade |
| :--- | :--- |
| **[Astro](https://astro.build/)** | Framework web orientado a componentes e geração estática |
| **[Tailwind CSS](https://tailwindcss.com/)** | Framework de estilização utilitária e design system |
| **[Lucide Astro](https://lucide.dev/)** | Ícones vetoriais modernos e otimizados |
| **[Google Fonts](https://fonts.google.com/)** | Tipografia `EB Garamond` e `Inter` |

---

## 📁 Estrutura de Pastas

```text
psicologo-bauer/
├── public/
│   ├── bauer-foto-1.avif     # Foto principal do Hero
│   ├── bauer-foto-2.avif     # Foto da seção Sobre
│   ├── favicon.svg           # Favicon botânico
│   └── videos/               # Vídeos de depoimento reais
├── src/
│   ├── components/
│   │   ├── Navbar.astro              # Cabeçalho sticky com blur e CTA direto
│   │   ├── Hero.astro                # Hero com proposta de valor e foto em destaque
│   │   ├── StatsBar.astro            # Faixa de autoridade (Desde 1988, +8k mentes)
│   │   ├── PainPoints.astro          # Seção de empatia e reflexão sobre dores
│   │   ├── Benefits.astro            # 6 pilares de transformação da terapia
│   │   ├── AboutBauer.astro          # Biografia, filosofia e fotos do especialista
│   │   ├── Modalities.astro          # Presencial (Zape) vs. Online Global
│   │   ├── PodcastInspire.astro      # Episódios do Inspire com Psicólogo Bauer
│   │   ├── Testimonials.astro        # Depoimentos reais em vídeo sob demanda
│   │   ├── DirectWhatsAppCTA.astro   # Seção de ação rápida com CTAs contextuais
│   │   ├── Faq.astro                 # Accordion de perguntas frequentes
│   │   ├── Footer.astro              # Rodapé com dados institucionais e aviso ético
│   │   └── WhatsAppButton.astro      # Botão flutuante com indicador de status
│   ├── layouts/
│   │   └── Layout.astro              # Layout base com meta tags e fontes
│   ├── pages/
│   │   └── index.astro               # Página inicial integrada
│   └── styles/
│       └── global.css                # Estilos globais e animações
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18.x ou superior)
- **npm** (ou pnpm / yarn)

### 1. Clonar ou Acessar o Repositório
```bash
git clone <url-do-seu-repositorio>
cd psicologo-bauer
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Rodar em Ambiente de Desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:4321`.

### 4. Gerar Build de Produção
```bash
npm run build
```
Os arquivos estáticos otimizados serão gerados na pasta `dist/`.

### 5. Pré-visualizar o Build
```bash
npm run preview
```

---

## 🌐 Deploy Recomendado

Esta landing page pode ser publicada gratuitamente com 1 clique em:
- **[Vercel](https://vercel.com/)**
- **[Netlify](https://www.netlify.com/)**
- **[Cloudflare Pages](https://pages.cloudflare.com/)**
- **[GitHub Pages](https://pages.github.com/)**

---

## 📄 Licença

Este projeto é de uso exclusivo do Psicólogo Bauer. Todos os direitos reservados.
