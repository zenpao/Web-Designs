/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<ul>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
	</ul>

	<p>Player 1</p>
	<p>Player 2</p>

	<a href="https://www.google.com">Google</a>

	<a href="https://www.facebook.com">Facebook</a>

	<img src="https://unsplash.com/photos/gySMaocSdqs">

 <script type="text/javascript" src="js/app.js"></script> 
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Select a tag and perform changes 2

document.getElementByTagName("li")[2].style.color = "purple";
//Changed color of the 3rd list item to purple.

document.getElementByTagName("p")[0].innerHTML = "Zen";
//Changed 1st paragraph text to "Zen".

document.getElementByTagName("p")[1].innerHTML = "Pao";
//Changed 2nd paragraph text to "Pao".

document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Paolo";
//----------=------HTML-----------BODY------------UL--------------LAST LI-------------------------
////OUTPUT: <li>Three</li> changed to <li>Paolo</li>

document.getElementsByTagName("a")[1].setAttribute("href", "https://www.messenger.com");
//Changed 2nd anchor tag attribute value to "https://www.messenger.com".

document.getElementsByTagName("img").setAttribute("src", "https://unsplash.com/photos/k_T9Zj3SE8k");
//Changed img src value to "https://unsplash.com/photos/k_T9Zj3SE8k".
