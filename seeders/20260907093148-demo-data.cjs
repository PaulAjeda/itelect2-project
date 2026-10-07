'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(queryInterface, Sequelize) {

    const now = new Date();

    const adminPassword = await bcrypt.hash('admin123', 10);
    const memberPassword = await bcrypt.hash('member123', 10);


    await queryInterface.bulkInsert('Users', [
      {
        name: 'Juan Dela Cruz',
        email: 'juan@example.com',
        password: adminPassword,
        role: 'admin',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Maria Santos',
        email: 'maria@example.com',
        password: memberPassword,
        role: 'member',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Pedro Reyes',
        email: 'pedro@example.com',
        password: memberPassword,
        role: 'member',
        createdAt: now,
        updatedAt: now
      }
    ]);


    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      {
        type: Sequelize.QueryTypes.SELECT
      }
    );


    const idOf = (name) =>
      users.find(user => user.name === name).id;


    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Complete project documentation',
        dueDate: new Date('2026-10-10'),
        completed: false,
        userId: idOf('Juan Dela Cruz'),
        createdAt: now,
        updatedAt: now
      },
      {
        title: 'Review database structure',
        dueDate: new Date('2026-10-11'),
        completed: true,
        userId: idOf('Juan Dela Cruz'),
        createdAt: now,
        updatedAt: now
      },
      {
        title: 'Test API endpoints',
        dueDate: new Date('2026-10-12'),
        completed: false,
        userId: idOf('Maria Santos'),
        createdAt: now,
        updatedAt: now
      },
      {
        title: 'Prepare final submission',
        dueDate: new Date('2026-10-13'),
        completed: false,
        userId: idOf('Pedro Reyes'),
        createdAt: now,
        updatedAt: now
      }
    ]);

  },


  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});

  }

};