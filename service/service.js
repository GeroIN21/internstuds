/**
 * Soap service catcher.
 */
const wsdl = require('fs').readFileSync('./instudservice.wsdl', 'utf8');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { internationalstudents } = require('../models');

const service = {
  producerPortService: {
    exampleServicePortSoap11: {
      internStudentsService: function(args, callback, headers) {
        (async () => {
          try {
            const inStudents = await internationalstudents.findAll({
              attributes: [
                'StudName',
                'BirthDate',
                'Institution',
                'Direction',
                'Program',
                'AdmYear'
              ],
              where: {
                AdmYear: args.AdmYear
              }
            });

            if (Object.keys(inStudents).length !== 0) {
              callback({
                Response: JSON.stringify(inStudents)
              });
            } else {
              callback({
                Response: 'No data available'
              });
            }
          } catch (error) {
            console.error('Error: ', error);
          }
        })();
      }
    }
  }
};

module.exports = { wsdl, service };
