$(document).ready(function() 
{
    var botao = $('.bt');
    var dropDown = $('.fml');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });