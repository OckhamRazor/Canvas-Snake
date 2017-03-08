/****************************************************
 * 场景类
 ***************************************************/
var Scene = function () {
  this.container = []; //场景容器
};
//场景渲染
Scene.prototype.render = function (ctx) {
  //绘制其它元素
  for(var i=0,len = this.container.length;i<len;i++){
    if(isArray(this.container[i])){
      for(var j=0,len2=this.container[i].length;j<len2;j++){
        if(typeof this.container[i][j].draw === 'function'){
          this.container[i][j].draw(ctx);
        }
      }
    }else{
      if(typeof this.container[i].draw === 'function'){
        this.container[i].draw(ctx);
      }
    }
  }
};
//添加元素
Scene.prototype.add = function (elem) {
  this.container.push(elem);
};
