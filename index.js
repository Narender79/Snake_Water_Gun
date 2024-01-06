let arr=["Gun","Snake","Water"];
var ind;
$(".btn-primary").click(function(){
     var ran=Math.floor((Math.random())*3);
     var idk="./images/"+arr[ran]+".png";
     document.querySelector(".img2").setAttribute("src",idk);
     comapare(ran);
});

$(".pic").click(function(){
     vat=this.getAttribute('type');
     ind=parseInt(vat);
     var ch="./images/"+arr[ind]+".png";
     document.querySelector(".img1").setAttribute("src",ch);
})

function comapare(ran){
     if(ind==ran){
          document.querySelector("#Start").innerHTML="Draw";
     }
     else if((ind==0 && ran==1) || (ind==1 && ran==2) || (ind==2 && ran==0)){
          document.querySelector("#Start").innerHTML="Player Win!!!!";
     }
     else{
          document.querySelector("#Start").innerHTML="Computer Win!!!!";          
     }
}

