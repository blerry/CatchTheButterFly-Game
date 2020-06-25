var scoreNum = 0;
var difficulty = 25;
$('.startgame').click(function() {
	$('.startgame').css({'opacity': '0','z-index': '-1'});
	scoreNum = 0;
	$('.score').text(scoreNum);
	setInterval(function() {
		var x = Math.round(Math.random() * $(window).width() - 150);
		var y = Math.round(Math.random() * $(window).height() - 150);
		var i = Math.round(Math.random() * difficulty);
		var marginX = ['marginLeft', 'marginRight'];
		var marginY = ['marginTop'];
		$('.butterfly').css(marginX[i], x );
		$('.butterfly').css(marginY[i], y );
	 }, 25); });
$('.butterfly').click(function() {
	$('.score').text(scoreNum++);
	if (scoreNum == 10) {
		$('.butterfly').css('opacity', '0');
		$('.startgame').text('You Win!').css({'opacity': '1', 'z-index': '0'}); } });
