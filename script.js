document.getElementById('host-btn').addEventListener('click', function() {
    startGame('host');
});

document.getElementById('player-btn').addEventListener('click', function() {
    startGame('player');
});

function startGame(role) {
    document.getElementById('choose-role').style.display = 'none';
    document.getElementById('card-display').style.display = 'block';

    let categories = ["Багаж", "Биология", "Здоровье", "Особые условия", "Профессия", "Факты", "Хобби"];
    let extraCategories = ["Бункер", "Катастрофа", "Угроза"];

    let allCards = [];

    // Adding cards from the main categories
    categories.forEach(category => {
        let cardPath = getRandomCard(category);
        if (cardPath) {
            allCards.push(cardPath);
        }
    });

    // If role is host, add extra categories
    if (role === 'host') {
        extraCategories.forEach(category => {
            let cardPath = getRandomCard(category);
            if (cardPath) {
                allCards.push(cardPath);
            }
        });
    }

    displayCards(allCards);
}

function getRandomCard(category) {
    // Assuming the images are stored in `/images/{category}/` directory
    let cardImages = {
        "Багаж": ["Багаж1.jpg", "Багаж2.jpg", "Багаж3.jpg", "Багаж4.jpg", "Багаж5.jpg", "Багаж6.jpg", "Багаж7.jpg", "Багаж8.jpg", "Багаж9.jpg", "Багаж10.jpg", "Багаж11.jpg", "Багаж12.jpg", "Багаж13.jpg", "Багаж14.jpg", "Багаж15.jpg", "Багаж16.jpg", "Багаж17.jpg", "Багаж18.jpg", "Багаж19.jpg", "Багаж20.jpg", "Багаж21.jpg", "Багаж22.jpg", "Багаж23.jpg", "Багаж24.jpg", "Багаж25.jpg", "Багаж26.jpg", "Багаж27.jpg", "Багаж28.jpg", "Багаж29.jpg", "Багаж30.jpg"],
        "Биология": ["Биология1.jpg", "Биология2.jpg", "Биология3.jpg", "Биология4.jpg", "Биология5.jpg", "Биология6.jpg", "Биология7.jpg", "Биология8.jpg", "Биология9.jpg", "Биология10.jpg", "Биология11.jpg", "Биология12.jpg", "Биология13.jpg", "Биология14.jpg", "Биология15.jpg", "Биология16.jpg", "Биология17.jpg", "Биология18.jpg", "Биология19.jpg", "Биология20.jpg", "Биология21.jpg", "Биология22.jpg", "Биология23.jpg", "Биология24.jpg", "Биология25.jpg", "Биология26.jpg", "Биология27.jpg", "Биология28.jpg", "Биология29.jpg", "Биология30.jpg"],
        "Здоровье": ["Здоровье1.jpg", "Здоровье2.jpg", "Здоровье3.jpg", "Здоровье4.jpg", "Здоровье5.jpg", "Здоровье6.jpg", "Здоровье7.jpg", "Здоровье8.jpg", "Здоровье9.jpg", "Здоровье10.jpg", "Здоровье11.jpg", "Здоровье12.jpg", "Здоровье13.jpg", "Здоровье14.jpg", "Здоровье15.jpg", "Здоровье16.jpg", "Здоровье17.jpg", "Здоровье18.jpg", "Здоровье19.jpg", "Здоровье20.jpg", "Здоровье21.jpg", "Здоровье22.jpg", "Здоровье23.jpg", "Здоровье24.jpg", "Здоровье25.jpg", "Здоровье26.jpg", "Здоровье27.jpg", "Здоровье28.jpg", "Здоровье29.jpg", "Здоровье30.jpg"],
        "Особые условия": ["Особые1.jpg", "Особые2.jpg", "Особые3.jpg", "Особые4.jpg", "Особые5.jpg", "Особые6.jpg", "Особые7.jpg", "Особые8.jpg", "Особые9.jpg", "Особые10.jpg", "Особые11.jpg", "Особые12.jpg", "Особые13.jpg", "Особые14.jpg", "Особые15.jpg", "Особые16.jpg", "Особые17.jpg", "Особые18.jpg", "Особые19.jpg", "Особые20.jpg", "Особые21.jpg", "Особые22.jpg", "Особые23.jpg", "Особые24.jpg", "Особые25.jpg", "Особые26.jpg", "Особые27.jpg", "Особые28.jpg", "Особые29.jpg", "Особые30.jpg"],
        "Профессия": ["Профессия1.jpg", "Профессия2.jpg", "Профессия3.jpg", "Профессия4.jpg", "Профессия5.jpg", "Профессия6.jpg", "Профессия7.jpg", "Профессия8.jpg", "Профессия9.jpg", "Профессия10.jpg", "Профессия11.jpg", "Профессия12.jpg", "Профессия13.jpg", "Профессия14.jpg", "Профессия15.jpg", "Профессия16.jpg", "Профессия17.jpg", "Профессия18.jpg", "Профессия19.jpg", "Профессия20.jpg", "Профессия21.jpg", "Профессия22.jpg", "Профессия23.jpg", "Профессия24.jpg", "Профессия25.jpg", "Профессия26.jpg", "Профессия27.jpg", "Профессия28.jpg", "Профессия29.jpg", "Профессия30.jpg"],
        "Факты": ["Факты1.jpg", "Факты2.jpg", "Факты3.jpg", "Факты4.jpg", "Факты5.jpg", "Факты6.jpg", "Факты7.jpg", "Факты8.jpg", "Факты9.jpg", "Факты10.jpg", "Факты11.jpg", "Факты12.jpg", "Факты13.jpg", "Факты14.jpg", "Факты15.jpg", "Факты16.jpg", "Факты17.jpg", "Факты18.jpg", "Факты19.jpg", "Факты20.jpg", "Факты21.jpg", "Факты22.jpg", "Факты23.jpg", "Факты24.jpg", "Факты25.jpg", "Факты26.jpg", "Факты27.jpg", "Факты28.jpg", "Факты29.jpg", "Факты30.jpg", "Факты31.jpg", "Факты32.jpg", "Факты33.jpg", "Факты34.jpg", "Факты35.jpg", "Факты36.jpg", "Факты37.jpg", "Факты38.jpg", "Факты39.jpg", "Факты40.jpg", "Факты41.jpg", "Факты42.jpg", "Факты43.jpg", "Факты44.jpg", "Факты45.jpg", "Факты46.jpg", "Факты47.jpg", "Факты48.jpg", "Факты49.jpg", "Факты50.jpg"],
        "Хобби": ["Хобби1.jpg", "Хобби2.jpg", "Хобби3.jpg", "Хобби4.jpg", "Хобби5.jpg", "Хобби6.jpg", "Хобби7.jpg", "Хобби8.jpg", "Хобби9.jpg", "Хобби10.jpg", "Хобби11.jpg", "Хобби12.jpg", "Хобби13.jpg", "Хобби14.jpg", "Хобби15.jpg", "Хобби16.jpg", "Хобби17.jpg", "Хобби18.jpg", "Хобби19.jpg", "Хобби20.jpg", "Хобби21.jpg", "Хобби22.jpg", "Хобби23.jpg", "Хобби24.jpg", "Хобби25.jpg", "Хобби26.jpg", "Хобби27.jpg", "Хобби28.jpg", "Хобби29.jpg", "Хобби30.jpg"],
        "Бункер": ["Бункер1.jpg", "Бункер2.jpg", "Бункер3.jpg", "Бункер4.jpg", "Бункер5.jpg", "Бункер6.jpg", "Бункер7.jpg", "Бункер8.jpg", "Бункер9.jpg", "Бункер10.jpg", "Бункер11.jpg", "Бункер12.jpg", "Бункер13.jpg", "Бункер14.jpg", "Бункер15.jpg", "Бункер16.jpg", "Бункер17.jpg", "Бункер18.jpg", "Бункер19.jpg", "Бункер20.jpg", "Бункер21.jpg", "Бункер22.jpg", "Бункер23.jpg", "Бункер24.jpg", "Бункер25.jpg", "Бункер26.jpg", "Бункер27.jpg", "Бункер28.jpg", "Бункер29.jpg", "Бункер30.jpg"],
        "Катастрофа": ["Катастрофа1.jpg", "Катастрофа2.jpg", "Катастрофа3.jpg", "Катастрофа4.jpg", "Катастрофа5.jpg", "Катастрофа6.jpg", "Катастрофа7.jpg", "Катастрофа8.jpg", "Катастрофа9.jpg", "Катастрофа10.jpg", "Катастрофа11.jpg", "Катастрофа12.jpg", "Катастрофа13.jpg", "Катастрофа14.jpg", "Катастрофа15.jpg", "Катастрофа16.jpg", "Катастрофа17.jpg", "Катастрофа18.jpg", "Катастрофа19.jpg", "Катастрофа20.jpg"],
        "Угроза": ["Угроза1.jpg", "Угроза2.jpg", "Угроза3.jpg", "Угроза4.jpg", "Угроза5.jpg", "Угроза6.jpg", "Угроза7.jpg", "Угроза8.jpg", "Угроза9.jpg", "Угроза10.jpg", "Угроза11.jpg"]
    };

    // Randomly pick an image from the available images in the category
    if (cardImages[category]) {
        let randomIndex = Math.floor(Math.random() * cardImages[category].length);
        let cardName = cardImages[category][randomIndex];
        // Encode the category to handle spaces and special characters
        let encodedCategory = encodeURIComponent(category);
        let imgPath = `images/${encodedCategory}/${cardName}`;
        console.log(`Generated image path for ${category}: ${imgPath}`);
        return imgPath;
    }
    return null; // Return null if the category does not exist or is empty
}


