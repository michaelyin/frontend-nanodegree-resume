//var formattedName = HTMLheaderName.replace("%data%", "Michael Yin");
//var formattedRole = HTMLheaderRole.replace("%data%", "Senior Java Developer");

//$("#header").prepend(formattedName);
//$("#header").append(formattedRole);

var skills = ["Java, JavaScript , Python, Scala, C++, C", "Ubuntu, Android, Unix (AIX), Windows 2000/XP/7, Cygwin, VMWare, Weblogic 10.0, JBoss, Glassfish",
               "MySQL , Oracle PL/SQL, IBM Informix 9.0","Spring, Spring Boot, Spring Security", "Hibernate/iBatis, GWT/Angular.js, Subversion/GIT/CVS/AccuRev",
                "Maven/Ant/ IVY, Eclipse,  Android Studio, MS Visual Studio, VIM"];
var bio = {
    "name": "Michael Yin",
    "role": "Senior Software Engineer",
    "age": 43,
    "skills": skills,
    "contacts": {
        "mobile": "(206)491-62xx",
        "email" : "gt8442b@yahoo.com",
         "twitter": "@XXmichaelXX",
         "github" : "<a href='https://github.com/michaelyin' style='display:inline'><u>github.com/michaelyin</u></a>",
          "location": "Vienna, VA"
     },
    "welcomeMessage" : "",
    "bioPic": "images/IMG_2407.JPG",
    "display": function(){
        prependToHeader(bio.role, HTMLheaderRole);
        prependToHeader(bio.name, HTMLheaderName);
        appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
        appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
        appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
        appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
        appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
        appendToResume(bio.bioPic, HTMLbioPic, "#header");
        appendToResume(bio.welcomeMessage, HTMLWelcomeMsg, "#header");

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            $.each(bio.skills, function (index, value) {
                $("#skills").append(HTMLskills.replace("%data%", value));
            });
        }
    }
};

var award = {
    "awards": [
        {
            "title": "\"Above and Beyond\" Certificate of Achievement Award from CIBER",
            "dates": "2008",
            "images": ["images/a_and_b.png", "images/awards_cup.jpg"]
        },
        {
            "title": "SAIC/Georgia Tech Best Student Paper Award",
            "dates": "2003",
            "images": ["images/saic.png"]
        }


    ],
    "display": function () {
        var aws = this.awards;
        for (aInd in aws) {
            var a = aws[aInd];
            $('#awards').append(HTMLawardStart);
            $(".award-entry:last").append(HTMLawardTitle.replace("%data%", a.title))
                                .append(HTMLawardDates.replace("%data%", a.dates));
            if (a.images.length > 0) {
                for (imgInd in a.images) {
                    var img = a.images[imgInd];
                    var formattedImage = HTMLawardImage.replace("%data%", img);

                    $(".award-entry:last").append(formattedImage);


                }
            }
        }
    }


}

var education = {
    "schools": [
        {
            "name": "Georgia Institute of Technology",
            "location": "Atlanta, GA",
            "degree": "Ph.D",
            "majors": ["Dynamics and Control"],
            "dates": 2003,
            "url": "www.gatech.edu"
        },
        {
             "name": "Georgia Institute of Technology",
            "location": "Atlanta, GA",
            "degree": "M.S.EE",
            "majors": ["Telecommunication and DSP"],
            "dates": 2002,
            "url": "www.gatech.edu"
        }
        ,
        {
            "name": "Institute of Automation, Chinese Academy of Science",
            "location": "Beijing, China",
            "degree": "M.S.EE",
            "majors": ["Pattern Recognition"],
            "dates": 1997,
            "url": "www.ia.cas.cn/"
        }
        ,
        {
            "name": "Tsinghua University",
            "location": "Beijing, China",
            "degree": "M.S.EE",
            "majors": ["Mechatronics"],
            "dates": 1994,
            "url": "www.tsinghua.edu.cn"
        }
    ],
    "display": function () {
        //doing nothing now
        var schools = this.schools;
        for (schInd in schools) {
            var school = schools[schInd];
            $('#education').append(HTMLschoolStart);
            $(".education-entry:last")
                           .append(HTMLschoolName.replace("%data%", school.name))
                           .append(HTMLschoolDegree.replace("%data%", school.degree))
                           .append(HTMLschoolDates.replace("%data%", school.dates))
                           .append(HTMLschoolLocation.replace("%data%", school.location))
                           .append(HTMLschoolMajor.replace("%data%", school.majors));

        }

       
    }

};

