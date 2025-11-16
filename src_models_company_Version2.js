// src/models/company.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    endereco: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    regiao: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    horario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avaliacao: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      }
    },
    especialidade: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'companies',
    timestamps: false,
    hooks: {
      beforeUpdate: (company) => {
        company.updated_at = new Date();
      }
    }
  });

  return Company;
};