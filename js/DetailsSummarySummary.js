

function populateHeader(ticket, ticketId) {
 var ticketHeader= new String;
//populate all Ticket Information
 if (ticketId === null || ticketId == '') {
  ticketHeader = "<label>No information available</label>";
 } else {
  ticketHeader += "<div class='DataRow'><label>Submitted By:</label>&nbsp" + buildContactLink(ticket.submittedBy) + "</div>";
  ticketHeader += "<div class='DataRow'><label>Submitted date:</label>&nbsp" + ticket.submittedDate + "</div>";
  ticketHeader += "<div class='DataRow'><label>Submitting SA:</label>&nbsp" + ticket.submittingSA + "</div>";
  ticketHeader += "<div class='DataRow'><label>Source:</label>&nbsp" + ticket.source + "</div>";
  ticketHeader += "<div class='DataRow'><label>Alarm start:</label>&nbsp" + ticket.alarmStart + "</div>";  
  ticketHeader += "<div class='DataRow'><label>Last modified by:</label>&nbsp" + buildContactLink(ticket.lastModifiedBy) + "</div>";
  ticketHeader += "<div class='DataRow'><label>Modified Date:</label>&nbsp" + ticket.modifiedDate + "</div>";
 }
 return ticketHeader;
}

function populateAssignment(assignment, ticketId) {
 var ticketAssignment = new String;
//populate all Assignment Information
 if (ticketId === null || ticketId == '') {
  ticketAssignment = "<label>No information available</label>";
 } else {
  ticketAssignment += "<div class='DataRow'><label>Region:</label>&nbsp" + assignment.region + "</div>";
  ticketAssignment += "<div class='DataRow'><label>Support Area:</label>&nbsp" + assignment.supportArea + "</div>";
  ticketAssignment += "<div class='DataRow'><label>Queue:</label>&nbsp" + assignment.queue + "</div>";
  ticketAssignment += "<div class='DataRow'><label>Agent:</label>&nbsp" + buildContactLink(assignment.agent) + "</div>";
  ticketAssignment += "<div class='DataRow'><label>Assigned:</label>&nbsp" + assignment.assigned + "</div>";
 }
 return ticketAssignment;
}

function populateCodes(codes, ticketId) {
	var ticketCodes = new String;

	//populate all Code Information
	if (ticketId === null || ticketId == '')
	{
		ticketCodes = "<label>No information available</label>";
	}
	else 
	{
		if(codes.problem != "") 
		{
			ticketCodes += "<div class='DataRow'><label>Problem:</label>&nbsp" + codes.problem.code + " - " + codes.problem.desc + "</div>";
			ticketCodes += "<div class='DataRow'><label>Category:</label>&nbsp" + codes.problem.category + "</div>";
			ticketCodes += "<div class='DataRow'><label>Subcategory:</label>&nbsp" + codes.problem.subcategory + "</div>";
		}
		if(codes.cause != "") 
		{
			ticketCodes += "<hr>";
			ticketCodes += "<div class='DataRow'><label>Cause:</label>&nbsp" + codes.cause.code + " - " + codes.cause.desc + "</div>";
			ticketCodes += "<div class='DataRow'><label>Category:</label>&nbsp" + codes.cause.category + "</div>";
			ticketCodes += "<div class='DataRow'><label>Subcategory:</label>&nbsp" + codes.cause.subcategory + "</div>";
		}
		if(codes.solution != "") 
		{
			ticketCodes += "<hr>";
			ticketCodes = ticketCodes + "<div class='DataRow'><label>Solution:</label>&nbsp" + codes.solution.code + " - " + codes.solution.desc + "</div>";
			ticketCodes = ticketCodes + "<div class='DataRow'><label>Category:</label>&nbsp" + codes.solution.category + "</div>";
			ticketCodes = ticketCodes + "<div class='DataRow'><label>Subcategory:</label>&nbsp" + codes.solution.subcategory + "</div>";
		}
	}
	return ticketCodes;
}

function populateTTR(ticketInformation) {
 var ticketTTR = new String;
//populate all TTR Information
 if (ticketInformation.id === null || ticketInformation.id == '') {
  ticketTTR = ticketTTR + "<label>No information available</label>";
 } else {
  ticketTTR = ticketTTR + "<div class='DataRow'><label>TTR Start:</label>&nbsp" + ticketInformation.ttr.ttrstart + "</div>";
  ticketTTR = ticketTTR + "<div class='DataRow'><label>TTR Stop:</label>&nbsp" + ticketInformation.ttr.ttrstop + "</div>";
  ticketTTR = ticketTTR + "<div class='DataRow'><label>TTR SLA:</label>&nbsp" + ticketInformation.ttr.ttrsla + "</div>";
  ticketTTR = ticketTTR + "<div class='DataRow'><label>Closed by:</label>&nbsp" + buildContactLink(ticketInformation.ttr.closeBy) + "</div>";
  ticketTTR = ticketTTR + "<div class='DataRow'><label>Closed date:</label>&nbsp" + ticketInformation.ttr.closeDate + "</div>";
  ticketTTR = ticketTTR + "<div class='DataRow'><label>Resolved by:</label>&nbsp" + buildContactLink(ticketInformation.ttr.resolvedBy) + "</div>";
//  ticketTTR = ticketTTR + "<div class='DataRow'><label>TTR Adjustments:</label>&nbsp" + ticketInformation.ttr.ttrAdjustment + "</div>";
 }
 return ticketTTR;
}

