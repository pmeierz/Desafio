/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, 
 retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */
 console.log("")

function largoDelNombre(nombre) {
  if (typeof nombre == "number") {
    output = "El parámetro recibido es invalido";
    return output;
  }

  largo = nombre.length;

  if (largo >= 0 && largo <= 5) {
    output = "Es un nombre corto. Su largo es de : " + largo;
  }

  if (largo >= 11) {
    output = "Es un nombre largo. Su largo es de : " + largo;
  }

  if (largo >= 6 && largo < 11) {
    output = "Nombre fuera de rango";
  }
  return output;
}
console.log("El resultado del Ejercicio 1 es : ")
console.log(largoDelNombre(124));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran 
 dentro de dicho arreglo
 */

function contarTipoNumber(arreglo) {
  total = arreglo.length;
  let cont = 0;

  for (let i = 0; i < total; i++) {
    if (typeof arreglo[i] == "number") {
      cont = cont + 1;
    }
  }
  output = "La cantidad de valores del tipo number son : " + cont;
  return output;
}

const lista = ["1", "3", 4, 7, "18", "20", "26"];
console.log("El resultado del Ejercicio 2 es : ")
console.log(contarTipoNumber(lista));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar 
 un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona) {
  const { nombre, edad, altura } = persona;
  output = `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura} `;
  return output;
}

const persona = {
  nombre: "Paul",
  edad: "40",
  altura: "1.93",
};
console.log("El resultado del Ejercicio 3 es : ")
console.log(datosPersona(persona));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar 
 cuántos números dentro de *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) {
  let cont = 0;

  for (let i = numero1; i <= numero2; i++) {
    if (i % 2 == 0) {
      cont += 1;
    }
  }

  output = "La cantidad de números pares obtenido fue de : " + cont;
  return output;
}
console.log("El resultado del Ejercicio 4 es : ")
console.log(obtenerCantidadDePares(1, 7));
console.log("")
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

//function obtenerCantidadDeSedes(econtact = {}) {
function obtenerCantidadDeSedes(econtact) {
  const { empresa, datos } = econtact;
  cantidadSedes = Object.keys(datos.sedes).length;
  output = "E-contact tiene " + cantidadSedes + " Sedes";
  return output;
}
console.log("El resultado del Ejercicio 5 es : ")
console.log(obtenerCantidadDeSedes(objetoFijo));
console.log("")
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

function obtenerTelefonoPeru(econtact) {
  const { empresa, datos } = econtact;
  fonoPeru = datos.sedes.Peru.telefono;

  if (typeof fonoPeru == "number") {
    output = "El telefono de la sede de Perú es : " + fonoPeru;
  } else {
    output = "Perú no tiene asignado un teléfono";
  }
  return output;
}
console.log("El resultado del Ejercicio 6 es : ")
console.log(obtenerTelefonoPeru(objetoFijo));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = {}) {
  const { empresa, datos } = econtact;
  sedes = datos.sedes;
  cantidadSedes = Object.keys(sedes).length;
  arregloSedes = Object.entries(Object.values(sedes));
  let contFono = 0;

  for (let i = 0; i < cantidadSedes; i++) {
    const { telefono } = arregloSedes[i][1];
    if (typeof telefono == "number") {
      contFono += 1;
    }
  }

  output = "Los paises que cuentan con telefono asignado son : " + contFono;
  return output;
}
console.log("El resultado del Ejercicio 7 es : ")
console.log(obtenerPaisesConTelefono(objetoFijo));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y 
 retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion, numero1, numero2) {
  if (
    operacion != "+" &&
    operacion != "-" &&
    operacion != "*" &&
    operacion != "/"
  ) {
    output = "La operación matemática que intenta realizar es inexistente";
  } else {
    if (operacion == "+") {
      resultado = numero1 + numero2;
      output = "El resultado de la suma es : " + resultado;
    }

    if (operacion == "-") {
      resultado = numero1 - numero2;
      output = "El resultado de la resta es : " + resultado;
    }

    if (operacion == "*") {
      resultado = numero1 * numero2;
      output = "El resultado de la multiplicacion es : " + resultado;
    }

    if (operacion == "/") {
      resultado = numero1 / numero2;
      output = "El resultado de la division es : " + resultado;
    }
  }

  return output;
}
console.log("El resultado del Ejercicio 8 es : ")
console.log(calculoMatematico("+", 15, 3));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor 
 y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario 
 retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero) {
  if (numero <= 0 || typeof numero != "number") {
    output = "El número ingresado debe ser mayor a 0";
  } else {
    arreglo = [];
    i = numero;
    while (i <= numero * 2) {
      arreglo.push(i);
      i++;
    }
    output = "El arreglo se compone de los siguientes numeros : " + arreglo;
  }
  return output;
}
console.log("El resultado del Ejercicio 9 es : ")
console.log(cargarArreglo(10));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros) {
  cont = 0;
  cantValoresArreglo = Object.keys(numeros).length;

  for (i = 0; i < cantValoresArreglo; i++) {
    if (numeros[i] % 5 == 0) {
      cont++;
    }
  }

  output = "El total de numeros divisibles por 5 es : " + cont;
  return output;
}
console.log("El resultado del Ejercicio 10 es : ")
console.log(divisiblesPorCinco([2, 5, 6]));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros) {
  total = numeros.length;
  let sumatoria = 0;

  for (let i = 0; i < total; i++) {
    sumatoria = numeros[i] + sumatoria;
  }
  output = "La sumatoria del arreglo es : " + sumatoria;
  return output;
}
console.log("El resultado del Ejercicio 11 es : ")
console.log(sumatoria([2, 2]));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function verificarCantEmpleados(econtact) {
  totalEmpleados = econtact.datos.empleados;
  const { datos } = econtact;
  sedes = datos.sedes;

  arregloSedes = Object.values(sedes);
  totalSedes = arregloSedes.length;
  totalEmpleadosSedes = 0;

  for (let i = 0; i < totalSedes; i++) {
    totalEmpleadosSedes = arregloSedes[i].empleados + totalEmpleadosSedes;
  }

  resultado = totalEmpleadosSedes === totalEmpleados;
  return resultado;
}
console.log("El resultado del Ejercicio 12 es : ")
console.log(verificarCantEmpleados(objetoFijo));
console.log("")


