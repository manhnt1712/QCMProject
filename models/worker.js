var mongoose = require('mongoose');
var WorkerSchema = new mongoose.Schema({

    loginInfo: {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
        }
    },
    contact: {
        fullName: {
            type: String
        },
        avatarUrl: {
            type: String
        },
        email: {
            type: String
        },
        addressToWork: {
            type: String
        },
        phoneNumber: {
            type: String
        }

    },

    workedRate: {
        averageRate: {
            type: Number
        },
        ratedCount: {
            type: Number
        }
    },
    workerFreetime: {
        hourBegin: {
            type: String
        },
        hourEnd: {
            type: String
        },
        date: {
            type: Array
        }
    },

    workList:{type: Array}

})

var WorkerModel = mongoose.model('workers', WorkerSchema);
module.exports = WorkerModel;