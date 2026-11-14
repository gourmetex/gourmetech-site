# gourmetech-site

Site React + TypeScript + Vite (pacote `gourmetech-erp`). Regras de publicação e de interface da pasta pai: `../AGENTS.md`.

Scripts: `dev`, `build`, `preview`.

## Regras comuns

- `.env*` nunca é lido, impresso nem commitado (nomes das variáveis: `.env.example`, quando existir).
- Sem `git push`/deploy sem pedido; commits com caminhos explícitos (nada de `git add .`).
- Os comandos citados vêm do `package.json` (quando o repo tem um) e **não foram executados** (`node`/`npm` fora do PATH nesta máquina). Confirme antes de afirmar que passam.
