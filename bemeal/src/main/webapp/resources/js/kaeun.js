"use strict"
var kaeun = kaeun || {};
kaeun = (()=>{
     var init =x=>{
    	 /*alert("스크립 "+ $.script() +" web:"+$.ctx());
          kaeun.router.init(x);*/
    	 kaeun.main.init();
     };
     return {init:init}
})();

kaeun.main=(()=>{
     var init =()=>{
           onCreate();
     };
     var onCreate =()=>{
           setContentView();
     };
     var setContentView =()=>{
           kaeun.router.home();
     };
     return {init:init};
})();

kaeun.router = {
           home : ()=>{ //첫화면
        	   alert("home 들어옴");
                $.when(
<<<<<<< HEAD
                           $.getScript($.script()+"/ui/navi.js"),
                           $.getScript($.script()+"/ui/k_aside.js"),
                           $.getScript($.script()+"/ui/k_Home.js"),
                           $.Deferred(y=>{
                                $(y.resolve);
                           })
                     ).done(x=>{
                           $('#wrapper').html(naviUI()
                        		   			  +k_HomeUI());
                          $('#side_grid').html(asideUI());
=======
                           $.getScript($.script()+"/ui/k_aside.js"),
                           $.getScript($.script()+"/ui/k_Home.js"),
                           $.Deferred(y=>{
                                $(y.resolve);
                           })
                     ).done(x=>{
                           $('#content').html(k_HomeUI());
                           $('#side_grid').html(asideUI());
>>>>>>> refs/remotes/origin/master
                          //side menu시작
                           $('#slide-submenu').on('click',function() {				        
                        	        $(this).closest('.list-group').fadeOut('slide',function(){
                        	        	$('.mini-submenu').fadeIn();	
                        	        });
                        	      });
                        		$('.mini-submenu').on('click',function() {
                        	        $(this).next('.list-group').toggle('slide');
                        	        $('.mini-submenu').hide();
                        		});
                        		$('#cart_btn').click(e=>{
                        			kaeun.payments.cart();
                        		});
                        		$('#payHis_btn').click(e=>{	
                        			kaeun.payments.payHis();
                        		});
                        		$('#gift_btn').click(e=>{	
                        			kaeun.payments.gift();
                        		});
                        		$('#analysis_btn').click(e=>{	
                        			kaeun.tastes.analysis();
                        		});
                        		$('#collect_btn').click(e=>{	
                        			kaeun.tastes.collect();
                        		});
                        		//content_home 시작
                        		 $('#content_grid').html("Home");                   
                        	}) //done끝나는지점
           }
          
           };

//payment관련 해서 : cart, payHis, present
kaeun.payment = (()=>{
	var ctx;
	var init= ()=>{
		ctx = $.ctx();
	};
	var onCreate = ()=>{
		setContentView();
	};
	var setContentView=()=>{
	};
	return{init:init};
	})();


//cart,payHis,present
kaeun.payments = {
		cart : ()=>{ //read some
			$('#content_grid').empty().html('<h2>장바구니</h2>');
			$('#content_grid').append('<div class="cart_process">'
		            +'<div class="row bs-wizard" style="border-bottom:0;">'
		            +'<div class="col-xs-3 bs-wizard-step complete">'
		            +'<div class="text-center bs-wizard-stepnum">장바구니</div>'
		            +'<div class="progress"><div class="progress-bar"></div></div>'
		            +'<a href="#" class="bs-wizard-dot"></a>'
		            +'<div class="bs-wizard-info text-center"></div>'
		            +'</div>'
		            +'<div class="col-xs-3 bs-wizard-step active"><!-- complete -->'
		            +'<div class="text-center bs-wizard-stepnum">결제</div>'
		            +'<div class="progress"><div class="progress-bar"></div></div>'
		            +'<a href="#" class="bs-wizard-dot"></a>'
		            +'<div class="bs-wizard-info text-center"></div>'
		            +'</div>'
		            +'<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
		            +'<div class="text-center bs-wizard-stepnum">완료</div>'
		            +'<div class="progress"><div class="progress-bar"></div></div>'
		            +'<a href="#" class="bs-wizard-dot"></a>'
		            +'<div class="bs-wizard-info text-center"></div>'
		            +'</div>  '
		            +'</div> '
		            +'</div>'
		            +'</div>'+'<div text-align="right">선택 해제</div>');
			$('#content_grid').append('<div id="cart_grid" class=cart-grid-container>' 
					+'<div class="item_headerinfo">상품정보</div>'
					+'<div class="item_header">수량</div>' 
					+'<div class="item_header">　상품금액</div>'
					+'<div id="cart_header_end" class="item_header">주문</div></div>');
			//상품이 늘어나는 만큼, appendTo되야하는데... 일단 3개 왔다치고 돌리면 ㅎ  유틸로 만들어야할까...하드코딩하고 나중에생각?
			//$.each();
			$('#cart_grid').append('<div class="iteminfo1">상품사진</div>'
					  +'<div class="iteminfo">상품명 및 info</div>'
					  +'<div class="iteminfo">3개</div>'
					  +'<div class="iteminfo">1500원</div>' 
					  +'<div class="iteminfo">주문하기</div>'
					  );
			$('#cart_grid').append('<div class="item_result">결제완료　</div>'); //주문결제
		},
		payHis : ()=>{ //read some
			$('#content_grid').html('<h2>구매함</h2><br><div>날짜선택: 목록보기:(구매완료/사용중) </div><br>');    
		},
		gift : ()=>{ //read some
			$('#content_grid').html("Gift");   
		},
		write : ()=>{ //taste write
			
		},
		update : ()=>{ //taste update
			
		},
		del : ()=>{ //taste delete되는부분
			
		}
};

kaeun.tastes = {
		analysis : ()=>{ //취향분석
			 $('#content_grid').html("취향분석");  
         },
         collect : ()=>{ //콜렉션
        	 $('#content_grid').html("콜렉션");  
         }
};
