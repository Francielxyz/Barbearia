'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico_Realizado extends Model {

    static associate(models) {
        Servico_Realizado.belongsTo(models.Funcionario);
        Servico_Realizado.belongsTo(models.Tipo_Servico);
    }
  };
  Servico_Realizado.init({
    nomeFuncionario: DataTypes.STRING,
    nomeCliente: DataTypes.STRING,
    nomeServico: DataTypes.STRING,
    valorServico: DataTypes.FLOAT,
    funcionarioId: DataTypes.INTEGER,
    tipoServicoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Servico_Realizado',
  });
  return Servico_Realizado;
};