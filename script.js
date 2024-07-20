document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'block';
});
document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementById('open-menu').style.display = 'none';
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'none';
});
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('open-menu').style.display = 'block';
});

// Form Submission 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyN9gJONL45EjJynCG4oTba4Ha9dWIgte3fVfI5wb0woTPuXDEIhsNA2f5s_rbeMP1p/exec'
const form = document.forms['submit-to-google-sheet']
const vic = document.getElementById("vic")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            vic.innerHTML = ("Message sent successfully")

            setTimeout(function () {
                vic.innerHTML = ("")
            }, 10000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

