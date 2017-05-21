$(document).ready(function() {
	var social = '<div id="plusone-div"></div>' +
					'<script type="text/javascript">' +
					'gapi.plusone.render' +
					'(   "plusone-div",' +
					    '{ "size": "small", "count": "true" });</script>' +
					'<div id="fb-root"></div>' +
					'<script>(function(d, s, id) {' +
						'var js, fjs = d.getElementsByTagName(s)[0];' +
						'if (d.getElementById(id)) return;' +
						'js = d.createElement(s); js.id = id;' +
						'js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";' +
						'fjs.parentNode.insertBefore(js, fjs);' +
					'}(document, \'script\', \'facebook-jssdk\'));</script>' +
					'<div class="fb-like" rel="canonical" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true" style="margin-right: 5px;"></div>';

	$('div .social').append(social);
});