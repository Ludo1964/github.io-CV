/*Declaring the variables*/
var x = document.getElementById("icon");
var z = document.getElementById("myPhoto");
var a = document.getElementById("personalDetails");
var cert = document.getElementById("skill1");
var office = document.getElementById("skill3");
var data = document.getElementById("skill5");
var programming = document.getElementById("skill7");
var other = document.getElementById("skill9");
var management = document.getElementById("skill11");
var languages = document.getElementById("skill13");
var container = document.getElementById("container");
var container0 = document.getElementById("container0");
var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4");
var container5 = document.getElementById("container5");
var container6 = document.getElementById("container6");
var container7 = document.getElementById("container7");
var container8 = document.getElementById("container8");
var container9 = document.getElementById("container9");
var container10 = document.getElementById("container10");
var container11 = document.getElementById("container11");
var container12 = document.getElementById("container12");
var container13 = document.getElementById("container13");
var container14 = document.getElementById("container14");
var container15 = document.getElementById("container15");
var container16 = document.getElementById("container16");
var container17 = document.getElementById("container17");
var container18 = document.getElementById("container18");
var container19 = document.getElementById("container19");
var container20 = document.getElementById("container20");
var container21 = document.getElementById("container21");
var container22 = document.getElementById("container22");
var container23 = document.getElementById("container23");
var container24 = document.getElementById("container24");
var container25 = document.getElementById("container25");
var container26 = document.getElementById("container26");
var container27 = document.getElementById("container27");
var container28 = document.getElementById("container28");
var container29 = document.getElementById("container29");
var container30 = document.getElementById("container30");
var container31 = document.getElementById("container31");
var container32 = document.getElementById("container32");
var container33 = document.getElementById("container33");
var overlay = document.getElementsByClassName('overlay')
var overlay1 = document.getElementsByClassName("overlay1");
var overlay2 = document.getElementsByClassName("overlay2");
var overlay3 = document.getElementsByClassName("overlay3");
var overlay4 = document.getElementById("overlay");
var overlay5 = document.getElementById("overlay1");
var overlay6 = document.getElementById("overlay2");
var overlay7 = document.getElementById("overlay3");
var overlay8 = document.getElementById("overlay4");
var overlay9 = document.getElementById("overlay5");
var overlay10 = document.getElementById("overlay6");
var overlay11 = document.getElementById("overlay7");
var overlay12 = document.getElementById("overlay8");
var overlay13 = document.getElementById("overlay9");
var overlay14 = document.getElementById("overlay10");
var overlay15 = document.getElementById("overlay11");
var overlay16 = document.getElementById("overlay12");
var pmp = document.getElementById("pmp");
var psmi = document.getElementById("psmi");
var aws = document.getElementById("aws");
var aws1 = document.getElementById("aws1");
var udemy = document.getElementById("udemy");
var mcp = document.getElementById("mcp");
var access = document.getElementById("access");
var excel = document.getElementById("excel");
var point = document.getElementById("point");
var mail = document.getElementById("mail");
var project = document.getElementById("project");
var visio = document.getElementById("visio");
var word = document.getElementById("word");
var mongo = document.getElementById("mongo");
var mysql = document.getElementById("mysql");
var express = document.getElementById("express");
var java = document.getElementById("java");
var javascript = document.getElementById("javascript");
var jquery = document.getElementById("jquery");
var node = document.getElementById("node");
var html= document.getElementById("html");
var css = document.getElementById("css");
var bpm = document.getElementById("bpm");
var bpmn = document.getElementById("bpmn");
var jira = document.getElementById("jira");
var confluence = document.getElementById("confluence");
var leader = document.getElementById("leader");
var people = document.getElementById("people");
var team = document.getElementById("team");
var virtual = document.getElementById("virtual");
var slovakia = document.getElementById("slovak");
var hungary = document.getElementById("hungarian");
var england = document.getElementById("english");
var czech = document.getElementById("czech");
var germany = document.getElementById("german");
var card = document.querySelector(".card");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var box = document.querySelector('.box');
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var radioGroup = document.querySelector('.radio-group');
var radioGroup1 = document.querySelector('.radio-group1');
var radioGroup2 = document.querySelector('.radio-group2');
var radioGroup3 = document.querySelector('.radio-group3');

var currentClass = '';
var currentClass1 = "";
var currentClass2 = "";
var currentClass3 = "";

/*Make the navigion responive*/
function clickResponse(){
	var y = document.getElementById("myTopNav");
	if(y.className === "topnav"){
		y.className += " responsive";
	}else{
		y.className = "topnav";

	}
}

/*Make the Personal Details visible*/
function animation(){
	var opac = 0;
	var id = setInterval(frame, 50);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			a.style.opacity = opac;
		}
	}
}

