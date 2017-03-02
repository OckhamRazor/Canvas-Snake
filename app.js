var canvas = document.getElementById('snake_canvas');
var ctx = canvas.getContext('2d');

var ratio = setPixelRatio(canvas, ctx); //调整高分屏下画布模糊
ctx.textBaseline = 'top';

var game = new Game();
game.init(canvas, ctx, ratio);

function loop() {
  requestAnimationFrame(loop);
  game.render(canvas, ctx);
}
loop();

