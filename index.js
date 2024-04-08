// ❯❯❯ npm run dev:dev
// > env-playground@1.0.0 dev:dev
// > dotenv -e .env.dev node index.js
// env.dev
// env.dev2

// ❯❯❯ npm run dev:dev-local
// > env-playground@1.0.0 dev:dev-local
// > dotenv -e .env.dev -e .env.local node index.js
// env.dev
// env.dev2

// ❯❯❯ npm run dev:local-dev
// > env-playground@1.0.0 dev:local-dev
// > dotenv -e .env.local -e .env.dev node index.js
// env.local
// env.dev2

// ❯❯❯ npm run dev:local
// > env-playground@1.0.0 dev:local
// > dotenv -e .env.local node index.js
// env.local
// undefined

console.info(process.env.MY_ENV)
console.info(process.env.MY_ENV_2)