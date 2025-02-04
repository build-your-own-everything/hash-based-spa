window.onload = function() {
    function handleRouteChange(path) {
        const root = document.getElementById('root');
        root.innerHTML = '';

        path = path.replace('#', '')
        switch (path) {
            case 'about':
                root.innerHTML = '<h1>About Us</h1><p>This is the about page.</p>';
                break;
            case 'contact':
                root.innerHTML = '<h1>Contact Us</h1><p>This is the contact page.</p>';
                break;
            default:
                root.innerHTML = '<h1>Home</h1><p>This is the home page.</p>';
        }
        path
    }

    window.addEventListener('hashchange', () => {
        handleRouteChange(window.location.hash.slice(1))
    });

    handleRouteChange('');

    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const homeLink = document.getElementById('home-link');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.hash = '';
    });

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.hash = 'about';
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.hash = 'contact';
    });

    handleRouteChange(window.location.hash.slice(1));
};
