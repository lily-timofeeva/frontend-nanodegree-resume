var bio = {
	"name" : "Liliya Timofeeva",
	"role" : "Web Developer",
	"contacts" : {		
		"mobile" : "+420-77-44-88-665",
		"email" : "lily.timofeeva@gmail.com",
		"github" : "github",
		"twitter" : "twitter",
		"location" : "Prague, Czech Republic"
	},
	"welcomeMessage" : "Hey! Welcome to my resume!",
	"skills" : ["JS", "Java"],
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
	"title" : "Resume",
	"dates" : "12.2014 - 02.2015",
	"description" : "My resume.",
	"images" : [
		"images/fry.jpg",
		"images/me.jpg"
	]
};

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
}

function displayWork() {

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

displayWork();



