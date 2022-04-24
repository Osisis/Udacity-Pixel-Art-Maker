const canvasHeight = document.getElementById('inputHeight');
const canvasWidth = document.getElementById('inputWidth');
const canvasGridColor = document.getElementById('colorPicker');
const button = document.getElementById('buttonClick');
const canvas = document.getElementById('pixelCanvas');

		button.addEventListener('click' , function(sub){
		canvas.innerHTML = " ";
		sub.preventDefault();
		makeGrid();
	});

	canvas.addEventListener('click' , function(sub) {
		if(sub.target.matches("td")){
		sub.target.style.backgroundColor = canvasGridColor.value;
		}
	});

function makeGrid(sub) {
	for(let i = 0 ; i < canvasHeight.value ; i++){
		let canvasRow = canvas.insertRow (0);
		for( let j = 0 ; j < canvasWidth.value ; j++){
			canvasRow.insertCell (0);
		}
	}
}
