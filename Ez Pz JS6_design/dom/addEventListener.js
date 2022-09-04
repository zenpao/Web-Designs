/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<button>Button 1</button>
	<button>Button 2</button>

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Add click Event listeners
document.querySelectorAll("button").addEventListener("click", handleClick);
//Add event listener "click" to all button tags and apply a function.

function handleClick() {
	//"this""refers to which button is clicked.
	this.style.color = "white"; //Changed text color when clicked.
	console.log(this); //OUTPUT: "<button>Button 1</button>" OR "<button>Button 2</button>" depending which was clicked.
	console.log(this.innerHTML); //OUTPUT: "Button 1" OR "Button 2" depending which was clicked.
}

//Place Event listener to the whole document to detect keyboard press.
document.addEventListener("keypress", function(event) { //This is called an "Anonymous function". Event lister + fast function combo.
	console.log(event.key);	//OUTPUT: --Depending what keyboard key was pressed.--
});
