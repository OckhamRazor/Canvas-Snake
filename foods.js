/************************************************
 * 食物集合
 * @description 由Food类构成
 ************************************************/
var Foods = function (border) {
  this.border = border;
  this.children = [];
  this.data = [];
};

Foods.prototype.create = function () {
  var food;
  for(var i=0,len=this.data.length;i<len;i++){
    food = new Food(this.data[i].x,this.data[i].y,this.border,this.data[i].info);
    this.children.push(food);
  }
};

Foods.prototype.setData = function (data) {
  this.data = data;
};

Foods.prototype.getFoods = function () {
  return this.children
};

Foods.prototype.isEmpty = function () {
  return this.children.length === 0;
};

Foods.prototype.removeFood = function (index) {
  this.children.splice(index,1);
};
//绘制食物
Foods.prototype.draw = function (ctx) {
  for(var i=0,len=this.children.length;i<len;i++){
    this.children[i].draw(ctx);
  }
};
//重置食物
Foods.prototype.reset = function () {
  this.children = [];
  this.create();
};