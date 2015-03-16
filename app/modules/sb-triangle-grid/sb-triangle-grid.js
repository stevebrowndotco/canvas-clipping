angular
  .module('sbTriangleGrid', [])
  .directive('sbTriangles', function () {

    return {
      restrict: 'AE',
      template: '<div id="triangleGrid"></div>',
      scope: {
        data: '=',
        triangleSize: '=',
        padding: '='
      },
      transclude: true,
      link: function ($scope, $element, $attributes) {

        var container = angular.element('#triangleGrid'),
          layer = new Kinetic.Layer(),
          rows = Math.ceil(container[0].offsetWidth / ($scope.triangleSize + $scope.padding)),
          iterations = Math.ceil(container[0].offsetWidth / ($scope.triangleSize + $scope.padding)) + 1;

        var stage = new Kinetic.Stage({
          container: 'triangleGrid',
          width: container[0].offsetWidth,
          height: container[0].offsetHeight
        });

        var createShape = function (row, col, padding, triangleSize) {

          return new Kinetic.Shape({

            sceneFunc: function (ctx) {

              var img = document.createElement('img'),
                self = this;

              var xm = ((triangleSize + padding) * col),
                ym = (((triangleSize / 2) + padding) * row) - ((triangleSize / 2));

              if (row % 2 === 1) {
                xm = xm - (triangleSize + padding);
              }

              var imgx = xm,
                imgy = ym;

              img.src = 'images/yeoman.png';

              img.onload = function () {

                ctx.save();
                ctx.beginPath();

                if ((col % 2) === 1) {
                  ctx.moveTo(0 + xm, 0 + ym);
                  ctx.lineTo(triangleSize + xm, triangleSize / 2 + ym);
                  ctx.lineTo(0 + xm, triangleSize + ym);
                } else {
                  ctx.moveTo(0 + xm, triangleSize / 2 + ym);
                  ctx.lineTo(triangleSize + xm, 0 + ym);
                  ctx.lineTo(triangleSize + xm, triangleSize + ym);
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
            layer.add(createShape(a, b, $scope.padding, $scope.triangleSize));
          }

        }
        stage.add(layer);
      }
    }


  });



