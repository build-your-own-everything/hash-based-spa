window.onload = function() {
    function handleRouteChange(path) {
        const root = document.getElementById('root');
        root.innerHTML = '';

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
        window.location.hash = path;
    }

    window.addEventListener('hashchange', () => {
        handleRouteChange(window.location.pathname.substring(1))
    });
    
    handleRouteChange('');

    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        handleRouteChange('about');
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        handleRouteChange('contact');
    });

    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();
};
