const Od = require("../models/od")
const User = require("../models/user-model")

async function applyOd(detail, user) {
    console.log("detail", detail);
    const temprec = await User.findById(user, "mentor labinc username stdid")
    console.log(temprec);

    new Od({
        fromDate: detail.fromdate,
        fromTime: detail.fromtime,
        toDate: detail.todate,
        toTime: detail.totime,
        filename: detail.filename,
        event: detail.event,
        stdid: temprec.stdid,
        mentor: temprec.mentor,
        labinc: temprec.labinc,
        name: temprec.username,
        id: user
    }).save()
}
async function getAllRecordsFaculty(mail) {
    try {
        const records = await Od.find({ $and: [{ mentor: mail }, { mentor_status: "pending" }] })
        console.log(records);
        return records
    } catch (error) {

    }

}

async function getEventType(id) {
    try {
        const records = await Od.findById(id, "event")
        console.log(records);
        return records
    } catch (error) {

    }

}

async function getAllRecordsStudents(id) {
    try {
        const records = await Od.find({ id: id })
        console.log(records);
        return records
    } catch (error) {

    }

}
async function getAllRecordsLabinc(mail, id, rollno) {
    try {
        const records = await Od.find({ $and: [{ labinc: mail }, { mentor_status: "approved" }, { labinc_status: "pending" }] })

        return records
    } catch (error) {
        console.log(error);

    }

} ``
async function approveOdFaculty(id) {
    const od = await Od.findById(id)
    od.mentor_status = "approved"
    return await od.save()

}
async function approveOdLabinc(id) {
    const od = await Od.findById(id)
    od.labinc_status = "approved"
    return await od.save()

}
async function rejectOdFaculty(id) {
    const od = await Od.findById(id)
    od.mentor_status = "rejected"
    return await od.save()

}
async function rejectOdLabinc(id) {
    const od = await Od.findById(id)
    od.labinc_status = "rejected"
    return await od.save()

}
module.exports = {
    applyOd: applyOd, getAllRecordsFaculty: getAllRecordsFaculty, getAllRecordsLabinc: getAllRecordsLabinc,
    approveOdMentor: approveOdFaculty, rejectOdMentor: rejectOdFaculty,
    approveOdLabinc: approveOdLabinc, rejectOdLabinc: rejectOdLabinc, getAllRecordsStudents: getAllRecordsStudents,
    getEventType: getEventType
}