window.cipher = {
  encode: (offset,stringCode) => {
    /* Acá va tu código */
    let result = ""
    
    for (let i = 0; i < stringCode.length; i++) {
      
      let toasciiCode = stringCode.charCodeAt(i);
      
    if (toasciiCode >=65 && toasciiCode < 91) {
      result += String.fromCharCode((toasciiCode - 65 + parseInt(offset))% 26 + 65);
      
      }else if (toasciiCode >=97 && toasciiCode < 122) {
        result += String.fromCharCode((toasciiCode - 97 + parseInt(offset))% 26 + 97);
      }else{
        //result +=stringCode.charAt(i);
        result += String.fromCharCode(toasciiCode);
      }      
    }
    return result;
  },
  
  decode: (offset,stringEncode) => {
    /* Acá va tu código */
    let encoded = ""
    for (let i = 0; i < stringEncode.length; i++) {
      let todasciiCode = stringEncode.charCodeAt(i) 
    if (todasciiCode >= 65 && todasciiCode <91){
      encoded += String.fromCharCode((todasciiCode - 90 - parseInt(offset))% 26 + 90);
    }else if (todasciiCode >= 97 && todasciiCode < 122){
      encoded += String.fromCharCode((todasciiCode - 122 - parseInt(offset))% 26 + 122);
    }else{
      result += String.fromCharCode(todasciiCode);
    }      
  }
  return encoded;
  }
}



   
  /* for (var i = 0; i < message.length; i++)  {// for (inicio; condición de parada; incrementador)
     let toAsciiCode = message.charCodeAt(i); // determinar el caracter en código ascii
 
     if(toAsciiCode > 64 && toAsciiCode < 91){      //condicion para mayúsculas
      result += String.fromCharCode((toAsciiCode - 65 + parseInt(offset)) % 26 + 65);
     } else if(toAsciiCode > 96 && toAsciiCode < 123){  //condición para minúsculas
      result += String.fromCharCode((toAsciiCode - 97 + parseInt(offset)) % 26 + 97);
     } else
      result += String.fromCharCode(toAsciiCode);  //todos los demás caracteres
    }
   return result;
   
  }
 }*/