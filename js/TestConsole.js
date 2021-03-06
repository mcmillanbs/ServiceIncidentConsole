$(document).ready(function(){
	$("#DETAILS").empty();
	$("#DETAILS").append("\
		<ul>\
		<li><a href=#SUMMARY id=\"tabSummary\">Summary</a></li>\
		<li><a href=#ELEMENT id=\"tabElement\">Elements</a></li>\
		<li><a href=#NOTIFICATION id=\"tabNotification\">Notifications</a></li>\
		<li><a href=#TASK id=\"tabTask\">Tasks</a></li>\
		<li><a href=#ATTACHMENT id=\"tabAttachment\">Attachments &amp; Attributes</a></li>\
		<li><a href=#DISPATCH id=\"tabDispatch\">Dispatches</a></li>\
		</ul>\
		<DIV ID=\"SUB-NAV\" CLASS=\"SUB-NAV\"></DIV>\
		<div id=SUMMARY>SUMMARY</div>\
		<div id=ELEMENT>ELEMENTS</div>\
		<div id=NOTIFICATION>NOTIFICATIONS</div>\
		<div id=TASK>TASKS</div>\
		<div id=ATTACHMENT>ATTACHMENTS &amp; ATTRIBUTES</div>\
		<div id=DISPATCH>DISPATCHES</div>");
	$("#DETAILS").tabs();

//Attacth action to tabs to populate pages
	$("#tabElement").click(TabElement());
	$("#tabSummary").click(TabSummary());

//Set Up Footer
	$("#FOOTER").empty();
	$("#FOOTER").append("<button CLASS=\"PRIMARY\" id=\"btnHome\" >Home</button>");
	$("#FOOTER").append("<button CLASS=\"PRIMARY\" id=\"btnPrint\"  >Print Ticket</button>");
	$("#FOOTER").append("<button CLASS=\"PRIMARY\" id=\"btnRefresh\">Refresh Ticket</button>");
	$("#btnHome").click(function(){window.location = "/";});
	$("#btnRefresh").click(function(){window.location = "#";});
	$("#btnPrint").click(function(){alert("Printing Ticket");});

//Open Summary tab
TabSummary();

});


function TabSummary() {
	$("#SUMMARY").empty();
 	$("#SUMMARY").append("<div class=\"Column\">\
			<fieldset><legend>Ticket Information</legend><div id=\"ticketHeader\" class=\"SectionData\">There is currently no Ticket Information</div></fieldset>\
 			<fieldset><legend>Ticket Codes</legend><div id=\"ticketCodes\" class=\"SectionData\">There is currently no Ticket Codes</div></fieldset> \
			<fieldset><legend>Assignment Information</legend><div id=\"ticketAssignment\" class=\"SectionData\">There is currently no Assignment Information</div></fieldset> \
			<fieldset><legend>Contact Information</legend><div id=\"ticketContact\" class=\"SectionData\">There is currently no Contact Information</div></fieldset> \
			</div>");
 	$("#SUMMARY").append("<div class=\"Column\">\
			<fieldset><legend>TTR Information</legend><div id=\"ticketTTR\" class=\"SectionData\">There is currently no TTR Information</div></fieldset>\
			<fieldset><legend>Attachments</legend><div id=\"attachments\" class=\"SectionData\">There are currently no Attachments</div></fieldset>\
			<fieldset><legend>Tasks</legend><div id=\"tasks\" class=\"SectionData\">There are currently no Tasks</div></fieldset>\
			</div>");
 	$("#SUMMARY").append("<div class=\"Column\">\
			<fieldset><legend>Correlation</legend><div id=\"correlation\" class=\"SectionData\">There are currently no Correlation</div></fieldset>\
			<fieldset><legend>Manual Notifications</legend><div id=\"notifications\" class=\"SectionData\">There are currently no Notifications</div></fieldset>\
			</div>");
};

function TabElement() {
	$("#ELEMENT").empty();
	$("#ELEMENT").append("<button CLASS=\"SECONDARY\" id=\"btnPrimaryElements\"   >Primary Elements</button>\
							<button CLASS=\"SECONDARY\" id=\"btnImpactedElements\"  >Impacted Elements</button>\
							<button CLASS=\"SECONDARY\" id=\"btnImpcatedServices\"  >Impacted Services</button>\
							<button CLASS=\"SECONDARY\" id=\"btnImpactedLocations\" >Impacted Locations</button>\
							<button CLASS=\"SECONDARY\" id=\"btnImpactedEnterprise\">Impacted Enterprise Customers</button>");
	$("#ELEMENT").append("<div CLASS=\"TABLEBOX\" id=\"tableBox\">TABLE</div>");
	$("#ELEMENT").append("<div CLASS=\"DETAILBOX\" id=\"DetailBox\">DETAIL</div>");
	$("#tableBox").empty();
	$("#tableBox").append("<div id=\"Keyword\">\
							<input class=TxtInput type=text placeholder='Keyword Search' maxlength=255 id='k_search' onchange='_K_search(this.value)' onfocus='this.value=\"\"'/> \
							<BUTTON class=SECONDARY>Find</button>\
							<BUTTON class=SECONDARY>Clear</button>\
							</div>");
	$("#DetailBox").empty();
	$("#DetailBox").append("<div CLASS=\"TitleDetail\" id=\"TitleDetail\">Details of Element: </div>\
							<div CLASS=\"InputDetail\" id=\"InputDetail\">Information for the Masses</div>");
};
