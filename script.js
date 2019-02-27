// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
var s1 = document.getElementById("slot1");
var s2 = document.getElementById("slot2");
var s3 = document.getElementById("slot3");
var mySound = document.getElementById('you-win');
function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	} else if (el.src.match("images/orange_slot.PNG")){
	    el.src = "images/cherry_slot.PNG";
	} else {
		 
	}
}
// LEMON --> BAR --> CHERRY
function nextImage1(el){
	if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} 
	else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} 
}

// ORANGE --> CHERRY --> SEVEN --> WATERMELON
function nextImage2(el){
	if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG";
	} 
	else if (el.src.match("images/seven_slot.PNG")){
		el.src = "images/watermelon_slot.PNG";
	} 
	else if (el.src.match("images/watermelon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	} 
}
function playSound() {
	document.getElementById('you-win').play();
	}
	
function checkSlot(el){
		if (s1.src.match("images/cherry_slot.PNG") && s2.src.match("images/cherry_slot.PNG") && s3.src.match("images/cherry_slot.PNG")){//
		mySound.play();
		s1.classList.add("opaque");
		s2.classList.add("opaque");
		s3.classList.add("opaque");
	} 
	else{
	}
}