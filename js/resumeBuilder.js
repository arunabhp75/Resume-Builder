var bio = {
	"name": "Arunabh Pandey",
	"role": "Freelancer",
	"contacts": {
		"mobile": "8875517770",
		"email": "arunabhp75@gmail.com",
		"github": "www.github.com/arunabhp75",
		"linkedin": "@arunabh-pandey",
		"location": "Jaipur, Rajasthan"
	},
	"welcomeMessage": "Hi, I am a fourth year Computer Science undergraduate student at IIIT Kota with an interest in networking, programming, advertising, and social media.",
	"skills": ["Team Leader", "Machine Learning", "Object Oriented Programming", "Web Development", "Python"],
	"skills2": ["Network and Security", "Computation Theory", "Shell Scripting", "Social Media Marketing"],
	"biopic": "images/me.PNG"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedHTMLlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	var formattedSkills2 = HTMLskills.replace("%data%", bio.skills2[0]);

	$("#topContacts").prepend(formattedHTMLmobile);
	$("#topContacts").prepend(formattedHTMLemail);
	$("#topContacts").prepend(formattedHTMLlinkedin);
	$("#topContacts").prepend(formattedHTMLgithub);
	$("#topContacts").prepend(formattedHTMLlocation);

	$("#footerContacts").append(formattedHTMLmobile);
	$("#footerContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedHTMLlinkedin);
	$("#footerContacts").append(formattedHTMLgithub);
	$("#footerContacts").append(formattedHTMLlocation);

	$("#header").append(formattedMessage);
	$("#header").append(formattedPic);
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		var formattedSkills = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkills);
	});
	$("#header").append(HTMLskills2);
	bio.skills2.forEach(function(skill) {
		var formattedSkills2 = HTMLskills.replace("%data%", skill);
		$("#skills2").append(formattedSkills2);
	});
};
bio.display();

var work = {
	"Internships": [
		{
			"employer": "Trip Alfresco",
			"title": "Search Engine Optimization",
			"location": "Virtual",
			"dates": "Jan 2017-March 2017",
			"description": "Creating website's traffic and ranking the site higher than the millions of other sites in response to a search query."
		},
		{
			"employer": "Affimity",
			"title": "Social Media Evangelist",
			"location": "Virtual",
			"dates": "Dec 2015 - April 2017",
			"description": "To benchmark Affimity with the existing social networks, to help bring more users who are looking to share their passions on Affimity and to engage with them."
		},
		{
			"employer": "Geekeasier",
			"title": "Content Writer",
			"location": "Virtual",
			"dates": "May 2017 - July 2017",
			"description": "Writing articles on technical topics with proper illustrations."
		},
		{
			"employer": "GradeUp",
			"title": "Content Writer",
			"location": "Virtual",
			"dates": "June 2017 - August 2017",
			"description": "Preparing sets of questions on different computer science subjects."
		}
	]
};

work.display = function() {
	$('#workExperience').append(HTMLworkStart);
	for (var i in work.Internships) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.Internships[i].employer);
		$(".work-entry:last").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.Internships[i].title);
		$(".work-entry:last").append(formattedTitle);
		var formattedDates= HTMLworkDates.replace("%data%", work.Internships[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.Internships[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.Internships[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
};
work.display();

var education = {
	"schools": [
		{
			"name": "Indian Institute of Information Technology, Kota",
			"location": "Jaipur, Rajasthan",
			"degree": "Bachelors",
			"majors": ["Computer Science and Engineering"],
			"dates": "2015-Present",
			"url": "www.iiitkota.ac.in"
		},
		{
			"name": "Birla Public School",
			"location": "Pilani, Rajasthan",
			"degree": "12th CBSE",
			"majors": ["Science"],
			"dates": "2014-2015",
			"url": "www.bpspilani.com"
		},
		{
			"name": "Birla Public School",
			"location": "Pilani, Rajasthan",
			"degree": "10th CBSE",
			"majors": ["Science"],
			"dates": "2012-2013",
			"url": "www.bpspilani.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Introduction to Web Development",
			"school": "Forsk Technologies",
			"date": "2016",
			"url": "www.forsk.in"
		},
		{
			"title": "Introduction to Python",
			"school": "Forsk Technologies",
			"date": "2016",
			"url": "www.forsk.in"
		}
	]
};

education.display = function() {
	for (var i in education.schools) {
		$('#education').append(HTMLschoolStart);
	 	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates= HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors.join());
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$('#education').append(HTMLonlineClasses);
	for (var i in education.onlineCourses) {
		$('#education').append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates= HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		$(".education-entry:last").append(formattedDates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedUrl);
	}
};
education.display();
var projects = {
	"projects": [
		{
			"title": "Graph based malware classification",
			"dates": "2018",
			"description": "Using system calls to distinguish between malware and benign apps by contructing a graph bases evaluation.",
			"images": ["images/GBMC.png"]
		},
		{
			"title": "Movie Ticket Booking System",
			"dates": "2017",
			"description": "Making an interactive movie ticket booking system using MySQL and PHP. ",
			"images": ["images/MTB.png"]
		}
	]
};

projects.display = function() {
	for (var i in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates= HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
		$(".project-entry:last").append(formattedImage);
	}
};
projects.display();

$("#mapDiv").append(googleMap);