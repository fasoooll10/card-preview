const characters = [
  {
    name: "ملك الشمال",
    tribe: "قبيلة الشمال",
    health: 3,
    dice: "2 نرد",
    image: "https://via.placeholder.com/200x200?text=ملك+الشمال"
  },
  {
    name: "وزير الغرب",
    tribe: "قبيلة الغرب",
    health: 1,
    dice: "2 نرد",
    image: "https://via.placeholder.com/200x200?text=وزير+الغرب"
  },
  {
    name: "جندي الشرق",
    tribe: "قبيلة الشرق",
    health: 1,
    dice: "1 نرد",
    image: "https://via.placeholder.com/200x200?text=جندي+الشرق"
  },
  {
    name: "جنرال الجنوب",
    tribe: "قبيلة الجنوب",
    health: 3,
    dice: "1 نرد",
    image: "https://via.placeholder.com/200x200?text=جنرال+الجنوب"
  }
];

// عرض بطاقة عشوائية في الجولة الأولى
window.onload = function () {
  const card = characters[Math.floor(Math.random() * characters.length)];
  document.getElementById('cardTitle').textContent = card.name;
  document.getElementById('tribeName').textContent = card.tribe;
  document.getElementById('health').textContent = card.health;
  document.getElementById('dice').textContent = card.dice;
  document.getElementById('cardImage').style.backgroundImage = url(${card.image});
  document.getElementById('cardImage').style.backgroundSize = 'cover';
};

function confirmCard() {
  alert("تم تأكيد البطاقة! الجولة التالية تبدأ.");
