"use strict"
var junghoon = junghoon || {};

junghoon = (()=>{
	var init =x=>{
		junghoon.main.init();
	};
	return{init:init};
})();

junghoon.main = (()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		junghoon.router.main();
	};
	return {init:init};
})();

junghoon.member = {
		add : () => {
			$.when(
					$.getScript($.script()+'/ui/navi.js'),
					$.Deferred(y=>{
						$(y.resolve);
					})
				).done(x=>{
				$.getScript($.script()+'/ui/j_add.js', ()=>{
					$('#content').empty().append(
						$('<div/>').addClass('add').html(addUI())
					);
					$('#join_submit_btn').click(e=>{
						
					});
				})
			});
		},
		login : () => {
			$.when(
				$.getScript($.script()+'/ui/navi.js'),
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(x=>{
			$.getScript($.script()+'/ui/j_login.js', ()=>{
				$('#content').empty().append(
					$('<div/>').addClass('login_form').html(loginUI())
				)
				$('#login_submit_btn').click(e=>{
					bemeal.router.main();	
				}),
				$('#login_cancle_btn').click(e=>{
					bemeal.router.main();	
				})
			})
		});	
		}
};
