var stage = new Kinetic.Stage({
    container: 'container',
    width: 350,
    height: 350
})

var layer = new Kinetic.Layer();

function drawBoard() {

    var TRIANGLE_HEIGHT = 1;
    for (var i = 0; i < TRIANGLE_HEIGHT; i++) {
        createTriangleGroup(i);
    }
    stage.add(layer);



}

function createTriangleGroup(i) {

    var leftTriangle = new Kinetic.Shape({
        x: (i * 240) + 250,
        y: i * 140,
        drawFunc: function (ctx) {
            var img = document.createElement('img'),
                self = this;
            img.src = 'img/pattern.jpg';
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
                ctx.fillStrokeShape(self);
            }
        }
    })

    var rightTriangle = new Kinetic.Shape({
        x: (i * 240),
        y: i * 140,
        drawFunc: function (ctx) {
            var img = document.createElement('img'),
                self = this;
            img.src = 'img/darth-vader.jpg';
            img.onload = function () {
                ctx.restore();
                ctx.beginPath();
                ctx.moveTo(0, 115);
                ctx.lineTo(243, 0);
                ctx.lineTo(208, 248);
                ctx.lineTo(0, 115);
                ctx.clip();
                ctx.drawImage(img, 0, 0, img.width, img.height);
                ctx.closePath();
                ctx.fillStrokeShape(self);
            }
        }
    })

    leftTriangle.on('mousedown', function(e){
        console.log(e.target._id)
    })

    rightTriangle.on('mousedown', function (e) {
        console.log(e.target._id )
    })

    layer.add(leftTriangle, rightTriangle);

}

drawBoard();