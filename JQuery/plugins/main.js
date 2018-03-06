
$('.selected').removeClass( "selected" ).parent().siblings().children().next().next().prev().addClass('selected');

$('.selected').jAnimateSequence(['bounce', 'tada', 'wobble']);

//.fadeOut(3000).animate({bottom: '-150px'}, 2).fadeIn(3000)

