function makeTable (name, age, date, gender) {
    return "<table><tr><th style='border-top-left-radius: 10px;'>Nama</th><td style='border-top-right-radius: 10px;'>"+name+"</td></tr><tr><th>Umur</th><td>"+age+"</td></tr><tr><th>Lahir</th><td>"+date+"</td></tr><tr><th style='border-bottom-left-radius: 10px;'>Kelamin</th><td style='border-bottom-right-radius: 10px;'>"+gender+"</td></tr></table>"
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
                            document.getElementById("results").innerHTML = makeTable(nama, umur, lahir, kelamin)
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