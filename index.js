
function buttonAnimation(val) {
	var activeKey = document.querySelector("." + val);

	activeKey.classList.add("pressed");
	setTimeout(function() {
		activeKey.classList.remove("pressed");
	}, 200);
};

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function() {
	checkKey(this.innerHTML);
	buttonAnimation(this.innerHTML);
	});
}

document.addEventListener("keydown", function (e) {
	checkKey(e.key);
	buttonAnimation(e.key);
});


function checkKey(val) {
	switch (val) {
		case "w":
			new Audio('sounds/tom-1.mp3').play();
		break;
		case "a":
			new Audio('sounds/tom-2.mp3').play();
		break;
		case "s":
			new Audio('sounds/tom-3.mp3').play();
		break;
		case "d":
			new Audio('sounds/tom-4.mp3').play();
		break;
		case "j":
			new Audio('sounds/crash.mp3').play();
		break;
		case "k":
			new Audio('sounds/kick-bass.mp3').play();
		break;
		case "l":
			new Audio('sounds/snare.mp3').play();
		break;
		default: console.log(val);
	}	
}


