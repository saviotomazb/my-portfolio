document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.classList.add('nav-shadow');
        } else {
            header.classList.remove('nav-shadow');
        }
    });
    document.body.style.opacity = "1";
    var path = window.location.pathname;
    path = path.replace(/^\/|\/$/g, '');
    var links = document.querySelectorAll('.nav-link');
    var defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-letra-titulo');
    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (path === href) {
            link.style.fontWeight = '800';
            link.style.color = defaultColor;
        }
        link.addEventListener('click', function(event) {
            if (path === href) {
                event.preventDefault();
            }
        });
    });
    document.getElementById("formacao1").onclick = function() {
        window.open("https://www.pucminas.br/PucVirtual/Pos-Graduacao/Paginas/Engenharia-de-Software.aspx?area=11", "_blank");
    };
    document.getElementById("formacao2").onclick = function() {
        window.open("https://fateccatanduva.cps.sp.gov.br/gestao-da-tecnologia-da-informacao/", "_blank");
    };
});