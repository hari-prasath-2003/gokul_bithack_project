const fromDate = document.getElementById("fromdate")
const fromtime = document.getElementById("fromtime")
const toDate = document.getElementById("todate")
const totime = document.getElementById("totime")
const select = document.getElementById("select")
const submit = document.getElementById("submit")



submit.addEventListener("click", (e) => {
    console.log(filename);
    e.preventDefault()
    fetch("http://localhost:3000/od/apply", { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": '*' }, method: "POST", body: JSON.stringify({ fromdate: fromdate.value, fromtime: fromtime.value, todate: todate.value, totime: totime.value, event: select.value, filename: filename }) }).then((res) => {
        if (res.status === 401) {
            window.location.href = "/auth/google"
        }
        if (res.status === 200) {
            alert("OD ADDED SUCCESSFULLY")
            window.location.href = "/profile"
        }
    })
})