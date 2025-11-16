document.addEventListener('DOMContentLoaded',()=>{
  const addCompanyBtn = document.getElementById('addCompanyBtn')
  const modalOverlay = document.getElementById('modalOverlay')
  const closeModal = document.getElementById('closeModal')
  const cancelBtn = document.getElementById('cancelBtn')
  const saveBtn = document.getElementById('saveBtn')
  const companyForm = document.getElementById('companyForm')
  const companiesGrid = document.getElementById('companiesGrid')
  const emptyState = document.getElementById('emptyState')
  const searchInput = document.getElementById('searchInput')
  const regionFilter = document.getElementById('regionFilter')
  const totalCompaniesEl = document.getElementById('totalCompanies')
  const averageRatingEl = document.getElementById('averageRating')
  const open24CountEl = document.getElementById('open24Count')
  const modalTitle = document.getElementById('modalTitle')

  function getCompanies(){
    try{
      const raw = localStorage.getItem('companies')
      if(!raw) return sampleData()
      return JSON.parse(raw)
    }catch(e){
      console.error('Erro ao parsear companies',e)
      return []
    }
  }

  function sampleData(){
    const data = [
      {id: Date.now() + 1, nome:'TransReg Sul', endereco:'Avenida Central, 123', telefone:'(51) 99999-0001', regiao:'Sul', horario:'24h', avaliacao:4.8, especialidade:'Carga Leve'},
      {id: Date.now() + 2, nome:'NorteLog', endereco:'Rua do Porto, 45', telefone:'(92) 98888-1111', regiao:'Norte', horario:'08:00 - 20:00', avaliacao:4.3, especialidade:'Frete Internacional'}
    ]
    localStorage.setItem('companies', JSON.stringify(data))
    return data
  }

  function saveCompanies(list){
    localStorage.setItem('companies', JSON.stringify(list))
  }

  function openModal(mode='add', company){
    modalOverlay.style.display = 'flex'
    if(mode==='add'){
      modalTitle.textContent = 'Nova Empresa'
      saveBtn.textContent = 'Adicionar Empresa'
      companyForm.reset()
      document.getElementById('companyId').value = ''
    }else{
      modalTitle.textContent = 'Editar Empresa'
      saveBtn.textContent = 'Salvar Alterações'
      document.getElementById('companyId').value = company.id
      document.getElementById('nome').value = company.nome
      document.getElementById('endereco').value = company.endereco
      document.getElementById('telefone').value = company.telefone
      document.getElementById('regiao').value = company.regiao
      document.getElementById('horario').value = company.horario
      document.getElementById('avaliacao').value = company.avaliacao
      document.getElementById('especialidade').value = company.especialidade
    }
  }

  function closeModalFn(){
    modalOverlay.style.display = 'none'
  }

  function renderCompanies(){
    const q = (searchInput.value||'').toLowerCase().trim()
    const region = regionFilter.value
    const list = getCompanies().filter(c=>{
      const matchesRegion = region==='todas' ? true : c.regiao===region
      const matchesQuery = q==='' ? true : (c.nome||'').toLowerCase().includes(q) || (c.especialidade||'').toLowerCase().includes(q)
      return matchesRegion && matchesQuery
    })

    companiesGrid.innerHTML = ''
    if(list.length===0){
      emptyState.style.display = 'block'
    }else{
      emptyState.style.display = 'none'
      list.forEach(c=>{
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
          <div class="card-head">
            <div>
              <h4>${escapeHtml(c.nome)}</h4>
              <p class="meta">${escapeHtml(c.regiao)} • ${escapeHtml(c.especialidade)}</p>
            </div>
            <div class="meta">${escapeHtml(c.avaliacao.toFixed(1))} <i class="fas fa-star" style="color:#f59e0b;margin-left:6px"></i></div>
          </div>
          <p>${escapeHtml(c.endereco)}</p>
          <div class="meta">${escapeHtml(c.telefone)} • ${escapeHtml(c.horario)}</div>
          <div class="actions">
            <button class="icon-btn edit" data-id="${c.id}"><i class="fas fa-edit"></i></button>
            <button class="icon-btn delete" data-id="${c.id}"><i class="fas fa-trash"></i></button>
          </div>
        `
        companiesGrid.appendChild(card)
      })
    }
    renderStats()
  }

  function renderStats(){
    const list = getCompanies()
    totalCompaniesEl.textContent = list.length
    const avg = list.length ? (list.reduce((s,i)=>s + (Number(i.avaliacao)||0),0)/list.length) : 0
    averageRatingEl.textContent = avg ? avg.toFixed(1) : '0'
    const open24 = list.filter(i=> (i.horario||'').toLowerCase().includes('24')).length
    open24CountEl.textContent = open24
  }

  function escapeHtml(str){
    if(str==null) return ''
    return String(str).replace(/[&<>"']/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[s])
  }

  // events
  addCompanyBtn.addEventListener('click',()=>openModal('add'))
  closeModal.addEventListener('click',closeModalFn)
  cancelBtn.addEventListener('click',closeModalFn)
  modalOverlay.addEventListener('click',(e)=>{ if(e.target===modalOverlay) closeModalFn() })

  saveBtn.addEventListener('click',()=>{
    const id = document.getElementById('companyId').value
    const nome = document.getElementById('nome').value.trim()
    const endereco = document.getElementById('endereco').value.trim()
    const telefone = document.getElementById('telefone').value.trim()
    const regiao = document.getElementById('regiao').value
    const horario = document.getElementById('horario').value.trim()
    const avaliacao = parseFloat(document.getElementById('avaliacao').value)
    const especialidade = document.getElementById('especialidade').value.trim()

    if(!nome || !endereco || !telefone || !regiao || !horario || Number.isNaN(avaliacao) || !especialidade){
      alert('Preencha todos os campos corretamente.')
      return
    }

    const list = getCompanies()
    if(id){
      const idx = list.findIndex(x=>String(x.id)===String(id))
      if(idx>-1){
        list[idx] = { ...list[idx], nome, endereco, telefone, regiao, horario, avaliacao, especialidade }
      }
    }else{
      list.push({ id: Date.now(), nome, endereco, telefone, regiao, horario, avaliacao, especialidade })
    }
    saveCompanies(list)
    renderCompanies()
    closeModalFn()
  })

  companiesGrid.addEventListener('click',(e)=>{
    const editBtn = e.target.closest('.icon-btn.edit')
    const delBtn = e.target.closest('.icon-btn.delete')
    if(editBtn){
      const id = editBtn.dataset.id
      const list = getCompanies()
      const company = list.find(x=>String(x.id)===String(id))
      if(company) openModal('edit', company)
    }
    if(delBtn){
      const id = delBtn.dataset.id
      if(confirm('Remover esta empresa?')){
        let list = getCompanies().filter(x=>String(x.id)!==String(id))
        saveCompanies(list)
        renderCompanies()
      }
    }
  })

  searchInput.addEventListener('input',()=>renderCompanies())
  regionFilter.addEventListener('change',()=>renderCompanies())

  // inicializa
  renderCompanies()
})
