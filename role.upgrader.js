var roleUpgrader = {
    run : function(creep){
            if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0){
                creep.memory.upgrading = false;
            }
            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
                creep.memory.upgrading = true;
            }
            if(creep.memory.upgrading){
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.controller,{visualizePathStyle : {stroke: '#fff'}});
                }
            }
            else{
                var resourceToGet = creep.room.find(FIND_SOURCES)[0]
                if(creep.harvest(resourceToGet) == ERR_NOT_IN_RANGE){
                    creep.moveTo(resourceToGet, {visualizePathStyle : {stroke: '#fff'}});
                }
            }
        }
}


module.exports = roleUpgrader;