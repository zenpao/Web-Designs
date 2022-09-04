//Objects, initialization and the use of Constructor Function

/* ════════════════════════basic object═════════════════════════ */
var applicant1 = {
	name : "Jentzen Paolo Javier",
	age : 25,
	hasWorkExperience : true,
	skills : ["Video Editing", "Photo Editing", "Web Design", "Basic Programming"]
}

console.log(applicant1.name);
console.log(applicant1.skills);

/* ══════════════constructor function for objects═══════════════ */
function JobApplicant(name, age, workExperience, skills) { //Name of Objects are not Camel-cased
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.skills = skills;
}

var jobApplicant1 = new JobApplicant("Jentzen Paolo Javier", 25, true, ["Video Editing", "Photo Editing", "Web Design", "Basic Programming"]);

console.log(jobApplicant1);
