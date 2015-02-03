var bio = {
	"name" : "Liliya Timofeeva",
	"role" : "Web Developer",
	"contacts" : {		
		"mobile" : "+420-00-00-00-000",
		"email" : "myemail@example.com",
		"github" : "mygithub",
		"twitter" : "mytwitter",
		"location" : "Prague, Czech Republic"
	},
	"welcomeMessage" : "Hey! Welcome!",
	"skills" : ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
	"bioPic" : "images/p2.jpg",
	"display" : function() {

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

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
};

var education = {
	"schools" : [
		{
			"name" : "STANKIN",
			"location" : "Moscow, Russia",
			"degree" : "Master",
			"majors" : ["Computer Programming"],
			"dates" : "2006 - 2010"
		},

		{
			"name" : "Charles University",
			"location" : "Prague, Czech Republic",
			"degree" : "Master",
			"majors" : ["Economics and Finance"],
			"dates" : "2013 - 2016"
		}
	],

	"onlineCourses" : [
		{
			"title" : "Front End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2014 - 2015",
			"url" : "https://www.udacity.com/course/nd001"
		}
	],

	"display" : function() {

		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSname = HTMLschoolName.replace("%data%", education.schools[school].name);		
			var formattedSdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSnameDegree = 	formattedSname + formattedSdegree;
			$(".education-entry:last").append(formattedSnameDegree);

			var formattedSlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSlocation);			

			var formattedSdates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSdates);

			if (education.schools.length > 0) {


				for (major in education.schools[school].majors) {
					var formattedSmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedSmajor);
				}
			}	
		}

		$(".education-entry:last").append(HTMLonlineClasses);

		if  (education.onlineCourses.length > 0) {
			for (onlineCourse  in  education.onlineCourses) {

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				var formattedOnlineSchooTitle = formattedOnlineTitle + formattedOnlineSchool;
				$(".education-entry:last").append(formattedOnlineSchooTitle);

				var formattedCdates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
				$(".education-entry:last").append(formattedCdates);

				var formattedCurl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
				$(".education-entry:last").append(formattedCurl);
			}
		}
	} 
};

var work = {
	"jobs" : [
		{
			"employer" : "Smaragd",
			"title" : "Helper",
			"location" : "Moscow, Russia",
			"dates" : "2008 - 2010",
			"description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem " + 
				"accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo " +
				"inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. " +
				"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, " + 
				"sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." 			
		}, 
		{
			"employer" : "Best Way Company",
			"title" : "Director",
			"location" : "Prague, Czech Republic",
			"dates" : "2010-2015",
			"description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem " + 
				"accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo " +
				"inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. " +
				"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, " + 
				"sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." 
		}
	],

	"display" : function() {

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
};

var projects = {
	"projects" : [
		{
			"title" : "Resume",
			"dates" : "12.2014 - 02.2015",
			"description" : "My resume.",
			"images" : [
				"images/p1-1.jpg",
				"images/p1-1.jpg"
			]
		},

		{
			"title" : "Some Project",
			"dates" : "2014 - 2015",
			"description" : "Some awesome project.",
			"images" : [
				"images/p2-1.jpg",
				"images/p2-1.jpg"
			]
		}
	]
};

// Displays Projects section.
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

// Internationalizes a name - first name with capital, second name - fully capitalized.
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
