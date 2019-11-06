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
    description: "A sprectral 'wailing woman' in Spanish she haunts river and ditch banks searching for the children she drowned in madness.",
    malicious: true,
    foods: ['children'],
    location: "found along rivers and ditches thoughout the Spanish speaking regions of the Americas.",
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
    location: "a",
    photo: "./assets/e4e8ebdc.jpg",
  }, {
    name: "Bodach",
    description: "f",
    // foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }, {
    name: "Jackalope",
    malicious: false,
    description: "f",
    foods: ['cats', 'humans', 'goats'],
    location: "a",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }, {
    name: "Lamia",
    malicious: true,
    description: "female child eating serpent tailed monsters",
    foods: ['children'],
    location: "ancient Greece",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }, {
    name: "Lilitu",
    malicious: true,
    description: "also known as Lillith in the Bible, was a mesopotamian monster that fed on babies.",
    foods: ['children'],
    location: "ancient Mesopotamia",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }, {
    name: "Scott",
    malicious: true,
    description: "drinks vodka sodas",
    foods: ['children, vodka'],
    location: "nearest the grand,",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  },
  {
    name: "Jessi",
    malicious: false,
    description: "haunts the library and eats vegan pizza",
    foods: ['classic cocktails', 'vegan pizza'],
    location: "near north loop,",
    photo: "./assets/0d415c72a02ca63254db865c1d0c1f96.gif",
  }
];

function foods(foods) {
  return `
 <h4>Favorite Foods</h4>
 <ul>
${foods.map(function (food) {
    return `<li>${food}</li>`
  }).join('')}
  </ul>
  `
}

function isMalicious() {
  return `
  <h3>malicious to humans</h3>
  `
}
function isBenign() {
  return `
  <h3>benign to humans</h3>
  `
}

function monsterTemplate(monsterData) {
  return `
  <div class="monsters">
  <h2 class="monster-name"> ${monsterData.name}</h2>
    <a href="./${monsterData.name}">
    <img src="${monsterData.photo}" alt="${monsterData.name}'s photo" width="400px" class="monster-image"> 
    </a>
    ${monsterData.malicious === true ? isMalicious() : isBenign()}
    <p class="monster-description">${monsterData.description}</p>

    ${monsterData.foods ? foods(monsterData.foods) : ""}  
      <h4 class="monster-location">
    Location </h4><span>${monsterData.location}</span>
  </div>
  `
}

document.getElementById("app").innerHTML = `
  <div class="monsters-wrapper">
    ${monsterData.map(monsterTemplate).join('')}
  </div>
`;


