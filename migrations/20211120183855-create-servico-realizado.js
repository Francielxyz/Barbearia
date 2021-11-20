'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Servico_Realizados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeFuncionario: {
        type: Sequelize.STRING
      },
      nomeCliente: {
        type: Sequelize.STRING
      },
      nomeServico: {
        type: Sequelize.STRING
      },
      valorServico: {
        type: Sequelize.FLOAT
      },
      funcionarioId: {
        type: Sequelize.INTEGER,
        references: {
            model:'funcionarios',
            key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      tipoServicoId: {
        type: Sequelize.INTEGER,
         references: {
             model:'tipo_Servicos',
             key:'id'
         },
         onUpdate:'cascade',
         onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Servico_Realizados');
  }
};