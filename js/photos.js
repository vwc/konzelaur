var cssSelected = false;
var photosImg = new Array();
var imgScroll = 0;
var imgVisible = 0;
var imgTimer = null;
var photoItems = [];
var lightbox = false;
var photosInitialize = {
	"photos_index" : 
		{
			"display" : "horizontal",
			"items" : []
		},
	"photos_ausbildung" : 
		{
			"display" : "horizontal",
			"items" : []
		},
	"photos_ausruestung" : 
		{
			"display" : "vertical",
			"items" : 
				[
					{url: "/files/photos/ausruestung/ausruestung_1.jpg", title: ""},
					{url: "/files/photos/ausruestung/ausruestung_2.jpg", title: ""},
				    {url: "/files/photos/ausruestung/ausruestung_3.jpg", title: ""},
				    {url: "/files/photos/ausruestung/ausruestung_4.jpg", title: ""},
				    {url: "/files/photos/ausruestung/ausruestung_5.jpg", title: ""},
				    {url: "/files/photos/ausruestung/ausruestung_6.jpg", title: ""},
				    {url: "/files/photos/ausruestung/ausruestung_7.jpg", title: ""},
					{url: "/files/photos/ausruestung/ausruestung_8.jpg", title: ""},
					{url: "/files/photos/ausruestung/ausruestung_9.jpg", title: ""},
					{url: "/files/photos/ausruestung/ausruestung_10.jpg", title: ""}
				]
		},
	"photos_leistungen" : 
		{
			"display" : "horizontal",
			"items" : []
		},
	"photos_beratung" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/beratung/beratung_a.jpg", title: ""},
				    {url: "/files/photos/beratung/beratung_b.jpg", title: ""},
				    {url: "/files/photos/beratung/beratung_c.jpg", title: ""},
				    {url: "/files/photos/beratung/beratung_d.jpg", title: ""}
				]
		},
	"photos_gutachten" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/gutachten/gutachten_1.jpg", title: ""},
				    {url: "/files/photos/gutachten/gutachten_2.jpg", title: ""},
				    {url: "/files/photos/gutachten/gutachten_3.jpg", title: ""},
				    {url: "/files/photos/gutachten/gutachten_4.jpg", title: ""},
				    {url: "/files/photos/gutachten/gutachten_5.jpg", title: ""}
				]
		},
	"photos_baumpflege" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/baumpflege/baumpflege_a.jpg", title: ""},
				    {url: "/files/photos/baumpflege/baumpflege_b.jpg", title: ""},
				    {url: "/files/photos/baumpflege/baumpflege_c.jpg", title: ""},
				    {url: "/files/photos/baumpflege/baumpflege_d.jpg", title: ""},
				    {url: "/files/photos/baumpflege/baumpflege_e.jpg", title: ""}
				]
		},
	"photos_baumsanierung" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/baumsanierung/baumsanierung_1.jpg", title: ""},
				    {url: "/files/photos/baumsanierung/baumsanierung_2.jpg", title: ""},
				    {url: "/files/photos/baumsanierung/baumsanierung_3.jpg", title: ""},
				    {url: "/files/photos/baumsanierung/baumsanierung_4.jpg", title: ""},
				    {url: "/files/photos/baumsanierung/baumsanierung_5.jpg", title: ""}
				]
		},
	"photos_baumfaellung" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/baumfaellung/baumfaellung_a.jpg", title: ""},
				    {url: "/files/photos/baumfaellung/baumfaellung_b.jpg", title: ""},
				    {url: "/files/photos/baumfaellung/baumfaellung_c.jpg", title: ""},
				    {url: "/files/photos/baumfaellung/baumfaellung_d.jpg", title: ""},
				    {url: "/files/photos/baumfaellung/baumfaellung_e.jpg", title: ""}
				]
		},
	"photos_entsorgung" : 
		{
			"display" : "vertical",
			"items" : 
				[
				    {url: "/files/photos/entsorgung/entsorgung_a.jpg", title: ""},
				    {url: "/files/photos/entsorgung/entsorgung_b.jpg", title: ""},
				    {url: "/files/photos/entsorgung/entsorgung_d.jpg", title: ""},
				    {url: "/files/photos/entsorgung/entsorgung_e.jpg", title: ""}
				]
		},
	"photos_wurzelstockfraesen" : 
		{
			"display" : "vertical",
			"items" :
				[
				    {url: "/files/photos/wurzelstockfraesen/wurzelstock_a.jpg", title: ""},
				    {url: "/files/photos/wurzelstockfraesen/wurzelstock.jpg", title: ""},
				    {url: "/files/photos/wurzelstockfraesen/wurzelstock2.jpg", title: ""}
				]
		},
	"photos_referenzen" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/referenzen/referenzen_01.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_02.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_03.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_04.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_05.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_06.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_07.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_08.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_09.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_10.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_11.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_12.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_13.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_14.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_15.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_16.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_17.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_18.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_19.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_20.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_21.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_22.jpg", title: ""},
				    {url: "/files/photos/referenzen/referenzen_23.jpg", title: ""},
				], 
			"lightbox" : true
		},
	"photos_wissenswertes" : 
		{
			"display" : "horizontal",
			"items" : []
		},
	"photos_seilkletterarbeiten" : 
		{
			"display" : "vertical",
			"items" : 
				[
				    {url: "/files/photos/seilkletterarbeiten/seilkletter_1.jpg", title: ""},
				    {url: "/files/photos/seilkletterarbeiten/seilkletter_2.jpg", title: ""},
				    {url: "/files/photos/seilkletterarbeiten/seilkletter_3.jpg", title: ""},
				    {url: "/files/photos/seilkletterarbeiten/seilkletter_4.jpg", title: ""},
				    {url: "/files/photos/seilkletterarbeiten/seilkletter_5.jpg", title: ""},
				]
		},
	"photos_verordnung" : 
		{
			"display" : "horizontal",
			"items" : []
		},
	"photos_kappungen" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/kappungen/kappungen_1.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_2.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_3.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_4.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_5.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_7.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_8.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_9.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_10.jpg", title: ""},
				    {url: "/files/photos/kappungen/kappungen_11.jpg", title: ""}
				]
		},
	"photos_zuschnitt" : 
		{
			"display" : "vertical",
			"items" : 
				[
				    {url: "/files/photos/zuschnitt/kronenauslichtung.jpg", title: ""},
				    {url: "/files/photos/zuschnitt/kronenpflege.jpg", title: ""},
				    {url: "/files/photos/zuschnitt/kronenpflege2.jpg", title: ""}
				]
		},
	"photos_kronensicherung" : 
		{
			"display" : "horizontal",
			"items" : [
				    {url: "/files/photos/kronensicherung/kronensicherung.jpg", title: ""},
				    {url: "/files/photos/kronensicherung/beratung_b.jpg", title: ""},
				    {url: "/files/photos/kronensicherung/bilder-arbeit-22.jpg", title: ""}
				]
		},
	"photos_schnittzeitpunkt" : 
		{
			"display" : "horizontal",
			"items" : 
				[
				    {url: "/files/photos/schnittzeitpunkt/schnittzeitpunkt.jpg", title: ""},
				    {url: "/files/photos/schnittzeitpunkt/schnittzeitpunkt2.jpg", title: ""},
				    {url: "/files/photos/schnittzeitpunkt/schnittzeitpunkt3.jpg", title: ""},
				    {url: "/files/photos/schnittzeitpunkt/schnittzeitpunkt4.jpg", title: ""}
				]
		},
	"photos_berufsgenossenschaft" : 
		{
			"display" : "horizontal",
			"items" : []
		},
	"photos_bilder" : 
		{
			"display" : "vertical",
			"items" : 
				[
				    {url: "/files/photos/bilder/bild1.jpg", title: ""},
				    {url: "/files/photos/bilder/bild2.jpg", title: ""},
				    {url: "/files/photos/bilder/bild3.jpg", title: ""},
				    {url: "/files/photos/bilder/bild4.jpg", title: ""},
				    {url: "/files/photos/bilder/bild5.jpg", title: ""},
				    {url: "/files/photos/bilder/bild6.jpg", title: ""}
				]
		},
	"photos_arbeit" : 
		{
			"display" : "horizontal",
			"items" :  
				[
				    {url: "/files/photos/arbeit/bilder-arbeit-2.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-8.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-11.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-13.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-14.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-15.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-16.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-18.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-21.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-22.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-23.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-24.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-27.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-28.jpg", title: ""},
				    {url: "/files/photos/arbeit/bilder-arbeit-30.jpg", title: ""},
				    {url: "/files/photos/arbeit/FIL09823.jpg", title: ""},
				    {url: "/files/photos/arbeit/FIL12642.jpg", title: ""},
				    {url: "/files/photos/arbeit/gemischt-147.jpg", title: ""}
				]
		},
	"photos_baeume" : 
		{
			"display" : "vertical",
			"items" : 
				[
				    {url: "/files/photos/baeume/bild-baeume-8.jpg", title: ""},
				    {url: "/files/photos/baeume/bild-baeume5.jpg", title: ""},
				    {url: "/files/photos/baeume/bild-baeume7.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume-1.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume-3.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume-4.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume-9.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume-10.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume-11.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume.jpg", title: ""},
				    {url: "/files/photos/baeume/bilder-baeume6.jpg", title: ""},
				    {url: "/files/photos/baeume/bilderbaeume2.jpg", title: ""}
				]
		},
	"photos_faulstellen" : 
		{
			"display" : "vertical",
			"items" : 
				[
				    {url: "/files/photos/faulstellen/baumfaellung-neusae.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstelle-14.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-3.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-6.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-7.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-8.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-9.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-10.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-12.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-13.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-15.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-16.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-19.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen-20.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen.4.jpg", title: ""},
				    {url: "/files/photos/faulstellen/bilder-faulstellen.jpg", title: ""},
				    {url: "/files/photos/faulstellen/FIL-09606.jpg", title: ""},
				    {url: "/files/photos/faulstellen/januar-08337.jpg", title: ""}
				]
		},
		
	"photos_sturmschaeden" : 
		{
			"display" : "vertical",
			"items" :
				[
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_1.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_2.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_3.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_4.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_5.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_6.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_7.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_8.jpg", title: ""},
			    	{url: "/files/photos/sturmschaeden/sturmschaeden_9.jpg", title: ""}
				]
		},
	"photos_kontakt" : 
		{
			"display" : "horizontal",
			"items" : []
		},
	"photos_impressum" : 
		{
			"display" : "horizontal",
			"items" : []
		}
};
function myLoop(carousel) {
	imgTimer = setTimeout(function() { carousel.next(); myLoop(carousel);}, 5 * 1000);
}

