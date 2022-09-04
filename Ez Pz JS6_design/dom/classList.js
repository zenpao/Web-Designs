/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<h6>Hello World!</h6>

	<button class="class-padding">Enter</button>

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Adding or removing a CSS class of a child/tag

document.querySelector("button").classList.add("invisible");
//Add a class in the button "invisible".
//NOTE: the class must also be present in the CSS.

document.querySelector("button").classList.remove("class-padding");
//Remove a class in the button "class-padding".

document.querySelector("button").classList.toggle("invisible");
//Simpler way to add/remove based on the previous condition of the class.
