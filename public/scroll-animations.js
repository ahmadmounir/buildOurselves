// Progressive enhancement for scroll animations
// Only runs if CSS animation-timeline is not supported
(function () {
  'use strict';

  // Check if CSS animation-timeline is supported
  const supportsScrollTimeline = CSS.supports && CSS.supports('animation-timeline', 'view()');

  if (!supportsScrollTimeline) {
    // Fallback: Use Intersection Observer for older browsers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation by changing play state
            entry.target.style.animationPlayState = 'running';
            // Stop observing this element once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Wait for DOM to be ready
    function initScrollAnimations() {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        // Ensure initial state for fallback
        el.style.opacity = '0';
        el.style.transform = el.classList.contains('translate-x-10') ? 'translateX(30px)' : 'translateY(30px)';
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
      initScrollAnimations();
    }
  }
})();
