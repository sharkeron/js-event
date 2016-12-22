document.onkeydown = function (e) {
	if (e.keyCode == 27) { // escape
		cancel();
		return false;
	}

	if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !ta.offsetHeight) {
		edit();
		return false;
	}

	if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && ta.offsetHeight) {
		save();
		return false;
	}
};

function edit() {
	div.style.display = 'none';
	ta.value = div.innerHTML;
	ta.style.display = 'block';
	ta.focus();
}

function save() {
	ta.style.display = 'none';
	div.innerHTML = ta.value;
	div.style.display = 'block';
}

function cancel() {
	ta.style.display = 'none';
	div.style.display = 'block';
}
