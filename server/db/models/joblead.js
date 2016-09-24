'use strict';

var Sequelize = require('sequelize');

var db = require('../db');

var JobLead = db.define('jobLead', {
    userName: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    content: {
        type: Sequelize.TEXT
    },
    placeName: {
        type: Sequelize.STRING
    },
    lat: {
        type: Sequelize.FLOAT
    },
    long: {
        type: Sequelize.FLOAT
    }
// }, {
//     instanceMethods: {
//         sanitize: function () {
//             return _.omit(this.toJSON(), ['password', 'salt']);
//         },
//         correctPassword: function (candidatePassword) {
//             return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
//         }
//     },
//     classMethods: {
//         generateSalt: function () {
//             return crypto.randomBytes(16).toString('base64');
//         },
//         encryptPassword: function (plainText, salt) {
//             var hash = crypto.createHash('sha1');
//             hash.update(plainText);
//             hash.update(salt);
//             return hash.digest('hex');
//         }
//     },
//     hooks: {
//         beforeCreate: function (user) {
//             if (user.changed('password')) {
//                 user.salt = user.Model.generateSalt();
//                 user.password = user.Model.encryptPassword(user.password, user.salt);
//             }
//         },
//         beforeUpdate: function (user) {
//             if (user.changed('password')) {
//                 user.salt = user.Model.generateSalt();
//                 user.password = user.Model.encryptPassword(user.password, user.salt);
//             }
//         }
//     }
});

module.exports = JobLead;
