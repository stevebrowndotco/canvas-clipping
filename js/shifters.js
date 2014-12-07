function Shape(x, y, w, h, fill, imgSrc) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
    this.image = new Image();
    this.image.src = imgSrc;
}

var portfolio = [];

// get canvas element.
var elem = document.getElementById('canvas');
context = elem.getContext('2d');

// check if context exist
if (elem.getContext) {

    portfolio.push(new Shape(75, 100, 200, 200, "#333", 'img/darth-vader.jpg'));
    //portfolio.push(new Shape(400, 100, 200, 200, "#333" ,'img/awesome.jpg'));
    //portfolio.push(new Shape(300, 100, 100, 25, "#333", 'img/awesome.jpg'));

    elem.width = window.innerWidth;
    elem.height = window.innerHeight;

    window.addEventListener('resize', function(){
        elem.width = window.innerWidth;
        elem.height = window.innerHeight;
    })


    for (var i in portfolio) {
        var x = Math.floor(Math.random() * elem.width);
        var y = Math.floor(Math.random() * elem.height);

        context.save();//push current state into canvas
        context.beginPath();
        context.arc(x + 24, y + 24, 20, 0, Math.PI * 2, 1);
        context.clip();

        context.strokeStyle = "black";

        //draw image this way
        var img = new Image();
        img.src ='img/darth-vader.jpg';
        img.onload = function() {
            //context.drawImage(img, x, y);
        };

        context.stroke();
        context.restore();//restore context to the state
    }


    /*

    for (var i in portfolio) {

        //debugger;

        var project = portfolio[i];


        context.beginPath();

        context.fillStyle = '#FF0000';
        context.moveTo(project.x ,project.y)
        context.lineTo(project.x + project.w, project.y + project.h);
        context.lineTo(project.x, project.y + project.h);
        context.lineTo(project.x ,project.y);
        context.clip();
        context.closePath();

        project.image.onload = function() {
            context.drawImage(project.image, project.x ,project.y);
        }


        context.stroke();

        console.log(context);
        //debugger;

        context.restore();

    }

    */


}