    const inputTexto = document.querySelector(".input-texto");
    const mensaje = document.querySelector(".mensaje");
    const llaves = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]];

function btnEncriptar(){
    const textoEncriptado = encriptarTexto(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    document.getElementById("info").style.visibility = "hidden";
    inputTexto.value = "";
}

function encriptarTexto(textoEncriptado){
    textoEncriptado = textoEncriptado.toLowerCase();

    for(var i = 0; i < llaves.length; i++){
        if (textoEncriptado.includes(llaves[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(llaves[i][0],llaves[i][1]);
        }
    }
    return textoEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptarTexto(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    document.getElementById("info").style.visibility = "hidden";
    inputTexto.value = "";
}

function desencriptarTexto(textoDesencriptado){
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(var i = 0; i < llaves.length; i++){
        if (textoDesencriptado.includes(llaves[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(llaves[i][1],llaves[i][0]);
        }
    }
    return textoDesencriptado
}

function btnCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("☺☺☺ Texto Copiado. Pegalo y dale Desencriptar");
}

function btnEncabezado() {
    location.href = "index.html";
}

function btnContactenos() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("eprogramasymas@gmail.com");
}
