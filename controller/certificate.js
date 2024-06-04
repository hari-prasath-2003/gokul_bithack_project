const certificate = require("../models/certificate")
const User = require("../models/user-model")
const ssig = require("../models/ssig")
async function createCert(detail, email) {
    const stud = await User.findOne({ email: email })
    const ssigTemp = await ssig.findOne({ sid: email })
    if (!ssigTemp) {
        new ssig({ sid: email }).save()
    }
    new certificate({
        email: email,
        labinc: stud.labinc,
        name: stud.name,

        ...detail

    }).save()
}

async function getCert(email) {
    const cert = await certificate.findOne({ email: email })
    return cert
}
async function getAllRecordsStudents(email) {
    const cert = await certificate.find({ email: email })
    return cert
}
async function getAllRecordsLabinc(email) {
    const cert = await certificate.find({ labinc: email, labinc_status: "pending" })
    return cert
}

async function approve(id) {
    const cert = await certificate.findById(id)
    cert.labinc_status = "approved"
    switch (cert.event) {
        case "Technical-Competetion": {
            const temp = await ssig.findOne({ sid: cert.email })
            if (temp.competition < 1) {
                temp.competition += 1
                temp.indicator += 0.14
                temp.save()
            }
            break

        }
        case "Paper-Presentation": {
            const temp = await ssig.findOne({ sid: cert.email })
            if (temp.paper < 2) {
                temp.paper += 1
                temp.indicator += 0.07
                temp.save()
            }
            break

        }
        case "Project-Competetion": {
            const temp = await ssig.findOne({ sid: cert.email })
            if (temp.project < 2) {
                temp.project += 1
                temp.indicator += 0.07
                temp.save()
            }
            break

        }
        case "Internship": {
            const temp = await ssig.findOne({ sid: cert.email })
            if (temp.internship < 2) {
                temp.internship += 1
                temp.indicator += 0.07
                temp.save()
            }
            break

        }
        case "Patent": {
            const temp = await ssig.findOne({ sid: cert.email })
            if (temp.patent < 1) {
                temp.patent += 1
                temp.indicator += 0.14
                temp.save()
            }
            break

        }
        case "Product": {
            const temp = await ssig.findOne({ sid: cert.email })
            if (temp.product < 1) {
                temp.product += 1
                temp.indicator += 0.14
                temp.save()
            }
            break

        }
        case "Onilne-Course": {
            const temp = await ssig.findOne({ sid: cert.email })
            if (temp.onlineCourse < 2) {
                temp.onlineCourse += 1
                temp.indicator += 0.07
                temp.save()
            }
            break

        }


        default:
            break;
    }
    return await cert.save()

}
async function reject(id) {
    const cert = await certificate.findById(id)
    cert.mentor_status = "rejected"
    return await cert.save()

}

module.exports = {
    getCert: getCert, createCert: createCert, getAllRecordsStudents: getAllRecordsStudents,
    getAllRecordsLabinc: getAllRecordsLabinc, approve: approve, reject: reject
}
