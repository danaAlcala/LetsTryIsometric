function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}
function moveEverything() {
    keepPlayerOffWalls();
    return true;
}
function updateAll() {
    moveEverything();
    checkForInput();
    updateTileSize();
    updateWallHeight();
    drawEverything();
    debug();
}

function setFont(size, font) {
    canvasContext.font = size + "px " + font;
}
