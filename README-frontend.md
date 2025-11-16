# Transferências Regionais — Frontend

Arquivos adicionados para a interface demo da aplicação.

Como abrir localmente:

1. Abra o arquivo `index.html` no navegador (duplo clique ou via Live Server no VS Code).
2. Os dados são persistidos em `localStorage` do navegador — o conteúdo inicial inclui exemplos.

Arquivos criados:

- `index.html` — interface principal
- `assets/css/styles.css` — estilos
- `assets/js/app.js` — lógica do frontend (adicionar/editar/remover, filtros, busca)

Observações:

- Para resetar os dados, remova a chave `companies` do `localStorage` no painel do navegador (Application > Local Storage).
- Se quiser rodar um servidor local simples usando Python:

```bash
python3 -m http.server 8000
# e então abra http://localhost:8000
```
