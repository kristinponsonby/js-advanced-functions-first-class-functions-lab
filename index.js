

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(Math.max(drivers.length - 2, 0))
}

const selectingDrivers = []
    selectingDrivers[0] = returnFirstTwoDrivers
    selectingDrivers.push(returnLastTwoDrivers)

const createFareMultiplier = function(number) {
    return function(fare) { 
        (number * fare)
      }
    }
