/***************************************
 * 贪吃蛇
 * @description 由多个Block组成
 ***************************************/
function Snake(border) {
  this.border = border; //参考系
  this.dead = false; //死亡状态
  //初始身体
  this.segments = [
    new Block(this.border, 7,5),
    new Block(this.border, 6,5),
    new Block(this.border, 5,5)
  ];

  this.currentDir = 'RIGHT'; //当前头部方向
  this.nextDir = 'RIGHT'; //下一步头部方向
}
//设置蛇头部方向
Snake.prototype.setDir = function (dir) {
  //判断是否是非法掉头
  switch (dir){
    case 'UP':
      if(this.currentDir === 'DOWN') return;
      break;
    case 'DOWN':
      if(this.currentDir === 'UP') return;
      break;
    case 'LEFT':
      if(this.currentDir === 'RIGHT') return;
      break;
    case 'RIGHT':
      if(this.currentDir === 'LEFT') return;
      break;
  }
  this.nextDir = dir;
};
//绘制蛇
Snake.prototype.draw = function (ctx) {
  for(var i=0;i<this.segments.length;i++){
    this.segments[i].draw(ctx);
  }
};
//检查是否碰撞
Snake.prototype.isCollided = function (head) {
  var maxCol = this.border.getMaxCol();
  var maxRow = this.border.getMaxRow();

  var leftCollided = (head.col === -1);
  var rightCollided = (head.col === maxCol);
  var topCollided = (head.row === -1);
  var bottomCollided = (head.row === maxRow);
  //撞墙标志
  var wallCollided = leftCollided || rightCollided || topCollided || bottomCollided;

  //身体碰撞标志
  var selfCollided = false;
  for(var i=1,len=this.segments.length;i<len;i++){
    if(head.equals(this.segments[i])){
      selfCollided = true;
    }
  }
  return wallCollided || selfCollided;
};
//移动蛇的位置
Snake.prototype.move = function (foods, score) {
  var head = this.segments[0];
  var newHead;

  this.currentDir = this.nextDir;
  switch (this.currentDir){
    case 'DOWN':
      newHead = new Block(this.border, head.col, head.row+1);
      break;
    case 'UP':
      newHead = new Block(this.border, head.col, head.row-1);
      break;
    case 'LEFT':
      newHead = new Block(this.border, head.col-1, head.row);
      break;
    case 'RIGHT':
      newHead = new Block(this.border, head.col+1, head.row);
      break;
  }

  if(this.isCollided(newHead)){
    this.dead = true; //死亡 Died
    return;
  }

  this.segments.unshift(newHead); //像头部加入新身体
  var _foods = foods.getFoods();
  for(var i=0,len=_foods.length;i<len;i++){
    if(newHead.equals(_foods[i].position)){
      score.add(_foods[i].getScore());
      score.updateDetailInfo(_foods[i].info);
      foods.removeFood(i);
      return;
    }
  }
  this.segments.pop(); //不得分，则去除尾部
};
//获取当前蛇的状态
Snake.prototype.getStatus = function () {
  return this.dead
};
//重置蛇的位置
Snake.prototype.reset = function () {
  this.dead = false; //死亡状态
  //初始身体
  this.segments = [
    new Block(this.border, 7,5),
    new Block(this.border, 6,5),
    new Block(this.border, 5,5)
  ];

  this.currentDir = 'RIGHT'; //当前头部方向
  this.nextDir = 'RIGHT'; //下一步头部方向
};