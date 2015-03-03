var formattedName = HTMLheaderName.replace("%data%", "Michael Yin");
var formattedRole = HTMLheaderRole.replace("%data%", "Senior Java Developer");

//$("#header").prepend(formattedName);
//$("#header").append(formattedRole);

var skills = ["Linux/Windows","Java, Python, Scala, JQuery, html,css basics", "networking", "TL1 Protocol"];
var bio = {
    "name": "Michael Yin",
    "role": "Senior Software Engineer",
    "age": 43,
    "skills": skills,
    "contacts": {
        "mobile": "(206)491-62xx",
        "email" : "gt8442b@yahoo.com",
         "twitter": "@XXmichaelXX",
         "github" : "github.com/michaelyin",
          "location": "Vienna, VA"
     },

    "welcomeMessage" : "this is my live working resume!",
    "bioPic" : "images/IMG_2407.jpg"
};

var education = {
    "schools": [
        {
            "name": "Georgia Institute of Technology",
            "Location": "Atlanta, GA",
            "degree": "Ph.D",
            "majors": ["Michanical Engineering"],
            "dates": 2003,
            "url": "www.gatech.edu"
        }
    ],
    "display": function () {
        //doing nothing now
    }

};

var work = {
    "jobs": [
        {
            "employer": "LanKing Technology, Inc.",
            "title": "Senior Software Engineer",
            "Location": "Nanjing, China",
            "dates": "Sep.2014 - Dec. 2014",
            "description": "•	Developed an Online math questions management and learning website, Technology stack: JBoss, JSP + JQuery, MySql database",
            "images": ""
        }
    ],
    "display": function () {
        //doing nothing now
    }
};

var projects = {
    "projects": [
        {
            "title": "Senior Software Engineer",
            "dates": "Sep 2014 - Dec 2014",
            "description": "Online education platform",
            "images": ["images/1.jpg", "images/2.jpg"]
        }
    ]
};


function prependToHeader(what, how) {
    $("#header").prepend(how.replace("%data%", what));
}

function appendToResume(what, how, where) {
    $(where).append(how.replace("%data%", what));
}

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);
appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.bioPic, HTMLbioPic, "#header");
appendToResume(bio.welcomeMessage, HTMLWelcomeMsg, "#header");
$("#header").append(HTMLskillsStart);
appendToResume(bio.skills, HTMLskills, "#skills");

//
var job = work.jobs[0];
$("#workExperience").append(HTMLworkStart)
                    .append(HTMLworkEmployer.replace("%data%", job.employer))
                    .append(HTMLworkTitle.replace("%data%", job.title))
                    .append(HTMLworkDates.replace("%data%", job.dates))
                    .append(HTMLworkLocation.replace("%data%", job.Location))
                    .append(HTMLworkDescription.replace("%data%", job.description));

var school = education.schools[0];

$("#education").append(HTMLschoolStart)
                    .append(HTMLschoolName.replace("%data%", school.name))
                    .append(HTMLschoolDegree.replace("%data%", school.degree))
                    .append(HTMLschoolDates.replace("%data%", school.dates))
                    .append(HTMLschoolLocation.replace("%data%", school.Location))
                    .append(HTMLschoolMajor.replace("%data%", school.majors));

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
