// Select the Earth element
const earth = document.getElementById('earth');
const space = document.querySelector('space');

// Function to update the position of the Earth based on scroll progress
function updateEarthPosition() {
    // Get the scroll position
    const scrollDistance = window.scrollY;

    // Define the maximum scroll distance for the animation
    const maxScrollDistance = 200; // Adjust as needed

    // Limit the scroll distance to the maximum scroll distance
    const limitedScrollDistance = Math.min(scrollDistance, maxScrollDistance);

    // Calculate the percentage of the maximum scroll distance
    const scrollPercentage = limitedScrollDistance / maxScrollDistance;

    // Calculate the new translation values based on scroll progress
    const translateX = 50 - 25 * (scrollPercentage);
    const translateY = 87.5 - 5 * (scrollPercentage);

    // Apply the new translation values to the Earth element
    earth.style.transform = `translate(${translateX}%, ${translateY}%)`;

    if (scrollDistance >= 200) {
        earth.style.position = 'absolute';
    } else {
        earth.style.position = 'fixed';
    }
}

// Add event listener to listen for scroll events
window.addEventListener('scroll', updateEarthPosition);
