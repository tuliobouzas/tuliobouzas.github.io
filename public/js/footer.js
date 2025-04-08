document.addEventListener("DOMContentLoaded", function() {
    fetch('/style/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(error => {
            console.warn('Error loading footer:', error);
        });
});