function displayCards(cards) {
    let cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Clear existing cards before displaying new ones

    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = `url(${card})`;
        cardElement.style.opacity = '0';

        cardsContainer.appendChild(cardElement);

        // Adding fade-in effect for each card
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transition = 'opacity 0.5s ease-in-out';
        }, 100);

        // Add click event listener to zoom in card
        cardElement.addEventListener('click', function () {
            if (cardElement.classList.contains('zoomed')) {
                // If the card is already zoomed, close it
                closeZoom();
            } else {
                // Zoom in the card
                zoomCard(cardElement);
            }
        });
    });
}

// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function () {
    // Toggle dark-theme class on body and relevant elements
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    document.getElementById('game-container').classList.toggle('dark-theme');

    // Apply dark theme to all buttons except the theme-toggle button itself
    document.querySelectorAll('button').forEach(button => {
        if (button !== themeToggleButton) {
            button.classList.toggle('dark-theme');
        }
    });

    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-theme'));
    document.querySelector('footer').classList.toggle('dark-theme');

    // Update button text based on the current theme
    if (isDarkTheme) {
        themeToggleButton.textContent = 'Go Back to Light Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Theme';
    }

    // Log the current theme for debugging purposes
    console.log('Theme changed:', isDarkTheme ? 'Dark Mode' : 'Light Mode');
});

// Function to zoom in a card
function zoomCard(cardElement) {
    // Set all other cards to blurred
    document.querySelectorAll('.card').forEach(card => {
        if (card !== cardElement) {
            card.classList.add('blurred');
        }
    });

    // Set the selected card to zoomed
    cardElement.classList.add('zoomed');
}

// Function to close zoomed card
function closeZoom() {
    // Remove blurred and zoomed classes from all cards
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('blurred');
        card.classList.remove('zoomed');
    });
}

// Event listener to close zoomed card when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('card') && document.querySelector('.zoomed')) {
        closeZoom();
    }
});
