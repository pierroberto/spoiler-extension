const keywords = ['gomorra', 'stagione 3', 'terza stagione', 'Salvatore Esposito', 'Savastano'];
const key = 'gomorra'
$(document).ready(function () {

  $( "div" ).each(function( index ) {
    if (($(this).text()).indexOf('Gomorra') !== -1) {
      $(this).hide();
    }
  });

});
