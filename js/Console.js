
function populateWorklog(items) {
	if (items.length > 0) {
		document.getElementById("WorkLogEntries").innerHTML = buildWorklog(items, newOrder);
	}
}

function populateDetailsSummary() {
	document.getElementById('ticketHeader').innerHTML = populateHeader(ticketInformation.ticket, ticketInformation.id);
	document.getElementById('ticketAssignment').innerHTML = populateAssignment(ticketInformation.assignment, ticketInformation.id);
	document.getElementById('ticketCodes').innerHTML = populateCodes(ticketInformation.codes, ticketInformation.id);
	document.getElementById('ticketTTR').innerHTML = populateTTR(ticketInformation);
	document.getElementById("attachments").innerHTML = populateAttachments(attachmentsArr);
	document.getElementById("tasks").innerHTML = populateTasks(tasksArr);
	document.getElementById("notifications").innerHTML = populateNotifications(notificationsArr);
//	document.getElementById("SUB-NAV").innerHTML = subnav(subnavElements);
	document.getElementById("DETAILS-NAVIGATION").innerHTML = Navigation(MainNavElement);

}

function populateForm() {
	populateWorklog(items);
	populateDetailsSummary();
}

function InitScript()
{
	populateForm();
}
