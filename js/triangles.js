var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

var container = document.getElementById('container'),
    layer = new Kinetic.Layer();

for (var i = 0; i < 3; i++) {
    createTriangleGroup(i)
}

stage.add(layer);

function createTriangleGroup(i) {

    var leftTriangle = new Kinetic.Shape({

        test: Math.random(),

        drawFunc: function (ctx) {
            var img = document.createElement('img'),
                self = this,
                xo = -34,           // x overlap
                w = 248,            // triangle width
                x = (i * w) + w;    // x position
            img.src = 'img/pattern.jpg';

            img.onload = function () {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(0 + x, 0);
                ctx.lineTo(207 + x, 140);
                ctx.lineTo(-34 + x, w);
                ctx.lineTo(0 + x, 0);
                ctx.clip();
                ctx.drawImage(img, (0 + x) + xo, 0, img.width, img.height);
                ctx.stroke();
                ctx.closePath();
                ctx.fillStrokeShape(self);
                ctx.restore();
            }
        }
    })

    .on('mousedown', function (e) {
        console.log(e.target.attrs.test);
    })
    .on('mouseover', function (e) {
        this.setStroke('red');
        layer.draw();
        container.style.cursor = 'pointer';
    })
    .on('mouseout', function (e) {
        this.setStroke('none');
        layer.draw();
            container.style.cursor = 'auto';
    });

    var rightTriangle = new Kinetic.Shape({
        x: (i * 240),
        y: i * 140,
        drawFunc: function (ctx) {
            var img = document.createElement('img'),
                self = this;
            img.src = 'img/darth-vader.jpg';
            img.onload = function () {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(0, 115);
                ctx.lineTo(243, 0);
                ctx.lineTo(208, 248);
                ctx.lineTo(0, 115);
                ctx.clip();
                ctx.drawImage(img, 0, 0, img.width, img.height);
                ctx.closePath();
                ctx.fillStrokeShape(self);
                ctx.restore();
            }
        }
    });
    
    layer.add(leftTriangle);

};


