const menu = [
    {
        id: 1,
        title: 'Begova čorba',
        category: 'gotova i kuhana jela',
        price: 4.00,
        img: './images/begova-corba.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aut id placeatpraesentium consequuntur reprehenderit quia officia molestiae debitis eligendi!'
    },
    {
        id: 2,
        title: 'Hadžijski ćevap',
        category: 'gotova i kuhana jela',
        price: 5.00,
        img: './images/hadzijski-cevap.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aut id placeatpraesentium consequuntur reprehenderit quia officia molestiae debitis eligendi!'
    },
    {
        id: 3,
        title: 'Ćevapi',
        category: 'jela sa roštilja',
        price: 7.00,
        img: './images/cevapi.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aut id placeatpraesentium consequuntur reprehenderit quia officia molestiae debitis eligendi!'
    },
    {
        id: 4,
        title: 'Begova čorbaRiba s krompir salatom',
        category: 'jela sa roštilja',
        price: 5.00,
        img: './images/riba-sks.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aut id placeatpraesentium consequuntur reprehenderit quia officia molestiae debitis eligendi!'
    },
    {
        id: 5,
        title: 'Miješana salata',
        category: 'salate',
        price: 2.00,
        img: './images/mijesana-salata.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aut id placeatpraesentium consequuntur reprehenderit quia officia molestiae debitis eligendi!'
    },
    {
        id: 6,
        title: 'Kupus salata',
        category: 'salate',
        price: 2.00,
        img: './images/kupus-salata.jpg',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aut id placeatpraesentium consequuntur reprehenderit quia officia molestiae debitis eligendi!'
    }
]
// select HTML
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(menuItems) {
    let display = menuItems.map(function(item) {
        return `<article class="menu-item">
                <img src=${item.img} class="photo" alt="${item.title}">
                <div class="info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`
    });
    display = display.join("");
    sectionCenter.innerHTML = display;
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);

    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
    const btns = document.querySelectorAll('.filter-btn');

    // buttons
    btns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(item) {
                if (item.category === category) {
                    return item;
                }
            })
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}