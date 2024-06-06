const earth = document.getElementById('earth');
const titleContent = document.getElementById('title-content');

function updateEarthPosition() {

    const scrollDistance = window.scrollY;
    const maxScrollDistance = 200;

    // Limit the scroll distance to the maximum scroll distance
    const limitedScrollDistance = Math.min(scrollDistance, maxScrollDistance);

    // Calculate the percentage of the maximum scroll distance
    const scrollPercentage = limitedScrollDistance / maxScrollDistance;

    // Calculate the new translation values based on scroll progress
    const scale = 1 - 0.5 * (scrollPercentage);

    titleContent.style.transform = `scale(${scale})`;
}

// Add event listener to listen for scroll events
window.addEventListener('scroll', updateEarthPosition);
