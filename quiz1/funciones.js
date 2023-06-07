const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  // Devuelve el mayor número de un array
function maxNumber() {

  let result = 0;
  // Recorremos el array para obtener el valor mayor
  for(var i=0; i< array.length; i++){
      let number = array[i];
      // En la primera vuelta cogemos el valor
      if(i == 0){
          result = number;
      }
      // En las demás cogemos el valor si es mayor al que tenemos
      else{
          if(number > result){
              result = number;
          }
      }
  }
  // Siempre devuelve el mayor de todos
  return result;
}

function minNumber() {
  
  let result = 0;
  // Recorremos el array para obtener el valor mayor
  for(var i=0; i< array.length; i++){
      let number = array[i];
      // En la primera vuelta cogemos el valor
      if(i == 0){
          result = number;
      }
      // En las demás cogemos el valor si es mayor al que tenemos
      else{
          if(number < result){
              result = number;
          }
      }
  }
  // Siempre devuelve el menor de todos
  return result;
}

module.exports = {
  maxNumber: maxNumber,
  minNumber: minNumber,
}