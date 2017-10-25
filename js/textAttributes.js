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
    var scaleBy = 1;
    if (canvas.width > defaultCanvasWidth){
        difference = canvas.width - defaultCanvasWidth;
        scaleBy = (difference / canvas.width) + 1;
        console.log('scaleBy =' + scaleBy);
    }
    else if (canvas.width < defaultCanvasWidth){
        difference = defaultCanvasWidth - canvas.width;
        scaleBy = difference / canvas.width;
        console.log('scaleBy =' + scaleBy);
    }
    else{
        scaleBy = 1;
        console.log('scaleBy =' + scaleBy);
    }
    fontSize = Math.floor(defaultFontSize * scaleBy);
    mapSizeTextLineHeight = Math.floor(defaultMapSizeTextLineHeight * scaleBy);
    updateFont();
}