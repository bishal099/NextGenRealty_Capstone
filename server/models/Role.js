const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    RoleName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Role', RoleSchema);