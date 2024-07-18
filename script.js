document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
    var path = window.location.pathname;
    path = path.replace(/^\/|\/$/g, '');
    var links = document.querySelectorAll('.menu__itens a');
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
