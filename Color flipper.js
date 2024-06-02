//Second code created by Emmanuel Adewale(The mini programmer)Note that this secction is for the color picker 
const body = document.getElementsByTagName("body")[0]
 function setcolor( name) {
    body.style.backgroundColor=name;
 }
 
 function randomcolor(){
    const red=math.random(math.random()*255)
    const green=math.random(math.random()*255)
    const blue=math.random(math.random()*255)
    const color="rgb(${red},${green},${blue})"
    body.style.backgroundColor = color;

 }
 randomcolor();