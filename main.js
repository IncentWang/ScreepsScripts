var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var funcMemoryCleanup = require('func.memorycleanup');
var funcGeneratePixels = require('func.generatePixels');

module.exports.loop = function () {
    var harvestNum = _.filter(Game.creeps, (creep) => creep.memory.role == 'worker');
    var upgraderNum = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builderNum = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var repairerNum = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    if(harvestNum.length < 4){
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE,MOVE],'Worker' + Game.time, {memory: {role:'worker'}})
    }
    if(upgraderNum.length < 5){
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], 'upgrader' + Game.time, {memory: {role: 'upgrader'}})  
    }
    if(builderNum.length < 3){
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], 'builder' + Game.time, {memory: {role: 'builder'}})
    }
    if(repairerNum.length < 2){
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], 'repairer' + Game.time, {memory: {role: 'repairer'}})
    }
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        if(creep.memory.role == 'worker'){
            roleHarvester.run(creep)
        }
        if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep)
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep)
        }
        if(creep.memory.role == 'repairer'){
            roleRepairer.run(creep)
        }
    }
    funcMemoryCleanup.run();
    funcGeneratePixels.run(Game);
}