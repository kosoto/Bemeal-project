function carouselUI(x){
	var $div = $('<div/>').attr({id:x.id,'data-ride':'carousel'}).addClass('carousel slide');
	var $ol = $('<ol/>').addClass('carousel-indicators');
	
	return $div;
	
}

'<div id="myCarousel" class="carousel slide" data-ride="carousel">'
+'<!-- Indicators -->'
+'<ol class="carousel-indicators">'
  +'<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
  +'<li data-target="#myCarousel" data-slide-to="1"></li>'
  +'<li data-target="#myCarousel" data-slide-to="2"></li>'
+'</ol>'
+'<!-- Wrapper for slides -->'
+'<div class="carousel-inner">'
  +'<div class="item active"><span>'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Los Angeles" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Los Angeles" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Los Angeles" style="width:33%;"></span>'
  +'</div>'
  +'<div class="item"><span>'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Chicago" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Chicago" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Chicago" style="width:33%;"></span>'
  +'</div>    '
  +'<div class="item"><span>'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="New york" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="New york" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="New york" style="width:33%;"></span>'
  +'</div>'
+'</div>'
+'<!-- Left and right controls -->'
+'<a class="left carousel-control" href="#myCarousel" data-slide="prev">'
  +'<span class="glyphicon glyphicon-chevron-left"></span>'
  +'<span class="sr-only">Previous</span>'
+'</a>'
+'<a class="right carousel-control" href="#myCarousel" data-slide="next">'
  +'<span class="glyphicon glyphicon-chevron-right"></span>'
  +'<span class="sr-only">Next</span>'
+'</a>'
+'</div>'