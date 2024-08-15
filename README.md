# SpaceX Launches - Astro Project

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nombre-del-repositorio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

## Project Structure

Spacex Launches - Astro Project structure.

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   ├── Header404.astro
│   │   ├── HeaderButton.astro
│   │   └── Launches.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── Layout404.astro
│   ├── lib/
│   │   └── spacex.ts
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── launch/
│   │       └── [id].astro
│   └── types/
│       └── api.ts
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json

```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
