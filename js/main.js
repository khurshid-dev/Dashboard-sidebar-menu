const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');
const linkIcon = document.querySelectorAll('.navigation ul li');

toggle.onclick = function() {
    navigation.classList.toggle('active')
}

linkIcon.forEach((item) => {
    item.addEventListener('click', () => {
        navigation.classList.toggle('active')
    })
})