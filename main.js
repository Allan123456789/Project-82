var mouseEvent ="empty";
var last_position_of_x,last_position_of_y ;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

 color = "black";
 width_of_line=5;

 canvas.addEventListener("mousedown",my_mouse_down);

 function my_mouse_down(e){
    color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e){
    curren_pos_of_mouse_x=e.clientX-canvas.offsetLeft;
    curren_pos_of_mouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
       
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(curren_pos_of_mouse_x,curren_pos_of_mouse_y,40,0,2*Math.PI);
        ctx.stroke();

    ctx.moveTo(last_position_of_x,last_position_of_y);

    ctx.stroke();}

    last_position_of_x=curren_pos_of_mouse_x;
    last_position_of_y=curren_pos_of_mouse_y;
}
canvas.addEventListener("mouseup",my_mouse_up);
 function my_mouse_up (e){
     mouseEvent="mouseUP"
 }

 canvas.addEventListener("mouseleave",my_mouse_leave)

 function my_mouse_leave (e){
 mouseEvent="mouseLeave"
 }

 function clearArea(){
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.heigth);

 }
