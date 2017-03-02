/************************************************
 * 食物类
 * @description 由Block类构成
 ************************************************/
var Food = function (border, style) {
  this.score = 5; //分数
  this.border = border; //参考系
  this.fillStyle = style; //填充样式
  this.position = new Block(border, 10, 8, style || '#d6e685');
};
//设置食物块分数
Food.prototype.setScore = function (score) {
  this.score = score;
};
//设置食物块填充样式
Food.prototype.setStyle = function (style) {
  this.position.setStyle(style);
};
//绘制食物
Food.prototype.draw = function (ctx) {
  this.position.draw(ctx)
};
//获取当前食物分数
Food.prototype.getScore = function () {
  return this.score;
};
//修改食物位置、分数
Food.prototype.move = function () {
  this.setScore(parseInt(Math.random()*20));
  var maxCol = this.border.getMaxCol();
  var maxRow = this.border.getMaxRow();
  var randomCol = Math.floor(Math.random()*maxCol);
  var randomRow = Math.floor(Math.random()*maxRow);

  this.position = new Block(this.border, randomCol, randomRow);
};
//重置食物
Food.prototype.reset = function () {
  this.score = 5; //分数
  this.position = new Block(this.border, 10, 8, this.fillStyle || '#d6e685');
};