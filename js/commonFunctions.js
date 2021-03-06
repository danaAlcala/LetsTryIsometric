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
    updateUnitOfAltitude();
    updateGrassHeight();
    updateWallHeight();
    updateCamMovementSpeed();
    updateMapSizeText();
    drawEverything();
    debug();
}

function setFont(size, font) {
    canvasContext.font = size + "px " + font;
}

function stringHasSpecialCharacters(string){
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?.]/g.test(string); // regular expression returns boolean
}

function stringHasAlphabeticalCharacters(string){
    return /[a-z]/i.test(string);
}