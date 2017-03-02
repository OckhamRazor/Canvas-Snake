/***********************************************
 * 控制类
 * @description 监听键盘事件
 ***********************************************/
function initControls () {
  document.onkeyup  = function (e) {
    var keyCode = e.keyCode;
    console.log(keyCode);
    switch (keyCode){
      case 32: // "space"
        this.start()
        break;
      case 37: // "LEFT",
        snake.setDir("LEFT");
        break;
      case 38: // "UP"
        snake.setDir("UP");
        break;
      case 39: // "RIGHT"
        snake.setDir("RIGHT");
        break;
      case 40: // "DOWN"
        snake.setDir("DOWN");
        break;
      default:
        break;
    }
  };
}