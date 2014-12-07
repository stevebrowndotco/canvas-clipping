function polygon(ctx, x, y, radius, sides, startAngle, anticlockwise, img, imgX, imgY) {
    if (sides < 3) return;
    var a = (Math.PI * 2)/sides;
    a = anticlockwise?-a:a;
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(startAngle);
    ctx.beginPath();
    ctx.moveTo(radius,0);
    for (var i = 1; i < sides; i++) {
        ctx.lineTo(radius*Math.cos(a*i),radius*Math.sin(a*i));
    }
    ctx.closePath();

    // add stroke
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#056e96';
    ctx.stroke();

    // add stroke
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#47b6c8';
    ctx.stroke();

    // add stroke
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#056e96';
    ctx.stroke();

    // Clip to the current path
    ctx.clip();
    ctx.drawImage(img, imgX, imgY);
    ctx.restore();
}

// Grab the Canvas and Drawing Context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Create an image element
var img = document.createElement('IMG');
var img2 = document.createElement('IMG');

// When the image is loaded, draw it
var cnt = 2;
img.onload = img2.onload = function () {
    cnt--;
    if (cnt === 0) clip();
}
function clip() {
    polygon(ctx, 120,120,100,6, 0,0,img, -120,-170);
    polygon(ctx, 280,212,100,6, 0,0,img2, -150,-120);
}

// Specify the src to load the image
img.src = "http://farm8.staticflickr.com/7381/9601443923_051d985646_n.jpg";
img2.src = "http://farm6.staticflickr.com/5496/9585303170_d005d2aaa9_n.jpg";