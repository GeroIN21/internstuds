/**
 * Soap service catcher.
 */
const wsdl = require('fs').readFileSync('./instudservice.wsdl','utf8');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { internationalstudents } = require('../models');

const service = {

  producerPortService: {
    exampleServicePortSoap11: {      
      internStudentsService: function (args, callback, headers) {
        console.log('Incomming!');

        //console.log('\nIncoming args:', args);
        //console.log('\nIncoming headers:', headers);
        
        (async () => {

          try {
            const inStudents = await internationalstudents.findAll({
              attributes: [
                'StudName', 
                'BirthDate', 
                'Institution', 
                'Direction', 
                'Program', 
                'AdmYear'],
              where: {
                AdmYear: args.AdmYear
              },
            });

            //console.log('\n\nResponse: ', JSON.stringify(inStudents));

            if (inStudents) {
              callback({
                'exists': true,
                'Data': JSON.stringify(inStudents)
              });
            } else {
              callback({
                'exists': false
              });
            }

          } catch (error) {
            console.error('Error: ', error);
            callback({
              'Error': `Internal Server Error`
            });
          } 

        }) ();

      }
    },
  },
} 

module.exports = { wsdl, service };
