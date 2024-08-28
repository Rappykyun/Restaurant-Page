import menubg from './menubg.jpg';

const createContactPage = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    
    const contactPage = document.createElement('div');
    contactPage.className = 'contact-page';

    
    const overlay = document.createElement('div');
    overlay.className = 'contact-overlay';

    
    const contactContent = document.createElement('div');
    contactContent.className = 'contact-content';


    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    heading.className = 'contact-title';

    const contactForm = document.createElement('form');
    contactForm.className = 'contact-form';

    const formFields = [
        { type: 'text', name: 'name', placeholder: 'Your Name' },
        { type: 'email', name: 'email', placeholder: 'Your Email' },
        { type: 'tel', name: 'phone', placeholder: 'Your Phone Number' },
    ];

    formFields.forEach(field => {
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder;
        contactForm.appendChild(input);
    });

    const messageArea = document.createElement('textarea');
    messageArea.name = 'message';
    messageArea.placeholder = 'Your Message';
    contactForm.appendChild(messageArea);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';
    contactForm.appendChild(submitButton);

 
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    const infoItems = [
        { icon: '📧', text: 'Email: 0zq5D@example.com' },
        { icon: '📞', text: 'Phone: (123) 456-7890' },
        { icon: '📍', text: '123 Pizza Street, Flavortown, PZ 12345' },
    ];

    infoItems.forEach(item => {
        const infoItem = document.createElement('p');
        infoItem.innerHTML = `<span class="info-icon">${item.icon}</span> ${item.text}`;
        contactInfo.appendChild(infoItem);
    });

 
    contactContent.appendChild(heading);
    contactContent.appendChild(contactForm);
    contactContent.appendChild(contactInfo);

    contactPage.appendChild(overlay);
    contactPage.appendChild(contactContent);

    content.appendChild(contactPage);

    // Add styles
    const styles = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

        body, html {
            font-family: 'Arial', 'Georgia', serif;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
            height: 100%;
        }

        .contact-page {
            min-height: 100vh;
            background: url(${menubg}) no-repeat center center fixed;
            background-size: cover;
            position: relative;
        }

        .contact-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
        }

        .contact-content {
            position: relative;
            z-index: 1;
            padding: 80px 20px;
            max-width: 800px;
            margin: 0 auto;
        }

        .contact-title {
            font-size: 3rem;
            color: #d4af37;
            text-align: center;
            margin-bottom: 40px;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
        }

        .contact-form {
            background: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 40px;
        }

        .contact-form input,
        .contact-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
        }

        .contact-form textarea {
            height: 150px;
        }

        .contact-form button {
            background-color: #d4af37;
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
            background-color: #b8960c;
        }

        .contact-info {
            color: white;
            text-align: center;
        }

        .contact-info p {
            margin-bottom: 10px;
        }

        .info-icon {
            font-size: 1.2rem;
            margin-right: 10px;
        }

        @media (max-width: 768px) {
            .contact-title {
                font-size: 2.5rem;
            }

            .contact-form {
                padding: 20px;
            }
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
};
export default createContactPage;