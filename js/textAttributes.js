var defaultMapSizeTextLineHeight = 50;
var mapSizeTextLineHeight = 50;
var defaultFontSize = 40;
var fontSize = 40;
var fontStyle = 'Impact';

function updateFont(){
    setFont(fontSize,fontStyle);
}
function updateMapSizeText(){
    var difference = 0;
    var scaleBy = 0;
    if (canvas.width > defaultCanvasWidth){
        difference = canvas.width - defaultCanvasWidth;
        scaleBy = (difference / canvas.width) + 1;
    }
    if (canvas.width < defaultCanvasWidth){
        difference = defaultCanvasWidth - canvas.width;
        scaleBy = difference / canvas.width;
    }
    else{
        scaleBy = 1;
    }
    fontSize = fontSize * scaleBy;
    mapSizeTextLineHeight = mapSizeTextLineHeight * scaleBy;
    updateFont();
}