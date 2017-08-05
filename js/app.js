//console.log('asdbfiasb')
let container = document.getElementById('container');
let text = document.getElementById('text');
let x;
let y;
var arrayThing = [];

document.addEventListener('mousemove', function(){
	x = event.clientX;
	y = event.clientY;
	// console.log(x + y);
	text.innerHTML = 'x' + x + ' y' + y;
})

let interval = setInterval(create, 100);

function create(){
	let randomNumber = Math.floor(Math.random() * 40 + 10);
	let newDiv = document.createElement('div');
	newDiv.className += ' divClass';
	newDiv.style.height = randomNumber + 'px';
	newDiv.style.width = randomNumber + 'px';
	newDiv.style.backgroundColor = '#FDFEC9';
	newDiv.style.position = 'absolute';
	newDiv.style.left = x + 'px';
	newDiv.style.top = y + 'px';
	container.appendChild(newDiv);
	arrayThing.push(newDiv);
	let classId = document.getElementsByClassName('divClass');
	if (arrayThing.length >= 13) {
		classId[0].parentNode.removeChild(classId[0]);
		console.log(arrayThing);
	}
}