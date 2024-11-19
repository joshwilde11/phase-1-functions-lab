// Code your solution in this file!
let start = 44
let destination = 43

function distanceFromHqInBlocks(currentBlock){
    const hqblock = 42
return Math.abs(currentBlock - hqblock);
}

function distanceFromHqInFeet(currentBlock) {
    const blocks = distanceFromHqInBlocks(currentBlock)
    return Math.abs(blocks * 264)
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
   const blocksTraveled = Math.abs(startBlock - destinationBlock)
    return blocksTraveled*264
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264;

    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}