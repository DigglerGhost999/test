async function getRoom(roomId) {
    try {
        const response = await fetch(`/api/rooms/${roomId}`);
        if (response.status == 200) {
           var room = await response.json();
           return room;
        } else {
            // Treat errors like 404 here
            console.log(response);
        }
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
    }
}           
async function play(roomId, card) {
    try {
        const response = await fetch(`/api/rooms/${roomId}/plays`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({ cardPlayed: card}) 
        });
        if (response.status == 200) {
           var  result= await response.json();
           return result;
        } else {
            // Treat errors like 404 here
            console.log(response);
        }
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
    }
}
var show;

async function setup() {
    var canvas = createCanvas(600, 300);
    canvas.parent('game');
    var room = await getRoom(1);
    show = room.roo_topcard; 
}  
function draw() {
    background(220);
    textSize(20);
    fill(0,0,0);
    textAlign(CENTER, CENTER);
    text(show,width/2,height/2);
}
async function mouseClicked() {
    var room = await getRoom(1);
    show = room.roo_topcard;     
}
async function keyPressed() {
    let playCard = '';
    switch(key) {
        case 'r': playCard = "rock"; break;
        case 'p': playCard = "paper"; break;
        case 's': playCard = "scissors"; break;
    }
    if (play) {
        var result = await play(1,playCard);
        show = result.msg;    
    } 
}
