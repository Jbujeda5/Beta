$( document ).ready(function(){

$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});


$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});

$('#registerForm').click(function(){
  $('.register').fadeToggle('slow');
  $(this).toggleClass('green');
});


function noEstaPinchandoEnOpcionDeMenu(container, evento) {
   return !container.is(evento.target) && container.has(evento.target).length === 0;
}


$(document).mouseup(function (e)
{
    // Definir las opciones de menú
    // Para todas las opciones
        // Si la está pinchando
            // Mostrar
        // Si no, ocultar

    var menus = [
        { container: '.login', form: 'loginform'},
        { container: '.register', form: 'registerForm'}
    ]

    menus.forEach(function(item) {
        var container = $(item.container);
        if(noEstaPinchandoEnOpcionDeMenu(container,e)) {
            container.hide();
            $('#'+item.form).removeClass('green');
        };
    });



});


});
