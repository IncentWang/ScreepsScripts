var roleBuilder = {
    run : function(creep){
        if(creep.memory.building == true && creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.building = false;
        }
        if(creep.memory.building == true){
            var constructionSiteToBuildList = creep.room.find(FIND_CONSTRUCTION_SITES);
            var constructingRoad = _.remove(constructionSiteToBuildList, function(element){return element.structureType == STRUCTURE_ROAD});
            if(creep.build(constructionSiteToBuildList[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(constructionSiteToBuildList[0], {visualizePathStyle : {stroke: '#fff'}});
            }
        }
        else{
            var resourceToGet = creep.room.find(FIND_SOURCES)[1];
            if(creep.harvest(resourceToGet) == ERR_NOT_IN_RANGE){
                creep.moveTo(resourceToGet, {visualizePathStyle: {stroke: '#fff'}});
            }
            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
                creep.memory.building = true;
            }
        }
    }
}

module.exports = roleBuilder;