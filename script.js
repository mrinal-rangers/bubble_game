
var make_bubble= ()=>{
    var container = document.querySelector("#big_box_bottom");

    var clutter =``;
    for(var i=1;i<66;i++){
        var t =Math.floor(Math.random()*10);
    clutter+= `<div class = "bubble">${t}</div>`;
    }
    
    container.innerHTML =clutter;
};



var time =30;
var time_count =document.querySelector("#timerval");
var hit_count =document.querySelector("#hitval");
var score_count =document.querySelector("#scoreval");




var get_new_hit =() =>{
var t= Math.floor(Math.random()*10);
hit_count.textContent=t;
}

var timer_func =()=>{
    var time_interval =setInterval(() => {
        if(time>0){
            time--;
            time_count.textContent =time;
        }else{
            time=30;
            document.querySelector("#big_box_bottom").innerHTML="";
            time_count.textContent =time;
            flag=true;
            clearInterval(time_interval);
        }
        
    }, 1000);

};

var flag =true;
var start_btn = document.querySelector("#starter");

start_btn.addEventListener("click",()=>{
    if(flag){
        timer_func(); 
        flag=false;
        score_count.innerHTML= 0 ;
        make_bubble();
        get_new_hit();
    }
});
   
    document.querySelector("#big_box_bottom")
    .addEventListener("click",(details)=>{
    console.log(details.target);
    if(details.target.textContent === hit_count.textContent){
        get_new_hit();
        var curr_score=Number(score_count.textContent) ;
        score_count.textContent=curr_score+10;
    }
    });


