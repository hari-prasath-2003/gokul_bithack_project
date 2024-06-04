const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
    event: String,
    odid: String,
    email: String,
    labinc: String,
    filename: String,
    name: String,
    labinc: String,
    eventdetails: String,
    labinc_status: {
        type: String,
        default: "pending"
    }
});

const certificate = mongoose.model('certificate', certificateSchema);

module.exports = certificate;