/*Make the skills visible*/
function slideAnimation(){
	var opac = 0;
	var id = setInterval(frame, 30);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			pmp.style.opacity = opac;
			aws.style.opacity = opac;
			aws1.style.opacity = opac;
			udemy.style.opacity = opac;
			mcp.style.opacity = opac;
			psmi.style.opacity = opac;
			overlay[0].style.opacity = opac;
			overlay[1].style.opacity = opac;
			overlay[2].style.opacity = opac;
			overlay[3].style.opacity = opac;
			overlay[4].style.opacity = opac;
			overlay[5].style.opacity = opac;
		}
	}
}

function slideAnimationOffice(){
	var opac = 0;
	var id = setInterval(frame, 30);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			excel.style.opacity = opac;
			point.style.opacity = opac;
			mail.style.opacity = opac;
			project.style.opacity = opac;
			visio.style.opacity = opac;
			word.style.opacity = opac;
			overlay2[0].style.opacity = opac;
			overlay2[1].style.opacity = opac;
			overlay2[2].style.opacity = opac;
			overlay2[3].style.opacity = opac;
			overlay2[4].style.opacity = opac;
			overlay2[5].style.opacity = opac;

		}
	}
}

function slideAnimationData(){
	var opac = 0;
	var id = setInterval(frame, 30);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			access.style.opacity = opac;
			mongo.style.opacity = opac;
			mysql.style.opacity = opac;
			overlay1[0].style.opacity = opac;
			overlay1[1].style.opacity = opac;
			overlay1[2].style.opacity = opac;
		}
	}
}

function slideAnimationProgramming(){
	var opac = 0;
	var id = setInterval(frame, 30);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			java.style.opacity = opac;
			javascript.style.opacity = opac;
			express.style.opacity = opac;
			jquery.style.opacity = opac;
			node.style.opacity = opac;
			html.style.opacity = opac;
			css.style.opacity = opac;
			overlay3[0].style.opacity = opac;
			overlay3[1].style.opacity = opac;
			overlay3[2].style.opacity = opac;
			overlay3[3].style.opacity = opac;
			overlay3[4].style.opacity = opac;
			overlay3[5].style.opacity = opac;
			overlay3[6].style.opacity = opac;
		}
	}
}

function slideAnimationOther(){
	var opac = 0;
	var id = setInterval(frame, 30);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			bpm.style.opacity = opac;
			bpmn.style.opacity = opac;
			jira.style.opacity = opac;
			confluence.style.opacity = opac;
			overlay4.style.opacity = opac;
			overlay5.style.opacity = opac;
			overlay6.style.opacity = opac;
			overlay7.style.opacity = opac;
		}
	}
}

function slideAnimationManagement(){
	var opac = 0;
	var id = setInterval(frame, 30);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			leader.style.opacity = opac;
			people.style.opacity = opac;
			team.style.opacity = opac;
			virtual.style.opacity = opac;
			overlay8.style.opacity = opac;
			overlay9.style.opacity = opac;
			overlay10.style.opacity = opac;
			overlay11.style.opacity = opac;
		}
	}
}

function slideAnimationLanguages(){
	var opac = 0;
	var id = setInterval(frame, 30);
	function frame(){
		if(opac > 1){
			clearInterval(id);
		}else{
			opac+=0.01;
			slovakia.style.opacity = opac;
			hungary.style.opacity = opac;
			england.style.opacity = opac;
			czech.style.opacity = opac;
			germany.style.opacity = opac;
			overlay12.style.opacity = opac;
			overlay13.style.opacity = opac;
			overlay14.style.opacity = opac;
			overlay15.style.opacity = opac;
			overlay16.style.opacity = opac;
		}
	}
}

/*Slide the skill icons from right to left*/
function slide(){
	var pos = 100;
	var id = setInterval(frame, 100);
	function frame(){
		if(pos == 0){
			clearInterval(id);
		}else{
			pos-=10;
			container.style.left = pos + "%";
			container0.style.left = pos + 12.5 + "%";
			container2.style.left = pos + 25 + "%";
			container3.style.left = pos + 37.5 + "%";
			container1.style.left = pos + 50 + "%";
			container4.style.left = pos + 62.5 + "%";
		}
	}
}

function slideOffice(){
	var pos = 100;
	var id = setInterval(frame, 100);
	function frame(){
		if(pos == 0){
			clearInterval(id);
		}else{
			pos-=10;
			container6.style.left = pos + "%";
			container7.style.left = pos + 12.5 + "%";
			container8.style.left = pos + 25 + "%";
			container9.style.left = pos + 37.5 + "%";
			container10.style.left = pos + 50 + "%";
			container11.style.left = pos + 62.5 + "%";
		}
	}
}

function slideData(){
	var pos = 100;
	var id = setInterval(frame, 100);
	function frame(){
		if(pos == 0){
			clearInterval(id);
		}else{
			pos-=10;
			container5.style.left = pos + "%";
			container12.style.left = pos + 12.5 + "%";
			container13.style.left = pos + 25 + "%";
		}
	}
}

