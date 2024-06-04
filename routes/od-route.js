const router = require('express').Router();
const { applyOd, getAllRecordsFaculty, getAllRecordsLabinc, approveOdMentor, rejectOdMentor, approveOdLabinc, rejectOdLabinc, getAllRecordsStudents } = require("../controller/od")
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).send()

    } else {
        next();
    }
};

router.post("/apply", authCheck, (req, res) => {
    console.log(req.body);
    applyOd(req.body, req.user._id)
    res.send()
})
router.get("/faculty/all", authCheck, async (req, res) => {

    if (req.user.role === "mentor") {

        try {

            const records = await getAllRecordsFaculty(req.user.email)
            res.send(records)
        } catch (error) {
            res.send()

        }
    }
    else if (req.user.role === "labinc") {
        try {

            const records = await getAllRecordsLabinc(req.user.email)
            res.send(records)

        } catch (error) {
            res.send()

        }
    }
})
router.get("/faculty/:id", authCheck, async (req, res) => {
    try {

        const records = await getAllRecords("", "", req.params.id)
        res.send(records)
    } catch (error) {
        res.send()

    }
})
router.get("/student/all", authCheck, async (req, res) => {
    try {

        const records = await getAllRecordsStudents("", req.user.id, "")
        res.send(records)
    } catch (error) {
        res.send()
    }
})
router.get("/faculty/aprove/:id", authCheck, async (req, res) => {
    if (req.user.role === "mentor") {

        console.log(req.user);
        const records = await approveOdMentor(req.params.id)
        res.send(records)
    } else if (req.user.role === "labinc") {
        console.log(req.user);
        const records = await approveOdLabinc(req.params.id)
        res.send(records)

    }
})
router.get("/faculty/reject/:id", authCheck, async (req, res) => {
    if (req.user.role === "mentor") {

        console.log(req.user);
        const records = await rejectOdMentor(req.params.id)
        res.send(records)
    } else if (req.user.role === "labinc") {
        console.log(req.user);
        const records = await rejectOdLabinc(req.params.id)
        res.send(records)

    }
})

router.get("/faculty/view/:id", authCheck, async (req, res) => {
    res.setHeader("Content-Type", "application/pdf")
    fs.createReadStream("../server/files/" + req.params.id).pipe(res)
})

module.exports = router;
