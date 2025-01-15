// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function () {

    // Select the elements for album art and performance
    const albumArtImg = document.getElementById('album-art-img');
    const albumInfo = document.getElementById('album-info');
    
    const performImg = document.getElementById('perform-img');
    const performanceMedia = document.getElementById('performance-media');
    
    // Toggle album info visibility when album art is clicked
    albumArtImg.addEventListener('click', function () {
        albumInfo.classList.toggle('hidden-content');
    });

    // Toggle performance media visibility when perform image is clicked
    performImg.addEventListener('click', function () {
        performanceMedia.classList.toggle('hidden-content');
    });
});
// Add click event listener to the album art image
document.getElementById('album-art-img').addEventListener('click', function() {
    // Toggle the 'clicked' class on the album art figure to trigger the CSS
    document.getElementById('album-art-figure').classList.toggle('clicked');
});
// Add click event listener to the album art image
document.getElementById('album-art-img').addEventListener('click', function() {
    // Toggle the 'clicked' class on the album art figure to trigger the CSS
    document.getElementById('album-art-figure').classList.toggle('clicked');
});