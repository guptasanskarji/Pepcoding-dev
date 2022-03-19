const cheerio = require("cheerio");

let html = `<ul id="fruits">
  <li class="apple">Apple<\li>
  <li class="orange">Orange<\li>
  <li class="pear">Pear<\li>
</ul>  `;

// cheerio stores data in form of objects
let selecTool = cheerio.load(html);

let fruitName = selecTool('.pear');
console.log(typeof fruitName);
console.log(fruitName.text());
console.log(fruitName.html());

let fruitNameArr = selecTool("#fruits");
console.log(fruitNameArr.text());

