/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<h6>Hello World!</h6>

	<h6>Hello Hello!</h6>

	<h6 class="slogan">It's More Fun in the Philippines!</h6>

	<h6 class="slogan">It's More Fun in the Philippines!</h6>

	<input type="checkbox">

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Select a tag and perform changes 1

document.querySelector("h6").innerHTML = "Try me!";
//querySelector selects only one.
//Changed first matching h6 text to "Try me!".

document.querySelectorAll("h6")[1].innerHTML = "Nice try!";
//querySelectorAll places all matched entries into an array that can be chosen seperately.
//Changed 2nd h6 text to "Nice try!".

document.querySelectorAll(".slogan")[0].innerHTML = "<strong>It's More Fun in the Philippines!</strong>";
//Changed the text of all tags with the "slogan" class to "<strong>It's More Fun in the Philippines!</strong>".

document.querySelectorAll(".slogan")[1].innerHTML = "<strong>It's More Love in the Philippines!</strong>";
//Changed the text of  2nd tag with the "slogan" class to "<strong>It's More Love in the Philippines!</strong>".

document.querySelector("input").click();
//Automatically clicks the input checkbox.
