'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_Servico extends Model {

    static associate(models) {
      Tipo_Servico.hasMany(models.Servico_Realizado);
    }
  };
  Tipo_Servico.init({
    nomeServico: DataTypes.STRING,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Tipo_Servico',
  });
  return Tipo_Servico;
};