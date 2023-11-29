export function validatePanNumber(panNumber) {
    // Check if the provided PAN number is a string
    if (typeof panNumber !== 'string') {
      return false;
    }
  
    // Check if the PAN number follows the specified format
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (!panRegex.test(panNumber)) {
      return false;
    }
  
    // Check if the 4th character is 'P'
    if (panNumber[3] !== 'P') {
      return false;
    }
  
    // Check if the first 5 characters and the 10th character are alphabets
    const alphabetsRegex = /^[A-Z]+$/;
    if (!alphabetsRegex.test(panNumber.substr(0, 5)) || !alphabetsRegex.test(panNumber[9])) {
      return false;
    }
  
    // PAN card number is valid
    return true;
  }