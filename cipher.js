window.cipher = { 
  encode: (str, offset) => {
    let result ='';
    offset= parseInt(offset);
    
    for (let i = 0; i < str.length; i++) {
      let strToAscii = str.charCodeAt(i);

      if (strToAscii >= 65 && strToAscii <= 90) {
        result += String.fromCharCode((strToAscii - 65 + offset) % 26 + 65);
      }
      else {
        result += String.fromCharCode(strToAscii);
      } 
      }
    return result;
  },
     
  decode: (str, offset) => {
    let result ='';
    offset= parseInt(offset);
    
    
    for (let i = 0; i < str.length; i++) {
      let strToAscii = str.charCodeAt(i);

      if (strToAscii >= 65 && strToAscii <= 90) {
        result += String.fromCharCode((strToAscii - 65 - offset) % 26 + 65);
      }
      else {
        result += String.fromCharCode(strToAscii);
      }
      }
    return result;
  },
}
