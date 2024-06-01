document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
    var path = window.location.pathname;
    path = path.replace(/^\/|\/$/g, '');
    var links = document.querySelectorAll('.menu__itens a');
    var defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--branco-principal');
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
