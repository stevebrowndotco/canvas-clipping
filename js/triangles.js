var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

var container = document.getElementById('container'),
    layer = new Kinetic.Layer(),
    iterations = 3,
    triangleHeight = 3;

var shape = function (rows, cols, padding, radius, direction) {

    rows += 1;
    cols += 1;

    return new Kinetic.Shape({

        sceneFunc: function (ctx) {

            var img = document.createElement('img'),
                self = this;


            var xm = radius * cols,
                ym = (radius) * rows;


            var imgx = xm,
                imgy = ym,
                h = ((Math.PI * 2) / 3);

            img.src = 'img/pattern.jpg';


            img.onload = function () {

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(radius * direction + xm, 0 + ym);
                ctx.lineTo(radius * direction * Math.cos(h) + xm, radius * Math.sin(h) + ym);
                ctx.lineTo(radius * direction * Math.cos(h * 2) + xm, radius * Math.sin(h * 2) + ym);
                ctx.clip();
                ctx.drawImage(img, imgx, imgy, img.width, img.height);
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

};

for (var a = 0; a < triangleHeight; a++) {
    for (var b = 0; b < iterations; b++) {
        layer.add(shape(a, b, 10, 100, (b % 2) === 1 ? 1 : -1));
    };
};

stage.add(layer);



