var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
})

var layer = new Kinetic.Layer();

function drawBoard() {

    createTriangleGroup(3)

    stage.add(layer);

}

function createTriangleGroup(TRIANGLE_HEIGHT) {

    var x = 0;

    function drawTriangles(x) {

        console.log('drawing triangles', x)

        var leftTriangle = new Kinetic.Shape({
            x: (i * 240) + x,
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
        });

        leftTriangle.on('mousedown', function (e) {
            console.log(e.target._id)
        });

        rightTriangle.on('mousedown', function (e) {
            console.log(e.target._id)
        });

        console.log(leftTriangle, rightTriangle)

        layer.add(leftTriangle, rightTriangle);
    }

    for (var i = 0; i < TRIANGLE_HEIGHT; i++) {
        drawTriangles(x += 250);
    };

};

drawBoard();