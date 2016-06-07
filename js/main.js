

window.onload = function(){
	mv.app.toTips();
};

var mv = {}; //命名空间

mv.tools = {};

mv.tools.getElementsByClass = function(oParent,sClass){
	var aEle = oParent.getElementsByTagname("*");
	var arr =[];

	for(var i=0;i<aEle.length;i++){
		if(sClass == aEle[i].className){
			arr.push(aEle[i]);
		}
	}

	return arr;

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

mv.app = {};

mv.app.toTips = function(){
	oText1 = document.getElementById('text1');
	oText2 = document.getElementById('text2');

	mv.ui.textChange(oText1,'Search WebSite');
	mv.ui.textChange(oText2,'Search WebSite');
};

mv.app.toBanner = function(){
	var oAd = document.getElementById("ad");
	var ali = oAd.getElementsByTagName("li");

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
			mv.tools.fadeOut(aLi[i]);
		}

		mv.tools.fadeIn(aLi[iNum]);
	}
}