import homebg from './homebg.jpg';

const createHomePage = () => {
    const content = document.getElementById('content');
    content.className = 'home-container';

    const hero = document.createElement('div');
    hero.className = 'hero';

    const homeBackground = document.createElement('img');
    homeBackground.src = homebg;
    homeBackground.alt = 'Kenneth\'s Restaurant ambiance';
    homeBackground.className = 'hero-image';

    const overlay = document.createElement('div');
    overlay.className = 'hero-overlay';

    const heading = document.createElement('h1');
    heading.textContent = 'Kenneth\'s Restaurant';
    heading.className = 'hero-title';

    const tagline = document.createElement('p');
    tagline.textContent = 'Culinary excellence since 2000';
    tagline.className = 'hero-tagline';

    const description = document.createElement('p');
    description.textContent = 'We are a family-owned and operated business, dedicated to providing our customers with exceptional food and service.';
    description.className = 'description';

    const ctaButton = document.createElement('a');
    ctaButton.href = '#menu';
    ctaButton.textContent = 'View Our Menu';
    ctaButton.className = 'cta-button';

    hero.appendChild(homeBackground);
    hero.appendChild(overlay);
    hero.appendChild(heading);
    hero.appendChild(tagline);
    hero.appendChild(description);
    hero.appendChild(ctaButton);

    content.appendChild(hero);
}

export default createHomePage;
