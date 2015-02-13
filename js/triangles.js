var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

var container = document.getElementById('container'),
    layer = new Kinetic.Layer(),
    iterations = 8;

for (var i = 0; i < iterations; i++) {

    createTriangleGroup(i);
};

stage.add(layer);

function createTriangleGroup(i) {

    var triangle = function (direction) {
        return new Kinetic.Shape({

            sceneFunc: function (ctx) {
                var img = document.createElement('img'),
                    self = this,
                    w = 248,            // triangle width
                    xm = (i * w),       // x modifier,

                    x1 = 0,
                    x2 = direction === 'left' ? 207 : 243,
                    x3 = direction === 'left' ? -34 : 208,
                    y1 = direction === 'left' ? x1 : 115,
                    y2 = direction === 'left' ? 140 : x1,
                    y3 = direction === 'left' ? w : 248,

                    imgx = direction === 'left' ? xm + x3 : xm;

                    img.src = 'img/pattern.jpg';

                    img.onload = function () {
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(x1 + xm, y1);
                        ctx.lineTo(x2 + xm, y2);
                        ctx.lineTo(x3 + xm, y3);
                        ctx.lineTo(x1 + xm, y1);
                        ctx.clip();
                        ctx.drawImage(img, imgx, 0, img.width, img.height);
                        ctx.stroke();
                        ctx.closePath();
                        ctx.fillStrokeShape(self);
                        ctx.restore();
                    }
                }


        })
        .on('mousedown', function (e) {
            console.log(e.target._id);
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
        })

    }

    layer.add(triangle('left'), triangle('right'));

};


