/*
╔════════════╦═══════════════════╦═══════════════════╦═══════════════════╦════════════════════╦═══════════════════════════╗
║  document  ║ firstElementChild ║ firstElementChild ║ sub-Element Child ║  lastElementChild  ║     sub-Element Child     ║
╠════════════╬═══════════════════╬═══════════════════╬═══════════════════╬════════════════════╬═══════════════════════════╣
║ Whole HTML ║                   ║                   ║  (vary on order)  ║                    ║      (vary on order)      ║
║            ║ <html></html>     ║                   ║                   ║                    ║                           ║
║            ║                   ║ <head></head>     ║                   ║ <body></body>      ║                           ║
║            ║                   ║                   ║ <title></title>   ║                    ║ <h1>all headers</h1>      ║
║            ║                   ║                   ║ <meta>            ║                    ║ <form></form>             ║
║            ║                   ║                   ║ <link>            ║                    ║ <input>                   ║
║            ║                   ║                   ║                   ║                    ║ <button></button>         ║
║            ║                   ║                   ║                   ║                    ║ <table></table>           ║
║            ║                   ║                   ║                   ║                    ║ <ul></ul>                 ║
║            ║                   ║                   ║                   ║                    ║ <script></script>         ║
╚════════════╩═══════════════════╩═══════════════════╩═══════════════════╩════════════════════╩═══════════════════════════╝
*/

//Following the above structure this will give us h1.
var heading = document.firstElementChild.lastElementChild.firstElementChild;
//----------=------HTML-----------------------BODY---------------H1---------
//OUTPUT: "<h1>all headers</h1>"

//Now we can change the value.
heading.innerHTML = "Text changed!";

//Now we can also change its color.
heading.style.color = "red";
