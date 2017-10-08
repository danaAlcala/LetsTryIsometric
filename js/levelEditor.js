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