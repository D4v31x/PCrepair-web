document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li');
    const mainContent = document.querySelectorAll('main > *');
    const serviceItems = document.querySelectorAll('.service-item');

    function animateElement(element, delay) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    // Animate nav items
    navItems.forEach((item, index) => {
        animateElement(item, 100 * index);
    });

    // Animate main content
    mainContent.forEach((item, index) => {
        animateElement(item, 100 * (navItems.length + index));
    });
});

    // Set up service items animation
    serviceItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });


    // Animate nav items on page load
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index); // Animation starts from the first item
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate nav items on page load
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li');
    const mainContent = document.querySelectorAll('main > *');
    const serviceItems = document.querySelectorAll('.service-item');

    function animateElement(element, delay) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    // Animate nav items
    navItems.forEach((item, index) => {
        animateElement(item, 200 * (navItems.length - index - 1)); // Reverse order
    });

    // Animate main content
    mainContent.forEach((item, index) => {
        animateElement(item, 100 * (navItems.length + index));
    });

    // Set up service items animation
    serviceItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * (navItems.length - index - 1)); // Reverse the order
    });