function bumpCounter() {
  var counter = 0

  function addBump() {
    return counter++
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}


function createAnimal(animalType) {
  function monsterMaker(deadlyDevice) {
    return {
      "animalType": animalType,
      "deadlyDevice": deadlyDevice
    }
  }

  return monsterMaker
}

var sharkCreator = createAnimal("Shark")
var sharkWithFrickinLaserbeam = createAnimal("Shark")("Laserbeam")
var sharkWithFrickinCannon = createAnimal("Shark")("Cannon")
