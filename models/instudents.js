/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('internationalstudents', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		StudName: {
			type: DataTypes.STRING(160),
			allowNull: false,
			defaultValue: '0'
		},
		BirthDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		Institution: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '0'
		},
		Direction: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '0'
		},
		Program: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '0'
		},
		AdmYear: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0'
		},
		Note: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'internationalstudents'
	});
};
