// src/validators/companyValidator.js
const { body, validationResult } = require('express-validator');

const phonePattern = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

const companyValidationRules = [
  body('nome').trim().notEmpty().withMessage('Nome é obrigatório'),
  body('endereco').trim().notEmpty().withMessage('Endereço é obrigatório'),
  body('telefone').trim().notEmpty().withMessage('Telefone é obrigatório')
    .matches(phonePattern).withMessage('Telefone em formato inválido (ex: (11) 99999-9999)'),
  body('regiao').trim().notEmpty().withMessage('Região é obrigatória'),
  body('horario').trim().notEmpty().withMessage('Horário é obrigatório'),
  body('avaliacao').notEmpty().withMessage('Avaliação é obrigatória')
    .isFloat({ min: 0, max: 5 }).withMessage('Avaliação deve estar entre 0 e 5'),
  body('especialidade').trim().notEmpty().withMessage('Especialidade é obrigatória')
];

function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return res.status(422).json({ errors: errors.array().map(e => ({ param: e.param, msg: e.msg })) });
}

module.exports = { companyValidationRules, validate };