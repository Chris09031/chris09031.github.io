async function fadeoutrhythm(){

	rrrandom=(scales[scalenum][Math.floor(Math.random() * scales[scalenum].length)]+key)%12;
	audio[6][rrrandom].volume=0.9;
	audio[6][rrrandom].play();
	await sleep(350);
	audio[6][rrrandom].volume=0.8;
	await sleep(350);
	audio[6][rrrandom].volume=0.7;
	await sleep(350);
	audio[6][rrrandom].volume=0.6;
	await sleep(350);
	audio[6][rrrandom].volume=0.5;
	await sleep(350);
	audio[6][rrrandom].volume=0.4;
	await sleep(350);
	audio[6][rrrandom].volume=0.3;
	await sleep(350);
	audio[6][rrrandom].volume=0.2;
	await sleep(350);
	audio[6][rrrandom].volume=0.1;
	await sleep(350);
	audio[6][rrrandom].volume=0;
}
async function cleanrhythm(){
	randomc=[];
	fadeoutrhythm();
	distcount=0
	distswitch=Math.floor(Math.random() * 4)
	console.log("distswitch",distswitch+1)
	while(1){
		switch(Math.floor(Math.random() * 2)){
case 0: //quarter
		for(llkq=0;llkq<4;llkq++){
		switch(Math.floor(Math.random() * 2)){
case 0: 
	console.log("quarter 0")
	getnotes();
	for(llk=0;llk<2;llk++){
	if(paused || !clean)return;
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm));
	audio[12][randomc[3]].currentTime=0;
	audio[12][randomc[3]].play();
	await sleep(60000/(bpm));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm));
		}
		break;
case 1: 
	console.log("quarter 1")
	getnotes();
	for(llk=0;llk<2;llk++){
	if(paused || !clean)return;
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm));
	audio[12][randomc[3]].currentTime=0;
	audio[12][randomc[3]].play();
	await sleep(60000/(bpm));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm));
	audio[12][randomc[3]].currentTime=0;
	audio[12][randomc[3]].play();
	await sleep(60000/(bpm));
		}
		break;
		}
		}
		break;
case 1: //eighth
		for(llke=0;llke<4;llke++){
		switch(Math.floor(Math.random() * 3)){
case 0:
	console.log("eighth 0")
	getnotes();
		for(llkk=0;llkk<2;llkk++){
		if(paused || !clean)return;
	audio[9][randomc[0]].currentTime=0;
	audio[9][randomc[0]].play();
	await sleep(60000/(bpm*2));
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm*2));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm*2));
	audio[12][randomc[3]].currentTime=0;
	audio[12][randomc[3]].play();
	await sleep(60000/(bpm*2));
	audio[13][randomc[4]].currentTime=0;
	audio[13][randomc[4]].play();
	await sleep(60000/(bpm*2));
	audio[14][randomc[5]].currentTime=0;
	audio[14][randomc[5]].play();
	await sleep(60000/(bpm*2));
	audio[13][randomc[4]].currentTime=0;
	audio[13][randomc[4]].play();
	await sleep(60000/(bpm*2));
	audio[12][randomc[3]].currentTime=0;
	audio[12][randomc[3]].play();
	await sleep(60000/(bpm*2));
		}
		break;
case 1:
	console.log("eighth 1")
	getnotes();
		for(llkk=0;llkk<2;llkk++){
		if(paused || !clean)return;
	audio[9][randomc[0]].currentTime=0;
	audio[9][randomc[0]].play();
	await sleep(60000/(bpm*2));
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm*2));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm*2));
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm*2));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm*2));
	audio[12][randomc[3]].currentTime=0;
	audio[12][randomc[3]].play();
	await sleep(60000/(bpm*2));
	audio[13][randomc[4]].currentTime=0;
	audio[13][randomc[4]].play();
	await sleep(60000/(bpm*2));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm*2));
		}
		break;
case 2:
	console.log("eighth 2")
	getnotes();
		for(llkk=0;llkk<2;llkk++){
		if(paused || !clean)return;
	audio[9][randomc[0]].currentTime=0;
	audio[9][randomc[0]].play();
	await sleep(60000/(bpm*2));
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm*2));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm*2));
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm*2));
	audio[9][randomc[0]].currentTime=0;
	audio[9][randomc[0]].play();
	await sleep(60000/(bpm*2));
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm*2));
	audio[11][randomc[2]].currentTime=0;
	audio[11][randomc[2]].play();
	await sleep(60000/(bpm*2));
	audio[10][randomc[1]].currentTime=0;
	audio[10][randomc[1]].play();
	await sleep(60000/(bpm*2));
		}
		break;
		}
		}
		break;
	}
	distcount++;
	console.log("reeeeeeee")
		if(distcount==1+distswitch){
		notevolume=1;
		clean=0;
		cleancount=0
		kickdrum(); 
		snaredrum(); 
		ride_cymbaldrum();
		rhythm();
		if(bpm<100) notebeats=[2,2,4];
		else notebeats=[1,2,2,4];
		return;
		//await sleep(60000/(bpm/16));
		}
	  }
}

function getnotes(){
	
		randomnotec=Math.floor(Math.random() * scales[scalenum].length)
	randomc[0]=(scales[scalenum][randomnotec]+key)%12;  //first note
	randomnotec+=4
	randomupordownc=Math.floor(Math.random()*5)-2
	randomnotec= (randomnotec + randomupordownc)%scales[scalenum].length
	randomc[1]=(scales[scalenum][randomnotec]+key)%12;
	randomnotec+=3
	randomupordownc=Math.floor(Math.random()*5)-2
	randomnotec= (randomnotec + randomupordownc)%scales[scalenum].length
	randomc[2]=(scales[scalenum][randomnotec]+key)%12;
		randomnotec+=3
	randomupordownc=Math.floor(Math.random()*5)-2
	randomnotec= (randomnotec + randomupordownc)%scales[scalenum].length
	randomc[3]=(scales[scalenum][randomnotec]+key)%12;
		randomnotec+=4
	randomupordownc=Math.floor(Math.random()*5)-2
	randomnotec= (randomnotec + randomupordownc)%scales[scalenum].length
	randomc[4]=(scales[scalenum][randomnotec]+key)%12;
		randomnotec+=3
	randomupordownc=Math.floor(Math.random()*5)-2
	randomnotec= (randomnotec + randomupordownc)%scales[scalenum].length
	randomc[5]=(scales[scalenum][randomnotec]+key)%12;
}