var tileSize;
var tileScale = 27;
var wallHeight;
var tileMap = [];
var tileWidth = tileSize * 2;
var tileMapWidth = 0;
var tileMapHeight = 0;
var tileMapX = 0;
var tileMapY = 0;
var startOnOuterTilesOK = false;

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
function countOuterTiles(){ //assumes that the playfield is enclosed in an unbroken, one-unit-thick wall
    var tileCount = 0;
    for (var row = 0; row < tileMap.length; row ++){
        tileCount ++;
        for (var column = 0; column < tileMap[row].length; column ++){
            if (tileMap[row][column] == 'wall'){
                return tileCount;
            }
        }
    }
}