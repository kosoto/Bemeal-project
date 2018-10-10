var junghoon = junghoon || {};
alert('정훈.js');

junghoon = (()=>{
	var init =x=>{
		alert('정훈init'+$.ctx());
		onCreate();
	};
	var onCreate =()=>{
		alert('정훈onCreate');
		setContentView();
		
	};
	var setContentView=()=>{
		alert('정훈contentView')
	};
	return {init:init};
})();
junghoon.main=()=>{
	var init=x=>{
		alert('main init');
	};
	var onCreate=()=>{
		alert('main onCreate');
	};
	var setContentView=()=>{
		alert('main setContentView');
	};
};
alert('정훈.js  끝');