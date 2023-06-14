function validation() {                                          //Funcion manejadora de las validaciones
    var okUsr = validateUsr();                                   //Función que valida el input "usr"
    var okPass = validatePass();                                 //Función que valida el input "pass"

    if (okUsr && okPass) return true;                            //Condicional, ambas funciones han de ser true
    return false;
}

function validateUsr() {
    var ok = true;                                               //Variable de estado
    var userName = document.getElementById("usr").value;         //Obtemeos valor del input con id "usr"
    var inputUsr = document.getElementById("usr");               //Seleccionamos elemento input con id "usr"
    var error = document.getElementsByClassName("error")[0];     //Seleccionamos primer elemento de clase "error"
    var msgError = "";                                           //Inicializamos msgError vacío
    error.innerHTML = "";                                        //Inicializamos mensaje en web vacío
    inputUsr.style.border = "";                                  //Inicializamos estilo del input vacío

    if (userName.length == 0) {                                  //Verificamos que el campo no este vacío
        ok = false;
        inputUsr.placeholder = "CAMPO VACIO"                     //Añaadimos "sugerencia" al input "usr"
        msgError = "Este campo es obligatorio, no puede estar vacio";
    }
    else if (!/^[a-zñ]{3,12}$/.test(userName)) {                 //Comparamos el valor del imput con la expresión regular
        ok = false;
        msgError = "Solo se admiten letras minusculas y la longitud debe de ser entre 3 y 12 caracteres";
    }

    if (!ok) {                                                   //En caso de error, mostramos mensaje de error
        inputUsr.style.border = "2px solid red";                 //Añadimos mensaje a la web
        error.innerHTML = msgError;
        return false;
    }

    return true;
}

function validatePass() {
    var ok = true;
    var passWord = document.getElementById("pass").value;
    var inputPass = document.getElementById("pass");
    var error = document.getElementsByClassName("error")[1];    //Seleccionamos segundo elemento de clase "error"
    error.innerHTML = "";
    inputPass.style.border = "";

    if (passWord.length == 0) {
        ok = false;
        inputPass.placeholder = "CAMPO VACIO";
        msgError = "Este campo es obligatorio, no puede estar vacío"
    }
    else if (!/^[A-Z]{1}[\.\,\-]{1}[a-z0-9]{6}$/.test(passWord)) {
        ok = false;
        inputPass.value = "";
        inputPass.placeholder = "FORMATO NO VALIDO";
        msgError = "Debe comenzar por una letra Mayúscula, seguido por un guion o  un punto o una coma."
            + "Y finalizar con 6 caracteres ya sean números y/o letras";
    }

    if (!ok) {
        inputPass.style.border = "2px solid red";
        error.innerHTML = msgError;
        return false;
    }

    return true;

}



