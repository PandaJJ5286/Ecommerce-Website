

window.onload = function(){
	mv.app.toTips();
	mv.app.toBanner();
};

var mv = {}; //命名空间

mv.tools = {};

mv.tools.getElementsByClass = function(oParent,sClass){
	var aEle = oParent.getElementsByTagName("*");
	var arr =[];

	for(var i=0;i<aEle.length;i++){
		if(sClass == aEle[i].className){
			arr.push(aEle[i]);
		}
	}

	return arr;

}

mv.tools.getStyle = function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

mv.ui = {};

mv.ui.textChange = function(obj,str){
	obj.onfocus = function(){
		if(obj.value == str){
			obj.value = "";
		}
	};

	obj.onblur = function(){
		if(obj.value == ""){
			obj.value = str;
		}
	};
};

mv.ui.fadeIn = function(obj){
	var iCur = mv.tools.getStyle(obj,'opacity');
	if(iCur == 100){ 
		return false; 
	}

	var value = 0;
	var iSpeed = 5;
	
	clearInterval(obj.timer);

	obj.timer = setInterval(function(){
		if(value == 100){
			clearInterval(obj.timer);
		}else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);
}

mv.ui.fadeOut = function(obj){
	var iCur = mv.tools.getStyle(obj,'opacity');
	if(iCur == 0){ 
		return false; 
	}

	var value = 100;
	var iSpeed = 5;
	
	clearInterval(obj.timer);

	obj.timer = setInterval(function(){
		if(value == 0){
			clearInterval(obj.timer);
		}else{
			value -= iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);
}

mv.app = {};

mv.app.toTips = function(){
	oText1 = document.getElementById('text1');
	oText2 = document.getElementById('text2');

	mv.ui.textChange(oText1,'Search WebSite');
	mv.ui.textChange(oText2,'Search WebSite');
};

mv.app.toBanner = function(){
	var oAd = document.getElementById("ad");
	var aLi = oAd.getElementsByTagName("li");

	var oPrevBg = mv.tools.getElementsByClass(oAd,"prev_bg")[0];
	var oNextBg = mv.tools.getElementsByClass(oAd,"next_bg")[0];

	var oPrev = mv.tools.getElementsByClass(oAd,"prev")[0];
	var oNext = mv.tools.getElementsByClass(oAd,"next")[0];

	var iNum = 0;

	var timer = setInterval(auto,3000);

	function auto(){

		if(iNum == aLi.length-1){
			iNum=0;
		}else{
			iNum++;
		}

		for(var i=0;i<aLi.length;i++){
			mv.ui.fadeOut(aLi[i]);
		}

		mv.ui.fadeIn(aLi[iNum]);
	}

	function autoPrev(){

		if(iNum == 0){
			iNum=aLi.length-1;
		}else{
			iNum--;
		}

		for(var i=0;i<aLi.length;i++){
			mv.ui.fadeOut(aLi[i]);
		}

		mv.ui.fadeIn(aLi[iNum]);
	}

	oPrevBg.onmouseover = oPrev.onmouseover = function(){
		oPrev.style.display = 'block';
		clearInterval(timer);
	}

	oPrevBg.onmouseout = oPrev.onmouseoout = function(){
		oPrev.style.display = 'none';
		timer = setInterval(auto,3000);
	}

	oNextBg.onmouseover = oNext.onmouseover = function(){
		oNext.style.display = 'block';
		clearInterval(timer);
	}

	oNextBg.onmouseout = oNextBg.onmouseout = function(){
		oNext.style.display = 'none';
		timer = setInterval(auto,3000);
	}

	oPrev.onclick = function(){
		autoPrev();
	}

	oNext.onclick = function(){
		auto();
	}
}