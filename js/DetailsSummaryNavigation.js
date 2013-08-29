/*<![CDATA[*/
var Lst;
function CngClass(obj){
	if (typeof(obj)=='string') obj=document.getElementById(obj);
	if (Lst) Lst.className='sb_link';
	obj.className='sb_linkClicked';
	Lst=obj;
}
/*]]>*/

function tdCell(tValue, id, count) {

	if(count=="") {
		return "<div class='sb_link' id='" + id + "' onclick='CngClass(this);RunGuideCall(\"" + id + "\");' >" + tValue + "</div>";
	} else {
		if(count >= 1) {
			return "<div class='sb_link' id='" + id + "' onclick='CngClass(this);RunGuideCall(\"" + id + "\");' >" + tValue + " (" + count + ")" + "</div>";
		} else {
			return "<div disabled class='disabled' id='" + id + "' onclick='CngClass(this);RunGuideCall(\"" + id + "\");'>" + tValue + "</div>";
		}
	}
}

function RunGuideCall(id) {
 alert('RunGuide:' + id);
}

function subnav(navElements) {
	var tdRow = new String;

	for(var n=0; n<navElements.length; n++){
		if(navElements[n].count!=undefined) {
			tdRow += tdCell(navElements[n].label, navElements[n].guide, navElements[n].count);
		}
		else {
			tdRow += tdCell(navElements[n].label, navElements[n].guide, '');
		}
	}
	return tdRow;
}

