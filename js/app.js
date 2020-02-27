$('.searchPhoto').keyup(function(event) {
  const searchGallery = new RegExp($.map($(this).val().trim().split(' '), function(value) {
    return '(?=.*?' + value + ')';
  }).join(''), 'i');
  $('img').parent().hide().removeAttr("data-fancybox").filter(function(){
    return searchGallery.exec($(this).text());
  }).show().attr("data-fancybox", "images");
});


let $captionArray = [];

$('p').each(function() {
  let $cap = $(this).text();
  $captionArray.push({caption: $cap});
});

let $links = $('a');

for(let i = 0; i < 12; i++)
{
  $($links[i]).attr('data-caption', $captionArray[i].caption);
}