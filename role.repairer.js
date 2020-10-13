var roleRepairer = {
    run : function(creep){
        if(creep.memory.repairing == true && creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.repairing = false;
        }
        if(creep.memory.repairing){
            var repairingList = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.hits < structure.hitsMax);
            var adjustedList = _.remove(repairingList, function(structure) {return structure.structureType == STRUCTURE_WALL && structure.hits > 150000})
            if(creep.repair(repairingList[repairingList.length - 1]) == ERR_NOT_IN_RANGE){
                creep.moveTo(repairingList[repairingList.length - 1], {visualizePathStyle : {stroke: '#fff'}})
            }
            
        }
        else{
            var resourceToGet = creep.room.find(FIND_SOURCES);
            if(creep.harvest(resourceToGet[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(resourceToGet[0], {visualizePathStyle : {stroke: '#fff'}})
            }
            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
                creep.memory.repairing = true;
            }
        }
    }
}

module.exports = roleRepairer;