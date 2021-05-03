

let gamer = {
 y: 1,
 x: 1,
 susnost: "2"
}
var mask=getlevel(0);
var wnx=0;
var wny=0;
var numberlevel = 1;
var maxlevel = 4;
   console.log("getlevel("+numberlevel+")");
 var pole = getlevel(numberlevel);
console.log(pole[6][6]);
var startX;
var startY;
function postavitStart(){
for (i=0; i<15; i++){
 for (j=0; j<15; j++){
	 console.log(pole[i][j]);
 if (pole[i][j]=="2"){
	 startX=j;
	 startY=i;	 
 }
 if (pole[i][j]=="7"){
	 wnx=j;
	 wny=i;
 }
 }
 }
 }
postavitStart();
function vivod(pole){
   var str = "";
for (i=0; i<15; i++){
 for (j=0; j<15; j++){
if (pole[i][j]=="1"){
str = str + "<img style src='pictureForTry3/space.bmp' alt='нет картинки:(' />";
} 
else {
if (pole[i][j]=="0") {
str = str + "<img src='pictureForTry3/wall.bmp' alt='нет картинки:(' />";
}
else {
if (pole [i][j]=="2") {
str = str + "<img src='pictureForTry3/player.bmp' alt='нет картинки:(' />";
}
else {
if (pole[i][j]=="7") {
str = str + "<img src='pictureForTry3/finish.bmp' alt='нет картинки:(' />";
}
else {
	if (pole[i][j]==null) {
		str = str + "<img src='pictureForTry3/null.bmp' alt='нет картинки:(' />"
	}
}
}
}
}


}
str = str+"<br>";
}
//document.write(str);
return str;
}

//mask[wny][wnx]=pole[wny][wnx];
//      var flag = 1;
//   function isEmail() {
//    var status = document.getElementById("status");
//	var x = gamer.x
//	var y = gamer.y
	
	//if (flag == 1) {flag = 0;
	// status.innerHTML = x;
	//}else { flag = 1;
	// 	 status.innerHTML = y;
	//} 
   //}
   function restart(){
	   pole[gamer.y][gamer.x]="1";
	   gamer.x=startX;
	   gamer.y=startY;
	   pole[gamer.y][gamer.x]="2"; 
	   state();
   }
   
   function state (){

   var status = document.getElementById("status");
   cheVidno1();
   cheVidno2();
   status.innerHTML = vivod(pole);
   
   }
   
   function win(){
   for (i=0; i<5; i++){
 alert("Victory!");
}
   restart();
   resetMask(mask);
   pole[wny][wnx]="7";
  perehod();
   }
   function perehod(){
	    numberlevel++;
   if (numberlevel>maxlevel){
	   numberlevel=1
   }
   console.log("getlevel("+numberlevel+")");
    pole = getlevel(numberlevel);
	   console.log(pole);

	   postavitStart(pole);
	   restart();
	   
   }
   
      function up () {
   var x = gamer.x;
   var y = gamer.y;
   if (proof(y,x,-1,0)==1||proof(y,x,-1,0)==7){
   pole[y][x]="1";
    
   y=y-1;
   gamer.y = y;
   if (proof(y,x,0,0)==7) {win();}
   else {
     pole[y][x]= gamer.susnost;}
   }
   else {
   alert("Стена... Не повезло... ")
   }
   state()
   }
      function left () {
   var x = gamer.x;
   var y = gamer.y;
   if (proof(y,x,0,-1)==1||proof(y,x,0,-1)==7){
   pole[y][x]="1";
   x=x-1;
   gamer.x = x;
     if (proof(y,x,0,0)==7) {win();} 
	 else{
	 pole[y][x]= gamer.susnost; }
   }
   else {
   alert("Стена... Не повезло... ")
   }
   state()
   }
         function right () {
   var x = gamer.x;
   var y = gamer.y;
   if (proof(y,x,0,1)==1||proof(y,x,0,1)==7){ 
   pole[y][x]="1";
      x=x+1;
	  gamer.x = x;
   if (proof(y,x,0,0)==7) {win();}
  else {
   pole[y][x]= gamer.susnost;}
      
}
   else {
   alert("Стена... Не повезло... ")
   }
   state()
   } 
         function down () {
   var x = gamer.x;
   var y = gamer.y;
   if (proof(y,x,1,0)==1||proof(y,x,1,0)==7){
   pole[y][x]="1";  
   y=y+1;
  gamer.y = y;
   if (proof(y,x,0,0)=="7") {win();} 
   else {
 pole[y][x]= gamer.susnost;}
}
   else {
   alert("Стена... Не повезло... ")
   }
   state()
   }   
   function raspredelator (){
//     console.log('Key: ', event.key);
//    console.log('keyCode: ', event.keyCode);
   if (event.key=="ArrowUp") {up();}
   if (event.key=="ArrowDown") {down();}
   if (event.key=="ArrowRight") {right();}
   if (event.key=="ArrowLeft") {left();}
   
   }
