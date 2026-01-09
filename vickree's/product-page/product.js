const order = document.getElementById('order');
const check = document.getElementById('check');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
     check.classList.add('hh');

    setTimeout(() => {
        check.classList.remove('hh')
}, 10000);
});


