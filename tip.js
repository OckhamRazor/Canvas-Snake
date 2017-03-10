/***************************************************
 * 提示类
 ***************************************************/
function Tip(position, font, style) {
  //绘制坐标
  this.position = position || {x:300, y:50};
  this.font = font || '14px Comic Sans MS'; //字体样式
  this.fillStyle = style || '#000'; //字体颜色
  this.textBaseline = 'bottom';
  this.textAlign = 'center';
}
//设置绘制样式
Tip.prototype.setCtx = function (ctx) {
  ctx.textBaseline = this.textBaseline;
  ctx.textAlign = this.textAlign;
  ctx.fillStyle = this.fillStyle;
};
//绘制"Game Over"提示
Tip.prototype.gameOver = function (ctx) {
  this.setCtx(ctx);
  ctx.fillText('Game Over', this.position.x, this.position.y);
};
//绘制"You Win"提示
Tip.prototype.win = function (ctx) {
  this.setCtx(ctx);
  ctx.fillText('You Win !', this.position.x, this.position.y);
};
//绘制"Start"提示
Tip.prototype.start = function (ctx) {
  this.setCtx(ctx);
  ctx.fillText('Start', this.position.x, this.position.y);
};
//绘制"Start"提示
Tip.prototype.paused = function (ctx) {
  this.setCtx(ctx);
  ctx.fillText('||', this.position.x, this.position.y);
};
//绘制"Start"提示
Tip.prototype.continue = function (ctx) {
  this.setCtx(ctx);
  ctx.beginPath();
  ctx.arc(this.position.x, this.position.y, 20, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = 'rgba(100, 100, 100, 0.6)';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(this.position.x-5, this.position.y-10);
  ctx.lineTo(this.position.x+8, this.position.y);
  ctx.lineTo(this.position.x-5, this.position.y+10);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.fill();
  // ctx.fillText('>', this.position.x, this.position.y);
};