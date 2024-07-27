document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // Responsive Menu Toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var nav = document.getElementById('nav');
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });

    // Scroll Animation for Skill Icons
    $(window).scroll(function() {
        $('.skill').each(function() {
            var skillPosition = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (skillPosition < topOfWindow + 600) {
                $(this).addClass('fadeIn');
            }
        });
    });
});
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        console.log('Skill hovered:', card.textContent);
    });
});

// Additional Functions for Enhanced Interactivity (Optional)
function toggleSkillDetails(skillId) {
    var details = document.getElementById('details-' + skillId);
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}
