import menubg from './menubg.jpg';
import margherita from './margherita.jpg';
import pepperoni from './pepperoni.png';
import hawaiian from './hawaiian.webp';
import vegie from './vegie.jpg';
import vegetarian from './vegetarian.webp';
import meatlovers from './meatlovers.jpg';


const createMenuPage = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Create menu page container
    const menuPage = document.createElement('div');
    menuPage.className = 'menu-page';

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';

    // Create content container
    const menuContent = document.createElement('div');
    menuContent.className = 'menu-content';

    // Create heading
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    heading.className = 'menu-title';

    // Create subheading
    const subheading = document.createElement('p');
    subheading.textContent = 'Delicious dishes coming your way!';
    subheading.className = 'menu-sub';

    // Create menu container
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    menuContainer.id = 'menu';

    const menuList = [
        {
            name: 'Margherita Pizza',
            description: 'Tomato sauce, mozzarella, and basil',
            price: '$10.99',
            image: margherita
        },
        {
            name: 'Pepperoni Pizza',
            description: 'Tomato sauce, mozzarella, and pepperoni',
            price: '$12.99',
            image: pepperoni
        },
        {
            name: 'Hawaiian Pizza',
            description: 'Tomato sauce, mozzarella, ham, and pineapple',
            price: '$14.99',
            image: hawaiian
        },
        {
            name: 'Meat Lovers Pizza',
            description: 'Tomato sauce, mozzarella, ham, pepperoni, and bacon',
            price: '$16.99',
            image: meatlovers
        },
        {
            name: 'Vegetarian Pizza',
            description: 'Tomato sauce, mozzarella, and vegetables',
            price: '$11.99',
            image: vegie
        },
        {
            name: 'Veggie Pizza',
            description: 'Tomato sauce, mozzarella, and mushrooms',
            price: '$13.99',
            image: vegetarian
        }
    ];

    menuList.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
    
        const img = document.createElement('img');
        img.src = item.image; // Access the image property of the current item
        img.alt = item.name;
    
        const name = document.createElement('h2');
        name.textContent = item.name;
    
        const description = document.createElement('p');
        description.textContent = item.description;
    
        const price = document.createElement('p');
        price.textContent = item.price;
        price.className = 'price';
    
        menuItem.appendChild(img);
        menuItem.appendChild(name);
        menuItem.appendChild(description);
        menuItem.appendChild(price);
    
        menuContainer.appendChild(menuItem);
    });

   
    menuContent.appendChild(heading);
    menuContent.appendChild(subheading);
    menuContent.appendChild(menuContainer);

    menuPage.appendChild(overlay);
    menuPage.appendChild(menuContent);

    content.appendChild(menuPage);

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

        .menu-page {
            min-height: 100vh;
            background: url(${menubg}) no-repeat center center fixed;
            background-size: cover;
            position: relative;
        }

        .menu-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
        }

        .menu-content {
            position: relative;
            z-index: 1;
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .menu-title {
            font-size: 3rem;
            color: #d4af37;
            text-align: center;
            margin-bottom: 10px;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
        }

        .menu-sub {
            font-size: 1.5rem;
            color: #ffffff;
            text-align: center;
            margin-bottom: 40px;
        }

        .menu-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            justify-content: center;
        }

        .menu-item {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .menu-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .menu-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .menu-item h2 {
            margin: 0 0 10px;
            color: #333;
            font-family: 'Montserrat', sans-serif;
        }

        .menu-item p {
            margin: 5px 0;
            color: #666;
        }

        .menu-item .price {
            font-weight: bold;
            color: #d4af37;
            font-size: 1.2rem;
            margin-top: 10px;
        }

        @media (max-width: 768px) {
            .menu-title {
                font-size: 2.5rem;
            }

            .menu-sub {
                font-size: 1.2rem;
            }

            .menu-container {
                grid-template-columns: 1fr;
            }
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
};

export default createMenuPage;
