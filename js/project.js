// Create the "supply" button
const $button = $('<button>Reveal Supplies</button>');
//Apend to web page
$('.supply').append($button);

//Hide the supplies text
$('.supply span').hide();
//When the button is pressed
$('.supply button').click(function(){
  //Show the supplies text
  $('.supply span').show();
  //Hide the "supplies" button
  $('.supply button').hide();
});