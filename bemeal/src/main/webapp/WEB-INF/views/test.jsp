<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
 <!-- jquery -->
	<script src="${context}/resources/js/jquery/jquery.min.js"></script>
	<script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
	<!-- bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<!-- slick -->
	<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
 	<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
	<!-- our sources -->
	<script src="${context}/resources/js/bemeal.js"></script>
	<link rel="stylesheet/less" type="text/css" href="${context}/resources/css/bemeal.less">
	<link rel="stylesheet" type="text/css" href="${context}/resources/css/yoonho.css">
	<link rel="stylesheet" type="text/css" href="${context}/resources/css/junghoon.css">
	<link rel="stylesheet" type="text/css" href="${context}/resources/css/kaeun.css">
	<!-- less compiler -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.7.1/less.min.js" ></script>
   <title>JS Bin</title>
   
</head>
<body>
  <div class="testContainer">
    <div id="first"><img src="" alt="img1">1</div>
    <div><img src="" alt="img2">2</div>
    <div><img src="" alt="img3">3</div>
    <div><img src="" alt="img4">4</div>
    <div><img src="..." alt="img5">5</div>
     <div><img src="..." alt="img6">6</div>
    <div><img src="..." alt="img7">7</div>
    <div><img src="..." alt="img8">8</div>
    <div><img src="..." alt="img9">9</div>
    <div><img src="..." alt="img10">10</div>
  </div>
  <script>
  $('.testContainer').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5
     
    });
    $('#first').click(function(){
       $('#first').text('first');
    });
   $('.testContainer button:first-child').empty().append(
     $('<span/>').addClass('glyphicon glyphicon-menu-left')
   );
   $('.testContainer button:last-child').empty().append(
     $('<span/>').addClass('glyphicon glyphicon-menu-right')
   );
  </script>
</body>
</html>