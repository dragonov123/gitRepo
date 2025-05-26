// Get table body
const tableBody = document.querySelector("table tbody");
  
// Buttons
const addRowButton = document.querySelector(".add-row");
const deleteRowButton = document.querySelector(".delete-row");
let back = document.querySelector(".add-row3")
var rows1 = tableBody.getElementsByTagName("tr");

back.addEventListener("click",(e)=>{
  window.open('select.html');
  e.preventDefault();
})


function getselectedvalue() {
  var selectElement = document.getElementById("menu");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  if (selectedValue == "physics") {
    window.open('physics.html')
  }
  else if(selectedValue == "chemistry"){
    window.open('chemistry.html')
  }
  else if(selectedValue == "maths"){
    window.open('maths.html')
  }else if(selectedValue == "overall"){
    window.open('test tracker.html')
  }
  else{
    var displayelement= document.getElementById("displayselect");
    displayelement.innerHTML = "please choose the options";
  }
  
  
}


// Load table data from local storage
function loadTableData() {
  const savedData = JSON.parse(localStorage.getItem("testScoreTrackerp")) || [];
  tableBody.innerHTML = ""; // Clear the table
  savedData.forEach((row, index) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${index + 1}</td>
      <td contenteditable="true">${row.name}</td>
      <td contenteditable="true">${row.marks}</td>
      <td contenteditable="true">${row.remarks}</td>
      <td contenteditable="true">${row.positiveMarks}</td>
      <td contenteditable="true">${row.negativeMarks}</td>
      <td contenteditable="true">${row.potentialScore}</td>
      <td contenteditable="true">${row.attemptDate}</td>
      <td><input type="checkbox"></td>
    `;
    tableBody.appendChild(newRow);
  });
}

// Save table data to local storage
function saveTableData() {
  const rows = Array.from(tableBody.querySelectorAll("tr"));
  const data = rows.map(row => ({
    name: row.cells[1].innerText.trim(),
    marks: row.cells[2].innerText.trim(),
    remarks: row.cells[3].innerText.trim(),
    positiveMarks: row.cells[4].innerText.trim(),
    negativeMarks: row.cells[5].innerText.trim(),
    potentialScore: row.cells[6].innerText.trim(),
    attemptDate: row.cells[7].innerText.trim(),
  }));
  localStorage.setItem("testScoreTrackerp", JSON.stringify(data));
}

// Add a new row
addRowButton.addEventListener("click", () => {
  const rowCount = tableBody.rows.length + 1;
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rowCount}</td>
    <td contenteditable="true">New Test</td>
    <td contenteditable="true">0</td>
    <td contenteditable="true">0</td>
    <td contenteditable="true">0</td>
    <td contenteditable="true">0</td>
    <td contenteditable="true">0</td>
    <td contenteditable="true">Date</td>
    <td><input type="checkbox"></td>
  `;
  tableBody.appendChild(newRow);
  saveTableData(); // Save changes
});

// Delete selected rows
deleteRowButton.addEventListener("click", () => {
  const selectedRows = tableBody.querySelectorAll("input[type='checkbox']:checked");
  selectedRows.forEach(row => {
    row.closest("tr").remove();
  });
  updateRowNumbers();
  saveTableData(); // Save changes
});

// Update row numbers after deletion
function updateRowNumbers() {
  tableBody.querySelectorAll("tr").forEach((row, index) => {
    row.cells[0].innerText = index + 1;
  });
}

// Save changes when content is edited
tableBody.addEventListener("input", saveTableData);

// Initial load
loadTableData();
var percentile =0;

var marks = 0;
var rank = 0;
let k=0;
let l=0;
let m=0;

for(var i = 0 ; i< rows1.length;i++){
  var cells = rows1[i].getElementsByTagName("td");
  for (let j = 0; j < cells.length; j++) {
    
    if(j==4){
      if(parseFloat(cells[j].innerText)==0){
        k++;
      }


      percentile = percentile + parseFloat(cells[j].innerText);
      let avgpercentile = percentile/(i+1-k);
      let per = document.querySelector(".per");
      per.innerText=avgpercentile;
      
      
      
      
    }
    if(j==3){
      if(parseFloat(cells[j].innerText)==0){
        l++;
      }
      marks = marks + parseFloat(cells[j].innerText);
      let avgmarks = marks/(i+1-l);
      let mar = document.querySelector(".mar");
      mar.innerText=avgmarks;
    }
    if(j==5){
      if(parseFloat(cells[j].innerText)==0){
        m++;
      }
      rank = rank + parseFloat(cells[j].innerText);
      let avgrank = rank/(i+1-m);
      let ran = document.querySelector(".ran");
      ran.innerText=avgrank;
    }
  }
} 