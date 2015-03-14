angular


var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

var container = document.getElementById('container'),
    layer = new Kinetic.Layer(),
    rows = 8;
    padding = 10,
    length = 200,
    iterations = window.innerWidth / (length + padding) + 1;

var createShape = function (row, col, padding, length) {

    return new Kinetic.Shape({

        sceneFunc: function (ctx) {

            var img = document.createElement('img'),
                self = this;

            var xm = ((length + padding)* col),
                ym = (((length /2) + padding) * row) - ((length / 2));

            if(row % 2 === 1) {
                xm = xm - (length + padding);
            }

            var imgx = xm,
                imgy = ym;

            img.src = 'img/pattern.jpg';

            img.onload = function () {

                ctx.save();
                ctx.beginPath();

                if((col % 2) === 1) {
                    ctx.moveTo(0 + xm, 0 + ym);
                    ctx.lineTo(length + xm, length / 2 + ym);
                    ctx.lineTo(0 + xm, length + ym);
                } else {
                    ctx.moveTo(0 + xm, length / 2 + ym);
                    ctx.lineTo(length + xm, 0 + ym);
                    ctx.lineTo(length + xm, length + ym);
                }

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

for (var a = 0; a < rows; a++) {
    for (var b = 0; b < iterations; b++) {
        layer.add(createShape(a, b, padding, length));
    };
};

stage.add(layer);