function populateAttachments(attachmentsArr) {
 var attachmentDetails = new String;
 if(attachmentsArr == "") {
  attachmentDetails = "<div class='DataRow'><label>There are no attachments</label></div>";
 } else {
 for(var n=0;n<attachmentsArr.length;n++){
  attachmentDetails += "<div class='DataRow'><label>File:</label>&nbsp<a>" + attachmentsArr[n].file + "</a></div>"
  attachmentDetails += "<div class='DataRow'><label>By:</label>&nbsp" + buildContactLink(attachmentsArr[n].submitter) + "</div>"
  attachmentDetails += "<div class='DataRow'><label>Date:</label>&nbsp" + attachmentsArr[n].createDate + "</div>";
  attachmentDetails += "<div class='break'></div>";
 }
 }
 return attachmentDetails;
}

function populateTasks(tasksArr) {
 var taskDetails = new String;
 var taskCount = 0;
 if(tasksArr.length>5) {
	taskCount = 5;
	taskDetails ="<div class='DataRow'>Viewing " + taskCount + " of " + tasksArr.length + " <span class='link' onclick=\"Controller.sendEventToParentForm('ESMSI:SummaryViewTasks');\">View all</span></div><br/>"; 
 }
 else {
	taskCount = tasksArr.length;
	taskDetails ="<div class='DataRow'>Viewing " + taskCount + " of " + tasksArr.length + "</div><br/>"; 
}
 
  for(var n=0;n<taskCount;n++){
  taskDetails += "<div class='DataRow'>" + tasksArr[n].task + "</div>";
  taskDetails += "<div class='DataRow'><label>Working:</label>&nbsp" + buildContactLink(tasksArr[n].assigned)+ "</div>";
  taskDetails += "<div class='break'></div>";
 }
 if(taskDetails =="") {
  taskDetails = "<div class='DataRow'><label>There are no tasks</label></div>";
 }
 return taskDetails;
}

function populateNotifications(notificationsArr) {
 var notificationDetails = new String;
 var notificationCount = 0;
 if(notificationsArr.length>5) {
	notificationCount = 5;
	notificationDetails ="<div class='DataRow'>Viewing " + notificationCount + " of " + notificationsArr.length + " <span class='link' onclick=\"Controller.sendEventToParentForm('ESMSI:SummaryViewNotifications');\">View all</span></div><br/>"; 
 }
 else {
	notificationCount = notificationsArr.length;
	notificationDetails ="<div class='DataRow'>Viewing " + notificationCount + " of " + notificationsArr.length + "</div><br/>";  
 }

 for(var n=0;n<notificationCount;n++){
  notificationDetails  = notificationDetails  + "<div class='DataRow'><label>Sent:</label>&nbsp" + notificationsArr[n].sent + "</div>"
  notificationDetails  = notificationDetails  + "<div class='DataRow'><label>By:</label>&nbsp" + buildContactLink(notificationsArr[n].by) + "</div>"
  notificationDetails  = notificationDetails  + "<div class='DataRow' id='shortExcerpt" + n + "' style='display: block;'><label>Excerpt:</label>&nbsp" + notificationsArr[n].shortExceprt + "</div>";
  notificationDetails  = notificationDetails  + "<div class='DataRow' id='longExcerpt" + n + "' style='display: none;'><label>Excerpt:</label>&nbsp" + notificationsArr[n].longExceprt + "</div>";
  notificationDetails  = notificationDetails  + "<div class='right' id='moreDetails" + n + "'><a href='javascript:viewLongExcerpt(" + n + ")'>View full notification</a></div>";
  notificationDetails  = notificationDetails  + "<div class='break'></div>";
 }
 if(notificationDetails  == "") {
  notificationDetails  = "<div class='DataRow'><label>There are no notifications</label></div>";
 }
 notificationDetails = "<div class='clear'></div>" + notificationDetails;
 return notificationDetails;
}

function viewLongExcerpt(id) {
 if(document.getElementById("shortExcerpt"+id).style.display=="none") {
  document.getElementById("shortExcerpt"+id).style.display = "block";
  document.getElementById("longExcerpt"+id).style.display = "none";
  document.getElementById("moreDetails"+id).innerHTML = "<a href='javascript:viewLongExcerpt(" + id + ")'>View full notification</a>";
 } else {
  document.getElementById("shortExcerpt"+id).style.display = "none";
  document.getElementById("longExcerpt"+id).style.display = "block";
  document.getElementById("moreDetails"+id).innerHTML = "<a href='javascript:viewLongExcerpt(" + id + ")'>View short notification</a>";
 }
}

function populateLinkedTickets() {
 var childTicketDetails = new String; 

 for(var n=0;n<childTktArr.length;n++){
  childTicketDetails = childTicketDetails + "<div class='cell-45'>" + buildTicketLink(childTktArr[n].ticketId) + "</div>";
 }
 if(childTicketDetails =="") {
  childTicketDetails  = "<div class='DataRow'><label>There are no child tickets</label></div>";
 }
 childTicketDetails = "<div class='clear'></div>" + childTicketDetails +"<div class='break'></div>";
 document.getElementById("childTickets").innerHTML = childTicketDetails;
}
