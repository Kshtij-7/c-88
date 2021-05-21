var playerX = 10, playerY = 10;
var blockH = 30, blockW = 30;

var fab = new fabric.Canvas("myCanvas")

var playerOBJ = "", blockOBJ = "";

function addPlayer() {
    fabric.Image.fromURL('player.png', function (Img) {
        playerOBJ = Img;
        playerOBJ.scaleToWidth(150)
        playerOBJ.scaleToHeight(140)
        playerOBJ.set({
            top: playerY,
            left: playerX
        });
        fab.add(playerOBJ)
    })
}
function addBlock(getBlock) {
    fabric.Image.fromURL(getBlock, function (Img) {
        blockOBJ = Img;
        blockOBJ.scaleToWidth(blockW)
        blockOBJ.scaleToHeight(blockH)
        blockOBJ.set({
            top: playerY,
            left: playerX
        });
        fab.add(blockOBJ)
    })
}

window.addEventListener('keydown', mykeypress)

function mykeypress(e) {
    keypressed = e.keyCode;
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '67') {
        addBlock('cloud.jpg')
        console.log("cloud block selected by c");
    }
    if (keypressed == '84') {
        addBlock('trunk.jpg')
        console.log("trunk block selected by t");
    }
    if (keypressed == '68') {
        addBlock('dark_green.png')
        console.log("dark green block selected by d");
    }
    if (keypressed == '76') {
        addBlock('light_green.png')
        console.log("light green block selected by l");
    }
    if (keypressed == '71') {
        addBlock('ground.png')
        console.log("ground block selected by g");
    }
    if (keypressed == '87') {
        addBlock('wall.jpg')
        console.log("wall block selected by w");
    }
    if (keypressed == '89') {
        addBlock('yellow_wall.png')
        console.log("yellow wall block selected by y");
    }
    if (keypressed == '82') {
        addBlock('roof.jpg')
        console.log("roof block selected by r");
    }
    if (keypressed == '85') {
        addBlock('unique.png')
        console.log("unique block selected by u");
    }
    if (e.shiftKey == true && keypressed == '80') {
        blockH = blockH + 10; blockW = blockW + 10;
        document.getElementById("width").innerHTML = blockW;
        document.getElementById("height").innerHTML = blockH;
        console.log("block size increased by shift + p");
    }
    if (e.shiftKey == true && keypressed == '77') {
        blockH = blockH - 10; blockW = blockW - 10;
        document.getElementById("width").innerHTML = blockW;
        document.getElementById("height").innerHTML = blockH;
        console.log("block size decreased by shift + m");
    }
}

function up() {
    if( playerY <= 0 ) {
        window.alert('You are already on the top of the canvas!')
        console.log('error going up')
    }
    else {
        playerY = playerY - blockW;
        console.log(`-${blockW}`)
        fab.remove(playerOBJ)
        addPlayer();
    }
}

function down() {
    if( playerY >= 460 ) {
        window.alert('You are already on the bottom of the canvas!')
        console.log('error going down')
    }
    else {
        playerY = playerY + blockW;
        console.log(`+${blockW}`)
        fab.remove(playerOBJ)
        addPlayer();
    }
}

function left() {
    if( playerX <= 0 ) {
        window.alert('You are already on the left tip of the canvas!')
        console.log('error going left')
    }
    else {
        playerX = playerX - blockH;
        console.log(`-${blockH}`)
        fab.remove(playerOBJ)
        addPlayer();
    }
}

function right() {
    if( playerX >= 850 ) {
        window.alert('You are already on the right tip of the canvas!')
        console.log('error going right')
    }
    else {
        playerX = playerX + blockH;
        console.log(`+{blockH}`)
        fab.remove(playerOBJ)
        addPlayer();
    }
}