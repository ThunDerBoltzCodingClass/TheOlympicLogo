canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth= 1;
ctx.rect(200, 200, 430, 200, );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth= 5;
ctx.arc(412.5, 250, 40, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth= 5;
ctx.arc(320, 250, 40, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth= 5;
ctx.arc(504, 250, 40, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth= 5;
ctx.arc(365, 300, 40, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth= 5;
ctx.arc(457, 300, 40, 0, 2 * Math.PI );
ctx.stroke();