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
		"degree" : "Master in Computer Programming",
		"majors" : ["1", "2", "3"],
		"dates" : 2010,
		"url" : "http://www.stankin.ru/"
	},

	{
		"name" : "Charles University",
		"location" : "Prague, Czech Republic",
		"degree" : "Master in CEconomics and Finance",
		"majors" : ["1", "2", "3"],
		"dates" : 2016,
		"url" : "http://www.cuni.cz/"
	}
],

"onlineCourses" : [
	{
		"title" : "Front End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : 2015,
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
