const reviews = [
    {
        id: 1,
        name: 'Susan Smit',
        job: 'Web designer',
        img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus consequuntur officia beatae nesciunt praesentium id ut. Cupiditate, officiis sequi!'
    },
    {
        id: 2,
        name: 'Ana Johnson',
        job: 'Web developer',
        img: 'https://i.pinimg.com/originals/86/08/70/860870066df05a7a29bcb5bb9ea2e9a7.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus consequuntur officia beatae nesciunt praesentium id ut. Cupiditate, officiis sequi!2'
    },
    {
        id: 3,
        name: 'Peter Johns',
        job: 'Web developer',
        img: 'https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus consequuntur officia beatae nesciunt praesentium id ut. Cupiditate, officiis sequi!3'
    },
    {
        id: 4,
        name: 'Bil Anderson',
        job: 'System administator',
        img: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus consequuntur officia beatae nesciunt praesentium id ut. Cupiditate, officiis sequi!4'
    }
];

// select items
const imgH = document.getElementById('person-img');
const nameH = document.getElementById('name');
const jobH = document.getElementById('job');
const infoH = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
})

function showPerson(objectItem) {
    const item = reviews[objectItem];

    imgH.src = item.img;
    nameH.textContent = item.name;
    jobH.textContent = item.job;
    infoH.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// random button
randomBtn.addEventListener('click', function() {
    randomItem = getRandomItem(reviews);
    showPerson(randomItem);
})

function getRandomItem() {
    return Math.floor(Math.random() * reviews.length);
}