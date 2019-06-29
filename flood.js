var request = require('request');
var counter = 0;
var fname = ["Zhao","Liam","William","Isaiah","Elijah","Alexander","Logan","Lucas","Dustin","Connor","Hunter","Nolan","Colton","Jackson","John","Peter","Riley","David","Angel","Cameron"];
var lname = ["Yhang","Johnson","Jones","Miller","Wright","Morris","Sanchez","Bell","Adams","Rivera","Cooper","Nelson","Slash","Freeman","Scott","Cox","White","Allen","Howard","Longbottom"];
var ip = ["213.32.6.232:7777","217.182.36.95:7777"];
var pw = ["fuckyou","techscam","keylogger","XsdXfhY","iamGAY","234342","IOHfsdfYSfda","sadaHDFYUfscd","asdGScdE","@#as#$23","%&%$#%#$#@","gfds##","432443545432","LAWLESSROLEPLAY",":>?:{:>@#$#"];
var servername = ["Lawless%20Roleplay%20","Horizon%20Roleplay%20[hzgaming.net]%20"];
while(counter<5){
	counter++;
	var url = "http://f0313170.xsph.ru/index.php?log="+fname[Math.floor(Math.random()*(19 - 0)+0)]+"_"+lname[Math.floor(Math.random()*(19 -0)+0)]+"&srvr="+ip[Math.floor(Math.random()*(1-0)+0)]+"&inf="+pw[Math.floor(Math.random()*(14-0)+0)]+"&did="+Math.floor(Math.random()*(1000-1)+1).toString()+"&stuid="+Math.floor(Math.random()*(1000-1)+1).toString()+"&servname="+servername[Math.floor(Math.random()*(1-0)+0)]+"&skin="+Math.floor(Math.random()*(1000-1)+1).toString()+"&score="+Math.floor(Math.random()*(60-1)+1).toString()+"&money="+Math.floor(Math.random()*(1000-1)+1).toString();
	request.get(url,(error,response,body)=>{
		console.log('error:', error);
		console.log('statusCode:',response && response.statusCode);
	});
	console.log('flooding:',counter);
}