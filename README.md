Transferências Regionais é uma aplicação web desenvolvida para gerenciar empresas de logística em diferentes regiões do Brasil. Ela oferece uma interface moderna, responsiva e intuitiva, permitindo:

🔍 Busca e filtros por nome, especialidade ou região (Norte, Nordeste, Centro-Oeste, Sudeste e Sul).

📊 Estatísticas dinâmicas com total de empresas cadastradas, regiões atendidas, avaliação média e número de empresas que operam 24h.

🏢 Cards de empresas com informações completas: nome, endereço, telefone, horário de funcionamento, avaliação e especialidade.

✏️ Cadastro e edição de empresas através de um modal simples e prático.

🗑️ Exclusão de registros com apenas um clique.

🚫 Estado vazio que orienta o usuário a ajustar filtros ou adicionar novas empresas.

A aplicação foi construída com HTML, CSS e JavaScript, utilizando boas práticas de design responsivo e componentes reutilizáveis.
🏗️ Estrutura do Código
1. HTML (estrutura da página)
Cabeçalho (<header>)

Logo com ícone e título.

Botão Nova Empresa para abrir o modal de cadastro.

Filtros (<section class="filters-section">)

Campo de busca por nome/especialidade.

Dropdown para filtro por região.

Estatísticas (<div class="stats-grid">)

Cards mostrando: total de empresas, regiões atendidas, avaliação média e empresas 24h.

Grade de Empresas (<div class="companies-grid">)

Cards dinâmicos com informações de cada empresa.

Estado vazio (<div class="empty-state">)

Mensagem exibida quando não há empresas ou filtros não retornam resultados.

Modal (<div class="modal-overlay">)

Formulário para adicionar/editar empresas (nome, endereço, telefone, região, horário, avaliação, especialidade).

2. CSS (estilo e responsividade)
Variáveis globais: cores, sombras, bordas, tipografia.

Layout principal: container centralizado, fundo com gradiente.

Componentes estilizados:

Botões (.btn, .btn-primary, .btn-secondary).

Cards de estatísticas e empresas.

Tags de região com cores diferentes (Norte, Nordeste, Centro-Oeste, Sudeste, Sul).

Modal com animações de entrada/saída.

Responsividade:

Ajustes para telas menores (até 768px e 480px).

3. JavaScript (funcionalidade)
Mock de dados iniciais: lista de empresas pré-cadastradas.

Funções principais:

init(): inicializa a aplicação e adiciona event listeners.

renderCompanies(): renderiza os cards de empresas dinamicamente.

filterCompanies(): aplica busca e filtro por região.

updateStats(): atualiza os números de estatísticas.

openAddModal(): abre modal para adicionar nova empresa.

openEditModal(id): abre modal para editar empresa existente.

saveCompany(): salva ou atualiza empresa.

deleteCompany(id): remove empresa da lista.

closeModalFunc(): fecha modal.

Eventos:

Input de busca.

Seleção de filtro de região.

Clique em botões de adicionar, editar e excluir.

Interação com modal (abrir/fechar).

📌 Resumindo
A aplicação é composta por:

HTML → Estrutura da interface (header, filtros, estatísticas, cards, modal).

CSS → Estilização moderna e responsiva.

JavaScript → Lógica para manipulação de dados, renderização dinâmica e interatividade.

Desenvolvido por : Edson aragão da silva 
