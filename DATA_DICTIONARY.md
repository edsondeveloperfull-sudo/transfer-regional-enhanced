```markdown
# Dicionário de Dados — tabela companies

Tabela: companies

- id
  - Tipo: INTEGER (PK, autoincrement)
  - Descrição: Identificador único da empresa.

- nome
  - Tipo: VARCHAR(255)
  - Obrigatório: Sim
  - Descrição: Nome da empresa exibido no sistema.

- endereco
  - Tipo: VARCHAR(500)
  - Obrigatório: Sim
  - Descrição: Endereço completo da empresa.

- telefone
  - Tipo: VARCHAR(20)
  - Obrigatório: Sim
  - Descrição: Telefone de contato (formatos regionais).

- regiao
  - Tipo: VARCHAR(50)
  - Obrigatório: Sim
  - Descrição: Região atendida (Norte, Nordeste, Centro-Oeste, Sudeste, Sul).

- horario
  - Tipo: VARCHAR(100)
  - Obrigatório: Sim
  - Descrição: Horário de funcionamento (p.ex.: "08:00 - 18:00" ou "24h").

- avaliacao
  - Tipo: DECIMAL(2,1)
  - Obrigatório: Sim
  - Descrição: Avaliação média (0.0 a 5.0).

- especialidade
  - Tipo: VARCHAR(255)
  - Obrigatório: Sim
  - Descrição: Breve descrição da especialidade/logística.

- created_at
  - Tipo: TIMESTAMP
  - Obrigatório: Sim (DEFAULT now())
  - Descrição: Data/hora de criação do registro.

- updated_at
  - Tipo: TIMESTAMP
  - Obrigatório: Sim (DEFAULT now(), atualiza no update)
  - Descrição: Data/hora da última atualização do registro.
```