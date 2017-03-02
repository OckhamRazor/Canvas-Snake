/*********************************************
 * 分数类
 *********************************************/
var Score = function(x,y, font, style) {
  this.score = 0; //分数
  this.x = x || 600; //绘制x坐标
  this.y = y || 5; //绘制y坐标
  this.font = font || '14px Comic Sans MS'; //字体样式
  this.fillStyle = style || '#000'; //字体颜色
};
//增加分数
Score.prototype.add = function (score) {
  this.score += score;
};
//绘制分数
Score.prototype.draw = function (ctx) {
  ctx.font = this.font;
  ctx.fillStyle = this.fillStyle;
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.fillText('Score:'+this.score, this.x, this.y);
};
//分数重置
Score.prototype.reset = function () {
  this.score = 0;
};

