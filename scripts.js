const addBoxButton = document.getElementById("addBoxButton");
const createGridButton = document.getElementById("createGrid");
const columnSelectButton = document.getElementById("column-select");

let columnCount = 0;

const addBox = () => {
  console.log('add box pressed');
}

const createGrid = () => {
  console.log('create grid pressed!');
}

function selectColumns(event){
  var eID = document.getElementById("columns");

  var columnCount = eID.value;
  console.log(columnCount);
}

addBoxButton.addEventListener("click", addBox);
createGridButton.addEventListener("click", createGrid);
columnSelectButton.addEventListener("click", selectColumns)