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

    // extra

    document.addEventListener("DOMContentLoaded", function () {
        // Esercizio 1: Collassare le sezioni
        document.querySelectorAll('.toggle-section').forEach(button => {
            button.addEventListener('click', function () {
                const target = document.querySelector(this.getAttribute('data-target'));
                if (target) {
                    target.classList.toggle('d-none'); // Mostra o nasconde la sezione
                    this.textContent = target.classList.contains('d-none') ? 'Espandi Welcome Summer' : 'Collassa Welcome Summer';
                }
            });
        });
    
        // Esercizio 2: Contare il numero di viaggi
        document.getElementById('count-travel').addEventListener('click', function () {
            const cards = document.querySelectorAll('#cards-container .card');
            alert(`Numero di viaggi disponibili: ${cards.length}`);
        });
    
        // Esercizio 5: Rimuovere tutte le card
        document.getElementById('remove-cards').addEventListener('click', function () {
            const container = document.getElementById('cards-container');
            container.innerHTML = ''; // Rimuove tutte le card
            alert('Tutte le card sono state rimosse!');
        });
    });
    
    

