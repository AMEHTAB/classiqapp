document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('active');
            hamburgerBtn.classList.toggle('active', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Subscribe Form Handling
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to ClassIQ!');
            subscribeForm.reset();
        });
    }
});