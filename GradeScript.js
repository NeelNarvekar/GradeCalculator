function setWeights() {
	var xmlHttp = null;
	var dropdown = document.getElementById("dropdown");
	var subject = dropdown.options[dropdown.selectedIndex].value;
	var theUrl = "http://cs1371.gatech.edu/getClassInfo/?class=" + subject;
	

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	xmlHttp.send( null );
	var data = xmlHttp.responseText;

	document.getElementById("TestWeight").value = JSON.parse(data).test;
	document.getElementById("HomeworkWeight").value = JSON.parse(data).homework;
	document.getElementById("QuizWeight").value = JSON.parse(data).quiz;
	document.getElementById("ClassParticipationWeight").value = JSON.parse(data).class_participation;
	document.getElementById("FinalExamWeight").value = JSON.parse(data).final_exam;
}

function calcGrade() {
	var TestWeight = document.getElementById("TestWeight").value;
	var TestScore = document.getElementById("TestScore").value;
	TestScore = TestScore.split(",");
	var HomeworkWeight = document.getElementById("HomeworkWeight").value;
	var HomeworkScore = document.getElementById("HomeworkScore").value;
	HomeworkScore = HomeworkScore.split(",");
	var QuizWeight = document.getElementById("QuizWeight").value;
	var QuizScore = document.getElementById("QuizScore").value;
	QuizScore = QuizScore.split(",");
	var ClassParticipationWeight = document.getElementById("ClassParticipationWeight").value;
	var ClassParticipationScore = document.getElementById("ClassParticipationScore").value;
	ClassParticipationScore = ClassParticipationScore.split(",");
	var ExtraCreditScore = document.getElementById("ExtraCreditScore").value;
	ExtraCreditScore = ExtraCreditScore.split(",");
	var FinalExamWeight = document.getElementById("FinalExamWeight").value;
	var Calculate = document.getElementById("Calculate").value;
	
	temp = 0;
	for (i = 0; i < TestScore.length; i++) {
		temp = Number(TestScore[i]) + temp;
	}
	TestScore = temp/TestScore.length;
	temp = 0;
	for (i = 0; i < HomeworkScore.length; i++) {
		temp = Number(HomeworkScore[i]) + temp;
	}
	HomeworkScore = temp/HomeworkScore.length;
	temp = 0;
	for (i = 0; i < QuizScore.length; i++) {
		temp = Number(QuizScore[i]) + temp;
	}
	QuizScore = temp/QuizScore.length;
	temp = 0;
	for (i = 0; i < ClassParticipationScore.length; i++) {
		temp = Number(ClassParticipationScore[i]) + temp;
	}
	ClassParticipationScore = temp/ClassParticipationScore.length;
	temp = 0;
	for (i = 0; i < ExtraCreditScore.length; i++) {
		temp = Number(ExtraCreditScore[i]) + temp;
	}
	ExtraCreditScore = temp;

	var CurrentPercent = ((TestWeight/100)*TestScore) + ((HomeworkWeight/100)*HomeworkScore) + ((QuizWeight/100)*QuizScore) + ((ClassParticipationWeight/100)*ClassParticipationScore) + (ExtraCreditScore*1);
	var sum = TestWeight*1+HomeworkWeight*1+QuizWeight*1+ClassParticipationWeight*1+FinalExamWeight*1;
	if (sum > 100) {
		alert("Your weights add up to over 100%! That can't be right...");
	} else if (sum < 100) {
		alert("Your weights don't add up to 100%! That can't be right...");
	} else {
		var Changed = Calculate - CurrentPercent;
		var FinalExamScore = (Changed/FinalExamWeight)*100;
		FinalExamScore = Math.round(FinalExamScore * 100) / 100
		document.getElementById("Calc").innerHTML = "Hey! You need a " + FinalExamScore + "% on this final to get " + Calculate + "% in the class... Goodluck!";
	}
}






