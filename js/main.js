let card = [];
let file;
let fileName;
let percentage;
var id;
let cat;

$("#image").change(function (e) {
    file = e.target.files[0];
    fileName = file.name;
});

function post(a, b) {
    db.collection(a).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().bold == true) {
                $(`${b} p`).html(doc.data().blog)
                $(`${b} .cardImg`).attr("src", doc.data().image);
            }

            card.push(`<div class="card">
            <img src="${doc.data().image}" alt="" class="cardImg">
            <span class="cardSpan flex item-center medium"><img src="circle.png"><p>${a.charAt(0).toUpperCase() + a.slice(1)}</p></span>
             <p class="cardP">${doc.data().blog}<a onclick="blog()">Read More</a></p>
             </div> `)
            card.sort(() => Math.random() - 1);
            $(".blog").html(card);
        });
    });
}
post("technology", ".longCard");
post("lifestyle", ".vertiCard");
post("sports", ".d1");
post("business", ".d2");

$(".submit").on("click", () => {
    let category = $('#category').val();
    let date = new Date().getMilliseconds();
    let storageRef = storage.ref(`${category}/${date + fileName}`);
    let uploadTask = storageRef.put(file);

    uploadTask.on('state_changed', (sanpshot) => {
        percentage = Math.floor((sanpshot.bytesTransferred / sanpshot.totalBytes) * 100)
        console.log(percentage);
    }, (error) => {
        console.log(error)
    }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            db.collection(category).add({
                blog: $('#blog').val(),
                bold: false,
                desc: $('#desc').val(),
                image: downloadURL,
            })
                .then((docRef) => {
                    $('#blog').val("");
                    $('#desc').val("");
                    $('#image').val("");
                    post("technology", ".longCard");
                    post("lifestyle", ".vertiCard");
                    post("sports", ".d1");
                    post("business", ".d2");
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        });
    });
})