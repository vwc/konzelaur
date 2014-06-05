var siteMap = [
	{
		"url" : "index.html",
		"name" : "DIE FIRMA"
	},
	{
		"url" : "ausbildung.html",
		"name" : "AUSBILDUNG"
	},
	{
		"url" : "ausruestung.html",
		"name" : "AUSRÜSTUNG"
	},
	{
		"url" : "leistungen.html",
		"name" : "LEISTUNGEN",
		"sub" : 
			[
				{
					"url" : "beratung.html",
					"name" : "BERATUNG"
				},
				{
					"url" : "gutachten.html",
					"name" : "GUTACHTEN"
				},
				{
					"url" : "baumpflege.html",
					"name" : "BAUMPFLEGE"
				},
				{
					"url" : "baumsanierung.html",
					"name" : "BAUMSANIERUNG"
				},
				{
					"url" : "baumfaellung.html",
					"name" : "BAUMFÄLLUNG"
				},
				{
					"url" : "entsorgung.html",
					"name" : "ENTSORGUNG"
				},
				{
					"url" : "wurzelstockfraesen.html",
					"name" : "WURZELSTOCKFRÄSEN"
				}
			]
	},
	{
		"url" : "referenzen.html",
		"name" : "REFERENZEN"
	},
	{
		"url" : "wissenswertes.html",
		"name" : "WISSENSWERTES",
		"sub" : 
		[			
				{
					"url" : "seilkletterarbeiten.html",
					"name" : "SEILKLETTERARBEITEN"
				},
				{
					"url" : "verordnung.html",
					"name" : "VERORDNUNG"
				},
				{
					"url" : "kappungen.html",
					"name" : "KAPPUNGEN"
				},
				{
					"url" : "zuschnitt.html",
					"name" : "ZUSCHNITT"
				},
				{
					"url" : "kronensicherung.html",
					"name" : "KRONENSICHERUNG"
				},
				{
					"url" : "schnittzeitpunkt.html",
					"name" : "SCHNITTZEITPUNKT"
				},
				{
					"url" : "berufsgenossenschaft.html",
					"name" : "BERUFSGENOSSENSCHAFT"
				}
		]
	},
	{
		"url" : "bilder.html",
		"name" : "BILDER",
		"sub" :
		[
			{
				"url" : "arbeit.html",
				"name" : "ARBEIT"
			},
			{
				"url" : "baeume.html",
				"name" : "BÄUME"
			},
			{
				"url" : "faulstellen.html",
				"name" : "FAULSTELLEN"
			},
			{
				"url" : "sturmschaeden.html",
				"name" : "STURMSCHÄDEN"
			}
		]
	}
];

function buildMenu() {
	var url_full = window.location.href;
	var pageName = url_full.substring(url_full.lastIndexOf('/')+1);
	if(pageName == '') {
		pageName = 'index.html';
	}
	html = makeMainMenu( pageName, siteMap);
	document.write(html);
}

function makeMainMenu( pageName, menuDict) {
	var html = '<ul class="menu0">';
	var subMenuHTML = "";	
	var i = 0;
	for(i = 0; i < menuDict.length; i++) {
		var url = menuDict[i]["url"];
		var currPage = url.substring(url.lastIndexOf('/')+1);
		var subMenuSelected = isHasSelectedSubmenu(pageName, menuDict[i]["sub"]);
		var clsSub = '';
		if(menuDict[i]["sub"]) {
			if(subMenuSelected || currPage == pageName) {
				clsSub = 'hasSubMenu';
			}
		}
		
		var link = menuDict[i]["url"];	
		if (menuDict[i]["sub"]){ 
	 		link = link.substring(0, link.length-5) + "/" + menuDict[i]["sub"][0]["url"]; 
	 	} 	
		if(subMenuSelected || currPage == pageName) {
			html += '<li class="activeli0 cell0'+i+'"><a href="/'+link+'" class="active0">'+menuDict[i]["name"]+'</a><div class="'+clsSub+'"></div>';
		}
		else {
			html += '<li class="inactiveli0 cell0'+i+'"><a href="/'+link+'" class="inactive0">'+menuDict[i]["name"]+'</a>';
		}
		
		if(menuDict[i]["sub"]) {
			if(subMenuSelected) {
				subMenuHTML = makeSubMenu( pageName, menuDict[i]["sub"], "");
			}
			else if(currPage == pageName) {
				var parentMenu = currPage.substring(0, currPage.length-5);
				subMenuHTML = makeSubMenu( pageName, menuDict[i]["sub"], parentMenu+'/');
			}
		}
		html += '</li>';
	}
	
	html += '</ul>';
	html += subMenuHTML;
	return html;
}

function makeSubMenu(pageName, menuDict, parentMenu) {
	var html = '<table class="menu1"><tr>';
		
	var i = 0;
	for(i = 0; i < menuDict.length; i++) {
		var url = menuDict[i]["url"];
		var currPage = url.substring(url.lastIndexOf('/')+1);
		var clsSub = '';
		if(pageName == currPage ) {
			html += '<td class="activeli1 cell1'+i+'"><a href="'+parentMenu+menuDict[i]["url"]+'" class="active1">'+menuDict[i]["name"]+'</a><div class="'+clsSub+'"></div>';
		}
		else {
			html += '<td class="inactiveli1 cell1'+i+'"><a href="'+parentMenu+menuDict[i]["url"]+'" class="inactive1">'+menuDict[i]["name"]+'</a>';
		}
		html += '</td>';
	}
	html += '</tr></table>';
	return html;
}

function isHasSelectedSubmenu(pageName, subMenu) {
	if(subMenu) {
		for(j = 0; j < subMenu.length; j++) {
			var url = subMenu[j]["url"];
			var currPage = url.substring(url.lastIndexOf('/')+1);
			if(pageName == currPage) {
				return true;
			}
		}
	}
	return false;
}

function processEMail() {
    var yourEmail = $("#yourEmail").attr("value");
    var yourSubject = $("#yourSubject").attr("value");
    var yourMsg = $("#yourMsg").attr("value");
    jQuery.ajax({
    	type: "POST",
    	url: "tt.formular.php",
    	dataType: "html",
    	data: "yourEmail=" + yourEmail + "&yourSubject=" + yourSubject + "&yourMsg=" + yourMsg,
    	success: function(response) {
    		if(response.indexOf("success") > 0) {
    			document.getElementById("kontakt-info").style.display = 'none';
    			document.getElementById("formular-form").style.display = 'none';
    			$("#displaySendMsg").html(response);
    		}
    		else {
			    $("#yourEmail").attr("value", yourEmail);
			    $("#yourSubject").attr("value", yourSubject);
	    		$("#yourMsg").attr("value", yourMsg);
    			$("#displayFailMsg").html(response);
    		}
    	},
    	error: function() {
    		alert("Error occured during Ajax request...");
    	}
    });
}