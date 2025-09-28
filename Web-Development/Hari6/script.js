getSrc('test.mp4', 'video')
function whenError(args) {
    let video = document.getElementById("videos")
    video.innerHTML = "<h1 style='color: white;'>Something Error!: " + args + "<br>Please read the <a href='help.html'>Guide</a> first</h1>"
    video.style = "outline: solid 1px rgba(255, 255, 255, 0.2);"
}
// <Learning Area>
document.getElementById('body').addEventListener('keydown', function(e) { if (e.key === "Enter") {getSrc(document.getElementById('searchs').value)} })
function getSrc(temp_src, typeFrom="") {
    if (temp_src.trim()) {
        let video = document.getElementById("videos");
        if (! typeFrom) {
            typeFrom = document.querySelector('input[name="jenis"]:checked').value
        }
        if (temp_src.includes('"')) {
            whenError("BlackList char detected");
            return;
        }

        if (typeFrom === "video") {
            temp_src = "test/" + temp_src
            fetch(temp_src)
            .then(res => {
                if (!res.ok) throw new Error("Video tidak ditemukan");
                return res.blob();
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                document.getElementById("myVideo").src = url;
            })
            .catch(err => {
                whenError(err.message)
            });

            video.innerHTML =
            '<video controls src="' + temp_src + '" id="myVideo" loop></video>';
        } else if (typeFrom === "iframe") {
            let src;
            temp_src = temp_src.split('&')
            if (temp_src.length === 2 && temp_src[0].length === 11 && temp_src[1].length === 13) {
                src = `${temp_src[0]}?autoplay=1&list=${temp_src[1]}`
            } else if (temp_src[0].length == 11) {
                src = `${temp_src[0]}?autoplay=1&loop=1&playlist=${temp_src[0]}`
            } else {
                whenError("Input Id embed tidak valid")
                return
            }
            video.innerHTML = `<iframe frameborder="0" src="https://youtube.com/embed/${src}" id="myIframe" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" referrer-policy="no-referrer" allowfullscreen></iframe>`
        }
        video.style = 'outline: none;'
    } else {
        whenError("Your Input pls...")
    }
}
// <Learning Area>
