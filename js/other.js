var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

var layer = new Kinetic.Layer();

function drawBoard() {

    var TRIANGLE_HEIGHT = 3;

    for (var i = 0; i < TRIANGLE_HEIGHT; i++) {

        createTriangleGroup(i);
    }

    stage.add(layer);

}

var leftTrianglePath = function (ctx, imgSrc) {
    var img = document.createElement('img');
    img.src = imgSrc;
    img.onload = function () {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(207, 140);
        ctx.lineTo(-34, 248);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.clip();
        ctx.drawImage(img, 0, 0, img.width, img.height);
        ctx.closePath();
        ctx.fillStrokeShape(this);
    }

}

var rightTrianglePath = function (ctx, imgSrc) {
    var img = document.createElement('img');
    img.src = imgSrc;
    img.onload = function () {
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(0, 115);
        ctx.lineTo(243, 0);
        ctx.lineTo(208, 248);
        ctx.lineTo(0, 115);
        ctx.stroke();
        ctx.clip();
        ctx.drawImage(img, 0, 0, img.width, img.height);
        ctx.closePath();
        ctx.fillStrokeShape(this);
    }
}

function createTriangleGroup(i) {

    var leftTriangle = new Kinetic.Shape({
        x: (i * 240) + 250,
        y: i * 140,
        fill: 'red',
        drawFunc: function(ctx) {
            leftTrianglePath(ctx, 'img/pattern.jpg');
        }
    })
    .on('click', function () {
        this.setFill('black');
        layer.draw();
    })
    .on('mouseenter', function () {
        document.getElementById('container').style.cursor = 'pointer'
    })
    .on('mouseleave', function () {
        document.getElementById('container').style.cursor = 'inherit'
    })

    var rightTriangle = new Kinetic.Shape({
        x: (i * 240),
        y: i * 140,
        fill: 'red',
        drawFunc:  function(ctx) {
            rightTrianglePath(ctx, 'img/pattern.jpg');
        }
    })
    .on('click', function () {
        this.setFill('#00D2FF');
        layer.draw();
    })
    .on('mouseenter', function () {
        document.getElementById('container').style.cursor = 'pointer'
    })
    .on('mouseleave', function () {
        document.getElementById('container').style.cursor = 'inherit'
    })

    layer.add(leftTriangle, rightTriangle);

}

layer.on('mousemove', function() {
    console.log('test');
})

drawBoard();