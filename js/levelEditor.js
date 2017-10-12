var levelEditorActive = false;
var levelEditorTileX = 0;
var levelEditorTileY = 0;
var levelEditorMap = [];
var levelEditorOutlineThickness;

function toggleLevelEditor(){
    if (levelEditorActive){
        levelEditorActive = false;
        console.log('The level editor is now inactive.');
    }
    else{
        levelEditorActive = true;
        console.log('The level editor is now active.')
    }
}
function moveLevelEditorTileUp(){
    if (levelEditorTileY > 0 && levelEditorTileX > 0){
        var newY = levelEditorTileY - 1;
        var newX = levelEditorTileX - 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileDown(){
    if (levelEditorTileY < 13 && levelEditorTileX < 13){
        var newY = levelEditorTileY + 1;
        var newX = levelEditorTileX + 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileLeft(){
    if (levelEditorTileY > 0 && levelEditorTileX < 13){
        var newY = levelEditorTileY - 1;
        var newX = levelEditorTileX + 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileRight(){
    if (levelEditorTileY < 13 && levelEditorTileX > 0){
        var newY = levelEditorTileY + 1;
        var newX = levelEditorTileX - 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileUpLeft(){
    if (levelEditorTileY > 0){
        var newY = levelEditorTileY - 1;
        var newX = levelEditorTileX;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileUpRight(){
    if (levelEditorTileX > 0){
        var newY = levelEditorTileY;
        var newX = levelEditorTileX - 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileDownLeft(){
    if (levelEditorTileX < 13){
        var newY = levelEditorTileY;
        var newX = levelEditorTileX + 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileDownRight(){
    if (levelEditorTileY < 13){
        var newY = levelEditorTileY + 1;
        var newX = levelEditorTileX;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}