function slideProgramming(){
	var pos = 100;
	var id = setInterval(frame, 100);
	function frame(){
		if(pos == 0){
			clearInterval(id);
		}else{
			pos-=10;
			container19.style.left = pos + "%";
			container20.style.left = pos + 12.5 + "%";
			container14.style.left = pos + 25 + "%";
			container15.style.left = pos + 37.5 + "%";
			container16.style.left = pos + 50 + "%";
			container17.style.left = pos + 62.5 + "%";
			container18.style.left = pos + 75 + "%";
		}
	}
}

function slideOther(){
	var pos = 100;
	var id = setInterval(frame, 100);
	function frame(){
		if(pos == 0){
			clearInterval(id);
		}else{
			pos-=10;
			container21.style.left = pos + "%";
			container22.style.left = pos + 12.5 + "%";
			container23.style.left = pos + 25 + "%";
			container24.style.left = pos + 37.5 + "%";
		}
	}
}

function slideManagement(){
	var pos = 100;
	var id = setInterval(frame, 100);
	function frame(){
		if(pos == 0){
			clearInterval(id);
		}else{
			pos-=10;
			container25.style.left = pos + "%";
			container26.style.left = pos + 12.5 + "%";
			container27.style.left = pos + 25 + "%";
			container28.style.left = pos + 37.5 + "%";
		}
	}
}

function slideLanguages(){
	var pos = 100;
	var id = setInterval(frame, 100);
	function frame(){
		if(pos == 0){
			clearInterval(id);
		}else{
			pos-=10;
			container29.style.left = pos + "%";
			container30.style.left = pos + 12.5 + "%";
			container31.style.left = pos + 25 + "%";
			container32.style.left = pos + 37.5 + "%";
			container33.style.left = pos + 50 + "%";
		}
	}
}

function changeSide(){
	var checkedRadio = radioGroup.querySelector(":checked");
	var showClass = "show__"+checkedRadio.value;
	if ( currentClass ) {
    box.classList.remove( currentClass );
  }
 	box.classList.add( showClass );
  	currentClass = showClass;
}

function changeSide1(){
	var checkedRadio1 = radioGroup1.querySelector(":checked");
	var showClass1 = "show__"+checkedRadio1.value;
	if ( currentClass1 ) {
    box1.classList.remove( currentClass1 );
  }
 	box1.classList.add( showClass1 );
  	currentClass1 = showClass1;
}

function changeSide2(){
	var checkedRadio2 = radioGroup2.querySelector(":checked");
	var showClass2 = "show__"+checkedRadio2.value;
	if ( currentClass2 ) {
    box2.classList.remove( currentClass2 );
  }
 	box2.classList.add( showClass2 );
  	currentClass2 = showClass2;
}

function changeSide3(){
	var checkedRadio3 = radioGroup3.querySelector(":checked");
	var showClass3 = "show__"+checkedRadio3.value;
	if ( currentClass3 ) {
    box3.classList.remove( currentClass3 );
  }
 	box3.classList.add( showClass3 );
  	currentClass3 = showClass3;
}

changeSide();
changeSide1();
changeSide2();
changeSide3();



/*Call the functions*/
x.addEventListener("click", clickResponse);
z.addEventListener("click", animation);
cert.addEventListener("click", slide);
office.addEventListener("click", slideOffice);
data.addEventListener("click", slideData);
programming.addEventListener("click", slideProgramming);
other.addEventListener("click", slideOther);
management.addEventListener("click", slideManagement);
languages.addEventListener("click", slideLanguages);
cert.addEventListener("click", slideAnimation);
office.addEventListener("click", slideAnimationOffice);
data.addEventListener("click", slideAnimationData);
programming.addEventListener("click", slideAnimationProgramming);
other.addEventListener("click", slideAnimationOther);
management.addEventListener("click", slideAnimationManagement);
languages.addEventListener("click", slideAnimationLanguages);
card.addEventListener("dblclick", function(){card.classList.toggle("is-flipped");
});
card1.addEventListener("dblclick", function(){card1.classList.toggle("is-flipped");
});
card2.addEventListener("dblclick", function(){card2.classList.toggle("is-flipped");
});
card3.addEventListener("dblclick", function(){card3.classList.toggle("is-flipped");
});
radioGroup.addEventListener( 'change', changeSide );
radioGroup1.addEventListener( 'change', changeSide1 );
radioGroup2.addEventListener( 'change', changeSide2 );
radioGroup3.addEventListener( 'change', changeSide3 );

//jQuery vertical scrolling
$(()=>{
  var menu = $(".menu");
  var menuLinks = menu.find("a");

  menuLinks.on("click", function(event){
  	var position;
    var id = this.hash;
    position = $(this.hash).offset().top;

    $("html, body").animate({scrollTop: position}, 1000, function(){
    window.location.hash = id;
    });
    event.preventDefault();
  })
});



