const addBoxButton = document.getElementById("addBoxButton");
const createGridButton = document.getElementById("createGrid");
const columnSelectButton = document.getElementById("column-select");
const rowSelectButton = document.getElementById("row-select");
const boxRemoveButton = document.getElementsByClassName("remove");


let columnCount = 1;
let rowCount = 1;
let containerLength = 0;

const selectColumns = () => {
  var eID = document.getElementById("columns");

  columnCount = eID.value;
  console.log(`columnCount is ${columnCount}`);
}

const selectRows = () => {
  var eID = document.getElementById("rows");

  rowCount = eID.value;
  console.log(`rowCount is ${rowCount}`);
}

const addBox = () => {
  console.log('add box pressed');
  containerLength++
  console.log(`containerLength is ${containerLength}`)

  let cell = document.createElement("div");
  cell.innerText = (containerLength);
  container.appendChild(cell).className = "grid-item";


  let btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.type = "remove";
  btn.name = "remove";
  btn.className+="remove";
  cell.id=containerLength;
  cell.appendChild(btn);
  btn.addEventListener("click", removeBox);
}

const removeBox = (event) => {
  containerLength--;
  console.log('remove box button pressed');
  event.target.parentElement.remove();
  event.preventDefault();

  let containerChildren = container.children

  for(let z = 0; z < containerChildren.length; z++){
    console.log(z)
    containerChildren[z].innerHTML=z+1
    let btn = document.createElement("button");
    btn.innerHTML = "x";
    btn.type = "remove";
    btn.name = "remove";
    btn.className+="remove";
    containerChildren[z].id=z+1;
    containerChildren[z].appendChild(btn);
    btn.addEventListener("click", removeBox)
  }
}

const createGrid = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.style.setProperty('--grid-rows', rowCount);
  container.style.setProperty('--grid-cols', columnCount);
  containerLength = rowCount * columnCount;
  for (c = 0; c < (rowCount * columnCount); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";


    let btn = document.createElement("button");
    btn.innerHTML = "x";
    btn.type = "remove";
    btn.name = "remove";
    btn.className+="remove";
    cell.id=c+1
    cell.appendChild(btn);
    btn.addEventListener("click", removeBox)

  };
};

addBoxButton.addEventListener("click", addBox);
createGridButton.addEventListener("click", createGrid);
columnSelectButton.addEventListener("click", selectColumns);
rowSelectButton.addEventListener("click", selectRows);