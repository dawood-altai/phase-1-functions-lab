function distanceFromHqInBlocks(st1)
{
    if(st1>=42)
    {
        return (st1-42);
    }
    else
    {
        return (42-st1);   
    }
    
}

const value = distanceFromHqInBlocks(43)
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))

    
function distanceFromHqInFeet(feet)
{
    if(feet>=42)
    {
        return (feet-42)*264;
    }
    else
    {
        return (42-feet)*264;   
    }
}

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

function distanceTravelledInFeet(start, destination)
{
    if(destination > start)
    {
        return (destination-start)*264;
    }
    else
    {
        return (start-destination)*264;   
    }
}

console.log(distanceTravelledInFeet(43,48))
console.log(distanceTravelledInFeet(50,60))
console.log(distanceTravelledInFeet(34,28))

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else {
      return 25;
    }
  }
  
  
  console.log(calculatesFarePrice(43,44))
  console.log(calculatesFarePrice(34,32))
  console.log(calculatesFarePrice(50,58))
  console.log(calculatesFarePrice(34,24))