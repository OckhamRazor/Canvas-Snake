/*************************************************
 * 参考系
 * @description 设置边界、列宽、原点
 *************************************************/
var Border = function (gridSize, width, height,x,y) {
  this.gridSize = gridSize; //网格大小
  this.unit = gridSize+1; //列宽、行高
  this.maxCol = parseInt(width/(gridSize+1)); //最大列数
  this.maxRow = parseInt(height/(gridSize+1)); //最大行数
  //绘制坐标原点
  this.OP = {
    x: x || 0,
    y: y || 0
  }
};
//获取原点
Border.prototype.getOP = function () {
  return this.OP;
};
//获取列宽、行高
Border.prototype.getUnit = function () {
  return this.unit;
};
//获取网格大小
Border.prototype.getGridSize = function () {
  return this.gridSize;
};
//获取最大列数
Border.prototype.getMaxCol = function () {
  return this.maxCol;
};
//获取最大行数
Border.prototype.getMaxRow = function () {
  return this.maxRow;
};