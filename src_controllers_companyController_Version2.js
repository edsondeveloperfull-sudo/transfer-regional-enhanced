// src/controllers/companyController.js
const { Company } = require('../models');

async function listCompanies(req, res, next) {
  try {
    const companies = await Company.findAll({ order: [['id', 'ASC']] });
    res.json(companies);
  } catch (err) {
    next(err);
  }
}

async function getCompany(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const company = await Company.findByPk(id);
    if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });
    res.json(company);
  } catch (err) {
    next(err);
  }
}

async function createCompany(req, res, next) {
  try {
    const payload = req.body;
    const created = await Company.create(payload);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function updateCompany(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const company = await Company.findByPk(id);
    if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });
    await company.update(req.body);
    res.json(company);
  } catch (err) {
    next(err);
  }
}

async function deleteCompany(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const company = await Company.findByPk(id);
    if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });
    await company.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany
};