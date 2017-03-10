var Game = function () {
  this.ctx = null;
  this.status = 'READY'; //["READY","RUNNING","PAUSED","END"] 当前游戏状态
  this.tip = null; //信息类
  this.score = null; //创建分数
  this.snake = null; //贪吃蛇
  this.foods = null; //食物
  this.border = null; //参考系
  this.background = null; //网格背景
  this.scene = null; //场景

  this.lastTime = 0;
  this.now = 0;

  this.fre = 200; //刷新间隔 ms
};

//游戏渲染
Game.prototype.render = function (canvas, ctx) {
  if(this.status === 'RUNNING'){
    //绘制场景
    this.now = +new Date();
    if(this.now - this.lastTime > this.fre){
      this.lastTime = this.now;
      //判断游戏是否结束
      if(this.snake.getStatus()){
        this.end(false); //游戏结束
      } else if(this.foods.isEmpty()){
        this.end(true); //游戏胜利
      } else{
        ctx.clearRect(0, 0, canvas.width, canvas.height); //清除画布
        this.snake.move(this.foods, this.score); //移动蛇
        this.scene.render(ctx); //重新渲染场景
      }
    }
  }
};
//游戏初始化
Game.prototype.init = function (canvas, ctx, ratio) {
  this.ctx = ctx; //画布

  this.scene = new Scene(); //创建场景
  this.border = new Border(10, canvas.width/ratio-150, canvas.height/ratio,2,2); //创建参考系
  this.tip = new Tip({x: (canvas.width/ratio-150)/2, y: canvas.height/ratio/2}); //信息类
  this.score = new Score(canvas.width/ratio-130,5); //创建分数记录
  this.snake = new Snake(this.border); //创建角色 - 贪吃蛇
  this.foods = new Foods(this.border);
  this.foods.setData(
    [
      {x:1,y:1, info:{count: 1, datetime: '2017-02-12',style:'#d6e685'}},
      {x:3,y:1, info:{count: 7, datetime: '2017-02-12',style:'#8cc665'}},
      {x:4,y:7, info:{count: 1, datetime: '2017-02-12',style: "#44a340"}},
      {x:6,y:7, info:{count: 3, datetime: '2017-02-12',style: "#1e6823"}}
    ]
  );
  this.foods.create(); //创建食物集合

  this.background = new BackGround(this.border); //创建网格背景

  this.scene.add(this.background);
  this.scene.add(this.score);
  this.scene.add(this.snake);
  this.scene.add(this.foods);

  console.log(this.foods);

  this.initControl();
  this.scene.render(ctx);
  this.tip.start(ctx);
};
//游戏初始化
Game.prototype.start = function () {
  this.status = 'RUNNING';
};
//游戏暂停
Game.prototype.pause = function () {
  this.status = 'PAUSED';
  this.tip.continue(this.ctx);
};
//游戏继续
Game.prototype.continue = function () {
  this.status = 'RUNNING';
};
//游戏结束
Game.prototype.end = function (status) {
  this.status = 'END';
  if(status){
    this.tip.win(this.ctx);
  }else{
    this.tip.gameOver(this.ctx);
  }
};
//游戏重置
Game.prototype.reset = function () {
  this.snake.reset();
  this.score.reset();
  this.foods.reset();
};
//游戏控制器
Game.prototype.initControl = function () {
  var that = this;
  document.onkeydown  = function (e) {
    var keyCode = e.keyCode;
    console.log(keyCode);
    switch (keyCode){
      case 32: // "space"
        if(that.status === 'READY'){
          that.start();
        }else if(that.status === 'END'){
          that.reset();
          that.start();
        }else if(that.status === 'RUNNING') {
          that.pause();
        }else if(that.status === 'PAUSED'){
          that.start();
        }
        break;
      case 37: // "LEFT",
        that.snake.setDir("LEFT");
        break;
      case 38: // "UP"
        that.snake.setDir("UP");
        break;
      case 39: // "RIGHT"
        that.snake.setDir("RIGHT");
        break;
      case 40: // "DOWN"
        that.snake.setDir("DOWN");
        break;
      default:
        break;
    }
  };
};



