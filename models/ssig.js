const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ssigSchema = new Schema({
    paper: { type: Number, default: 0 },
    project: { type: Number, default: 0 },
    product: { type: Number, default: 0 },
    patent: { type: Number, default: 0 },
    internship: { type: Number, default: 0 },
    onlineCourse: { type: Number, default: 0 },
    competition: { type: Number, default: 0 },
    indicator: { type: Number, default: 0 },
    sid: String
});

const ssig = mongoose.model('ssig', ssigSchema);

module.exports = ssig;
