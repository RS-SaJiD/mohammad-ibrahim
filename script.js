window.onload = function() {
    document.body.style.backgroundImage = "url('backgrounds/home.jpg')";
};

function changeBg(fileName, element) {
    document.body.style.backgroundImage = "url('backgrounds/" + fileName + "')";

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}
