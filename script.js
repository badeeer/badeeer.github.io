document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projectItems = document.querySelectorAll('.project-grid .project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const category = button.dataset.category;

            projectItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block'; // Show the item
                    item.style.animation = 'fadeIn 0.3s ease-in-out';
                } else {
                    item.style.display = 'none'; // Hide the item
                }
            });
        });
    });

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation for project images
    const projectImages = document.querySelectorAll('.project-item img');
    projectImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Add CSS animation keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .project-item img {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

