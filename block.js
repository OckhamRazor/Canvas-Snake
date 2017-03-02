/**************************************************
 * 方块
 * @description 组成身体和食物
 **************************************************/
var Block = function (border, col, row, style) {
  this.border = border;
  this.col = col || 0;
  this.row = row || 0;
  this.fillStyle = style || '#1e6823';
};
//设置方块坐标系原点
Block.prototype.setOp = function (x,y) {
  this.OP = {
    x: x,
    y: y
  };
};
//设置方块填充样式
Block.prototype.setStyle = function (style) {
  this.fillStyle = style;
};

//检查两个块是否在同一位置
Block.prototype.equals = function (block) {
  return this.col === block.col && this.row === block.row;
};
//绘制方法
Block.prototype.draw = function (ctx) {
  var unit = this.border.getUnit();
  var gridSize = this.border.getGridSize();
  var OP = this.border.getOP();

  ctx.fillStyle = this.fillStyle;
  ctx.fillRect(OP.x+this.col*unit, OP.y+this.row*unit, gridSize ,gridSize);
};
