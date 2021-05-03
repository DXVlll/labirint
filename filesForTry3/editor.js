// bnbb
var mpstruc = getlevel(0);
function use(thing){
	return thing;
	
}
function vvod( where, what){
	var dok;
dok = document.getElementById(where);
   dok.innerHTML = what;//vivod(what,15,15);
}
for (i=0; i<15; i++){
for (j=0; j<15; j++){
	mpstruc[i][j]="0";
}}
function vivod(map,width,height){
   var str = "";
for (i=0; i<height; i++){
 for (j=0; j<width; j++){
if (map[i][j]=="1"){
str = str + "<button onclick='change("+i+","+j+")' dblclick='change("+i+","+j+",0)' > <img src='pictureForTry3/space.bmp' alt='нет картинки:(' /> </button>";
} 
else {
if (map[i][j]=="0") {
str = str + "<button onclick='change("+i+","+j+")' dblclick='change("+i+","+j+",0)' > <img src='pictureForTry3/wall.bmp' alt='нет картинки:(' /> </button>";
}
else {
if (map [i][j]=="2") {
str = str + "<button onclick='change("+i+","+j+")' dblclick='change("+i+","+j+",0)' > <img src='pictureForTry3/player.bmp' alt='нет картинки:(' /> </button>";
}
else {
if (map[i][j]=="7") {
str = str + "<button onclick='change("+i+","+j+")' dblclick='change("+i+","+j+",0)' > <img src='pictureForTry3/finish.bmp' alt='нет картинки:(' /> </button>";
}
else {
	if (map[i][j]==null) {
		str = str + "<button onclick='change("+i+","+j+")' dblclick='change("+i+","+j+",0)' > <img src='pictureForTry3/null.bmp' alt='нет картинки:(' /> </button>";
	}
// <button onclick='change('+i+','+j+')' > "<img src='pictureForTry3/null.bmp' alt='нет картинки:(' />" </button>
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
function  change(y,x){
	if (!event.shiftKey){
	if (mpstruc [y][x]==null) {
		mpstruc[y][x]="0";
	} else {	if (mpstruc [y][x]=="0") {
		mpstruc [y][x]="1";
	} else {	if (mpstruc [y][x]=="1") {
		mpstruc[y][x]=null;
 	} }
	}  
	} else{
		if (mpstruc [y][x]==null){
			mpstruc[y][x]="2";
		}else{
		if (mpstruc [y][x]=="2"){
			mpstruc[y][x]="7";
		} else {
			if (mpstruc [y][x]=="7"){
				mpstruc[y][x]=null;
			}
		}
	}
	}
console.log(mpstruc[y][x]);
vvod('mapedit',vivod(mpstruc,15,15));
}	
function goodlook(map,width,height){
	var str="";
	for (i=0; i<height; i++){
		str=str+"["
for (j=0; j<width; j++){
	str=str+'"'+map[i][j]+'",'
}
str=str+"],"+"<br>"
}
	return str;
}



