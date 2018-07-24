window.cipher = {
  encode: (stringCode,offset) => {
    /* Acá va tu código */
    let result = '';
    for (let i = 0; i <stringCode.length; i++){
      let asciiCode = stringCode[i];

      if (asciiCode.match(/[a-z]/i)) {
        let encode  = stringCode(i);

        if ((encode>= 65) && (encode <= 90)) {
          asciiCode = String.fromCharCode(((encode - 65 + parseInt(offset)) % 26) +65);
        }
        if ((encode>= 97) && (encode <= 122)) {
          asciiCode = String.fromCharCode(((code -97 + parseInt(offset)) % 26 ) +97);
        }
      }
      result += asciiCode;
    }
    return result;
      // let result = ""
    
    // for (let i = 0; i < stringCode.length; i++) {
      
    //   let toasciiCode = stringCode.charCodeAt(i);
      
    // if (toasciiCode >=65 && toasciiCode < 91) {
    //   result += String.fromCharCode((toasciiCode - 65 + parseInt(offset))% 26 + 65);
      
    //   }else if (toasciiCode >=97 && toasciiCode < 122) {
    //     result += String.fromCharCode((toasciiCode - 97 + parseInt(offset))% 26 + 97);
    //   }else{
    //     //result +=stringCode.charAt(i);
    //     result += String.fromCharCode(toasciiCode);
    //   }      
    // }
    // return result;
  },
  
  decode: (stringEncode,offset) => {
    /* Acá va tu código */
    let Resultdeco = '';
    for (let i = 0; i < stringEncode.length; i++){
      let asciiEncode = stringEncode[i];

      if (asciiEncode.match(/[a-z]/i)) {
        let decode = stringEncode.charCodeAt(i);
        
        if ((decode >= 65) && (decode <= 90)) {
          asciiEncode = String.fromCharCode(((decode - 65 - parseInt(offset) + 52) % 26) +65);
        }
        if ((decode >= 97) && (decode <= 122)) {
          asciiEncode = String.fromCharCode(((decode - 97 - parseInt(offset) + 52) % 26) +97);
        }
      }
      Resultdeco += decode;
    }
    return Resultdeco;
  }
}

//     let encoded = ""
//     for (let i = 0; i < stringEncode.length; i++) {
//       let todasciiCode = stringEncode.charCodeAt(i) 
//     if (todasciiCode >= 65 && todasciiCode <91){
//       encoded += String.fromCharCode((todasciiCode - 90 - parseInt(offset))% 26 + 90);
//     }else if (todasciiCode >= 97 && todasciiCode < 122){
//       encoded += String.fromCharCode((todasciiCode - 122 - parseInt(offset))% 26 + 122);
//     }else{
//       result += String.fromCharCode(todasciiCode);
//     }      
//   }
//   return encoded;
//   }
// }

//  ======================  // 

   
// for (var i = 0; i < message.length; i++)  {// for (inicio; condición de parada; incrementador)
//      let toAsciiCode = message.charCodeAt(i); // determinar el caracter en código ascii
 
//      if(toAsciiCode > 64 && toAsciiCode < 91){      //condicion para mayúsculas
//       result += String.fromCharCode((toAsciiCode - 65 + parseInt(offset)) % 26 + 65);
//      } else if(toAsciiCode > 96 && toAsciiCode < 123){  //condición para minúsculas
//       result += String.fromCharCode((toAsciiCode - 97 + parseInt(offset)) % 26 + 97);
//      } else
//       result += String.fromCharCode(toAsciiCode);  //todos los demás caracteres
//     }
//    return result;
   
//   }
// }
