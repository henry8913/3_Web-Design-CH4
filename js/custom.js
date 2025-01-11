const loadComponent = (selector, url) =>
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Errore nel caricamento di ${url}: ${response.statusText}`);
            return response.text();
        })
        .then(data => (document.querySelector(selector).innerHTML = data));

Promise.all([
    loadComponent('#header-placeholder', './components/header.html'),
    loadComponent('#main-placeholder', './components/main.html'),
    loadComponent('#footer-placeholder', './components/footer.html'),
]).then(() => {
    console.log('Tutte le sezioni sono state caricate!');
}).catch(error => {
    console.error('Errore durante il caricamento delle sezioni:', error);
});

    // popup
    document.addEventListener("DOMContentLoaded", function () {
        if (!sessionStorage.getItem("modalShown")) {
            let modalShown = false;
    
            window.addEventListener("scroll", function () {
                // scroll almeno 200px
                if (!modalShown && window.scrollY > 200) {
                    var myModal = new bootstrap.Modal(document.getElementById('infoModal'));
                    myModal.show();
                    sessionStorage.setItem("modalShown", "true");
                    modalShown = true;
                }
            });
        }
    });
    

