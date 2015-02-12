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

}
;

stage.add(layer);


//var triangle = new Kinetic.Shape({
//
//    sceneFunc: function (ctx) {
//        var img = document.createElement('img'),
//            self = this,
//            xo = -34,           // x overlap
//            w = 248,            // triangle width
//            x = (i * w);    // x position
//        img.src = 'img/pattern.jpg';
//
//        img.onload = function () {
//            ctx.save();
//            ctx.beginPath();
//            ctx.moveTo(0 + x, 0);
//            ctx.lineTo(207 + x, 140);
//            ctx.lineTo(-34 + x, w);
//            ctx.lineTo(0 + x, 0);
//            ctx.clip();
//            ctx.drawImage(img, (0 + x) + xo, 0, img.width, img.height);
//            ctx.stroke();
//            ctx.closePath();
//            ctx.fillStrokeShape(self);
//            ctx.restore();
//        }
//    }
//})


function createTriangleGroup(i) {

    var triangle = function (direction) {
        return new Kinetic.Shape({

            sceneFunc: function (ctx) {
                var img = document.createElement('img'),
                    self = this,
                    xo = -34,           // x overlap
                    w = 248,            // triangle width
                    x = (i * w);    // x position

                if (direction === 'left') {
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
                } else {
                    var img = document.createElement('img'),
                        self = this;
                    img.src = 'img/darth-vader.jpg';
                    img.onload = function () {
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(0 + x, 115);
                        ctx.lineTo(243 + x, 0);
                        ctx.lineTo(208 + x, w);
                        ctx.lineTo(0 + x, 115);
                        ctx.clip();
                        ctx.drawImage(img, (0 + x) + xo, 0, img.width, img.height);
                        ctx.closePath();
                        ctx.fillStrokeShape(self);
                        ctx.restore();
                    }

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


