
let prevres
async function reqinterval() {
    let res = await fetch("/certificate/student/all")
    res = await res.json()
    res = res.reverse()
    console.log(res);
    var table = document.getElementById("table")
    table.innerHTML = ""
    if (!(prevres == res)) {

        res.forEach((r, index) => {
            const row = document.createElement("tr")
            var x = row.insertCell(0);
            x.innerHTML = r.odid;
            var x = row.insertCell(1);
            x.innerHTML = r.event;
            var x = row.insertCell(2);
            x.innerHTML = r.eventdetails;
            var x = row.insertCell(3);
            p = document.createElement("p")
            p.innerText = r.labinc_status;
            p.style = "text-transform: capitalize;text-align:center"
            x.append(p)

            table.appendChild(row)

        })
    }
}

reqinterval()

