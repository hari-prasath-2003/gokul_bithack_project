const container = document.getElementById("container")
const containerOd = document.getElementById("container-od")
function createLeaveCard(fromdate, fromtime, todate, totime, status) {
    const card = document.createElement("div")
    const cardBody = document.createElement("div")
    let cardContent = document.createElement("div")
    let h6 = document.createElement("h6")
    card.className = "card"
    card.style = "min-width:250px;height:230px"
    cardBody.className = "card-body"
    cardContent.className = "d-flex"
    h6.innerHTML = "From Date:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = fromdate
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "From Time:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = fromtime
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "To Date:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = todate
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "To Time:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = totime
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex status"
    h6 = document.createElement("h6")
    h6.innerHTML = "Status: "
    console.log(status);
    const p = document.createElement("p")
    if (status === "pending") {
        p.innerHTML = "PENDING"
        p.style = "color:orange;font-weight:bold"
    }
    else if (status === "rejected") {

        p.innerHTML = "REJECTED"
        p.style = "color:red;font-weight:bold"
    }
    else if (status === "approved") {
        p.innerHTML = "APPROVED"
        p.style = "color:green;font-weight:bold"
    }
    cardContent.append(h6)
    cardContent.append(p)
    cardBody.append(cardContent)
    card.append(cardBody)
    container.append(card)
}

function createOdCard(fromdate, fromtime, todate, totime, mentor_status, labinc_status, event, odid) {
    const card = document.createElement("div")
    const cardBody = document.createElement("div")
    let cardContent = document.createElement("div")
    let h6 = document.createElement("h6")
    card.className = "card"
    card.style = "min-width:250px"
    cardBody.className = "card-body"
    cardContent.className = "d-flex"
    h6.innerHTML = "From Date:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = fromdate
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "From Time:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = fromtime
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "To Date:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = todate
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "To Time:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = totime
    cardContent.append(h6)
    cardBody.append(cardContent)
    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6.innerHTML = "Event-Type : "
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = event
    cardContent.append(h6)
    cardBody.append(cardContent)

    cardContent = document.createElement("div")
    cardContent.className = "d-flex"
    h6 = document.createElement("h6")
    h6.innerHTML = "OD ID:"
    cardContent.append(h6)
    h6 = document.createElement("h6")
    h6.innerHTML = odid
    cardContent.append(h6)
    cardBody.append(cardContent)

    cardContent = document.createElement("div")
    cardContent.className = "status"
    h6 = document.createElement("h6")
    h6.innerHTML = "Status: "
    console.log(status);
    pdiv = document.createElement("div")
    pdiv.className = "d-flex"
    pdiv.style = "height:30px;width:100%;gap:3px"
    const pm = document.createElement("div")
    if (mentor_status === "pending") {

        pm.style = "background-color:orange;height:12px;width:33%;border-radius:7px"
    }
    else if (mentor_status === "rejected") {
        pm.style = "background-color:red;height:12px;width:33%;border-radius:7px"
    }
    else if (mentor_status === "approved") {
        pm.style = "background-color:green;height:12px;width:33%;border-radius:7px"
    }
    const pl = document.createElement("div")
    if (labinc_status === "pending") {
        pl.style = "background-color:orange;height:12px;width:33%;border-radius:7px"
    }
    else if (labinc_status === "rejected") {
        pl.style = "background-color:red;height:12px;width:33%;border-radius:7px"
    }
    else if (labinc_status === "approved") {
        pl.style = "background-color:green;height:12px;width:33%;border-radius:7px"
    }
    // const ps = document.createElement("div")
    // if (mentor_status === "pending") {
    //     ps.style = "background-color:orange;height:12px;width:33%;border-radius:7px"
    // }
    // else if (mentor_status === "rejected") {
    //     ps.style = "background-color:red;height:12px;width:33%;border-radius:7px"
    // }
    // else if (mentor_status === "approved") {
    //     ps.style = "background-color:green;height:12px;width:33%;border-radius:7px"
    // }
    // ps.style = "background-color:orange;height:12px;width:33%;border-radius:7px"
    pdiv.append(pm)
    pdiv.append(pl)
    // pdiv.append(ps)
    cardContent.append(h6)
    cardContent.append(pdiv)
    cardBody.append(cardContent)
    card.append(cardBody)
    containerOd.append(card)
}

async function fetchDataAndDisplay() {
    let result = await fetch("/leave/student/all")
    result = await result.json()
    console.log(result);
    result = result.reverse()
    result.forEach(r => {
        createLeaveCard(r.fromDate, r.fromTime, r.toDate, r.toTime, r.status)
    });
    result = await fetch("/od/student/all")
    result = await result.json()
    console.log(result);
    result = result.reverse()

    result.forEach(r => {
        createOdCard(r.fromDate, r.fromTime, r.toDate, r.toTime, r.mentor_status, r.labinc_status, r.event, r._id)
    });
}

fetchDataAndDisplay()