var bemeal = bemeal || {};
bemeal = (()=>{
	var init =x=>{
		bemeal.router.init(x);
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		
	};
	return {init:init};
})();
bemeal.main = (()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		bemeal.router.main();
		
	};
	return {init:init};
})();
bemeal.router = {
		init : x=>{
			$.when(
				$.getScript(x+"/resources/js/router.js",()=>{
					$.extend(new Session(x));
				}),
				$.getScript(x+"/resources/js/util.js"),
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(z=>{
				bemeal.main.init();
			});
		},
		main : ()=>{
			/*메인화면 그리기*/
			$.when(
				$.getScript($.script()+"/ui/navi.js"),
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(x=>{
				$('#wrapper').html(naviUI())
				.append(
					$('<header/>'),
					$('<div/>').attr({id:'content'}),
					$('<footer/>')
				);
				$('#content').append($(
						'<div class="slide"><img src="" alt="img1" title="img1">'
					    +'<img src="" alt="img2" title="img2">'
					    +'<img src="" alt="img3" title="img3">'
					    +'<img src="" alt="img4" title="img4">'
					    +'<img src="" alt="img5" title="img5">'
					    +'<img src="" alt="img6" title="img6">'
					    +'<img src="" alt="img7" title="img7">'
					    +'<img src="" alt="img8" title="img8">'
					    +'<img src="" alt="img9" title="img9">'
					    +'<img src="" alt="img10" title="img10"></div>'	
				).slick({
			        dots: false,
			        infinite: true,
			        speed: 500,
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        autoplay: true,
			        autoplaySpeed: 2000,
			        arrows: true
			    }));
				/*$.getScript($.script()+"/ui/imgRow.js",()=>{
					$('#content').append($(rowUI('slide')));
						//$('.multiple-items').slick('unslick');
					$('.slide').slick({
				        dots: false,
				        infinite: true,
				        speed: 500,
				        slidesToShow: 3,
				        slidesToScroll: 2,
				        autoplay: true,
				        autoplaySpeed: 2000,
				        arrows: true
				    });
				   $('.test > button:first-child').empty().append(
		    	      $('<span/>').addClass('glyphicon glyphicon-menu-left')
		    	   );
		    	   $('.test > div > button:last-child').empty().append(
		    	      $('<span/>').addClass('glyphicon glyphicon-menu-right')
		    	   );	
				});*/
				
				$('#taste').click(e=>{
					alert('taste click');
					$.getScript($.script()+"/kaeun.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						//kaeun.main();
					})
				});
				$('#menu').click(e=>{
					alert('menu click');
					$.getScript($.script()+"/yoonho.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						//yoonho.main();
					})
				});
				$('#login').click(e=>{
					alert('login click');
					$.getScript($.script()+"/junghoon.js",(e)=>{
						/*가야 할 곳은 개인이 알아서*/
						//junghoon.init();
					})
				});
				$('#adminLogin').click(e=>{
					alert('adminLogin click');
					$.getScript($.script()+"/junghoon.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						junghoon.init();
					})
				});
				$('#join').click(e=>{
					alert('join click');
					$.getScript($.script()+"/junghoon.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						junghoon.init();
					})
				});
				
			});
		}
};