var work = {
    "jobs": [
        {
            "employer": "LanKing Technology, Inc.",
            "title": "Senior Software Engineer (Contractor)",
            "location": "Nanjing, China",
            "dates": "Sep. 2014 - Dec. 2014",
            "description": "Developed an Online math questions management and learning website, Technology stack: JBoss 7.1, JSP + JQuery, MySql database",
            "images": ""
        },
        {
            "employer": "Network Management for Verizon Communications",
            "title": "Senior Software Engineer (Contractor with Innologic)",
            "location": "Waltham, MA",
            "dates": "May. 2014 - Aug. 2014",
            "description": "SoftSwitch Surveillance System (S4): S4 is a multi-tier network management system (NMS) for surveilling networks that provide Voice over IP (VOIP) services., Technology stack: Core Java",
            "images": ""
        },
        {
            "employer": "RAF Technology",
            "title": "Senior Software Engineer",
            "location": "Redmond, WA",
            "dates": "Nov. 2009 - May. 2014",
            "description": "SFTS is a system to detect fraud (weight, routing conflicts, and sortation level, etc.) under the USPS Intelligent Mail program., \
                            Technology stack: JBoss 4.2, EJB3, Spring/Hibernate, GWT, MySql database",
            "images": ""
        },
        {
            "employer": "Sales and Retail Department, Enterprise IT, T-Mobile USA",
            "title": "Senior Software Engineer (Contractor with Ciber)",
            "location": "Bellevue, WA",
            "dates": "Feb. 2008 - May. 2009",
            "description": "Wireless Activates Transmitted Seamlessly Over the Network (WATSON) System: WATSON is a web-enabled system that automates the end-to-end activation\
                           process for new customers, Technology stack: Weblogic, JSP + JavaScript, Oracle database",
            "images": ""
        },
        {
            "employer": "Network Management for Verizon Communications",
            "title": "Senior Software Engineer (Contractor with InfoVision)",
            "location": "Waltham, MA",
            "dates": "May 2006 - Jan. 2008",
            "description": "Verizon Packet Network Surveillance (VPNS) System: VPNS is a multi-tier network management system (NMS) monitoring video broadcast network, \
                            Technology stack: Core Java, Informix database",
            "images": ""
        }

    ],
    "display": function () {
        //doing nothing now
        for (var jobind in this.jobs) {
            var job = this.jobs[jobind];
            console.log("employer: " + job.employer);
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle)
                                 .append(HTMLworkDates.replace("%data%", job.dates))
                                 .append(HTMLworkLocation.replace("%data%", job.location))
                                 .append(HTMLworkDescription.replace("%data%", job.description));

        }
    }
};

