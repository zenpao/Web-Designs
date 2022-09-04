/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<a href="https://www.google.com">Google</a>

	<a href="https://www.facebook.com">Facebook</a>

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Change attribute values

document.querySelector("a");
//OUTPUT: "<a href="https://www.google.com">Google</a>"

document.querySelector("a").attributes;
//OUTPUT: NameNodeMap {0: href, href: href, length: 1}

document.querySelector("a").getAttribute("href");
//OUTPUT: "https://www.google.com".

document.querySelector("a").setAttribute("href", "https://www.duckduckgo.com");
//Changed attribute value to "https://www.duckduckgo.com".

document.getElementsByTagName("a")[1].setAttribute("href", "https://www.messenger.com");
//Changed 2nd anchor tag attribute value to "https://www.messenger.com".
