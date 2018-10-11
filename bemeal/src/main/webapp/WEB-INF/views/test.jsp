<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>Be meal</title>
<!-- jquery -->
<script src="${context}/resources/js/jquery/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<!-- bootstrap -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<!-- slick -->
<link rel="stylesheet" type="text/css"
	href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
<script type="text/javascript"
	src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<!-- our resources -->
<script src="${context}/resources/js/bemeal.js"></script>
<link rel="stylesheet/less" type="text/css"
	href="${context}/resources/css/bemeal.less">
<link rel="stylesheet" type="text/css"
	href="${context}/resources/css/yoonho.css">
<link rel="stylesheet" type="text/css"
	href="${context}/resources/css/junghoon.css">
<link rel="stylesheet" type="text/css"
	href="${context}/resources/css/kaeun.css">
<!-- less compiler -->
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.7.1/less.min.js"></script>
</head>
<body>
	<div id="wrapper">
		<div class="rio-promos">
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/11189261_759116200870985_1595157767_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/10004088_1491055334449687_1187165020_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/10817863_856543214397968_517239188_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/10919749_326992714172441_299394464_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/10617007_939025979457209_6938406_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/1168617_1435408473368301_409182770_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/11189836_754178218029431_2102772742_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/10843869_1658219887738208_2033326788_n.jpg" />
			<img
				src="http://maggiesadler.com/wp-content/uploads/2015/10/1515054_1379051609022475_1394148610_n.jpg" />
		</div>
	</div>
	<script>
	 $('.rio-promos').slick({
	        dots: true,
	        infinite: true,
	        speed: 500,
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        autoplay: true,
	        autoplaySpeed: 2000,
	        arrows: true,
	      
	    });
	//	bemeal.init('${context}');
	</script>
</body>
</html>
