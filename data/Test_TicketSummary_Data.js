var ticketInformation =  {
	ticket:{
	  submittedBy: { name:'Susan Binette-Blair', login:'sbinet7672'},
	  submittedDate: '1294349324',
	  lastModifiedBy: { name:'Dane Huish', login:'dhuish200'},
	  modifiedDate: '1309974341',
	  alarmStart: '1294349324',
	  submittingSA: 'National IP Operations',
	  source: 'Lorem Ipsum'
	},
	contact:{
	  contactName: {name:'Dane Huish',login:'dhuish200'},
	  contactPhone: '(303) 267-2150',  
	  contactEmail: 'Dane_Huish@cable.comcast.com'
	},
	assignment:{
	  region: 'National',
	  supportArea: 'National IP Operations',
	  queue: 'SAS',
	  agent: { name:'Dane Huish', login:'dhuish200'},	  
	  assigned: '1294349324'	  
	},
	codes:{
	  problem: {code:'10012', desc:'Partial Node Outage',category:'Audit', subcategory:'Network Device'},
	  cause: '',
	  solution: ''
	},	
	ttr:{
	  ttrstart: '1304365361',
	  ttrstop: '',
	  ttrsla: '30',
	  closeBy: {name:'',login:''},
	  closeDate: '',
	  resolvedBy:  {name:'',login:''},
	  ttrAdjustment: ''
	},
	type:'Ticket',
	id:'SI000000014'
};

var attachmentsArr = [
];

var tasksArr = [
	{'task': 'Please search for errors in logs', 'assigned': { name:'Dane Huish', login:'dhuish200'}},
	{'task': 'Please check things out in the database', 'assigned': { name:'Susan Binette-Blair', login:'sbinet7672'}},
	{'task': 'Assistance with technical bridge', 'assigned': { name:' ', login:''}}
];

var notificationsArr = [ 
	{'sent': '03/21/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'Initial - cCentral customers experienced a brief failure in functionali...', 'longExceprt': 'Initial - cCentral customers experienced a brief failure in functionalities that required authorization from GDS (get CPNI information get CDVaccount type, get authorization token). The issue is suspected to have caused by momentary connectivity loss from directory services in CMC to GDS in Inflow. No root cause has been found. Eng & OPs are engaged. More updates to follow'},
	{'sent': '03/22/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'cCentral customers experienced a brief failure in functionalities that...', 'longExceprt': 'cCentral customers experienced a brief failure in functionalities that required authorization from GDS (get CPNI information get CDVaccount type, get authorization token). The issue is suspected to have caused by momentary connectivity loss from directory services in CMC to GDS in Inflow. No root cause was identified after investigation. The bridge has been closed. No further notifications will be sent'},
	{'sent': '03/23/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'CSG markets are experiencing issues in Grand Slam when attempting to...', 'longExceprt': 'CSG markets are experiencing issues in Grand Slam when attempting to roll modems. After deleting equipment from the account users do not receive the add equipment transaction. There is currently a workaround. Technicians are currently troubleshooting'},
	{'sent': '03/24/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'Technicians are still troubleshooting the roll modem issues affecting CSG...', 'longExceprt': 'Technicians are still troubleshooting the roll modem issues affecting CSG markets in Grand Slam. The current workaround is to manually enter the equipment into the equipment section and then re-provision.'},
	{'sent': '03/21/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'Initial - cCentral customers experienced a brief failure in functionali...', 'longExceprt': 'Initial - cCentral customers experienced a brief failure in functionalities that required authorization from GDS (get CPNI information get CDVaccount type, get authorization token). The issue is suspected to have caused by momentary connectivity loss from directory services in CMC to GDS in Inflow. No root cause has been found. Eng & OPs are engaged. More updates to follow'},
	{'sent': '03/22/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'cCentral customers experienced a brief failure in functionalities that...', 'longExceprt': 'cCentral customers experienced a brief failure in functionalities that required authorization from GDS (get CPNI information get CDVaccount type, get authorization token). The issue is suspected to have caused by momentary connectivity loss from directory services in CMC to GDS in Inflow. No root cause was identified after investigation. The bridge has been closed. No further notifications will be sent'},
	{'sent': '03/23/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'CSG markets are experiencing issues in Grand Slam when attempting to...', 'longExceprt': 'CSG markets are experiencing issues in Grand Slam when attempting to roll modems. After deleting equipment from the account users do not receive the add equipment transaction. There is currently a workaround. Technicians are currently troubleshooting'},
	{'sent': '03/24/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'Technicians are still troubleshooting the roll modem issues affecting CSG...', 'longExceprt': 'Technicians are still troubleshooting the roll modem issues affecting CSG markets in Grand Slam. The current workaround is to manually enter the equipment into the equipment section and then re-provision.'},
	{'sent': '03/21/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'Initial - cCentral customers experienced a brief failure in functionali...', 'longExceprt': 'Initial - cCentral customers experienced a brief failure in functionalities that required authorization from GDS (get CPNI information get CDVaccount type, get authorization token). The issue is suspected to have caused by momentary connectivity loss from directory services in CMC to GDS in Inflow. No root cause has been found. Eng & OPs are engaged. More updates to follow'},
	{'sent': '03/22/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'cCentral customers experienced a brief failure in functionalities that...', 'longExceprt': 'cCentral customers experienced a brief failure in functionalities that required authorization from GDS (get CPNI information get CDVaccount type, get authorization token). The issue is suspected to have caused by momentary connectivity loss from directory services in CMC to GDS in Inflow. No root cause was identified after investigation. The bridge has been closed. No further notifications will be sent'},
	{'sent': '03/23/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'CSG markets are experiencing issues in Grand Slam when attempting to...', 'longExceprt': 'CSG markets are experiencing issues in Grand Slam when attempting to roll modems. After deleting equipment from the account users do not receive the add equipment transaction. There is currently a workaround. Technicians are currently troubleshooting'},
	{'sent': '03/24/2011','by': {name:'Mac McMillan', login:'bmcmil200'}, 'shortExceprt': 'Technicians are still troubleshooting the roll modem issues affecting CSG...', 'longExceprt': 'Technicians are still troubleshooting the roll modem issues affecting CSG markets in Grand Slam. The current workaround is to manually enter the equipment into the equipment section and then re-provision.'}
];
