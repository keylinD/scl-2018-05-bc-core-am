window.cipher = {
  encode: (offset,stringCode) => {
    /* Acá va tu código */
    let result = ""
    
    for (var i = 0; i < stringCode.length; i++) {
      
      let toasciiCode = stringCode.charCodeAt(i);
      
    if (64 <= toasciiCode && toasciiCode < 90) {
      result += String.fromCharCode((toasciiCode - 65 + parseInt(offset))% 26 + 65);
      
      }else if ( 97 <= toasciiCode   && toasciiCode < 122) {
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