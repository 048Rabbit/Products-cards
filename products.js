const products = [
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: true,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: true,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
  {
    picture:
      "https://img.freepik.com/premium-photo/close-up-kitten-wearing-military-uniform-hat-generative-ai_900396-1449.jpg",
    name: `Форма для котика`,
    price: 0,
    favorite: false,
  },
];

function App() {
  products.forEach((product) => {
    let card = document.createElement("div");
    card.className = "product";
    let cardName = document.createElement("div");
    cardName.className = "product-name";
    cardName.innerHTML = product.name;
    let img = document.createElement("img");
    img.className = "product-img";
    img.src = product.picture;
    let cardFooter = document.createElement("div");
    cardFooter.className = "cardFooter";
    let cardPrice = document.createElement("div");
    cardPrice.className = "product-price";
    cardPrice.innerHTML = product.price;
    let cardIcon = document.createElement("i");
    if (product.favorite == true) {
      cardIcon.innerHTML = "star";
      cardIcon.className = "material-icons fav";
    } else {
      cardIcon.innerHTML = "star";
      cardIcon.className = "material-icons fav-non";
    }
    let kiraElement = document.getElementById("kira");
    kiraElement.append(card);
    card.append(cardName, img, cardFooter);
    cardFooter.append(cardPrice, cardIcon);
  });
}
