```markdown
# Transferências Regionais - Versão com IHC, persistência de protótipo e modelagem

Este repositório contém a interface front-end (HTML/CSS/JS) com:
- validação de formulários,
- feedbacks de IHC (mensagens e aria-live),
- persistência local via localStorage (prototipagem),
- modelagem de dados (schema SQL + dicionário),
- diagramas UML e casos de uso.

Como evoluir:
1. Para persistência real: implemente uma API REST (endpoints CRUD) e substitua as chamadas a localStorage por requests (fetch/axios).
2. Use o arquivo `db/schema.sql` para criar a tabela `companies` em PostgreSQL/MySQL (ajuste tipos de dados conforme o SGDB).
3. Complete o dicionário de dados com índices e políticas de backup, e documente os requisitos NFR (performance, segurança).
4. Gere diagramas UML completos (casos de uso, sequência e atividades) a partir dos arquivos `.puml`.

Sugestão de próximos passos práticos:
- Implementar um backend mínimo (Node/Express + Sequelize/TypeORM ou Python/Flask + SQLAlchemy).
- Adicionar autenticação (JWT/OAuth) e autorização.
- Migrar persistência local para endpoints e atualizar UI para lidar com erros HTTP (time-out, 500).
```