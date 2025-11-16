// src/routes/companies.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/companyController');
const { companyValidationRules, validate } = require('../validators/companyValidator');

// List
router.get('/', controller.listCompanies);

// Get by id
router.get('/:id(\\d+)', controller.getCompany);

// Create
router.post('/', companyValidationRules, validate, controller.createCompany);

// Update
router.put('/:id(\\d+)', companyValidationRules, validate, controller.updateCompany);

// Delete
router.delete('/:id(\\d+)', controller.deleteCompany);

module.exports = router;