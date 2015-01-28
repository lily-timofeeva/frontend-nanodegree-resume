var bio = {
	"name" : "Liliya Timofeeva",
	"role" : "Web Developer",
	"contacts" : {		
		"mobile" : "+420-77-44-88-665",
		"email" : "lily.timofeeva@gmail.com",
		"github" : "lily-timofeeva",
		"twitter" : "twitter",
		"location" : "Prague, Czech Republic"
	},
	"welcomeMessage" : "Hey! Welcome to my resume!",
	"skills" : ["JS", "Java", "C++", "Git and Github"],
	"bioPic" : "images/me.jpg",
//	"display" : 
};

var education = {
"schools" : [
	{
		"name" : "STANKIN",
		"location" : "Moscow, Russia",
		"degree" : "Master",
		"majors" : ["Computer Programming"],
		"dates" : 2010
	},

	{
		"name" : "Charles University",
		"location" : "Prague, Czech Republic",
		"degree" : "Master",
		"majors" : ["Economics and Finance"],
		"dates" : 2016
	}
],

"onlineCourses" : [
	{
		"title" : "Front End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/nd001"
	}
],
//"display" : 
};

var work = {
	"jobs" : [
		{
			"employer" : "Smaragd",
			"title" : "Helper",
			"location" : "Moscow, Russia",
			"dates" : "2008 - 2010",
			"description" : "Doing whatever was necessary at the moment."
		}, 

		{
			"employer" : "Best Way Company",
			"title" : "Director",
			"location" : "Prague, Czech Republic",
			"dates" : "2010-2015",
			"description" : "I am a derictor of my own company."
		}
	],
//	"display" :
};

var projects = {
	"projects" : [
		{
			"title" : "Resume",
			"dates" : "12.2014 - 02.2015",
			"description" : "My resume.",
			"images" : [
				"images/p1-1.jpg",
				"images/p1-2.jpg"
			]
		},

		{
			"title" : "Some Project",
			"dates" : "2014 - 2015",
			"description" : "Some awesome project.",
			"images" : [
				"images/p2-1.jpg",
				"images/p2-2.jpg"
			]
		}
	]
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#header").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedLocation);

	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
	
 }

education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSname = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSname);

		var formattedSlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSlocation);

		var formattedSdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSdegree);

		var formattedSdates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSdates);

		if (education.schools.length > 0) {

			for (major in education.schools[school].majors) {
				var formattedSmajor = HTMLschoolName.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedSmajor);
			}
		}		
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (onlineCourse  in  education.onlineCourses) {

		var formattedCtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formattedCtitle);

		var formattedCschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedCschool);

		var formattedCdates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedCdates);

		var formattedCurl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedCurl);
	}
} 

work.display = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);	
	}
}

projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

bio.display();
education.display();
work.display();
projects.display();

// Returns internationalized version of a name - first name with capital, second name - fully capitalized.
function inName(name) {
	name = name.trim().split(" "); 
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase(); 

	return (name[0] + " " + name[1]);
} 

$("#main").append(internationalizeButton);

//Map.
$("#mapDiv").append(googleMap);
