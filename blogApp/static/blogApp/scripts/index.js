$('.send .login').click(function( event ){ // <---- "event" parameter here
    fetch('http://127.0.0.1:8000/user', {
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
            location.reload()
        })
});
$('.sign_in p').click(() => {
    document.querySelector('#login').style.display = 'flex'
})
$('.cards').click(function( event ){ // <---- "event" parameter here
    if (event.target.className === 'cards' ) {
        document.querySelectorAll('.cards').forEach(element => {
            element.style.display = 'none'
        });
      }
});