function proof(pY,pX,dY,dX){
	if (pole[pY+dY][pX+dX]=="0"){
		return 0;
	} else { if (pole[pY+dY][pX+dX]=="1"){
	return 1;
	} else { if (pole[pY+dY][pX+dX]=="7"){
	return 7	
	}
	}
	}
	
}
function storona(y,x,sStr){
	if (proof(y,x,0,0)==1){
sStr = sStr + "<img style src='pictureForTry3/space.bmp' alt='нет картинки:(' />";
} 
else {
if (proof(y,x,0,0)==0) {
sStr = sStr + "<img src='pictureForTry3/wall.bmp' alt='нет картинки:(' />";
}
else {
if (proof(y,x,0,0)==2) {
sStr = sStr + "<img src='pictureForTry3/player.bmp' alt='нет картинки:(' />";
}
else {
if (proof(y,x,0,0)==7) {
sStr = sStr + "<img src='pictureForTry3/finish.bmp' alt='нет картинки:(' />";
}
}
}
}
return sStr;
	
} 
 function cheVidno1(){
	var x = gamer.x;
    var y = gamer.y;
	var vidimost = document.getElementById("vidimost");
	var vidStr = "<img src='pictureForTry3/void.bmp' alt='нет картинки:(' />";
	vidStr=storona(y-1,x,vidStr);
	vidStr=vidStr+"<img src='pictureForTry3/void.bmp' alt='нет картинки:(' style='transform:rotate(90deg)'/>"+"<br>";
	vidStr=storona(y,x-1,vidStr);
	vidStr=vidStr+"<img src='pictureForTry3/player.bmp' alt='нет картинки:(' />";
	vidStr=storona(y,x+1,vidStr);
	vidStr=vidStr+"<br>";
	vidStr=vidStr+"<img src='pictureForTry3/void.bmp' alt='нет картинки:(' style='transform:rotate(270deg)'/>";
	vidStr=storona(y+1,x,vidStr);
	vidStr=vidStr+"<img src='pictureForTry3/void.bmp' alt='нет картинки:(' style='transform:rotate(180deg)'/>";
 //   console.log(vidStr);
	vidimost.innerHTML = vidStr;
	
}
function resetMask(mask){
	for (i=0; i<15; i++){
 for (j=0; j<15; j++){
	if (mask[i][j]=="0"){
		mask[i][j]=null;
	}
	}}	
}
function smartVivod(pole,mask){
   var smartStr = "";
for (i=0; i<15; i++){
 for (j=0; j<15; j++){
if ((pole[i][j]=="1")&&(pole[i][j]==mask[i][j])){
smartStr = smartStr + "<img style src='pictureForTry3/space.bmp' alt='нет картинки:(' />";
} 
else {
if (pole[i][j]=="0" &&pole[i][j]==mask[i][j] ) {
smartStr = smartStr + "<img src='pictureForTry3/wall.bmp' alt='нет картинки:(' />";
}
else {
if (pole [i][j]=="2"/* &&pole[i][j]==mask[i][j] */) {
smartStr = smartStr + "<img src='pictureForTry3/player.bmp' alt='нет картинки:(' />";
}
else {
if (pole[i][j]=="7"/* &&pole[i][j]==mask[i][j] */) {
smartStr = smartStr + "<img src='pictureForTry3/finish.bmp' alt='нет картинки:(' />";
}
else {
	smartStr=smartStr + "<img src='pictureForTry3/tuman.bmp' alt='нет картинки:(' />";
}
}
}
}


}
smartStr = smartStr+"<br>";
}
//document.write(smartStr);
return smartStr;
}
 function cheVidno2(){

	 var vidimost2=document.getElementById("vidimost2");
	 var x = gamer.x;
     var y = gamer.y;
	 var vid2Str = "";
	 mask[y][x]=pole[y][x];
	 while (pole[y][x]=="1"||pole[y][x]=="2") {
		 y--;
		 mask[y][x]=pole[y][x];
	 } y = gamer.y;
	  while (pole[y][x]=="1"||pole[y][x]=="2") {
		 x--;
		 mask[y][x]=pole[y][x];
	 } x = gamer.x;
	  while (pole[y][x]=="1"||pole[y][x]=="2") {
		 x++;
		 mask[y][x]=pole[y][x];
	 } x = gamer.x;
	  while (pole[y][x]=="1"||pole[y][x]=="2") {
		 y++;
		 mask[y][x]=pole[y][x];
	 } y = gamer.y;
	vid2Str=smartVivod(pole,mask);
mask=getlevel(0);
vidimost2.innerHTML = vid2Str + "<br>"+vivod(mask);
//	 resetMask(mask);
 }
   



