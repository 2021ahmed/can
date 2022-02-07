let landbg=document.querySelector(".landbg");
landbg.style.backgroundImage ="url('slide1.jpg')";
let arrimg=['slide1.jpg','slide2.jpg','slide3.jpg'];

setInterval(function(){

    let random1=  Math.floor(  Math.random()*arrimg.length);
    landbg.style.backgroundImage ="url('"+arrimg[random1]+"')";


},2000);
let togle=document.querySelector(".togle");
let nav=document.querySelector("nav");
togle.addEventListener("click",function(){
//nav.style.cssText='left:0;transition:1s';
nav.classList.toggle("apear");



});
let first= document.getElementsByClassName("first")[0];
let second= document.getElementsByClassName("second")[0];
let third= document.getElementsByClassName("third")[0];

let head1= document.getElementsByClassName("head1")[0];
let head2= document.getElementsByClassName("head2")[0];
let head3= document.getElementsByClassName("head3")[0];

let point1= document.getElementById("point1");
let point2= document.getElementById("point2");
let point3= document.getElementById("point3");




point1.addEventListener("click",function(){
    first.style.display="block";
    head1.style.display="block";
   
    point1.style.background="#e04d47";

    second.style.display="none";
    third.style.display="none"
    head2.style.display="none";
    head3.style.display="none";
    point2.style.background="rgba(255, 255, 255, 0.5)";
    point3.style.background="rgba(255, 255, 255, 0.5)";
    })



point2.addEventListener("click",function(){
second.style.display="block";
head2.style.display="block";
point2.style.background="#e04d47";

first.style.display="none";
third.style.display="none"
head1.style.display="none";
head3.style.display="none";
point1.style.background="rgba(255, 255, 255, 0.5)";
point3.style.background="rgba(255, 255, 255, 0.5)";
})

point3.addEventListener("click",function(){
    third.style.display="block";
    head3.style.display="block";
    point3.style.background="#e04d47";


    first.style.display="none";
    second.style.display="none";
    head1.style.display="none";
    head2.style.display="none";
    point1.style.background="rgba(255, 255, 255, 0.5)";
    point2.style.background="rgba(255, 255, 255, 0.5)";
   
    })