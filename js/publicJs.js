function addEvent(obj,type,fn){
  if(obj.attachEvent){ //ie
    obj.attachEvent('on'+type,function(){
      fn.call(obj);
    })
  }else{
    obj.addEventListener(type,fn,false);
  }
}
addEvent(window,'scroll',function() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动高度
  const headerInfo = document.getElementsByClassName("header")[0]
  if(scrollTop > 50){
    headerInfo.classList.add("header_background")
  }else{
    headerInfo.classList.remove("header_background")
  }
})
