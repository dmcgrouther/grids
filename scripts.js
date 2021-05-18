const addBoxButton = document.getElementById("addBoxButton");
const createGridButton = document.getElementById("createGrid");
const columnSelectButton = document.getElementById("column-select");
const rowSelectButton = document.getElementById("row-select");
const boxRemoveButton = document.getElementsByClassName("remove");


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

const removeBox = () => {
  console.log('remove box button pressed');
  event.target.parentElement.remove();
}

// const createGrid = () => {
//   console.log('create grid pressed!');
//   for(let i = 1; i <= rowCount; i++){
//     for(let j = 1; j <= columnCount; j++){
//       console.log(`row is ${i} column is ${j}`)
//     }
//   }
// }

function createGrid() {
  container.style.setProperty('--grid-rows', rowCount);
  container.style.setProperty('--grid-cols', columnCount);
  for (c = 0; c < (rowCount * columnCount); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";

    // let buttonTemplate = document.createElement("<button></button>");
    // var x = document.createTextNode("x");
    // buttonTemplate.appendChild(x);
    // cell.appendChild(buttonTemplate);


    let btn = document.createElement("button");
    btn.innerHTML = "x";
    btn.type = "remove";
    // btn.name = "formBtn";
    btn.name = "remove";
    btn.className+="remove";
    cell.id=c+1
    // document.body.appendChild(btn);
    cell.appendChild(btn);
    btn.addEventListener("click", removeBox)

  };
};

addBoxButton.addEventListener("click", addBox);
createGridButton.addEventListener("click", createGrid);
columnSelectButton.addEventListener("click", selectColumns);
rowSelectButton.addEventListener("click", selectRows);
boxRemoveButton.addEventListener("click", removeBox)