/**************************************************
 * 辅助函数
 **************************************************/
//解决高分屏下Canvas模糊的问题
function setPixelRatio(canvas, ctx) {
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1;
  ratio = devicePixelRatio / backingStoreRatio;
  canvas.width = canvas.width * ratio;
  canvas.height = canvas.height * ratio;
  ctx.scale(ratio, ratio);

  return ratio;
}

function isArray(o){
  return Object.prototype.toString.call(o)=='[object Array]';
}