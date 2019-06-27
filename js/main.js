/*下拉栏*/
var clickBtn=document.getElementsByClassName("nav_headerin")[0];
var dropdown_menu=document.getElementsByClassName("dropdown_menu")[0];
var isOpen=true;
clickBtn.addEventListener("click",function(){
    isOpen=!isOpen;
    if (!isOpen){
        dropdown_menu.style.display="none";
    }
    else{
        dropdown_menu.style.display="block";
    }
})
/*轮播图*/
var oPrev=document.getElementById('prev');
var oNext=document.getElementById('next');
var oWrap=document.getElementById('wrap');
var oButtons=document.getElementById('list');
var oMain=document.getElementById('main');
var oLi=oButtons.getElementsByTagName('li');


var timer=null;
var index=0;
var flag=true;
var timer2=null;

function moveImg(dis){
    
    var time=400;
    var eachTime=20;
    var eachDis=dis/(time/eachTime);
    var newLeft=oMain.offsetLeft+dis;
    flag=false;
    function eachMove(){
        if(dis>0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft>newLeft){
            oMain.style.left=oMain.offsetLeft + eachDis + "px";
        }
        else{
            flag=true;
            clearInterval(timer);
            oMain.style.left=newLeft+"px";
            if(newLeft == -6076){
                oMain.style.left=-1519+"px";
            }
            if (newLeft==0){
                oMain.style.left=-4557+"px";
            }
            
        }
    }
    timer=setInterval(eachMove,eachTime);
}


oPrev.onclick=function(){
    if (!flag) return;
    moveImg(1519);
    if (index==0){
        index=2;
    }
    else{
        index--;
    }
    oLiStyle();
    
}
oNext.onclick=function(){
    if (!flag) return;
    moveImg(-1519);
    if(index==2){
        index=0;
    }
    else{
        index++;
    }
    oLiStyle();
}
function oLiStyle(){
    for (var i=0;i<oLi.length;i++){
        if(oLi[i].className=='active'){
            oLi[i].className="";
            break;
        }
    }
    oLi[index].className="active";
}
for (var i =0;i<oLi.length;i++){
    oLi[i].value=i;
    (function(){
        oLi[i].onclick=function(){
            if(this.value==index) return;
            var offset=(this.value-index)* -1519;
            moveImg(offset);
            index=this.value;
            oLiStyle();
        }
    })();
}
//自动轮播
timer2=setInterval(oNext.onclick,2000);
oWrap.onmouseover=function(){
    clearInterval(timer2);
};
oWrap.onmouseout=function(){
    timer2=setInterval(oNext.onclick,2000);
};