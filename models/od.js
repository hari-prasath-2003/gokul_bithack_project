const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const odSchema = new Schema({
    fromDate: String,
    toDate: String,
    fromTime: String,
    toTime: String,
    event: String,
    stdid: String,
    mentor: String,
    labinc: String,
    filename: String,
    docid: String,
    name: String,
    mentor_status: {
        type: String,
        default: "pending"
    },
    labinc_status: {
        type: String,
        default: "pending"
    }
});

const Od = mongoose.model('od', odSchema);

module.exports = Od;
