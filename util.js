function displayZipCodes(zipCodes) {
  const sortedArray = []
  const groups = []
  
  zipCodes.forEach((zipCode, index) => {
    sortedArray.push(zipCode)
  })
  
  sortedArray.sort()
  
  let currentGroup = []
  let lastZip = 0
  
  sortedArray.forEach((zip, index) => {
    if (index !== 0) {
      if (lastZip === zip - 1) {
        currentGroup.push(zip)
      } else {
        groups.push(currentGroup)
        currentGroup = [zip]
      }
    } else {
      currentGroup.push(zip)
    }
    lastZip = zip
  })
  
  groups.push(currentGroup)
  
  let returnStr = ""
  
  groups.forEach((group, index) => {
    if (group.length > 1) {
      returnStr += `${group[0]}-${group[group.length-1]}`
    } else {
      returnStr += group[0]
    }
    
    if (index !== groups.length-1) {
      returnStr += ", "
    }
  })
  
  return returnStr
}

module.exports = {displayZipCodes}