let prevres
async function reqinterval() {

    let res = await fetch("/od/faculty/all")
    res = await res.json()
    console.log(res);
    var table = document.getElementById("table")
    table.innerHTML = ""
    if (!(prevres == res)) {

        res.forEach((r, index) => {
            const row = document.createElement("tr")
            var x = row.insertCell(0);
            x.innerHTML = r.name;
            var x = row.insertCell(1);
            x.innerHTML = "";
            var x = row.insertCell(2);
            x.innerHTML = r.fromDate;
            var x = row.insertCell(3);
            x.innerHTML = r.fromTime;
            var x = row.insertCell(4);
            x.innerHTML = r.toDate;
            var x = row.insertCell(5);
            x.innerHTML = r.toTime;
            var x = row.insertCell(6);
            x.innerHTML = r.event;
            var x = row.insertCell(7);

            const download = document.createElement("button")
            download.innerText = "VIEW"
            download.style = "font-size:12px"
            download.className = "downbtn btn btn-primary"
            download.onclick = () => {
                window.open("/certificate/faculty/view/" + r.filename, "_blank")
            }
            x.append(download);

            if (r.status === "pending" || true) {
                const buttonA = document.createElement("button")
                buttonA.innerHTML = "Accept"
                buttonA.className = "accept"
                buttonA.addEventListener("click", () => {
                    fetch("/od/faculty/aprove/" + r._id).then((res) => {
                        if (res.status === 200) {
                            console.log(x);
                            x.innerHTML = "accepted"
                        }
                        if (res.status === 401) {
                            window.location.href = "/auth/google"
                        }
                    })

                })
                var x = row.insertCell(8);
                x.appendChild(buttonA);
                const buttonB = document.createElement("button")
                buttonB.innerHTML = "Reject"
                buttonB.className = "reject"
                buttonB.addEventListener("click", () => {
                    fetch("/od/faculty/reject/" + r._id).then((res) => {
                        if (res.status === 200) {
                            console.log(x);
                            x.innerHTML = "rejected"
                        }

                        if (res.status === 401) {
                            window.location.href = "/auth/google"
                        }

                    })
                })
                x.appendChild(buttonB);
                table.appendChild(row)

            } else {
                var x = row.insertCell(8);
                x.innerHTML = r.status
                table.appendChild(row)
            }

        })
    }
}

setInterval(reqinterval, 5000)