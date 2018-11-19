/*If the function is passed a valid PIN string, return true, else return false.
  validatePIN("1234") === true
  validatePIN("12345") === false
  validatePIN("a234") === false
*/

function validatePIN (pin) {
 return /^([0-9]{4}|[0-9]{6})$/.test(pin)
}