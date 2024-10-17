window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Show the loading screen for 2 seconds
    setTimeout(() => {
        // Hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';
        
        // Show the main content
        document.getElementById('main-content').classList.remove('hidden');
        
        // Start the typewriter effect (if applicable)
        type(); 
    }, 2000); // Duration set to 2 seconds
});