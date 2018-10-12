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
				$('header').append(
						bemeal.service.carousel({
							id:'banner',
							arr:[{image:"/web/resources/img/cmm/banner1.jpg"},{image:"/web/resources/img/cmm/banner2.jpg"}],
							row_size:1
						})
				);
				$.getScript($.script()+"/ui/footer.js",()=>{
					$('footer').append(footerUI());

				});


				$.getJSON($.ctx()+"/item/list/first",d=>{
					$('#content').append(
							bemeal.service.carousel({
								id:'testslide',
								title:'가장 평점이 높은',
								arr:d.list,
								row_size:5
							})
					);
				}); /*getJSON end*/
				
				$.getJSON($.ctx()+"/item/list/second",d=>{
					$('#content').append(
							bemeal.service.carousel({
								id:'testslide2',
								title:'가장 인기 있는',
								arr:d.list,
								row_size:5
							})
					);
				}); /*getJSON end*/
				
				$.getJSON($.ctx()+"/item/list/third",d=>{
					$('#content').append(
							bemeal.service.carousel({
								id:'testslide3',
								title:'가장 판매량이 높은',
								arr:d.list,
								row_size:5
							})
					);
				}); /*getJSON end*/
				
				$('#logo').click(e=>{
					bemeal.router.main();
				});

				$('#taste').click(e=>{
					alert('taste click');
					$.getScript($.script()+"/kaeun.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						kaeun.init();
					})
				});
				$('#menu').click(e=>{
					alert('1.menu click');
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
bemeal.service=(()=>{
	var carousel = x=>{
		let $div = $('<div/>').attr({id:x.id,'data-ride':'carousel'}).addClass('carousel slide');
		let $h = $('<h5/>').addClass('carousel-title').appendTo($div).append($('<span/>').text(x.title));
		let $ol = $('<ol/>').addClass('carousel-indicators').appendTo($div);
		let arr = x.arr;
		let row_size = x.row_size;
		let navi_size = arr.length/row_size;
		for(let i=0;i<navi_size;i++){
			let $li = $('<li/>').attr({'data-target':"#"+x.id,'data-slide-to':i});
			if(i == 0) $li.addClass('active');
			$li.appendTo($ol);
		}
		let $inner = $('<div/>').addClass('carousel-inner').appendTo($div);
		for(let i=0;i<navi_size;i++){
			let $temp = $('<div/>').addClass('item').appendTo($inner);
			let $span = $('<span/>').appendTo($temp);
			if(i == 0) $temp.addClass('active');
			for(let j=i*row_size;j<(i+1)*row_size;j++){
				$('<div/>').text(arr[j].itemName).appendTo($span);
				$('<img/>').attr({
					src:arr[j].image,
					alt:arr[j].itemName,
					style:"width:"+(100/row_size)+"%"
				})
				.click(e=>{
					alert('도시락 누름');
					$.getScript($.script()+"/yoonho.js",()=>{
						yoonho.item.init(arr[j].itemSeq);
					});
				})
				.appendTo($span);
			}
		}
		let arrows = [['left','prev'],['right','next']]
		for(let i=0;i<2;i++){
			$('<a/>').addClass(arrows[i][0]+' carousel-control').attr({href:'#'+x.id,'data-slide':arrows[i][1]})
			.append(
					$('<span/>').addClass('glyphicon glyphicon-chevron-'+arrows[i][0]),
					$('<span/>').addClass('sr-only').text(arrows[i][1])
			)
			.appendTo($div);
		}
		return $div.swipe({
					  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
						    if (direction == 'left') $(this).carousel('next');
						    if (direction == 'right') $(this).carousel('prev');
						  },
						  allowPageScroll:"vertical"
						});;
	};
	return {carousel:carousel};
})();













