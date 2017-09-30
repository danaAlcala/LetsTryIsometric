var player;

function Player(){
    this.location;
    this.locationTrail;
}
function keepPlayerOffWalls(){
    var getOut = false;
    if (player.location.x != undefined){
        if (tileMap[player.location.x][player.location.y] == 'wall'){
            if (player.locationTrail.x == player.location.x && player.locationTrail.y == player.location.y){ // If there hasn't been any previous movement...
                // Loop through tilemap until you get a non-wall tile
                for (var row = 0; row < tileMap.length; row ++){
                    for (var column = 0; column < tileMap[row].length; column ++){
                        if (tileMap[row][column] != 'wall'){
                            player.location.x = row;
                            player.location.y = column;
                            getOut = true;
                        }
                        if (getOut){
                            break;
                        }
                    }
                    if (getOut){
                        break;
                    }
                }
            }
            else{
                player.location.x = player.locationTrail.x; // If there has been previous movement, keep player at initial location.
                player.location.y = player.locationTrail.y;
            }
        }
        console.log('Location: (' + player.location.x + ',' + player.location.y +')\nLastLocation: (' + player.locationTrail.x + ',' + player.locationTrail.y + ')');
    }
}