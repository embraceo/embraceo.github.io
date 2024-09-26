function biggerText() {
	
    document.getElementById("textInput").style.fontSize = "24pt";
	
	alert("The text is bigger now.");
}

function changeStyle() {
	
    let textArea = document.getElementById("textInput");
	
    if (document.getElementById("fancyShmancy").checked) {
		
        textArea.style.fontWeight = "bold";
		
        textArea.style.color = "blue";
		
        textArea.style.textDecoration = "underline";
		
    } 
	
	else {
		
        textArea.style.fontWeight = "normal";
		
        textArea.style.color = "black";
		
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
	
    let textArea = document.getElementById("textInput");
	
    let text = textArea.value.toUpperCase();
	
    let sentences = text.split(".");
	
    for (let i = 0; i < sentences.length; i++) {
		
        if (sentences[i].trim().length > 0) {
			
            let words = sentences[i].trim().split(" ");
			
            words[words.length - 1] += "-MOO";
			
            sentences[i] = words.join(" ");
        }
    }
	
    textArea.value = sentences.join(". ").trim();
}
