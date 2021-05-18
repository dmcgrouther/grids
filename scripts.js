const addBoxButton = document.getElementById("addBoxButton");
const createGridButton = document.getElementById("createGrid");
const columnSelectButton = document.getElementById("column-select");
const rowSelectButton = document.getElementById("row-select");


let columnCount = 1;
let rowCount = 1;

function selectColumns(){
  var eID = document.getElementById("columns");

  columnCount = eID.value;
  console.log(`columnCount is ${columnCount}`);
}

function selectRows(){
  var eID = document.getElementById("rows");

  rowCount = eID.value;
  console.log(`rowCount is ${rowCount}`);
}

const addBox = () => {
  console.log('add box pressed');
}

const createGrid = () => {
  console.log('create grid pressed!');
  for(let i = 1; i <= rowCount; i++){
    for(let j = 1; j <= columnCount; j++){
      console.log(`row is ${i} column is ${j}`)
    }
  }
}

addBoxButton.addEventListener("click", addBox);
createGridButton.addEventListener("click", createGrid);
columnSelectButton.addEventListener("click", selectColumns);
rowSelectButton.addEventListener("click", selectRows);