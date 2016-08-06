var bio = {
	"name": "Evelyn Honey",
	"role": "Web Developer",
	"contacts": {
		"mobile": "603.852.0299",
		"email": "ehoney33@hotmail.com",
		"github": "@evelyn-honey", 
		"twitter": "@evy_honey",
		"location": "Denver"
	},	
	"welcomeMessage": "I'm a web-developer driven by the challenge of defying steryotypes.", 
	"skills": ["Photoshop", "InDesign", "Illustrator", "Premiere"],
	"biopic": "images/evelyn-honey-pro.jpg"
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#topContacts").append(formattedWelcomeMessage);

bio.display = function() {
	for (bio in bio.bio) {

	}
}

var work = {
	"jobs": [
	{
		"employer": "Holland & Hart LLP", 
		"title": "Marketing Assistant",
		"location": "Denver",
		"dates": "2015-Present",
		"description": "Ran the email marketing system. Assisted in creative design using Adobe CC.",
		"url": "https://www.hollandhart.com/"
	}
	]
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}

displayWork();

var education = {
	"schools": [
	{
		"name": "Sage College of Albany",
		"location": "Albany, NY",
		"degree": "Bachelor - Incomplete", 
		"major": "Graphic Design",
		"dates": "2014 - 2015",
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Development Nanodegree",
		"school": "Udacity",
		"dates": "2015 - Present",
		"url": "https://www.udacity.com/"
	}
	]
};

 education.display = function() {
	for (schools in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
		$(".education-entry:last").append(formattedSchoolMajor);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
		$(".education-entry:last").append(formattedSchoolDates);
    }
}

education.display ();

var projects = {
	"projects": [
		{
		"title": "not sure what to put",
		"dates": "2016", 
		"description": "I do not know what I am putting here.", 
		"images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
		}
	]
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
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display ();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$("#mapDiv").append(googleMap);

$('#main').append(internationalizebutton)