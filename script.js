var slideA = document.querySelector(".slideA");
var slideB = document.querySelector(".slideB");
var slideC = document.querySelector(".slideC");
var ham = document.querySelector("#hamburger");
var menuA =  document.querySelector(".menuA");
var menuB=  document.querySelector(".menuB");
var menuC =  document.querySelector(".menuC");
var menuD =  document.querySelector(".menuD");
// var menuE =  document.querySelector(".menuE");
var menu = document.querySelector(".menu");
setTimeout(function(){
	slideA.style.transform = "translateX(-80px)";
	slideB.style.backgroundColor = "#000";
	slideB.style.color = "#fff";
	slideB.style.fontSize = "50px";
	slideC.style.transform = "translateX(80px)";
}, 1200);
setTimeout(function(){
	slideB.style.backgroundColor = "#000";
	slideB.style.color = "#fff";
	slideC.style.transform = "translateX(40px)";
}, 1000);
setTimeout(function(){
	slideB.style.backgroundColor = "#fff";
	slideB.style.color = "#000";
	slideC.style.transform = "translateX(80px)";
}, 2000);

ham.addEventListener("click", function(){
	slideC.classList.toggle("normalize");
 this.classList.toggle('contract');
 menuA.classList.toggle('appear');
 menuB.classList.toggle('appear');
 menuC.classList.toggle('appear');
 menuD.classList.toggle('appear');
 // menuE.classList.toggle('appear');
});

 
 
 
 