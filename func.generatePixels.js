var generatePixels = {
    run : function(Game){
        if(Game.cpu.bucket > 5000){
            Game.cpu.generatePixel();
            console.log("Successfully generate a pixel");
        }
    }
}

module.exports = generatePixels;