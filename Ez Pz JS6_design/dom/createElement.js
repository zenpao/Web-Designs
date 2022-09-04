/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<button onclick="generateTable()">Make table</button>

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Generate table
function generateTable() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // creates a table column
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

/* OUTPUT:
╔═════════════════════════╦═════════════════════════╗
║ cell in row 0, column 0 ║ cell in row 0, column 1 ║
╠═════════════════════════╬═════════════════════════╣
║ cell in row 1, column 0 ║ cell in row 1, column 1 ║
╚═════════════════════════╩═════════════════════════╝
*/
