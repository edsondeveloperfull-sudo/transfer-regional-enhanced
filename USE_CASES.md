```markdown
# Casos de Uso (Resumo)

Ator principal: Usuário (profissional de logística / administrador)

1. Adicionar Empresa
   - Fluxo principal: Usuário abre modal -> Preenche formulário -> Validação -> Persistência -> Visualização no grid.
   - Exceções: Campos obrigatórios em branco, telefone formato inválido.

2. Editar Empresa
   - Fluxo: Usuário clica em editar -> Modal pré-preenchido -> Atualiza -> Validação -> Persistência.

3. Excluir Empresa
   - Fluxo: Usuário clica em excluir -> Confirmação -> Registro removido.

4. Pesquisar/Filtrar
   - Fluxo: Usuário digita termo -> Lista é filtrada em tempo real.
   - Pode filtrar por região e texto (nome/especialidade).

5. Visualizar Estatísticas
   - Fluxo: Sistema calcula total de empresas, média de avaliação e quantos operam 24h.

Observações:
- Em implantação real, todos os fluxos de CRUD devem estar autenticados e autorizados.
- Tratamento de erros de backend deve mapear para mensagens amigáveis na IHC.
```