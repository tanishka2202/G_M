
// Function to load HTML content
function loadHTML(elementId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
        .catch(error => console.error('Error loading HTML:', error));
}

// Function to set the active link in the navbar
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
    const links = document.querySelectorAll("nav a"); // Select all links in the navbar

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add the 'active' class to the current page link
        }
    });
}

// Load the navbar and footer
loadHTML('navbar', '../navbar.html');
loadHTML('footer', '../footer.html');
