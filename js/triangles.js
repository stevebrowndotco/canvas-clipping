var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
})

var layer = new Kinetic.Layer();

for (var i = 0; i < 3; i++) {

    createTriangleGroup(i)

}

stage.add(layer);

function createTriangleGroup(i) {

    var x = 0;
    var leftTriangle = new Kinetic.Shape({

        drawFunc: function (ctx) {
            var img = document.createElement('img'),
                self = this,
                m = i * 100;
            img.src = 'img/pattern.jpg';
            
            img.onload = function () {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(0 + m, 0);
                ctx.lineTo(207 + m, 140);
                ctx.lineTo(-34 + m, 248);
                ctx.lineTo(0 + m, 0);
                ctx.clip();
                ctx.drawImage(img, 0 + m, 0, img.width, img.height);
                ctx.stroke();
                ctx.closePath();
                ctx.fillStrokeShape(self);
                ctx.restore();
            }
        }
    }).on('mousedown', function (e) {
        console.log('id',e.target._id);
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

    console.log('adding triangle')

    layer.add(leftTriangle);
    layer.draw();

};


//function insideFor(i) {
//
//    var circle_outer = new Kinetic.Shape({
//        drawFunc: function (ctx) {
//            var img = document.createElement('img'),
//                self = this;
//            img.src = 'img/pattern.jpg';
//
//            img.onload = function () {
//                ctx.save();
//                ctx.translate(100 * i,100)
//                ctx.beginPath();
//                ctx.moveTo(0, 0);
//                ctx.lineTo(207, 140);
//                ctx.lineTo(-34, 248);
//                ctx.lineTo(0, 0);
//                ctx.stroke();
//                ctx.clip();
//                ctx.drawImage(img, 0, 0, img.width, img.height);
//                ctx.closePath();
//                ctx.fillStrokeShape(self);
//                ctx.restore();
//
//            }
//        },
//        x: 100,
//        y: 100,
//        fill: '#000000',
//        stroke: '#000000',
//        strokeWidth: 20
//    });
//
//    layer.add(circle_outer);
//
//    stage.add(layer);
//}
//
//for (var i = 0; i < 3; i++) {
//    insideFor(i);
//}



