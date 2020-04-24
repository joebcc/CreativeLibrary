	//EXTRACT DIMENSION DATA
var dimensions = (function ()
				  {
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
                }
})();

//INITIALIZE
function init($){
    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
	
	button.style.width = dimensions.width + 'px';
    button.style.height = dimensions.height + 'px';

    animation();
	addListeners();   
}

//GREENSOCK CASCADE ANIMATION
function animation(){
	tm = new TimelineMax({}),
	bag = [bg],
	prodB1 = [prod1],
	prodB2 = [prod2],
	title1 = [txfrm11],
	title2 = [txfrm22],
	title3 = [txfrm33],
    title4 = [txfrm44],
	frame1 = [frm1],
	frame2 = [frm2],
	btnon = [btnon],
	btnoff = [btnoff],
	cta = [cta],
	LEARNBUTTON = [LEARNBUTTON],
	lgo = [logo];  

    tm
	//1ST FRAME - BEGIN
	.from(lgo, .4,{opacity: 0}, 0)
	.from(cta, .4,{opacity: 0}, 0)
    .from(title1, .8,{x:-5, opacity: 0, ease:Sine.easeOut}, .1)

	//2ND FRAME
	.to(title1, .5,{x:5, opacity: 0, ease:Sine.easeOut}, 2)
    .to(frame1, .8,{y:-10, opacity: 0, ease:Sine.easeOut}, 1.9)
    .from(frame2, .8,{y:10, opacity: 0, ease:Sine.easeOut}, 2.6)
    .from(title2, .8,{x:-5, opacity: 0, ease:Sine.easeOut}, 2.8)
    
	//3RD FRAME
    .to(frame1, .5,{y:-3, opacity: 0, ease:Sine.easeOut}, 4.9)
    .to(title2, .8,{x:5, opacity: 0, ease:Sine.easeOut}, 4.9)
    .to(frame2, .5,{y:5, opacity: 0, ease:Sine.easeOut}, 5)
    .from(title3, .8,{x:-5, opacity: 0, ease:Sine.easeOut}, 5.5)
    .from(prodB1, .8,{y: 5, opacity: 0, ease:Sine.easeOut}, 5.6)
	.from(prodB2, .8,{y: 5, opacity: 0, ease:Sine.easeOut}, 5.6)
	.to(title3, .5,{x:5, opacity: 0, ease:Sine.easeOut}, 7.6)

	//END FRAME
	.from(title4, .8,{x:-5, opacity: 0, ease:Sine.easeOut}, 7.9)
	.from(btnoff, 1,{opacity: 0, ease:Sine.easeOut}, 7.9)
	.from(LEARNBUTTON, .8,{opacity: 0, ease:Sine.easeOut}, 8);
//	.timeScale(.8);    
    // tm.seek(1.5)
    // tm.pause()
} 

//ROVER BUTTON ACTIONS
function addListeners() {
	
   container.addEventListener('mouseover',function(){
        TweenLite.to(cta,.2,{opacity:.5, x:0});
	   	return false;
    })
   container.addEventListener('mouseout',function(){
	    TweenLite.to(cta,.2,{opacity:1,  x:0});
		return false;
    })	
	button.addEventListener('mouseover',function(){
//		TweenLite.to(btnon,.2,{opacity:1});
//		TweenLite.to(btnoff,.2,{opacity:0});
        return false;
    })
   	button.addEventListener('mouseout',function(){
//		TweenLite.to(btnoff,.2,{opacity:1});
//		TweenLite.to(btnon,.2,{opacity:0});
        return false;
    })
} 

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars() {
    var allElements = document.getElementsByTagName("*");
    for (var q = 0; q < allElements.length; q++) {
        var el = allElements[q];
        if (el.id) {
            window[el.id] = document.getElementById(el.id);
        }
    }
}

