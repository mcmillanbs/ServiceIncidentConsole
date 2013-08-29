//Set Default Active Page (selection)
var activeButton = "1";

var MainNavElement = new Array (
	{'id':'NavSummary',               'label': 'Summary'},
	{'id':'NavElements',              'label': 'Elements'},
	{'id':'NavNotifications',         'label': 'Notifications'},
	{'id':'NavTasks',                 'label': 'Tasks'},
	{'id':'NavAttachmentsAttributes', 'label': 'Attachments & Attributes'},
	{'id':'NavDispatches',            'label': 'Dispatches'}
);

var subnavSummary = new Array (
);

var subnavElements = new Array (
	{
		'type':'btn_selected',  
		'label':'Manage Elements',
		'guide':'ESMSI:ManageElements'
	},	
	{
		'type':'btn_selectable',
		'label':'Manage Relationships', 
		'guide':'ESMSI:ManageRelationships'
	},	
	{
		'type':'btn_selectable',
		'label':'Manage All Elements', 
		'guide':'ESMSI:ManageAllElements'
	},	
	{
		'type':'btn_selectable',
		'label':'View Correlation', 
		'guide':'ESMSI:ViewCorrelation'
	}
);

var GuideElements = new Array (
	{'type':'btn_selected',  'label':'Primary Elements',             'guide':'ESMSI:PrimaryElements'},	
	{'type':'btn_selectable','label':'Impacted Elements',            'guide':'ESMSI:ImpactedElements'},	
	{'type':'btn_selectable','label':'Impacted Services',            'guide':'ESMSI:ImpactedServices'},	
	{'type':'btn_selectable','label':'Impacted Locations',           'guide':'ESMSI:ImpactedLocations'},	
	{'type':'btn_selectable','label':'Impacted Enterprise Customers','guide':'ESMSI:ImpactedEnterCust'}
);

var subnavNotifications = new Array (
);

var subnavTasks = new Array (
);

var subnavAttachmentsAttributes = new Array (
);

var subnavDispatches = new Array (
);
