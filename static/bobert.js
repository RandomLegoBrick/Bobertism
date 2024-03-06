var selected="bobert";
var mousePos=[0,0];
var copyBox=document.getElementById("copyBox");
function noClick(){
    copyBox.hidden=true;
}
function clicked(which){
    selected=which;
    setTimeout(()=>{
        copyBox.hidden=false;
        copyBox.style.top=mousePos[1]+"px";
        copyBox.style.left=mousePos[0]+"px";
    },5);
}
async function copy(){
    const img = await fetch(selected);
    const blob = await img.blob();
    await navigator.clipboard.write([
        new ClipboardItem({ 'image/png' : blob })
    ]);
    setTimeout(()=>{
        document.getElementById("copied").hidden=false;
        document.getElementById("copied").style.top=mousePos[1]+"px";
        document.getElementById("copied").style.left=mousePos[0]+"px";
        setTimeout(()=>{
            document.getElementById("copied").hidden=true;
        },2000);
    },5);
}
function download(){
    document.getElementById("downloadClick").href=selected;
    document.getElementById("downloadClick").download=selected.split(".")[0];
    document.getElementById("downloadClick").click();
}
document.addEventListener("click",e=>{
    mousePos[0]=e.pageX;
    mousePos[1]=e.pageY;
});