var projects = {
    "projects": [
         {
             "title": "MATRIX WIFI",
             "dates": "Oct. 2014 - now",
             "description": "Mobile app to help auto dealers manage customers onsite. Angularjs (front end) + Spring Boot (back end, Spring security OAUTH 2.0)",
             "images": ["images/matrix-wifi.png", "images/matrix-wifi-lottery.png"]
         },
        {
            "title": "UXUEBAO",
            "dates": "Sep. 2014 - Dec. 2014",
            "description": "Online education platform which provides math questions to students, and also automatically grading questions submitted by students.\
                            <a href='http://www.uxuebao.com/login/login'><u>link to BETA Version</u></a>",
            "images": ["images/hope_login.PNG", "images/hope_input.PNG", "images/school_home.PNG", "images/grade_reference.JPG"]
        },
         {
             "title": "S4",
             "dates": "May 2014 - Aug. 2014",
             "description": "Message Parsing Engine (MPE) enhancement: add more operations  to the MPE. It is based on JLex and CUP. JLex: lexical analyzer generator in Java. CUP: parser generator in Java",
             "images": ["images/mpe_ast.png", "images/s4_raw_message.png", "images/s4_packet.png"]
         },
          {
              "title": "RAF Address Recognizer",
              "dates": "Feb. 2012 - May 2014",
              "description": "An Android application continuously captures images and sends them to the server for OCR/Address recognition. The Android application is multi-threaded, \
                              and using the REST client library. <a href='https://play.google.com/store/apps/details?id=com.raf.droid'><u>Link to Google Play</u></a>",
              "images": ["images/raf_recognizer_home.png", "images/raf_recognizer.png", "images/raf_recognizer_scan.png"]
          },
           {
               "title": "Small-Footprint Tabulation Sorters (SFTS)",
               "dates": "Nov. 2009 - Apr. 2014",
               "description": "SFTS is a system to detect fraud (weight, routing conflicts, and sortation level, etc.) under the USPS Intelligent Mail program.  The controller to\
                              facilitate the interactions between different components in the system is a 3-tier JEE application deployed on JBoss 4.2. The front end is developed \
                              using Google Web Toolkit (GWT). Data access layer uses Hibernate/MySql. Dependency injection uses Spring framework. ",
               "images": ["images/npi_sorter.png", "images/sfts_report.png", "images/rpt_aadc.png", "images/rpt_detail.png", "images/sfts_controller.png"]
           },
           {
               "title": "Wireless Activates Transmitted Seamlessly Over the Network (WATSON) System",
               "dates": "Nov. 2009 - Apr. 2014",
               "description": "WATSON is a web-enabled system that automates the end-to-end activation process for new customers. It is a password protected, web-based application\
                              with credit history verification, account maintenances, and payment processing functions. It is a J2EE application deployed on BEA Weblogic 8.1 sp6. \
                              The front end is developed using jsp + javascript. and the back end database is Oracle 9.0.\
                              <a href='http://watson.t-mobile.com'><u>Link to Watson</u></a>",
               "images": ["images/watson_main.png", "images/watson_coverage.png", "images/watson_line_sum.png", "images/watson_finish.png"]
           },
           {
                "title": "Verizon Packet Network Surveillance (VPNS) System",
                "dates": "Nov. 2009 - Apr. 2014",
                "description": "VPNS is a multi-tier network management system (NMS) monitoring video broadcast network. It is used to monitor the circuits which are carrying video signals\
                                , and to provide Network Surveillance using topology based Intra-Domain correlation",
                "images": ["images/TL1_over_TCP.png", "images/vpns_gui.png"]
            }

    ],
    "display": function () {
        //doing nothing now
        var ps = this.projects;
        for (ind in ps) {
            var proj = ps[ind];
            console.log("p: " + proj.title);
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
            console.log('formattedTitle ' + formattedTitle);

            $(".project-entry:last").append(formattedTitle)
                                 .append(HTMLprojectDates.replace("%data%", proj.dates))
                                 .append(HTMLprojectDescription.replace("%data%", proj.description));
            if (proj.images.length > 0) {
                for (imgInd in proj.images) {
                    var img = proj.images[imgInd];
                    var formattedImage = HTMLprojectImage.replace("%data%", img);
          
                    $(".project-entry:last").append(formattedImage);
                    

                }
            }


        }
    }
};

function prependToHeader(what, how) {
    $("#header").prepend(how.replace("%data%", what));
}

function appendToResume(what, how, where) {
    $(where).append(how.replace("%data%", what));
}



bio.display();
work.display();
projects.display();
award.display();
education.display();

$('#main').append(internationalizeButton);

$(document).click(function (loc) {
    console.log("location: " + loc.pageX + ", " + loc.pageY);
});

function inName() {
    var name = $('#name').text();
    var fl = name.split(' ');
    var fn = fl[0].toLowerCase();
    fn[0] = fn[0].toUpperCase();
    fl[1] = fl[1].toUpperCase();
    return fl[0] + ' ' + fl[1];
}

$('#mapDiv').append(googleMap);

