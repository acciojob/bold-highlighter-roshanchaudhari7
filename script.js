function highlight() {
    //Write your code here
	let boldWords = document.querySelectorAll('strong');
	for(let t of boldWords) {
		t.style.color = "green";
	}
}


function return_normal() {
    //Write your code here
	let boldWords = document.querySelectorAll('strong');
	for(let t of boldWords) {
		t.style.color = "black";
	}
    
}
