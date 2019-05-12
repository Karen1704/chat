// function main() {
//     var socket = io();
//     var chatDiv = document.getElementById('chat');
//     var input = document.getElementById('message');
//     var button = document.getElementById('submit');
 
//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;

//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
// }

// socket.on('display message', handleMessage);
// } // main closing bracket

// window.onload = main; 

    var socket = io();


function setup(){
    createCanvas(640,480);
}
function draw(){
    let val ={
        x:mouseX,
        y:mouseY
    }
    socket.emit("send coordinates",val)

    function handleMessage(msg) {
        if(mousePressed){
            fill(0);

    }
    else{
        fill(255);
    }
    ellipse(msg.x,msg.y,80,80)
}
socket.on("dispklay coordinates",handleMessage);
}
