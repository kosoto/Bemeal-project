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
				$.getScript($.script()+"/ui/carousel.js",()=>{
					$('#content').append(
							$(carouselUI({
								id:'id'
							}))
					);
				});

				
			
				$('#taste').click(e=>{
					alert('taste click');
					$.getScript($.script()+"/kaeun.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						kaeun.init();
					})
				});
				$('#menu').click(e=>{
					alert('menu click');
					$.getScript($.script()+"/yoonho.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						yoonho.item.init();
					})
				});
				$('#login').click(e=>{
					alert('login click');
					$.getScript($.script()+"/junghoon.js",(e)=>{
						/*가야 할 곳은 개인이 알아서*/
						junghoon.member.login();
					})
				});
				$('#join').click(e=>{
					alert('join click');
					$.getScript($.script()+"/junghoon.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						junghoon.member.add();
					})
				});
				$('#sam').click(e=>{
					alert('sam click');
					$.getScript($.script()+"/sam.js",()=>{
						sam.util.popup();
					})
				});
				
			});
		}
};













