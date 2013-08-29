var _ImageDirectory = "images/";
var vf_FieldId = "685010001";
var newOrder;

function _LoadMore(item_id) {
	if (document.getElementById(item_id).style.height != "auto") {
		document.getElementById(item_id).style.height = "auto";
	} else {
		document.getElementById(item_id).style.height = "62px";
	}
}

function _K_search(value) {
  var found;
  if (value == '' || value == 'Keyword Search') {
    _K_clear();
  } else {
    for (var c = 0; c < items.length; c++) {
      if (items[c].SUBMITTER.name.toUpperCase().indexOf(value.toUpperCase()) < 0 && items[c].SUBMITTER.login.toUpperCase().indexOf(value.toUpperCase()) < 0 && items[c].SUBJECT.toUpperCase().indexOf(value.toUpperCase()) < 0 && items[c].DETAILS.toUpperCase().indexOf(value.toUpperCase()) < 0  && items[c].GROUP.toUpperCase().indexOf(value.toUpperCase()) < 0) {
        document.getElementById(items[c].ID).style.display = "none";
      } else {
        document.getElementById(items[c].ID).style.display = "block";
      }
    }
  }
}

function _K_clear() {
  for (var c = 0; c < items.length; c++) {
      document.getElementById(items[c].ID).style.display = "block";
  }
  k_search.value='Keyword Search'
}

function buildWorklog(items, newOrder) {
	var log_date;
	var data_rows;
	var _html_display = new String;

	if (newOrder == 0) {
		data_rows = items.reverse();
	} else {
		data_rows = items;
	}

	for (var c=0; c < data_rows.length; c++) {
		var item_id = data_rows[c].ID;
		var item_submitter = buildContactLink(data_rows[c].SUBMITTER);
		var item_group = data_rows[c].GROUP;
		var item_type = data_rows[c].TYPE;
		var item_subject = data_rows[c].SUBJECT;
		var item_details = data_rows[c].DETAILS;
		var item_utc = data_rows[c].UTC;
		var item_date = ConvertUTC_Date(data_rows[c].UTC);
		var item_time = ConvertUTC_Time(data_rows[c].UTC);
		var item_source = data_rows[c].SOURCE;
		var item_filename = data_rows[c].FILE_NAME;
		var item_filesize = data_rows[c].FILE_SIZE;
		var item_attachmentid = data_rows[c].ATTACHMENT_ID;
		var entry_style;

//Set Display Name to AR Login if Admin account
		if (item_group == '' || item_group == null) item_group = "Admin";
		if (data_rows[c].SUBMITTER.name == ' ' || data_rows[c].SUBMITTER.name == '' || data_rows[c].SUBMITTER.name == null) item_submitter = data_rows[c].SUBMITTER.login;
//End of Set Display Name

//Setup Row style
//Odd - Even row class
		if (((c + 1) % 2) == 0) {
			entry_style = "EntryEven";
		} else {
			entry_style = "EntryOdd";
		}

//Manual Entry class
		if (item_type == 'Manual Entry') {
			entry_style += " ManualEntry";
		}

		_html_display += "<div id=" + item_id + " class='Log' onclick=_LoadMore(\""+ item_id + "\") style=\"height: 62px;\">\n";

//Build TimeStamp
		_html_display += "<div class='TimeStamp'>\n";

//If date has changed
		if (log_date != item_date) {
			log_date = item_date;
			_html_display += "<div class='Date' style='display: block'>" + item_date + "</div>\n";
		} else {
			_html_display += "<div class='Date' style='display: none'>" + item_date + "</div>\n";
		}

		_html_display += "<div class='Time'>" + item_time + "</div>\n";
		_html_display += "</div>\n";

//Build Log Information
		_html_display += "<div class='" + entry_style + "'>\n";

		if (item_type != 'Manual Entry') {
			_html_display += "<div class='Type'>" + item_type + "</div>\n";
		}
		_html_display += "<div>";
		_html_display += "<div class='Submitter'><b>By</b>: " + item_submitter + "</div>\n";
		_html_display += "<div class='Group'>" + item_group + "</div>\n";
		_html_display += "</div>";
		_html_display += "<div class='Details ManualDetails'>\n";
		_html_display += "<div><b>Subject</b>: " + item_subject + "</div>\n";
		_html_display += "<div id='S" + item_id + "' style='display:block;'><pre><b>Details</b>: " + item_details + "</pre></div>\n";

		//Attachment Display
		if (item_attachmentid != '') {
			_html_display += "<div>\n";
			_html_display += "<div class='FileName'><b>File</b>: " + item_filename + "&nbsp&nbsp" + item_filesize + "</div>\n";
			_html_display += "<div class='Group'>" + buildAttachmentLink(item_attachmentid, '') + "</div>\n";
			_html_display += "</div>\n";
		}

		_html_display += "</div>\n";
		_html_display += "</div>\n";
		_html_display += "</div>\n";

	}

	return _html_display;
}
