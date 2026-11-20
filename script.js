const destinations = [
  {
    number: "01",
    country: "FRANCE",
    city: "Paris",
    desc: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
    alt: "Paris City"
  },
  {
    number: "02",
    country: "JAPAN",
    city: "Tokyo",
    desc: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Tokyo Tower",
    language: "Japanese",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=85",
    alt: "Tokyo City"
  },
  {
    number: "03",
    country: "ITALY",
    city: "Rome",
    desc: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
    continent: "Europe",
    food: "Pizza, Pasta",
    place: "Colosseum",
    language: "Italian",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=85",
    alt: "Rome City"
  },
  {
    number: "04",
    country: "EGYPT",
    city: "Cairo",
    desc: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
    continent: "Africa",
    food: "Koshari, Foul",
    place: "Pyramids",
    language: "Arabic",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=85",
    alt: "Cairo City"
  }
];

let currentIndex = 0;

const card = document.getElementById("destination-card");
const slideCounter = document.getElementById("slide-counter");
const countryLabel = document.getElementById("country-label");
const cityTitle = document.getElementById("city-title");
const cityDesc = document.getElementById("city-desc");
const factContinent = document.getElementById("fact-continent");
const factFood = document.getElementById("fact-food");
const factPlace = document.getElementById("fact-place");
const factLanguage = document.getElementById("fact-language");
const cityImage = document.getElementById("city-image");
const badgeNumber = document.getElementById("badge-number");
const dotsContainer = document.getElementById("dots-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const exploreMoreBtn = document.getElementById("explore-more-btn");

function renderDots() {
  dotsContainer.innerHTML = "";
  destinations.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = index === currentIndex ? "dot active" : "dot";
    dot.addEventListener("click", () => {
      if (index !== currentIndex) {
        currentIndex = index;
        updateDestination();
      }
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDestination() {
  card.classList.add("fade-out");

  setTimeout(() => {
    const item = destinations[currentIndex];
    const total = String(destinations.length).padStart(2, "0");

    slideCounter.textContent = `${item.number} / ${total}`;
    countryLabel.textContent = item.country;
    cityTitle.textContent = item.city;
    cityDesc.textContent = item.desc;
    factContinent.textContent = item.continent;
    factFood.textContent = item.food;
    factPlace.textContent = item.place;
    factLanguage.textContent = item.language;
    cityImage.src = item.image;
    cityImage.alt = item.alt;
    badgeNumber.textContent = item.number;

    renderDots();
    card.classList.remove("fade-out");
  }, 160);
}

exploreMoreBtn.addEventListener("click", () => {
  const item = destinations[currentIndex];
  alert(`Discover ${item.city} in ${item.country}!\nFamous Place: ${item.place}`);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % destinations.length;
  updateDestination();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
  updateDestination();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % destinations.length;
    updateDestination();
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
    updateDestination();
  }
});

renderDots();