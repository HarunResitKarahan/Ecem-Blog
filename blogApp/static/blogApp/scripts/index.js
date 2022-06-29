if (sessionStorage.getItem("kullanıcı")) {
    $('.sign_in').hide()
    $('.login').hide()
    fetch('http://127.0.0.1:8000/user/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: sessionStorage.getItem("kullanıcı")
        })
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector(".user p").innerHTML = "Hoşgeldiniz: " + data
            sessionStorage.setItem('name', data)
        })
} else {
    $('.user').hide()
    $('.exit').hide()
}
// $('.user p').click(function () {
//     location.href = location.href + "profil";
// }
// );

$('.login-button p').click(function( event ){ // <---- "event" parameter here
    fetch('http://127.0.0.1:8000/user/giris', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: document.getElementsByName("admin-id")[0].value,
            userPassword: document.getElementsByName("password")[0].value
        })
    })
        .then(response => response.json())
        .then(data => {
            alert(data)
            if (data === 'Giriş Başarılı') {
                sessionStorage.setItem('kullanıcı', document.getElementsByName("admin-id")[0].value)
                location.reload()
            }
        })
});
$('.register-button p').click(function( event ){ // <---- "event" parameter here
    fetch('http://127.0.0.1:8000/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: document.getElementsByName("register-admin-id")[0].value,
            name: document.getElementsByName("name")[0].value,
            userEMail: document.getElementsByName("e-posta")[0].value,
            userPassword: document.getElementsByName("register-password")[0].value
        })
    })
        .then(response => response.json())
        .then(data => {
            alert(data)
            location.reload()
        })
});
$('.sign_in p').click(() => {
    document.querySelector('#login').style.display = 'flex'
})
$('.login p').click(() => {
    document.querySelector('#register').style.display = 'flex'
})
$('.cards').click(function( event ){ // <---- "event" parameter here
    if (event.target.className === 'cards' ) {
        document.querySelectorAll('.cards').forEach(element => {
            element.style.display = 'none'
        });
      }
});
$('.exit').click(() => {
    sessionStorage.removeItem("kullanıcı")
    location.reload()
})
