function Navigation(navElements) 
{
	var tdRow = new String;

		tdRow += '<span class="TAB" id="NavSummary" onclick="getExecuteType(this);">Summary</span>';
		tdRow += '<span class="TAB" id="NavElements" onclick="getExecuteType(this);">Elements</span>';
		tdRow += '<span class="TAB" id="NavNotifications" onclick="getExecuteType(this);">Notifications</span>';
		tdRow += '<span class="TAB" id="NavTasks" onclick="getExecuteType(this);">Tasks</span>';
		tdRow += '<span class="TAB" id="NavAttachmentsAttributes" onclick="getExecuteType(this);">Attachments & Attributes</span>';
		tdRow += '<span class="TAB" id="NavDispatches" onclick="getExecuteType(this);">Dispatches</span>';

	return tdRow;
}
