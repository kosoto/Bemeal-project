<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>Be meal</title>
<!-- jquery -->
<script src="${context}/resources/js/jquery/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<!-- bootstrap -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="${context}/resources/js/jquery/popup.js"></script>
<!-- slick -->
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<!-- our resources -->
<script src="${context}/resources/js/bemeal.js"></script>
<link rel="stylesheet/less" type="text/css" href="${context}/resources/css/bemeal.less">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/yoonho.css">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/junghoon.css">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/kaeun.css">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/sam.css">
<!-- less compiler -->
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.7.1/less.min.js"></script>
</head>
<body>
	<div id="wrapper"></div>
	
<!-- 	<script>
		bemeal.init('${context}');
	</script> -->
	<button id="test">모달 테스트 버튼</button>
	<script>
	$('#test').on('click',function(){
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			items:{src:
				'<form class="white-popup">'
				+	'<div class="form-group">'
				+       '<label for="text">Access Code:</label>'
		    	+		'<input type="text" class="form-control" id="code">'
	    		+	'</div>'
			    +   '<div class="form-group">'
				+		'<label for="pwd">Password:</label>'
				+		'<input type="password" class="form-control" id="pass">'
			    +   '</div>'
			    +	'<button type="submit" class="btn btn-default">Submit</button>'
				+'</form>'
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'}); 
		$('.btn').on('click',function(){
			alert($('#code').val());
		});
		return false;
	});
</script>
</body>
</html>
