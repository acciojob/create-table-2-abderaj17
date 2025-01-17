function createTable() {
    //Write your code here
const rows = parseInt(prompt("Input number of rows"), 10);
	if(isNaN(rows) || rows <= 0){
		alert("Enter a valid positive number");
		return;
	} 

	const columns = parseInt(prompt("Input number of coloumns"), 10);
	if(isNaN(columns) || columns <= 0){
		alert("Enter a valid positive number");
		return;
	}
	
	   const table = document.getElementById("myTable");

table.innerHTML = "";

for(let i = 0; i < rows; i++){
	const row = table.insertRow();
for(let j = 0; j < columns; j++){
	const cell = row.insertCell(); 
	cell.textContent = `Row-${i} Column-${j}`;
}	
}
}
