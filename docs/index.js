/* Acá va tu código */
window.onload = () => {
  const code = document.getElementById("code");
  const decipher = document.getElementById('decipher');
  const reset = document.getElementById("reset");
 
  code.addEventListener("click", () => {
    let stringCode = document.getElementById('textEncryption').value;
    let offset = document.getElementById('offset').value;
    console.log(offset);
    let result = window.cipher.encode(offset, stringCode);
    document.getElementById("result").innerHTML = result;
    console.log(result);
    }); 

 decipher.addEventListener('click' , () =>{
    let stringEncode = document.getElementById('textDecipher').value;
    let offs = parseInt(document.getElementById('offset').value);
    console.log(offs);
    let result = window.cipher.decode(offs, stringEncode);
     document.getElementById('result').innerHTML = result;
     console.log(result);
  });

  reset.addEventListener('click',() =>{
    document.getElementById('textEncryption').value = '';
    document.getElementById('textDecipher').value='';
    document.getElementById('result').value ='';
    document.getElementById("offset").value = '';

  });
};






/*
window.onload = () =>{
  const  code = document.getElementById('code');
  const decipher = document.getElementById('decipher');
}

code.addEventListener('click' , () =>{
  let stringCode = document.getElementById('textEncryption');
  let offset = parseInt(document.getElementById('offset').value);
  const result = window.cipher.encode(stringCode, offset);
   document.getElementById('result').innerHTML = result;

})
*/