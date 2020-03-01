const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    description: String,
    pattern: String,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    imageURL: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);