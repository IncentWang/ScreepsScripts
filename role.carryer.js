var roleCarryer = {
    run : function(creep){
        var resourceContainer = creep.room.find(FIND_MY_STRUCTURES, 
            {filter : {structureType : StructureContainer || StructureStorage}})
        var containerCanBeUsed = _.filter(resourceContainer, function(container){return container.store.getUsedCapacity(RESOURCE_ENERGY)!= 0})
        if(containerCanBeUsed.length() > 0){
            var resourceDestination = creep.room.find(FIND_MY_STRUCTURES,
                {filter: {structureType : SturctureTower || StructureSpawn || StructureExtension}})
            resourceDestination.forEach(element => {
                if(element.store.getFreeCapacity(RESOURCE_ENERGY) > 0){
                    if(creep.transfer(RESOURCE_ENERGY, element) == ERR_NOT_IN_RANGE){
                        creep.moveTo(element);
                    }
                }
            });
            }
        }
}
