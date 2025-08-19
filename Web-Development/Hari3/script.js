function makeTable(name, age, date, gender) {
    document.getElementById("text-name").innerHTML = name
    document.getElementById("text-age").innerHTML = age
    document.getElementById("text-date").innerHTML = date
    document.getElementById("text-gender").innerHTML = gender
    let gender_icon = document.getElementById("gender-icon")
    if (gender === "Laki-Laki") {
        gender_icon.src = "img/icon2.png"
    } else if (gender === "Perempuan") {
        gender_icon.src = "img/icon1.ico"
    }
}
function messages(info) {
    message = document.getElementById("messages")
    message.innerHTML = "*Belum ke isi: "+info+"*"
    message.style = "display: contents;"
}
function showRespones() {
    nama = document.getElementById('nama').value
    umur = document.getElementById('umur').value
    lahir = document.getElementById('lahir').value
    // <Learning_Zone>
    kelamin = document.querySelector('input[name="kelamin"]:checked').value;
    // </Learning_Zone>
    if (nama) {
        if (umur) {
            if (lahir) {
                        if (kelamin) {
                            document.getElementById("messages").style = "display: none";
                            let requests = document.getElementById("requests")
                            let respones = document.getElementById("respones")
                            let box = document.getElementById("box")
                            box.style = "width: 650px;"
                            requests.style = "display: none;"
                            respones.style = "display: contents;"
                            makeTable(nama, umur, lahir, kelamin)
                        } else {
                            messages("Kelamin")
                        }
                }   else {
                    messages("Tanggal Lahir")
            }
        } else {
            messages("umurmu")
        }
    } else {
        messages("namamu")
    }
}
function showRequests() {
    document.getElementById("data").reset()
    document.getElementById("lahir").value = ""
    document.getElementById("lahir").placeholder = "Tanggal Lahirmu..."
    document.getElementsByClassName("Laki").checked = true
    let requests = document.getElementById("requests")
    let respones = document.getElementById("respones")
    let box = document.getElementById("box")
    box.style = "width: 500px;"
    respones.style = "display: none;"
    requests.style = "display: contents;"
}