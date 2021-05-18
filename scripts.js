const addBoxButton = document.getElementById("addBoxButton");
const createGridButton = document.getElementById("createGrid");
const columnSelectButton = document.getElementById("column-select");
const rowSelectButton = document.getElementById("row-select");


let columnCount = 0;
let rowCount = 0;

const addBox = () => {
  console.log('add box pressed');
}

const createGrid = () => {
  console.log('create grid pressed!');
}

function selectColumns(event){
  var eID = document.getElementById("columns");

  var columnCount = eID.value;
  console.log(`columnCount is ${columnCount}`);
}

function selectRows(event){
  var eID = document.getElementById("rows");

  var rowCount = eID.value;
  console.log(`rowCount is ${rowCount}`);
}

addBoxButton.addEventListener("click", addBox);
createGridButton.addEventListener("click", createGrid);
columnSelectButton.addEventListener("click", selectColumns);
rowSelectButton.addEventListener("click", selectRows);