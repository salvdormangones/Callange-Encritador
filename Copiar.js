var textarea = document.getElementById("msg");
var answer = document.getElementById("respuesta");
var copy   = document.getElementById("btn-copy");
copy.addEventListener('click', function(e) {
   
   textarea.select(); 
   try {
    
       var successful = document.execCommand('copy');
 
       if(successful) answer.innerHTML = 'Copiado!';
       else answer.innerHTML = 'Incapaz de copiar!';
   } catch (err) {
       answer.innerHTML = 'Browser no soportado!';
   }
}
);