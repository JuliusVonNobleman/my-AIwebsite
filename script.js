function toggleDescription(serviceElement) {
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        if (service === serviceElement) {
            service.classList.toggle('active');
        } else {
            service.classList.remove('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight - 100;
            if (isVisible) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections();
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const services = document.querySelectorAll('.service');

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight - 100;
            if (isVisible) {
                section.classList.add('visible');
            }
        });
    }

    function hideServicesOnScroll() {
        services.forEach(service => {
            const serviceTop = service.getBoundingClientRect().top;
            const isHidden = serviceTop > window.innerHeight || serviceTop < 0;
            if (isHidden) {
                service.classList.add('hidden');
            } else {
                service.classList.remove('hidden');
            }
        });
    }

    window.addEventListener('scroll', () => {
        revealSections();
        hideServicesOnScroll();
    });

    revealSections();
    hideServicesOnScroll();
});
function closeDescription() {
    const services = document.querySelectorAll('.service');
    services.forEach(service => service.classList.remove('active'));
}