function mycarousel_getItemHTML(item) {
	return '<img src="' + item.url + '"  border="0" alt="' + item.title + '" />';
};

function mycarousel_getItemHTML2(item) {
	return '<a href="' + item.url + '" title="' + item.title + '' + '"><img src="' + item.url + '"  border="0" alt="' + item.title + '" /></a>';
};

function mycarousel_initCallback(carousel) {
	carousel.lock();
	var url = window.location.href;
	var pageName = url.substring(url.lastIndexOf('/')+1);
	var pn = pageName.split('.')[0];
	var photoGallery = photosInitialize["photos_"+pn];
	if(photoGallery != "undefined") {
		if(photoGallery["items"].length > 0) {
			if(photoGallery["display"] == "horizontal") {
				getCSS('/lib/skins/tt/skin-horizontal.css');
				carousel.options.scroll = 3;
	    		carousel.options.visible = 3;
			}
			else if (photoGallery["display"] == "vertical") {
				getCSS('/lib/skins/tt/skin-vertical.css');
				carousel.options.scroll = 2;
	    		carousel.options.visible = 2;
			}
			if(photoGallery["lightbox"]) {
				lightbox = true;
			}
			photoItems = photoGallery["items"];
			carousel.size(photoItems.length);			
    		carousel.options.wrap = 'circular';
    		document.getElementById('photos').style.display = 'block';	
    		carousel.unlock();
	    	carousel.setup();
	    	
	    	myLoop(carousel);
		}
		else {
			document.getElementById('photos').style.display = 'none';
		}
	}
	else {
		document.getElementById('photos').style.display = 'none';
	}

    carousel.buttonNext.bind('click', function() {
		clearTimeout(imgTimer);
    });
    
    carousel.buttonNext.hover(function() {
		clearTimeout(imgTimer);
    }, function() {
		myLoop(carousel);
    });

    carousel.buttonPrev.bind('click', function() {
		clearTimeout(imgTimer);
    });
    
    carousel.buttonPrev.hover(function() {
		clearTimeout(imgTimer);
    }, function() {
		myLoop(carousel);
    });
};

function mycarousel_itemVisibleInCallback(carousel, item, i, state, evt) {
	var idx = carousel.index(i, photoItems.length);
	var item = mycarousel_getItemHTML(photoItems[idx - 1]);
	if(lightbox) {
		item = jQuery(mycarousel_getItemHTML2(photoItems[idx - 1])).get(0);
		tb_init(item);
	}
    carousel.add(i, item);
};

jQuery(document).ready(function() {
	jQuery('#mycarousel').jcarousel({
        initCallback: mycarousel_initCallback,
        itemVisibleInCallback: {onBeforeAnimation: mycarousel_itemVisibleInCallback},
        itemVisibleOutCallback: {onAfterAnimation: function(carousel, item, i, state, evt) { carousel.remove(i); }}
    });
});

function getCSS(css) {
    var head_node = document.getElementsByTagName('head')[0];
    var link_tag = document.createElement('link');
    link_tag.setAttribute('rel', 'stylesheet');
    link_tag.setAttribute('type', 'text/css');
    link_tag.setAttribute('href', css);
    head_node.appendChild(link_tag);
}