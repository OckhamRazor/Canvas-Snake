/**************************************************
 * 背景
 * @description 绘制网格
 **************************************************/
var BackGround = function (border,style) {
  this.border = border;
  this.fillStyle = style || '#eee'; //填充样式
};

//设置填充样式
BackGround.prototype.setStyle = function (style) {
  this.fillStyle = style;
};
//绘制背景
BackGround.prototype.draw = function (ctx) {
  var cols = 0, rows = 0, gridSize = 10, unit = 0, OP = {x:0,y:0};
  cols = this.border.getMaxCol(); //计算列数
  rows = this.border.getMaxRow(); //计算行数
  unit = this.border.getUnit(); //获取列宽、行高
  OP = this.border.getOP(); //获取坐标原点

  ctx.fillStyle = this.fillStyle;
  for(var i=0;i<cols;i++) {
    for(var j=0;j<rows;j++) {
      ctx.fillRect(OP.x + unit*i, OP.y+unit*j, gridSize, gridSize);
    }
  }
};