const cardData = {
  title: "King of North",
  tribe: "قبيلة الشمال",
  power: 8,
  dice: [6, 6, 6],
  hearts: 3
};

function renderCard(data) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.tribe}</p>
    <p>القوة: ${data.power}</p>
    <p>النرد: ${data.dice.join(", ")}</p>
    <p>الأرواح: ${"❤️".repeat(data.hearts)}</p>
  `;
}

renderCard(cardData);
  
