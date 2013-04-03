JM.$package("MUI",function(J){
	var $D = J.dom,
		$E = J.event;
		
	var isTouchDevice = J.platform.touchDevice;
	var touchEvt = isTouchDevice ? "tap":"click";
	var AnimateTab = J.Class({extend:MUI.Tab},{
		init:function(options){
			AnimateTab.callSuper(this,"init",options);
		
			this.tabBodySlide = MUI.Slide({
				id:options.id,
				slideTime:options.animateDuration || 1000,
				wrapClassName:"tab_body",
				fastChange:options.fastChange
			});
		
		},
		_setSelectedClass:function(selectedIndex){
			var tabs = this.tabs;
			var currentIndex = this.currentIndex;
			if(currentIndex == selectedIndex) return;

			$D.removeClass(tabs[currentIndex],this.selectedClass);
			$D.addClass(tabs[selectedIndex],this.selectedClass);
		},
		select:function(selectedIndex){
			AnimateTab.callSuper(this,"select",selectedIndex);
			this.slideTo(selectedIndex);
		},
		slideTo:function(index){
			this.tabBodySlide.slideTo(index);
		}

	});
	this.AnimateTab = AnimateTab;
});