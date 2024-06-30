document.addEventListener('DOMContentLoaded', function() {
    const anatomySvg = document.getElementById('anatomy');

    anatomySvg.addEventListener('click', function(event) {
        const targetElement = event.target;
        if (targetElement.tagName === 'path') {
            // Toggle the orange color on the clicked part
            if (targetElement.style.fill === 'orange') {
                targetElement.style.fill = '';
            } else {
                targetElement.style.fill = 'orange';
            }
        }
    });
});
