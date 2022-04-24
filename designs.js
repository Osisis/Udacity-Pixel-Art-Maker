//Sets the variables using data from the HTML file for canvas grid size selection, color seclection and the button

const canvasHeight = document.getElementById('inputHeight');
const canvasWidth = document.getElementById('inputWidth');
const canvasGridColor = document.getElementById('colorPicker');
const button = document.getElementById('buttonClick');
const canvas = document.getElementById('pixelCanvas');

//Adds click event for the button to create the canvas grid. Clears the canvas when new sizing is added.

		button.addEventListener('click' , function(sub){
		canvas.innerHTML = " ";
		sub.preventDefault();
		makeGrid();
	});

//Adds click event so that only the cell that is clicked is colored in.
	canvas.addEventListener('click' , function(sub) {
		if(sub.target.matches("td")){
		sub.target.style.backgroundColor = canvasGridColor.value;
		}
	});

//The making of the canvas grid based on the values that were input by the user
function makeGrid(sub) {
	for(let i = 0 ; i < canvasHeight.value ; i++){
		let canvasRow = canvas.insertRow (0);
		for( let j = 0 ; j < canvasWidth.value ; j++){
			canvasRow.insertCell (0);
		}
	}
}
