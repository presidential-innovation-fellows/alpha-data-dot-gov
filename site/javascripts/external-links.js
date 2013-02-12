$(document).ready(function() {
 
  // Creating custom :external selector
  // $.expr[':'].external = function(obj){
  //     return !obj.href.match(/^mailto\:/)
  //             && !obj.href.match(/.gov/)
  //             && (obj.hostname != location.hostname);
  // };
 
  // Add 'external' CSS class to all external links
  // $('a:external').addClass('external');
 
  $('.external').click(function() {
    var link = $(this).attr('href');

    $("#ExternalModal").reveal();
    $("#external-link-text").text(link)
    $("#external-link").attr("href", link)
 
    return false;
  });
});