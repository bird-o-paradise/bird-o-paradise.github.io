var content = document.getElementById("content");

content.innerHTML = "<div style=\"text-align:center\">Hunt the Wumpus</div> a non-interactive text adventure";

function hintTimer() {
	setTimeout(function() {
		var container = document.getElementById("continue");
		container.innerHTML = "press any key to continue";
	}, 5000);
}

function clearHint() {
	var container = document.getElementById("continue");
	container.innerHTML = "";
}

function nextStep() {
	clearHint();
	var step = steps.shift();
	hintTimer();
	step();
}
