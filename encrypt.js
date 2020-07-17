function run(){
let text = document.querySelector('#text').value;
let turn = document.querySelector('#turn').value;
if (turn === ''){
  encrypt(text , 12, 12);
}
else{
  encrypt(text, turn, turn);
}
}
function encrypt(text, shift, real) {
    var result = "";
    if (true){
        //loop through each caharacter in the text
        for (var i = 0; i < text.length; i++) {

             //get the character code of each letter
            var c = text.charCodeAt(i);

            // handle uppercase letters
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + shift) % 26 + 65);

            // handle lowercase letters
            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);

            // its not a letter, let it through
            }else {
                result += text.charAt(i);
            }
        }
    }
    alert("Output has generated!");
    document.querySelector('#output1').innerHTML = 'Cipher: ' + result;
    document.querySelector('#output2').innerHTML = 'Turns: ' + real;
}

function decrypt(text, shift, real){
    var result = "";
    shift = (26 - shift) % 26;
    result = encrypt(text,shift,real);
    return result;
}
