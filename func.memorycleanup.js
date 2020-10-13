var funcMemoryCleanup = {
    run : function(){
        for(i in Memory.creeps){
            if(!Game.creeps[i]){
                delete Memory.creeps[i];
            }
        }
    }
}

module.exports = funcMemoryCleanup;