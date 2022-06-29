if (sessionStorage.getItem("kullanıcı")) {
    $('.sign_in').hide()
    $('.login').hide()
    fetch('http://127.0.0.1:8080/user/get', {
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
document.getElementsByName('admin-id')[0].validity.valid

$('.login-button').click(function( event ){ // <---- "event" parameter here
    length1 = document.getElementsByName("admin-id")[0].value.length
    length2 = document.getElementsByName("password")[0].value.length
    if ( length1 > 0 &&  length2 > 0) {
        fetch('http://127.0.0.1:8080/user/giris', {
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
    } else {
        if (length1 == 0) {
            $('div[name="control1"]').show()
        }
        if (length2 == 0) {
            $('div[name="control2"]').show()
        }
    }
});
$('input[name="admin-id"]').focus(()=> {
    $('div[name="control1"]').hide()
})
$('input[name="password"]').focus(()=> {
    $('div[name="control2"]').hide()
})
$('.register-button p').click(function( event ){ // <---- "event" parameter here
    length1 = document.getElementsByName("register-admin-id")[0].value.length
    length2 = document.getElementsByName("name")[0].value.length
    length3 = document.getElementsByName("e-posta")[0].value.length
    eposta = document.getElementsByName("e-posta")[0].value.includes('@')
    length4 = document.getElementsByName("register-password")[0].value.length
    if (length1 > 0 && length2 > 0 && length3 > 0 && length4 > 0 && eposta) {
        fetch('http://127.0.0.1:8080/user', {
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
    } else {
        if (length1 == 0) {
            $('div[name="control3"]').show()
        }
        if (length2 == 0) {
            $('div[name="control4"]').show()
        }
        if (length3 == 0) {
            $('div[name="control5"]').show()
        }
        if (length4 == 0) {
            $('div[name="control6"]').show()
        }
        if (!eposta) {
            $('div[name="control5"]').show()
        }
    }
});
$('input[name="register-admin-id"]').focus(()=> {
    $('div[name="control3"]').hide()
})
$('input[name="name"]').focus(()=> {
    $('div[name="control4"]').hide()
})
$('input[name="e-posta"]').focus(()=> {
    $('div[name="control5"]').hide()
})
$('input[name="register-password"]').focus(()=> {
    $('div[name="control6"]').hide()
})
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
        $('div[name="control6"]').hide()
        $('div[name="control5"]').hide()
        $('div[name="control4"]').hide()
        $('div[name="control3"]').hide()
        $('div[name="control2"]').hide()
        $('div[name="control1"]').hide()
      }
});
$('.exit').click(() => {
    sessionStorage.removeItem("kullanıcı")
    location.reload()
})
