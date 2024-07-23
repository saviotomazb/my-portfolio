document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";

    const navMenu = document.querySelector(".header__menu--expand");
    const hamburger = document.querySelector(".header__hamburguer--mod");
    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    const navLink = document.querySelectorAll(".header__link--mod");
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    const linkPortfolio = document.querySelector(".projeto__assunto--portfolio");
    if (linkPortfolio) {
        linkPortfolio.onclick = function() {
            window.open("https://github.com/saviotomazb/my_portfolio", "_blank");
        };
    } else {
        console.error("Elemento com a classe .projeto__assunto--portfolio não encontrado.");
    }

    const linkPuc = document.querySelector(".sobre__formacaofundo--puc");
    if (linkPuc) {
        linkPuc.onclick = function() {
            window.open("https://www.pucminas.br/PucVirtual/Pos-Graduacao/Paginas/Engenharia-de-Software.aspx?area=11", "_blank");
        };
    } else {
        console.error("Elemento com a classe .sobre__formacaofundo--puc não encontrado.");
    }

    const linkFatec = document.querySelector(".sobre__formacaofundo--fatec");
    if (linkFatec) {
        linkFatec.onclick = function() {
            window.open("https://fateccatanduva.cps.sp.gov.br/gestao-da-tecnologia-da-informacao/", "_blank");
        };
    } else {
        console.error("Elemento com a classe .sobre__formacaofundo--fatec não encontrado.");
    }

    const linkExp = document.querySelector(".sobre__experienciafundo--mod");
    if (linkExp) {
        linkExp.onclick = function() {
            window.location.href = "/Projetos.html";
        };
    } else {
        console.error("Elemento com a classe .sobre__experienciafundo--mod não encontrado.");
    }

    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header--mod');
        if (window.scrollY > 0) {
            header.classList.add('header--shadow');
        } else {
            header.classList.remove('header--shadow');
        }
    });

    var path = window.location.pathname;
    path = path.replace(/^\/|\/$/g, '');
    var links = document.querySelectorAll('.header__link');
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
});