//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo) {
  cantItems = arreglo.length;
  nuevoArreglo = [];

  for (let i = 0; i < cantItems; i++) {

    agregarItem = nuevoArreglo.push(arreglo[i] ** 2);


  }

  output = nuevoArreglo;
  return output;

}
console.log("El resultado del Ejercicio 13 es : ")
console.log(calcularCuadrados(arregloFijo));
console.log("")


//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

function validarArreglo(numeros) {
  
  if (numeros.length >= 6) {
    sumatoria = 0;

    for (let i = 0; i < numeros.length; i++) {

      sumatoria = sumatoria + numeros[i];
      

    }


    if (sumatoria > 100) {
      output = true;


    }
    else {
      output = false;
    }

  }
  else {
    output = false;
  }
  return output;
}
console.log("El resultado del Ejercicio 14 es : ")
console.log(validarArreglo([20,20,20,20,10,10]));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) 
 cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres, nombre) {

  output = nombres.includes(nombre);

  return output;



 }
 console.log("El resultado del Ejercicio 15 es : ")
console.log(validarNombre(["Poleyer","Paul"],"Paul"));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros,numero) { 

  let output = numeros.indexOf(numero);
  return output;


}
console.log("El resultado del Ejercicio 16 es : ")
console.log(devolverPosicion([1,2,3],3));
console.log("")



//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

function verificarSector(econtact, sector) {
  arregloSectores = Object.values(econtact.datos.sectores);
  output = arregloSectores.includes(sector);
  return output;
 }
 console.log("El resultado del Ejercicio 17 es : ")
console.log(verificarSector(objetoFijo,"Contabilidad"))
console.log("")



//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleados(econtact, cantidad) { 
    
  const { datos } = econtact;
  sedes = datos.sedes;
  

  arregloSedes = Object.values(sedes);
  totalSedes = arregloSedes.length;
  contSedes = 0;

for (let i = 0; i < totalSedes; i++) {
  
  if (arregloSedes[i].empleados < cantidad) {
    contSedes++;

  }
  }

  return contSedes;
  


}
console.log("El resultado del Ejercicio 18 es : ")
console.log(verificarCantidadEmpleados(objetoFijo,46));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

function verificarClave(objeto, clave) 
{ 
  objeto = Object.keys(objeto);
  output = objeto.includes(clave);
  return output;
}

const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
console.log("El resultado del Ejercicio 19 es : ")
console.log(verificarClave(alumno,"nombre"));
console.log("")

//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(arregloNumerosReales) {
  arregloEntero = [];
  largoArreglo = arregloNumerosReales.length;  

  for (let i = 0; i < largoArreglo; i++) {
    
    arregloEntero.push(Math.trunc(arregloNumerosReales[i]));
  }
  
  return arregloEntero;
 }

 const numReal = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];
 console.log("El resultado del Ejercicio 20 es : ") 
 console.log(quitarParteDecimal(numReal));
 console.log("")