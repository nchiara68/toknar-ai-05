
# 🧬 Toknar AI Frontend Template

A modern frontend template powered by **React 19**, **TypeScript**, and **Vite**, with built-in integration for **AWS Amplify** and routing support via **React Router**.

This project is intended to serve as a fast, scalable, and production-ready starting point for modern web applications, especially those integrating with AWS services.

---

## 🚀 Features

- ⚛️ **React 19** + **React DOM**
- ⚡️ **Vite** for ultra-fast dev experience and build
- 🧭 **React Router DOM** for routing
- 🔐 **AWS Amplify** + **UI React** components
- 🔧 **ESLint** + **TypeScript** with strict configuration
- 🔄 Live preview of production builds
- 🧱 Setup for **AWS CDK** + backend development (`@aws-amplify/backend`)

---

## 📦 Tech Stack

| Tool                  | Purpose                            |
|-----------------------|------------------------------------|
| React 19              | UI Framework                       |
| Vite                  | Build tool                         |
| TypeScript            | Static typing                      |
| React Router DOM      | Routing                            |
| AWS Amplify           | Authentication, storage, API      |
| ESLint                | Code linting                       |
| AWS CDK               | Infrastructure as code (IaC)       |

---

## 🏁 Getting Started

### 1. Clone the Template

Click **[Use this template](https://github.com/your-username/your-repo-name/generate)** on GitHub, or clone manually:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
2. Run the Dev Server

npm run dev
3. Build for Production

npm run build
4. Preview Production Build

npm run preview
🔐 AWS Amplify Setup
This template comes preconfigured with Amplify dependencies and backend tooling.

📦 Amplify CLI Initialization

npm install -g @aws-amplify/cli
amplify init
amplify push
You can then access Amplify services like Auth, Storage, API, etc., via the Amplify Studio or CLI.

🧰 NPM Scripts
Command	Description
npm run dev	Launch dev server using Vite
npm run build	Compile TypeScript & build project
npm run preview	Preview production build locally
npm run lint	Run ESLint on project codebase

🧱 Project Structure
csharp
Copy
Edit
.
├── public/                # Static assets
├── src/                   # Source code
│   └── main.tsx          # App entry point
├── amplify/               # AWS Amplify backend config
├── .eslintrc.cjs          # ESLint config
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
├── package.json           # Dependencies and scripts
└── README.md              # This file
📜 License
This project is licensed under the MIT License.

🙌 Contributing
Contributions, issues and feature requests are welcome!
Feel free to fork this repo, make changes and submit pull requests.

✨ Author
Created by Nick Chiara with 💙
Powered by TypeScript, React, and AWS Amplify.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
