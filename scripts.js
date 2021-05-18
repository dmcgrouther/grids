const addBoxButton = document.getElementById("addBoxButton");
const createGridButton = document.getElementById("createGrid");

const addBox = () => {
  console.log('add box pressed');
}

const createGrid = () => {
  console.log('create grid pressed!');
}

addBoxButton.addEventListener("click", addBox);
createGridButton.addEventListener("click", createGrid);