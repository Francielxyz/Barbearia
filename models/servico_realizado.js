'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico_Realizado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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