/**
 * Created by Administrator on 2018/1/5.
 */
function animate(node,targetvalue,callback){
  if(node.flag!=undefined){
    clearInterval(node.flag);
  }
  node.flag=setInterval(function () {
    var currentvalue=node.offsetLeft;
    var step=(targetvalue-currentvalue)/20;
    if(step>0){
      step=Math.ceil(step);
    }
    else if(step<0){
      step=Math.floor(step);
    }
    if(currentvalue==targetvalue){
      clearInterval(node.flag);
      if(callback!=undefined){
        callback();
      }
      return;
    }
    node.style.left=currentvalue+step+'px';
  },15);
}