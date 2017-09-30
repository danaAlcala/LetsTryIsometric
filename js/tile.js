var tileSize;
var tileScale = 27;
var wallHeight;
var tileMap = [];
var tileWidth = tileSize * 2;
var tileMapWidth = 0;
var tileMapHeight = 0;
var tileMapX = 0;
var tileMapY = 0;

function updateTileSize(){
    if (tileScale < 1){
        tileScale = 1;
    }
    else if (tileScale > 150){
        tileScale = 150;
    }
    tileSize = canvas.width / tileScale;
}
function updateWallHeight(){
    wallHeight = tileSize - (tileSize / 6);
}