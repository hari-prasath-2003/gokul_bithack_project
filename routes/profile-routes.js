const router = require('express').Router();
const { getEventType } = require("../controller/od")
const ssig = require("../models/ssig")
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/google');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    if (req.user.role === "student") {

        res.render("student/index", { user: req.user.username, userProfile: req.user.profile, mentor: req.user.mentor })
    } else {
        res.render("faculty/leave-approval", { user: req.user.username, userProfile: req.user.profile })
    }
});
router.get('/leave', authCheck, (req, res) => {
    if (req.user.role === "student") {

        res.render("student/leaveapply", { user: req.user.username, userProfile: req.user.profile })
    } else {
        res.render("faculty/leave-approval", { user: req.user.username, userProfile: req.user.profile })
    }
});
router.get('/od', authCheck, (req, res) => {
    if (req.user.role === "student") {

        res.render("student/od", { user: req.user.username, userProfile: req.user.profile })
    } else {
        res.render("faculty/od-approval", { user: req.user.username, userProfile: req.user.profile })
    }
});
router.get('/certificate', authCheck, (req, res) => {
    if (req.user.role === "student") {

        res.render("student/certificate", { user: req.user.username, profile: req.user.profile, event: null })
    } else {
        res.render("faculty/od-approval", { user: req.user.username, userProfile: req.user.profile })
    }
});
router.get('/viewcert', authCheck, async (req, res) => {
    console.log(req.params.eventtype);
    if (req.user.role === "student") {

        res.render("student/view", { user: req.user.username, profile: req.user.profile })
    } else {
        res.render("faculty/od-approval", { user: req.user.username, userProfile: req.user.profile })
    }
});

router.get('/certificate/faculty', authCheck, async (req, res) => {


    res.render("faculty/certapproval", { user: req.user.username, userProfile: req.user.profile })
});
router.get("/indicator", authCheck, async (req, res) => {
    const temp = await ssig.findOne({ sid: req.user.email })
    console.log({ ...temp });
    try {
        res.render("student/ssigindicator", { ...(temp._doc), indicator: temp._doc.indicator.toPrecision(3), user: req.user.username, profile: req.user.profile })

    } catch (error) {

    }

})



router.get('/leave/summary', authCheck, (req, res) => {
    if (!(req.user.role === "student")) {
        console.log("ho");
        res.render("faculty/leave-summary", { user: req.user.username, userProfile: req.user.profile })
    }

});


module.exports = router;
