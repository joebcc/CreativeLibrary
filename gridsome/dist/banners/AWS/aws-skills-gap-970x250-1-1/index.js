(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[302,111,524,70],[302,183,524,66],[0,356,524,66],[654,52,220,39],[526,356,220,39],[644,251,220,39],[0,252,642,102],[654,0,320,50],[828,133,67,40],[0,0,300,250],[828,93,127,38],[302,0,350,109]]}
];


// symbols:



(lib.CachedBmp_180 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.AWS_Thepeopleyouneed_320x50 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.HeroaiAssets = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copy = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle1copysDropShadow = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject11 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.t1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_180();
	this.instance.setTransform(0,-61.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-61.1,262,35);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_179();
	this.instance.setTransform(0,-60.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.1,262,33);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_178();
	this.instance.setTransform(0,-60.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60.1,262,33);


(lib.VectorSmartObject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.VectorSmartObject11();
	this.instance.setTransform(0,0,0.5733,0.5732);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VectorSmartObject, new cjs.Rectangle(0,0,200.7,62.5), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hero_ai_Assets
	this.instance = new lib.HeroaiAssets();
	this.instance.setTransform(10,6,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(10,6,43.6,26), null);


(lib.Rectangle1copysDropShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Rectangle1copysDropShadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle1copysDropShadow_1, new cjs.Rectangle(0,0,127,38), null);


(lib.Rectangle1copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApcCgIAAk/IS5AAIAAE/g");
	mask.setTransform(60.05,15.65);

	// Layer_1
	this.instance = new lib.Rectangle1copy();
	this.instance.setTransform(-156,-202);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle1copy_1, new cjs.Rectangle(-0.4,-0.3,121,32), null);


(lib.bridgeanimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArPImIgGh1IgKoFIAejgIASiPIA2hYIAfBjIAHB+IAzDiIIGDoIJbjfIATigIAFjLIA9hrIA0BjIAFBXIAREgIgFJxg");
	var mask_graphics_1 = new cjs.Graphics().p("ArPImIgGh1IgKoFIAwlvIA2hYIAfBjIAHB+IAzDiIIGDoIJbjfIATigIAFjLIA9hrIA0BjIAWF3IgFJxg");
	var mask_graphics_2 = new cjs.Graphics().p("ArPImIgGh1IgKoFIAwlvIA2hYIAfBjIAHB+IAzDiIIGDoIJbjfIATigIAFjLIA9hrIA0BjIAWF3IgFJxg");
	var mask_graphics_3 = new cjs.Graphics().p("ArPImIgGh1IgKoFIAwlvIA2hYIAfBjIAHB+IAzDiIIGDoIJbjfIATigIAFjLIA9hrIA0BjIAWF3IgFJxg");
	var mask_graphics_4 = new cjs.Graphics().p("ArPImIgGh1IgKoFIAwlvIA2hYIAfBjIAHB+IAzDiIIGDoIJbjfIATigIAFjLIA9hrIA0BjIAWF3IgFJxg");
	var mask_graphics_5 = new cjs.Graphics().p("ArPImIgHh1IgJoFIAwlvIA2hYIAgBjIAFB+IAzDiIIHDoIJcjfIASigIAGjLIA8hrIA0BjIAVF3IgEJxg");
	var mask_graphics_6 = new cjs.Graphics().p("ArPImIgGh1IgKoFIAwlvIA2hYIAfBjIAHB+IAzDiIIGDoIJbjfIATigIAFjLIA9hrIA0BjIAWF3IgFJxg");
	var mask_graphics_7 = new cjs.Graphics().p("ArPImIgGh1IgKoFIAwlvIA2hYIAfBjIAHB+IAzDiIIGDoIJbjfIATigIAFjLIA9hrIA0BjIAWF3IgFJxg");
	var mask_graphics_8 = new cjs.Graphics().p("ArQImIgGh1IgJoFIAxlvIA1hYIAfBjIAHB+IAzDiIIGDoIJbjfIASigIAHjLIA8hrIA1BjIAVF3IgFJxg");
	var mask_graphics_9 = new cjs.Graphics().p("ArQImIgGh1IgJoGIAxluIA1hXIAfBjIAHB9IAzDiIIGDoIJbjeIASihIAHjLIA8hqIA1BiIAVF3IgFJxg");
	var mask_graphics_10 = new cjs.Graphics().p("ArPImIgGh1IgKoGIAwluIA2hXIAfBjIAHB9IAzDiIIGDoIJbjeIATihIAFjLIA9hqIA0BiIAWF3IgFJxg");
	var mask_graphics_11 = new cjs.Graphics().p("ArPImIgGh1IgJoGIAvluIA2hXIAgBjIAFB9IAzDiIIHDoIJcjeIASihIAFjLIA9hqIA1BiIAUF3IgEJxg");
	var mask_graphics_12 = new cjs.Graphics().p("ArPImIgGh1IgJoGIAvluIA2hXIAgBjIAFB9IAzDiIIHDoIJcjeIASihIAFjLIA9hqIA1BiIAUF3IgEJxg");
	var mask_graphics_13 = new cjs.Graphics().p("ArPImIgGh1IgKoGIAwluIA2hXIAfBjIAHB9IAzDiIIGDoIJbjeIATihIAFjLIA9hqIA0BiIAWF3IgFJxg");
	var mask_graphics_14 = new cjs.Graphics().p("ArQImIgGh1IgJoGIAxluIA1hXIAfBjIAHB9IAyDiIIHDoIJbjeIASihIAHjLIA8hqIA0BiIAWF3IgFJxg");
	var mask_graphics_15 = new cjs.Graphics().p("ArQImIgGh1IgJoGIAxluIA1hXIAfBjIAHB9IAyDiIIHDoIJbjeIASihIAHjLIA8hqIA0BiIAWF3IgFJxg");
	var mask_graphics_16 = new cjs.Graphics().p("ArQImIgGh1IgJoGIAxluIA1hXIAfBjIAHB9IAyDiIIHDoIJbjeIASihIAHjLIA8hqIA0BiIAWF3IgFJxg");
	var mask_graphics_17 = new cjs.Graphics().p("ArQImIgFh1IgJoGIAvluIA2hXIAgBjIAFB9IA0DiIIGDoIJcjeIASihIAFjLIA9hqIA1BiIAUF3IgEJxg");
	var mask_graphics_18 = new cjs.Graphics().p("ArQImIgFh1IgJoGIAdjfIASiPIA2hXIAgBjIAFB9IA0DiIIGDoIJcjeIASihIAFjLIA9hqIA1BiIAEBXIAQEgIgEJxg");
	var mask_graphics_19 = new cjs.Graphics().p("ArPImIgYp7IAylpIA8hcIAmBlIABB/IA0DfIIEDnIJZjdIAViiIAAjGIBChvIA+BoIAUF0IgNJug");
	var mask_graphics_20 = new cjs.Graphics().p("ArPImIghp7IA0llIBEhgIArBpIgECAIA2DbIIBDmIJXjdIAXiiIgFjAIBIh1IBHBvIAABTIATEdIgWJrg");
	var mask_graphics_21 = new cjs.Graphics().p("ArPImIgqp7IAkjQIASiQIBLhlIAyBsIgKCAIA4DZIH/DlIJTjcIAaijIgKi7IBNh6IBRB2IgCBSIAUEaIgeJog");
	var mask_graphics_22 = new cjs.Graphics().p("ArPImIgFh1IgtoGIAljMIASiPIBShqIA4BvIgPCBIA5DWIH9DkIJQjbIAeikIgQi1IBSiAIBaB8IgDBQIAVEZIgnJlg");
	var mask_graphics_23 = new cjs.Graphics().p("ArOImIgGh1Ig3oGIApjHIASiQIBZhuIA+ByIgVCDIA8DTIH5DiIJPjaIAfilIgViwIBYiFIBkCDIgHBOIAWEXIgvJig");
	var mask_graphics_24 = new cjs.Graphics().p("ArOImIgGh1Ig/oGIAqjDIASiPIBghzIBFB2IgaCDIA8DQIH4DhIJLjZIAiimIgaiqIBdiLIBtCKIgIBMIAXEVIg3Jfg");
	var mask_graphics_25 = new cjs.Graphics().p("ArOImIgFh1IhJoGIAti+IASiPIBmh4IBLB5IgfCEIA+DNIH1DgIJJjXIAlioIghikIBjiRIB3CRIgLBKIAZETIhAJcg");
	var mask_graphics_26 = new cjs.Graphics().p("ArNImIgGh1IhSoGIAvi6IASiOIBth9IBSB8IglCFIBADLIHyDeIJGjWIAoipIgmifIBoiWICBCXIgNBIIAaESIhJJZg");
	var mask_graphics_27 = new cjs.Graphics().p("ArNImIgGh1IhboFIAxi2IATiPIB0iBIBXCAIgpCGIBBDHIHvDdIJDjVIAriqIgriZIBuicICKCeIgQBGIAbEQIhRJWg");
	var mask_graphics_28 = new cjs.Graphics().p("ArNImIgGh1IhjoFIAyiyIATiOIB7iGIBdCCIgvCHIBDDEIHuDdIJAjUIAtirIgwiTIBziiICTClIgRBEIAcEPIhZJSg");
	var mask_graphics_29 = new cjs.Graphics().p("ArNImIgFh1IhtoFIA1itIASiPICCiKIBkCGIg1CIIBFDBIHrDbII9jUIAxirIg2iOIB4inICdCsIgUBCIAeENIhiJPg");
	var mask_graphics_30 = new cjs.Graphics().p("ArMImIgGh1Ih2oFIA3ipIASiOICJiPIBqCJIg5CJIBFC+IHpDaII7jTIAzisIg8iIIB+itICnCyIgWBBIAfEKIhrJNg");
	var mask_graphics_31 = new cjs.Graphics().p("ArMImIgGh1Ih/oFIA5ikIATiPICQiTIBwCMIg/CKIBHC7IHmDZII4jSIA2itIhBiDICEiyICvC4IgXA/IAfEKIhzJJg");
	var mask_graphics_32 = new cjs.Graphics().p("ArMImIgFh1IiIoFIA7igIASiOICXiYIB2CPIhDCLIBIC5IHkDXII1jRIA5iuIhGh+ICIi3IC6DAIgaA9IAgEHIh7JGg");
	var mask_graphics_33 = new cjs.Graphics().p("ArLImIgGh1IiRoFIA9ibIASiPICeicIB9CSIhKCNIBLC1IHhDWIIzjQIA7ivIhMh4ICOi9IDDDGIgcA7IAiEFIiEJEg");
	var mask_graphics_34 = new cjs.Graphics().p("ArLImIgGh1IiaoFIA/iWIASiOICmiiICCCVIhPCNIBNCzIHeDVIIwjOIA+ixIhRhzICUjCIDMDMIgeA6IAjEEIiNJAg");
	var mask_graphics_35 = new cjs.Graphics().p("ArLImIgGh1IijoFIBCiSIASiOICsimICJCZIhUCOIBNCvIHdDUIItjNIBAiyIhWhtICZjIIDWDTIghA3IAlEDIiVI9g");
	var mask_graphics_36 = new cjs.Graphics().p("ArLImIgFh1IisoFIBDiNIASiOICzirICPCcIhZCPIBPCsIHaDTIIqjMIBEizIhdhoICfjNIDgDaIgjA2IAlD/IidI7g");
	var mask_graphics_37 = new cjs.Graphics().p("ArKImIgGh1Ii0oDIBEiMIASiPIC7itICcChIhYCMIBOCqIHNDTIIbjMIBCiwIhahmICtjSIDoDbIgjA6IAkD5IikI8g");
	var mask_graphics_38 = new cjs.Graphics().p("ArKImIgGh1Ii8n/IBEiOIASiOIDCiwICpCmIhXCLIBNCnIHADSIINjNIBBisIhZhlIC7jWIDyDbIglA/IAjDzIirI9g");
	var mask_graphics_39 = new cjs.Graphics().p("ArLImIgGh1IjDn9IBDiNIASiOIDLizIC0CrIhVCIIBNCmIGyDRIH/jNIBAipIhZhjIDLjbID6DbIgmBFIAiDtIiyI9g");
	var mask_graphics_40 = new cjs.Graphics().p("ArMImIgGh1IjLn6IBEiNIASiOIDSi2IDBCwIhUCFIBMClIGmDQIHvjNIA/inIhXhiIDZjeIEEDcIgoBJIAhDnIi4I+g");
	var mask_graphics_41 = new cjs.Graphics().p("ArMImIgGh1IjTn3IBDiOIATiOIDZi4IDOC1IhSCDIBKCiIGZDQIHhjNIA+ikIhWhgIDnjjIENDcIgoBQIAfDfIi/I/g");
	var mask_graphics_42 = new cjs.Graphics().p("ArNImIgGh1Ijbn1IBEiNIASiPIDii6IDaC6IhRCBIBJCgIGMDPIHTjNIA8ihIhUhfID2jnIEVDdIgpBUIAeDZIjGJAg");
	var mask_graphics_43 = new cjs.Graphics().p("ArOImIgGh1IjinyIBDiNIATiOIDpi+IDmC/IhPB+IBJCfIF/DOIHDjNIA8ieIhThdIEEjsIEfDdIgrBZIAdDUIjMJAg");
	var mask_graphics_44 = new cjs.Graphics().p("ArPImIgFh1IjqnvIBDiNIASiPIDxjAIDyDEIhNB8IBICdIFyDNIG1jNIA6icIhRhcIESjvIEoDeIgsBeIAcDMIjTJCg");
	var mask_graphics_45 = new cjs.Graphics().p("ArPImIgGh1IjynsIBEiOIASiOID5jDID/DJIhNB6IBHCbIFlDMIGnjNIA5iYIhRhbIEij0IExDeIgtBjIAaDGIjaJDg");
	var mask_graphics_46 = new cjs.Graphics().p("ArQImIgFh1Ij7nqIBEiNIATiOIEAjGIEMDOIhLB4IBFCYIFZDMIGYjOIA3iVIhPhZIEwj4IE6DfIguBoIAZC/IjgJEg");
	var mask_graphics_47 = new cjs.Graphics().p("ArQImIgGh1IkCnoIBEiMIASiPIEIjIIEYDSIhJB2IBFCXIFLDLIGJjOIA3iSIhOhXIE+j9IFEDfIgwBuIAYC4IjnJFg");
	var mask_graphics_48 = new cjs.Graphics().p("ArRImIgGh1IkJnkIBDiOIASiOIERjLIEjDYIhHBzIBECUIE+DLIF7jOIA1iPIhMhWIFNkBIFNDgIgyByIAXCzIjuJFg");
	var mask_graphics_49 = new cjs.Graphics().p("ArSImIgGh1IkRniIBEiNIASiOIEYjOIEwDcIhGByIBDCSIEyDKIFrjOIA1iMIhMhVIFckFIFWDhIgyB3IAVCsIj0JGg");
	var mask_graphics_50 = new cjs.Graphics().p("ArSImIgGh1IkZngIBDiMIATiPIEfjQIE9DiIhEBuIBCCQIEkDKIFdjOIAziKIhKhTIFqkJIFfDhIgzB8IAUCmIj7JHg");
	var mask_graphics_51 = new cjs.Graphics().p("ArTImIgGh1IkhncIBEiOIATiOIEnjTIFJDmIhDBtIBBCOIEXDJIFPjOIAyiGIhJhSIF5kOIFoDiIg1CBIATCfIkCJIg");
	var mask_graphics_52 = new cjs.Graphics().p("ArUImIgGh1IkonaIBDiNIATiPIEvjVIFVDsIhBBqIBACMIELDIIFAjOIAwiEIhHhQIGHkSIFxDiIg2CHIASCZIkIJIg");
	var mask_graphics_53 = new cjs.Graphics().p("ArVImIgFh1IkxnXIBEiNIATiOIE2jZIFiDwIhABoIA/CLID+DHIExjPIAwiAIhGhPIGVkWIF6DjIg2CLIAQCTIkPJJg");
	var mask_graphics_54 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIFuD1Ig/BmIA/CIIDwDHIEjjPIAvh9IhFhOIGkkaIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_55 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIF4D2Ig+BmIA+CJIDmDFIEajOIAvh9IhFhOIGtkbIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_56 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIGDD3Ig+BmIA+CJIDbDEIERjOIAvh9IhFhOIG2kbIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_57 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIGOD4Ig+BmIA+CJIDQDDIEHjOIAvh9IhFhOIHAkbIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_58 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIGYD5Ig+BmIA+CIIDGDDID+jNIAvh9IhFhOIHJkcIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_59 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIGjD7Ig/BlIA/CIIC7DCID1jNIAvh9IhFhOIHSkcIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_60 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIGtD7Ig+BmIA+CIICxDBIDsjNIAvh9IhFhOIHbkcIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_61 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIG5D8Ig/BlIA/CJIClDAIDjjMIAvh9IhFhOIHkkdIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_62 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIHDD9Ig/BlIA/CJICbC/IDajMIAvh9IhFhOIHtkdIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_63 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIHOD+Ig/BlIA/CJICQC+IDRjMIAuh9IhEhOIH2kdIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_64 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIHYD/Ig/BlIA/CJICGC9IDIjLIAuh+IhEhNIH/keIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_65 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIHiEAIg+BlIA+CJIB8C8IC/jLIAuh9IhEhOIIIkeIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_66 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIHtEBIg/BlIA/CJIBxC7IC2jLIAuh9IhEhOIIRkeIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_67 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIH4ECIg/BlIA/CJIBmC6ICtjLIAuh9IhEhNIIakfIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_68 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIIDEDIg/BlICaFCICkjLIAuh8IhEhNIIjkgIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_69 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIINEEIg/BlICQFBICajKIAvh9IhFhNIItkgIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_70 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIIXEFIg+BlIA+CIIBHC4ICRjKIAvh9IhFhNII2kgIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_71 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIIiEGIg/BlIA/CIIA8C3ICIjKIAvh8IhFhNII/khIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_72 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIItEHIg/BlIA/CIIAxC2IB/jJIAvh9IhFhNIJIkhIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_73 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbII4EHIg/BmIA/CIIAmC1IB2jJIAvh9IhFhNIJRkhIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_74 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJCEIIg/BlIA/CJIAcC0IBtjJIAvh8IhFhNIJakiIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_75 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJNEJIg/BlIA/CJIARCzIBkjIIAuh9IhEhNIJjkiIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_76 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJXEKIg/BmIA/CIIAHCyIBbjIIAuh9IhEhNIJskiIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_77 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJiELIg/BmIA/CIIgECxIBSjIIAuh8IhEhNIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_78 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJlENIg7BnIA8CEIgICyIBSjIIArh5IhBhQIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_79 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJnEPIg2BpIA5B/IgMCzIBSjIIAoh3Ig+hSIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_80 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJqEQIgxBsIA1B5IgQC1IBSjIIAlh1Ig7hUIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_81 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJtESIgtBtIAyB1IgUC2IBSjIIAihyIg4hXIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_82 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJwETIgpBwIAvBwIgYC3IBSjIIAfhvIg1haIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_83 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJyEVIgkBxIAsBsIgcC4IBSjIIAbhtIgxhcIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_84 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJ2EXIghBzIApBnIggC5IBSjIIAZhrIgvheIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_85 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJ4EYIgbB2IAkBiIgjC6IBSjIIAVhoIgrhhIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_86 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJ7EaIgXB3IAhBeIgnC7IBSjIIAShmIgohjIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_87 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIJ+EbIgUB6IAfBYIgrC9IBSjIIAPhjIglhmIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_88 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKAEdIgOB7IAaBUIguC+IBSjIIALhgIghhpIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_89 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKCEfIgJB9IAYBOIgzDAIBSjIIAIheIgehrIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_90 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKFEgIgGCAIAVBJIg2DBIBSjIIAGhcIgchtIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_91 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKIEiIgBCBIASBFIg7DCIBSjIIAChZIgYhwIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_92 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKKEjIADCEIAPBAIg+DDIBSjIIgBhWIgVhzIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_93 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKNElIAHCFIAMA8IhCDEIBSjIIgEhUIgSh1IJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_94 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKQEmIAMCJIAJA2IhHDFIBSjIIgWjJIJ1kjIGDDjIg4CRIAPCLIkWJLg");
	var mask_graphics_95 = new cjs.Graphics().p("ArVImIgGh1Ik4nUIBDiNIATiPIE/jbIKTEoIAQCKIAFAxIhKDHIBSjIIgLhPIgLh6IJ1kjIGDDjIg4CRIAPCLIkWJLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-3.775,y:-41.775}).wait(1).to({graphics:mask_graphics_1,x:-3.775,y:-45.375}).wait(1).to({graphics:mask_graphics_2,x:-3.825,y:-48.975}).wait(1).to({graphics:mask_graphics_3,x:-3.825,y:-52.575}).wait(1).to({graphics:mask_graphics_4,x:-3.825,y:-56.175}).wait(1).to({graphics:mask_graphics_5,x:-3.85,y:-59.775}).wait(1).to({graphics:mask_graphics_6,x:-3.875,y:-63.375}).wait(1).to({graphics:mask_graphics_7,x:-3.875,y:-66.975}).wait(1).to({graphics:mask_graphics_8,x:-3.9,y:-70.575}).wait(1).to({graphics:mask_graphics_9,x:-3.9,y:-74.15}).wait(1).to({graphics:mask_graphics_10,x:-3.925,y:-77.75}).wait(1).to({graphics:mask_graphics_11,x:-3.95,y:-81.35}).wait(1).to({graphics:mask_graphics_12,x:-3.95,y:-84.95}).wait(1).to({graphics:mask_graphics_13,x:-3.975,y:-88.55}).wait(1).to({graphics:mask_graphics_14,x:-4,y:-92.15}).wait(1).to({graphics:mask_graphics_15,x:-4,y:-95.75}).wait(1).to({graphics:mask_graphics_16,x:-4,y:-99.35}).wait(1).to({graphics:mask_graphics_17,x:-4.05,y:-102.95}).wait(1).to({graphics:mask_graphics_18,x:-4.05,y:-106.55}).wait(1).to({graphics:mask_graphics_19,x:-4.075,y:-106.55}).wait(1).to({graphics:mask_graphics_20,x:-4.1,y:-106.55}).wait(1).to({graphics:mask_graphics_21,x:-4.125,y:-106.55}).wait(1).to({graphics:mask_graphics_22,x:-4.15,y:-106.55}).wait(1).to({graphics:mask_graphics_23,x:-4.2,y:-106.55}).wait(1).to({graphics:mask_graphics_24,x:-4.225,y:-106.55}).wait(1).to({graphics:mask_graphics_25,x:-4.25,y:-106.55}).wait(1).to({graphics:mask_graphics_26,x:-4.275,y:-106.55}).wait(1).to({graphics:mask_graphics_27,x:-4.3,y:-106.55}).wait(1).to({graphics:mask_graphics_28,x:-4.325,y:-106.55}).wait(1).to({graphics:mask_graphics_29,x:-4.35,y:-106.55}).wait(1).to({graphics:mask_graphics_30,x:-4.375,y:-106.55}).wait(1).to({graphics:mask_graphics_31,x:-4.4,y:-106.55}).wait(1).to({graphics:mask_graphics_32,x:-4.45,y:-106.55}).wait(1).to({graphics:mask_graphics_33,x:-4.475,y:-106.55}).wait(1).to({graphics:mask_graphics_34,x:-4.5,y:-106.55}).wait(1).to({graphics:mask_graphics_35,x:-4.525,y:-106.55}).wait(1).to({graphics:mask_graphics_36,x:-4.55,y:-106.55}).wait(1).to({graphics:mask_graphics_37,x:-4.625,y:-106.55}).wait(1).to({graphics:mask_graphics_38,x:-4.575,y:-106.55}).wait(1).to({graphics:mask_graphics_39,x:-4.5,y:-106.55}).wait(1).to({graphics:mask_graphics_40,x:-4.425,y:-106.55}).wait(1).to({graphics:mask_graphics_41,x:-4.375,y:-106.55}).wait(1).to({graphics:mask_graphics_42,x:-4.3,y:-106.55}).wait(1).to({graphics:mask_graphics_43,x:-4.225,y:-106.55}).wait(1).to({graphics:mask_graphics_44,x:-4.15,y:-106.55}).wait(1).to({graphics:mask_graphics_45,x:-4.1,y:-106.55}).wait(1).to({graphics:mask_graphics_46,x:-4.05,y:-106.55}).wait(1).to({graphics:mask_graphics_47,x:-3.975,y:-106.55}).wait(1).to({graphics:mask_graphics_48,x:-3.9,y:-106.55}).wait(1).to({graphics:mask_graphics_49,x:-3.825,y:-106.55}).wait(1).to({graphics:mask_graphics_50,x:-3.775,y:-106.55}).wait(1).to({graphics:mask_graphics_51,x:-3.7,y:-106.55}).wait(1).to({graphics:mask_graphics_52,x:-3.625,y:-106.55}).wait(1).to({graphics:mask_graphics_53,x:-3.55,y:-106.55}).wait(1).to({graphics:mask_graphics_54,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_55,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_56,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_57,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_58,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_59,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_60,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_61,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_62,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_63,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_64,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_65,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_66,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_67,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_68,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_69,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_70,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_71,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_72,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_73,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_74,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_75,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_76,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_77,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_78,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_79,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_80,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_81,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_82,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_83,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_84,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_85,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_86,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_87,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_88,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_89,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_90,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_91,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_92,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_93,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_94,x:-3.5,y:-106.55}).wait(1).to({graphics:mask_graphics_95,x:-3.5,y:-106.55}).wait(1));

	// Vector_Smart_Object
	this.instance = new lib.VectorSmartObject();
	this.instance.setTransform(-77.5,-158,1.1664,1.1664,0,0,0,33.1,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.9,-158.8,208.8,72.9);


(lib.Rectangle1copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rectangle_1_copy
	this.instance_1 = new lib.Rectangle1copy_1();
	this.instance_1.setTransform(-3,-75,1,1,0,0,0,-6,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Rectangle_1_copy_s_Drop_Shadow
	this.instance_2 = new lib.Rectangle1copysDropShadow_1();
	this.instance_2.setTransform(63.5,19,1,1,0,0,0,63.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle1copy_2, new cjs.Rectangle(-153,-200,300,250), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Read_the_eBook__
	this.instance = new lib.CachedBmp_175();
	this.instance.setTransform(7.4,6.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_176();
	this.instance_1.setTransform(7.4,6.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_177();
	this.instance_2.setTransform(7.4,6.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

	// Rectangle_1_copy
	this.instance_3 = new lib.Rectangle1copy_2();
	this.instance_3.setTransform(-3,-75,1,1,0,0,0,-3,-75);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 84, 161, 0)];
	this.instance_3.cache(-155,-202,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(3));

	// Rectangle_1_copy
	this.instance_4 = new lib.Rectangle1copy_2();
	this.instance_4.setTransform(-3,-75,1,1,0,0,0,-3,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-200,300,250);


// stage content:
(lib.T1BridgeTheGap320x50 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// cta
	this.instance = new lib.cta();
	this.instance.setTransform(170.55,-35.55,0.5748,0.5737,0,0,0,-2.7,-73.9);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(197).to({_off:false},0).wait(1).to({regX:63.5,regY:19,x:208.6,y:17.75,alpha:0.1111},0).wait(1).to({y:17.8,alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({x:208.65,y:17.85,alpha:0.4444},0).wait(1).to({y:17.9,alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({x:208.7,y:17.95,alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(1).to({regX:-0.4,regY:-74.1,x:171.55,y:-35.5},0).wait(1).to({regX:63.5,regY:19,x:208.25,y:17.85},0).wait(13).to({x:208.2},0).wait(13).to({x:208.15},0).wait(13).to({x:208.1},0).wait(13).to({x:208.05},0).wait(13).to({x:208},0).wait(13).to({x:207.95},0).wait(13));

	// Logo
	this.instance_1 = new lib.Logo();
	this.instance_1.setTransform(28.25,15,1,1,0,0,0,24,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(299));

	// border
	this.instance_2 = new lib.CachedBmp_174();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(299));

	// bridge_animated
	this.instance_3 = new lib.bridgeanimation("synched",0,false);
	this.instance_3.setTransform(269.75,48.6,0.2995,0.2995,0,0,0,0,-72);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101).to({_off:false},0).wait(198));

	// Bridge_your_IT_skills_gap_now
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(60.25,30.5,1,1,0,0,0,0,-30.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(173).to({_off:false},0).wait(1).to({regX:131,regY:-43.6,x:192.25,y:17.5,alpha:0.0588},0).wait(1).to({x:193.25,alpha:0.1176},0).wait(1).to({x:194.3,alpha:0.1765},0).wait(1).to({x:195.3,alpha:0.2353},0).wait(1).to({x:196.3,alpha:0.2941},0).wait(1).to({x:197.35,alpha:0.3529},0).wait(1).to({x:198.35,alpha:0.4118},0).wait(1).to({x:199.4,alpha:0.4706},0).wait(1).to({x:200.4,alpha:0.5294},0).wait(1).to({x:201.4,alpha:0.5882},0).wait(1).to({x:202.45,alpha:0.6471},0).wait(1).to({x:203.45,alpha:0.7059},0).wait(1).to({x:204.45,alpha:0.7647},0).wait(1).to({x:205.5,alpha:0.8235},0).wait(1).to({x:206.5,alpha:0.8824},0).wait(1).to({x:207.55,alpha:0.9412},0).wait(1).to({x:208.55,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// will_be_disrupted_by_IT_skills_gaps
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(60.25,30.5,1,1,0,0,0,0,-30.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(76).to({_off:false},0).wait(1).to({regX:131,regY:-43.6,x:192.95,y:17.5,alpha:0.1},0).wait(1).to({x:194.7,alpha:0.2},0).wait(1).to({x:196.4,alpha:0.3},0).wait(1).to({x:198.15,alpha:0.4},0).wait(1).to({x:199.9,alpha:0.5},0).wait(1).to({x:201.6,alpha:0.6},0).wait(1).to({x:203.35,alpha:0.7},0).wait(1).to({x:205.1,alpha:0.8},0).wait(1).to({x:206.8,alpha:0.9},0).wait(1).to({x:208.55,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:209.3,alpha:0.9231},0).wait(1).to({x:210.1,alpha:0.8462},0).wait(1).to({x:210.85,alpha:0.7692},0).wait(1).to({x:211.6,alpha:0.6923},0).wait(1).to({x:212.35,alpha:0.6154},0).wait(1).to({x:213.15,alpha:0.5385},0).wait(1).to({x:213.9,alpha:0.4615},0).wait(1).to({x:214.65,alpha:0.3846},0).wait(1).to({x:215.4,alpha:0.3077},0).wait(1).to({x:216.2,alpha:0.2308},0).wait(1).to({x:216.95,alpha:0.1538},0).wait(1).to({x:217.7,alpha:0.0769},0).wait(1).to({x:218.5,y:17.55,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// By_2020__75__of_organizations
	this.instance_6 = new lib.t1("synched",0);
	this.instance_6.setTransform(60.05,30.5,1,1,0,0,0,0,-30.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(1).to({regX:131,regY:-43.6,x:192.45,y:17.5,alpha:0.0833},0).wait(1).to({x:193.9,alpha:0.1667},0).wait(1).to({x:195.35,alpha:0.25},0).wait(1).to({x:196.8,alpha:0.3333},0).wait(1).to({x:198.25,alpha:0.4167},0).wait(1).to({x:199.7,alpha:0.5},0).wait(1).to({x:201.1,alpha:0.5833},0).wait(1).to({x:202.55,alpha:0.6667},0).wait(1).to({x:204,alpha:0.75},0).wait(1).to({x:205.45,alpha:0.8333},0).wait(1).to({x:206.9,alpha:0.9167},0).wait(1).to({x:208.35,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:209.45,alpha:0.8889},0).wait(1).to({x:210.6,alpha:0.7778},0).wait(1).to({x:211.7,alpha:0.6667},0).wait(1).to({x:212.85,alpha:0.5556},0).wait(1).to({x:213.95,alpha:0.4444},0).wait(1).to({x:215.1,alpha:0.3333},0).wait(1).to({x:216.2,alpha:0.2222},0).wait(1).to({x:217.35,alpha:0.1111},0).wait(1).to({x:218.5,alpha:0},0).to({_off:true},1).wait(223));

	// bg
	this.instance_7 = new lib.AWS_Thepeopleyouneed_320x50();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(299));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,-82.9,190,133.4);
// library properties:
lib.properties = {
	id: 'C74F5314A0984197BB3D7E1A26932309',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1576619000303", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C74F5314A0984197BB3D7E1A26932309'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;