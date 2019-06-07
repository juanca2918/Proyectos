$(document).ready(function(){
  M.AutoInit();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
  });
