var mongoose = require('mongoose');
var HirerSchema = new mongoose.Schema({
    hirerLoginInfo: {
        hirerUsername: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        hirerPassword: {
            type: String,
            required: true,
            trim: true,
        }
    },
    hirerContact: {
        hirerFullName: {
            type: String
        },
        hirerAvatarUrl: {
            type: String
        },
        hirerEmail: {
            type: String
        },
        hirerPhoneNumber: {
            type: String
        }

    },


    hirerWorkList:{type: Array}
});


var HirerModel = mongoose.model('hirer', HirerSchema);
module.exports = HirerModel;