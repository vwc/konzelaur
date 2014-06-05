function NewsPortlet() {
    var title = "";
    var desc = "";
    var link ="";
    this.SetTitle = SetTitle;
    this.SetDesc = SetDesc;
    this.SetLink = SetLink;
    this.WriteToDocument = WriteToDocument; 

    function SetTitle(aTitle) {
    	title = aTitle;
    }

    function SetDesc(aDesc) {
    	desc = aDesc;
    }

    function SetLink( aLink ) {
        link = aLink;
    }

    function WriteToDocument( myText ) {
    	var ouputStr;
    	ouputStr = "";
    	ouputStr = ouputStr + "<div class='news-portlet-top-seperator'></div>";
    	ouputStr = ouputStr + "<div class='news-portlet-title'>" + title + "</div>";
    	ouputStr = ouputStr + "<div class='news-portlet-description'>"+ desc + "</div>";
    	ouputStr = ouputStr + "<div class='news-portlet-link'><a href='" + link +"'>Weiter lesen</a></div>";
    	ouputStr = ouputStr + "<div class='news-portlet-bottom-seperator'></div>";
    	document.write(ouputStr);
    }
}

function buildNewsPortlet(){
	var news = new NewsPortlet();
	news.SetTitle("Qualifikation");
	var desc;
	desc = "";
	desc = desc + "<ul>";
	desc = desc + "<li> <p> Ausgebildet und staatlich geprüft in Baumpflege, Sanierung, Fällungen   </p> </li>";
	desc = desc + "<li> <p> Ausgebildet und zertifiziert für Hubarbeitsbühnen und Seilklettertechnik  </p> </li>";
	desc = desc + "<li> <p> Zusatzausbildung: European Treeworker, European Treetechnician, Fachagrarwirt für Baumpflege und Sanierung </p> </li>";
	desc = desc + "</ul>";
	news.SetDesc(desc);
	news.SetLink("/ausbildung.html");
	news.WriteToDocument();
	
	news.SetTitle("DIE NR. 1 IN DER REGION");
	desc = "";
	desc = desc + "<ul>";
	desc = desc + "<li> <p> Größter auf Baumpflege und Fällungen spezialisierter Betrieb  </p> </li>";
	desc = desc + "<li> <p> Über 500 Aufträge im Jahr 2011 </p> </li>";
	desc = desc + "<li> <p> Über 550 Aufträge im Jahr 2012 </p> </li>";
	desc = desc + "<li> <p> Über 700 Aufträge im Jahr 2013 </p> </li>";
	desc = desc + "<li> <p> Partner des zoologischen Gartens Augsburg </p> </li>";
	desc = desc + "</ul>";
	news.SetDesc(desc);
	news.SetLink("/index.html");
	news.WriteToDocument();
	document.write('<img src="/files/download/LogoMIKE.png" alt="" width="210px" />');
}
