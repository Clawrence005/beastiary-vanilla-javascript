const monsterData = [
  {
    name: "Ghouls",
    malicious: true,
    description: "a",
    foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }, {
    name: "Jinn",
    malicious: true,
    description: "b",
    foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/12271233430751.56aaa2bdaf27f.png",
  }, {
    name: "la Llorona",
    description: "c",
    foods: ['cats', 'humans', 'goats'],
    location: "found along rivers and ditches thoughout the Spanish speaking 'Americas'.",
    photo: "./assets/e4e8ebdc.jpg",
  }, {
    name: "Manticore",
    description: "d",
    foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/las-jpg-mal1.jpg",
  }, {
    name: "Nixies",
    description: "e",
    foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/e4e8ebdc.jpg",
  }, {
    name: "Bodach",
    description: "f",
    foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }, {
    name: "Jackalope",
    description: "f",
    foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  },
  {
    name: "Lamia",
    description: "female child eating serpent tailed monsters",
    location: "ancient Greece",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }, {
    name: "Lilitu",
    description: "also known as Lillith in the Bible, was a mesopotamian monster that fed on babies.",
    foods: ['cats', 'humans', 'goats'],
    location: "ancient Mesopotamia",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  },
];

function foods(foods) {
  return `
 <h4>Favorite Foods</h4>
${foods.map(function (food) {
    `<li>${foods}</li>`
  }).join('')}

  
  `
}

function isMalicious() {
  if (monsterData.malicious === true) {
    return `
  <h3>malicious to humans</h3>
  `
  }
  //   else {
  //     return `
  // <h3>benign to humans</h3>
  // `}
}
function isBenign() {
  return `
  <h3>malicious to humans</h3>
  `
}

function monsterTemplate(monsterData) {
  return `
  <div class="monsters">
  <h2 class="monster-name"> ${monsterData.name}</h2>
    <a href="">
    <img src="${monsterData.photo}" alt="${monsterData.name}'s photo" width="400px" class="monster-image"> 
    </a>
    <p class="monster-location">${monsterData.location}</p>
    <p class="monster-description">${monsterData.isMalicious ? isMalicious() : isBenign()}</p>
  </div>
  `
}

document.getElementById("app").innerHTML = `
  <div class="monsters-wrapper">
    ${monsterData.map(monsterTemplate).join('')}
  </div>
`;
