var brzina = 500;   // Brzina prijelaza
var auto_okret = true;  // automatsko okretanje
var auto_brzina = 4000; // brizna auto okretanja

$(document).ready(function(){
  // Postavljanje aktivne klase na prvi element
  $('.slide').first().addClass('active');

  //Sakrij sve
  $('.slide').hide();
  // i prikazi aktivnog
  $('.active').show();

  $('#sljed').on('click',iduca);
  $('#pred').on('click', prethodna);

  setInterval(provjeraAuto, auto_brzina);

});

function provjeraAuto(){
  if($('#slideThree').is(':checked')){
    iduca();
  }

}

function iduca(){
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':last-child')){
    $('.slide').first().addClass('active');
  }
  else{
    $('.oldActive').next().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(brzina);
  $('.active').fadeIn(brzina);
}

function prethodna(){
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':first-child')){
    $('.slide').last().addClass('active');
  }
  else{
    $('.oldActive').prev().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(brzina);
  $('.active').fadeIn(brzina);
}
