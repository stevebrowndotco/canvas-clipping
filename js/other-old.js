projectMap = [];

function polygon(ctx,  flip, img, imgX, imgY, x, y) {

    ctx.save();
    ctx.translate(x,y);
    ctx.beginPath();

    if(flip) {
        ctx.moveTo(0,0);
        ctx.lineTo(207,140);
        ctx.lineTo(-34,248);
        ctx.lineTo(0,0)
    } else {
        ctx.moveTo(0,115);
        ctx.lineTo(243,0);
        ctx.lineTo(208,248);
        ctx.lineTo(0,115);
    }

    ctx.closePath();

    // add stroke
    ctx.lineWidth = 1;
    ctx.strokeStyle = flip ? 'red' : '#056e96';
    //ctx.lineCap = 'round';
    //ctx.stroke();

    // Clip to the current path
    ctx.clip();
    ctx.drawImage(img, imgX, imgY, img.width, img.height);
    ctx.restore();

}

// Grab the Canvas and Drawing Context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//canvas.onmousedown = function(e) {
//    console.log('mouse down',e )
//}
//
//canvas.onmousemove= function(e) {
//    console.log(e.x, e.y )
//}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an image element
var img = document.createElement('img');
var img2 = document.createElement('img');

// When the image is loaded, draw it
var cnt = 2;
img.onload = img2.onload = function () {
    cnt--;
    if (cnt === 0) clip();
}

function clip() {
    for (var i = 0; i < 3; i++) {

        var x = i * 240;
        var y = i * 140

        polygon(ctx, false, img, -30, 0, x, y);
        polygon(ctx, true, img2, -30, 0, x + 250, y);

    }
    for (var i = 0; i < 3; i++) {

        var _x = (i * 240) + 440;
        var _y = i * 140

        console.log(_x);

        polygon(ctx, false, img, -30, 0, _x, _y);
        polygon(ctx, true, img2, -30, 0, _x + 250, _y);

    }
    for (var i = 0; i < 3; i++) {

        var _x = (i * 240) + 900;
        var _y = i * 140


        polygon(ctx, false, img, -30, 0, _x, _y);
        polygon(ctx, true, img2, -30, 0, _x + 250, _y);

    }
}

// Specify the src to load the image
img.src = "img/darth-vader.jpg";
img2.src = "http://farm6.staticflickr.com/5496/9585303170_d005d2aaa9_n.jpg";