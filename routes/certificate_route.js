const router = require('express').Router();
const fs = require("fs")
const { getCert, createCert, getAllRecordsStudents, getAllRecordsLabinc, approve, reject } = require("../controller/certificate")
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).send()

    } else {
        next();
    }
};

router.post("/apply", authCheck, (req, res) => {
    console.log(req.body);
    createCert(req.body, req.user.email)
    res.send()
})
router.get("/faculty/all", authCheck, async (req, res) => {

    if (req.user.role === "labinc") {
        try {

            const records = await getAllRecordsLabinc(req.user.email)
            res.send(records)

        } catch (error) {
            res.send()

        }
    }
})

router.get("/faculty/view/:id", authCheck, async (req, res) => {
    res.setHeader("Content-Type", "application/pdf")
    fs.createReadStream("../server/files/" + req.params.id).pipe(res)
})
router.get("/student/all", authCheck, async (req, res) => {
    try {

        const records = await getAllRecordsStudents(req.user.email)
        res.send(records)
    } catch (error) {
        res.send()
    }
})
router.get("/faculty/aprove/:id", authCheck, async (req, res) => {
    if (req.user.role === "labinc") {
        console.log(req.user);
        const records = await approve(req.params.id)
        res.send(records)

    }
})
router.get("/faculty/reject/:id", authCheck, async (req, res) => {

    if (req.user.role === "labinc") {
        console.log(req.user);
        const records = await reject(req.params.id)
        res.send(records)

    }
})


module.exports = router;
