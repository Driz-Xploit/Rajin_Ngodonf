function Tangga() {
    let tangga = "[-]"
    let jumlah = document.getElementById("masukan").value
    jumlah = parseInt(jumlah)
    const temp = document.getElementById("mwehehe")
    if (jumlah <= 25) {
        temp.style = "text-align:left;"
        let result = ""
        for (i=1;i<(jumlah+1);i++) {
            for (x=1;x<(i+1);x++) {
                result += tangga
            }
            result += "<br>"
        }
        temp.innerHTML = result
    } else {
        temp.style = "text-align:center"
        temp.innerHTML = "Integer Overflow: Tidak bisa membuat tangga lebih dari 25<br>~ Maaf Oni-Chan ~"
    }
}
function Mwehehe() {
    const temp = document.getElementById("mwehehe")
    temp.style = "text-align:center"
    temp.innerHTML = "Ahh yamete"
}
function getout() {
    if (document.getElementById("mwehehe").innerHTML  === "Ahh yamete") {
        document.getElementById("mwehehe").innerHTML = ""
    }
}