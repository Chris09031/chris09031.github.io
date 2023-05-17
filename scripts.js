/*
-----------------TODO---------------
-rerecord with real guitar
-add slides
-add pinch harmonics (probably bad idea)
-give user ability to change clean to distortion ratio (min:only clean. max:only distortion)
-add more scales
-design site to not be ugly
-find name
-enable 24th fret
-keep a tab of what's being played
-animate someone actually playing it on a guitar
-show rhythm guitar notes
*/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var audio =[[new Audio("Sounds/c1.mp3"),new Audio("Sounds/cs1.mp3"),new Audio("Sounds/d1.mp3"),new Audio("Sounds/ds1.mp3"),new Audio("Sounds/e1.mp3"),new Audio("Sounds/f1.mp3"),new Audio("Sounds/fs1.mp3"),new Audio("Sounds/g1.mp3"),new Audio("Sounds/gs1.mp3"),new Audio("Sounds/a1.mp3"),new Audio("Sounds/as1.mp3"),new Audio("Sounds/b1.mp3"),new Audio("Sounds/c1 (2).mp3"),new Audio("Sounds/cs1 (2).mp3"),new Audio("Sounds/d1 (2).mp3"),new Audio("Sounds/ds1 (2).mp3"),new Audio("Sounds/e1 (2).mp3"),new Audio("Sounds/f1 (2).mp3"),new Audio("Sounds/fs1 (2).mp3"),new Audio("Sounds/g1 (2).mp3"),new Audio("Sounds/gs1 (2).mp3"),new Audio("Sounds/a1 (2).mp3"),new Audio("Sounds/as1 (2).mp3"),new Audio("Sounds/b1 (2).mp3")],
			[new Audio("Sounds/c2.mp3"),new Audio("Sounds/cs2.mp3"),new Audio("Sounds/d2.mp3"),new Audio("Sounds/ds2.mp3"),new Audio("Sounds/e2.mp3"),new Audio("Sounds/f2.mp3"),new Audio("Sounds/fs2.mp3"),new Audio("Sounds/g2.mp3"),new Audio("Sounds/gs2.mp3"),new Audio("Sounds/a2.mp3"),new Audio("Sounds/as2.mp3"),new Audio("Sounds/b2.mp3"),new Audio("Sounds/c2 (2).mp3"),new Audio("Sounds/cs2 (2).mp3"),new Audio("Sounds/d2 (2).mp3"),new Audio("Sounds/ds2 (2).mp3"),new Audio("Sounds/e2 (2).mp3"),new Audio("Sounds/f2 (2).mp3"),new Audio("Sounds/fs2 (2).mp3"),new Audio("Sounds/g2 (2).mp3"),new Audio("Sounds/gs2 (2).mp3"),new Audio("Sounds/a2 (2).mp3"),new Audio("Sounds/as2 (2).mp3"),new Audio("Sounds/b2 (2).mp3")],
			[new Audio("Sounds/c3.mp3"),new Audio("Sounds/cs3.mp3"),new Audio("Sounds/d3.mp3"),new Audio("Sounds/ds3.mp3"),new Audio("Sounds/e3.mp3"),new Audio("Sounds/f3.mp3"),new Audio("Sounds/fs3.mp3"),new Audio("Sounds/g3.mp3"),new Audio("Sounds/gs3.mp3"),new Audio("Sounds/a3.mp3"),new Audio("Sounds/as3.mp3"),new Audio("Sounds/b3.mp3"),new Audio("Sounds/c3 (2).mp3"),new Audio("Sounds/cs3 (2).mp3"),new Audio("Sounds/d3 (2).mp3"),new Audio("Sounds/ds3 (2).mp3"),new Audio("Sounds/e3 (2).mp3"),new Audio("Sounds/f3 (2).mp3"),new Audio("Sounds/fs3 (2).mp3"),new Audio("Sounds/g3 (2).mp3"),new Audio("Sounds/gs3 (2).mp3"),new Audio("Sounds/a3 (2).mp3"),new Audio("Sounds/as3 (2).mp3"),new Audio("Sounds/b3 (2).mp3")],
			[new Audio("Sounds/c4.mp3"),new Audio("Sounds/cs4.mp3"),new Audio("Sounds/d4.mp3"),new Audio("Sounds/ds4.mp3"),new Audio("Sounds/e4.mp3"),new Audio("Sounds/f4.mp3"),new Audio("Sounds/fs4.mp3"),new Audio("Sounds/g4.mp3"),new Audio("Sounds/gs4.mp3"),new Audio("Sounds/a4.mp3"),new Audio("Sounds/as4.mp3"),new Audio("Sounds/b4.mp3"),new Audio("Sounds/c4 (2).mp3"),new Audio("Sounds/cs4 (2).mp3"),new Audio("Sounds/d4 (2).mp3"),new Audio("Sounds/ds4 (2).mp3"),new Audio("Sounds/e4 (2).mp3"),new Audio("Sounds/f4 (2).mp3"),new Audio("Sounds/fs4 (2).mp3"),new Audio("Sounds/g4 (2).mp3"),new Audio("Sounds/gs4 (2).mp3"),new Audio("Sounds/a4 (2).mp3"),new Audio("Sounds/as4 (2).mp3"),new Audio("Sounds/b4 (2).mp3")],
			[new Audio("Sounds/c5.mp3"),new Audio("Sounds/cs5.mp3"),new Audio("Sounds/d5.mp3"),new Audio("Sounds/ds5.mp3"),new Audio("Sounds/e5.mp3"),new Audio("Sounds/f5.mp3"),new Audio("Sounds/fs5.mp3"),new Audio("Sounds/g5.mp3"),new Audio("Sounds/gs5.mp3"),new Audio("Sounds/a5.mp3"),new Audio("Sounds/as5.mp3"),new Audio("Sounds/b5.mp3"),new Audio("Sounds/c5 (2).mp3"),new Audio("Sounds/cs5 (2).mp3"),new Audio("Sounds/d5 (2).mp3"),new Audio("Sounds/ds5 (2).mp3"),new Audio("Sounds/e5 (2).mp3"),new Audio("Sounds/f5 (2).mp3"),new Audio("Sounds/fs5 (2).mp3"),new Audio("Sounds/g5 (2).mp3"),new Audio("Sounds/gs5 (2).mp3"),new Audio("Sounds/a5 (2).mp3"),new Audio("Sounds/as5 (2).mp3"),new Audio("Sounds/b5 (2).mp3")],
			[new Audio("Sounds/c6.mp3"),new Audio("Sounds/cs6.mp3"),new Audio("Sounds/d6.mp3"),new Audio("Sounds/ds6.mp3"),new Audio("Sounds/e6.mp3"),new Audio("Sounds/f6.mp3"),new Audio("Sounds/fs6.mp3"),new Audio("Sounds/g6.mp3"),new Audio("Sounds/gs6.mp3"),new Audio("Sounds/a6.mp3"),new Audio("Sounds/as6.mp3"),new Audio("Sounds/b6.mp3"),new Audio("Sounds/c6 (2).mp3"),new Audio("Sounds/cs6 (2).mp3"),new Audio("Sounds/d6 (2).mp3"),new Audio("Sounds/ds6 (2).mp3"),new Audio("Sounds/e6 (2).mp3"),new Audio("Sounds/f6 (2).mp3"),new Audio("Sounds/fs6 (2).mp3"),new Audio("Sounds/g6 (2).mp3"),new Audio("Sounds/gs6 (2).mp3"),new Audio("Sounds/a6 (2).mp3"),new Audio("Sounds/as6 (2).mp3"),new Audio("Sounds/b6 (2).mp3")],
			[new Audio("Sounds/cp.mp3"),new Audio("Sounds/csp.mp3"),new Audio("Sounds/dp.mp3"),new Audio("Sounds/dsp.mp3"),new Audio("Sounds/ep.mp3"),new Audio("Sounds/fp.mp3"),new Audio("Sounds/fsp.mp3"),new Audio("Sounds/gp.mp3"),new Audio("Sounds/gsp.mp3"),new Audio("Sounds/ap.mp3"),new Audio("Sounds/asp.mp3"),new Audio("Sounds/bp.mp3")],
			[new Audio("Sounds/cpm.mp3"),new Audio("Sounds/cspm.mp3"),new Audio("Sounds/dpm.mp3"),new Audio("Sounds/dspm.mp3"),new Audio("Sounds/epm.mp3"),new Audio("Sounds/fpm.mp3"),new Audio("Sounds/fspm.mp3"),new Audio("Sounds/gpm.mp3"),new Audio("Sounds/gspm.mp3"),new Audio("Sounds/apm.mp3"),new Audio("Sounds/aspm.mp3"),new Audio("Sounds/bpm.mp3")],
			[new Audio("Sounds/cb.mp3"),new Audio("Sounds/csb.mp3"),new Audio("Sounds/db.mp3"),new Audio("Sounds/dsb.mp3"),new Audio("Sounds/eb.mp3"),new Audio("Sounds/fb.mp3"),new Audio("Sounds/fsb.mp3"),new Audio("Sounds/gb.mp3"),new Audio("Sounds/gsb.mp3"),new Audio("Sounds/ab.mp3"),new Audio("Sounds/asb.mp3"),new Audio("Sounds/bb.mp3")],
			[new Audio("Sounds/c1c.mp3"),new Audio("Sounds/cs1c.mp3"),new Audio("Sounds/d1c.mp3"),new Audio("Sounds/ds1c.mp3"),new Audio("Sounds/e1c.mp3"),new Audio("Sounds/f1c.mp3"),new Audio("Sounds/fs1c.mp3"),new Audio("Sounds/g1c.mp3"),new Audio("Sounds/gs1c.mp3"),new Audio("Sounds/a1c.mp3"),new Audio("Sounds/as1c.mp3"),new Audio("Sounds/b1c.mp3")],
			[new Audio("Sounds/c2c.mp3"),new Audio("Sounds/cs2c.mp3"),new Audio("Sounds/d2c.mp3"),new Audio("Sounds/ds2c.mp3"),new Audio("Sounds/e2c.mp3"),new Audio("Sounds/f2c.mp3"),new Audio("Sounds/fs2c.mp3"),new Audio("Sounds/g2c.mp3"),new Audio("Sounds/gs2c.mp3"),new Audio("Sounds/a2c.mp3"),new Audio("Sounds/as2c.mp3"),new Audio("Sounds/b2c.mp3")],
			[new Audio("Sounds/c3c.mp3"),new Audio("Sounds/cs3c.mp3"),new Audio("Sounds/d3c.mp3"),new Audio("Sounds/ds3c.mp3"),new Audio("Sounds/e3c.mp3"),new Audio("Sounds/f3c.mp3"),new Audio("Sounds/fs3c.mp3"),new Audio("Sounds/g3c.mp3"),new Audio("Sounds/gs3c.mp3"),new Audio("Sounds/a3c.mp3"),new Audio("Sounds/as3c.mp3"),new Audio("Sounds/b3c.mp3")],
			[new Audio("Sounds/c4c.mp3"),new Audio("Sounds/cs4c.mp3"),new Audio("Sounds/d4c.mp3"),new Audio("Sounds/ds4c.mp3"),new Audio("Sounds/e4c.mp3"),new Audio("Sounds/f4c.mp3"),new Audio("Sounds/fs4c.mp3"),new Audio("Sounds/g4c.mp3"),new Audio("Sounds/gs4c.mp3"),new Audio("Sounds/a4c.mp3"),new Audio("Sounds/as4c.mp3"),new Audio("Sounds/b4c.mp3")],
			[new Audio("Sounds/c5c.mp3"),new Audio("Sounds/cs5c.mp3"),new Audio("Sounds/d5c.mp3"),new Audio("Sounds/ds5c.mp3"),new Audio("Sounds/e5c.mp3"),new Audio("Sounds/f5c.mp3"),new Audio("Sounds/fs5c.mp3"),new Audio("Sounds/g5c.mp3"),new Audio("Sounds/gs5c.mp3"),new Audio("Sounds/a5c.mp3"),new Audio("Sounds/as5c.mp3"),new Audio("Sounds/b5c.mp3")],
			[new Audio("Sounds/c6c.mp3"),new Audio("Sounds/cs6c.mp3"),new Audio("Sounds/d6c.mp3"),new Audio("Sounds/ds6c.mp3"),new Audio("Sounds/e6c.mp3"),new Audio("Sounds/f6c.mp3"),new Audio("Sounds/fs6c.mp3"),new Audio("Sounds/g6c.mp3"),new Audio("Sounds/gs6c.mp3"),new Audio("Sounds/a6c.mp3"),new Audio("Sounds/as6c.mp3"),new Audio("Sounds/b6c.mp3")]];



//var audio = 

var minor=[0,2,3,5,7,8,10];
var major=[0,2,4,5,7,9,11];
var pentatonic=[0,3,5,7,10];
var phrygian_dominant=[0,1,4,5,7,8,10]
var locrian=[0,1,3,5,6,8,10]
var harmonic_minor=[0,2,3,5,7,8,11]
var lydian=[0,2,4,6,7,9,11]
var mixolydian=[0,2,4,5,7,9,10]
var ultralocrian=[0,1,3,4,6,8,9]
var melodic_minor=[0,2,3,5,7,9,11]
var hirajoshi=[0,2,3,7,8]
var augmented=[0,3,4,6,8,11]
var whole_tone=[0,2,4,6,8,10]
var diminished=[0,2,3,5,6,8,9,11]
var blues=[0,3,5,6,7,10]
var phrygian=[0,1,3,5,7,8,10]
var lydian_minor=[0,2,4,6,7,8,10]
var yo=[0,2,5,7,9]
var a=[0,1,2,3]
var chromatic=[0,1,2,3,4,5,6,7,8,9,10,11]
var scales=[minor,major,pentatonic,phrygian_dominant,locrian,harmonic_minor,lydian,mixolydian,ultralocrian,melodic_minor,hirajoshi,augmented,
			whole_tone,diminished,blues,phrygian,lydian_minor,yo,a,a,a,a,a,chromatic];
for(n=0;n<scales.length;n++){
	scales[n].forEach(function(v) {
  scales[n].push(v+12);
})
//scales[n].push(24);
}
var scalenum=3;
var key=0;
var highnotes=0
var bpm=135;
var notebeats=[1,2,2,4];
var rhythmnum=1;
var maxstring=5;
var minstring=1;
var paused=1;
var clean=0;
var notevolume=1;
var savednotes=["D|","A|","F|","C|","G|","C|"];
var savednotesrhythm=["D|","A|","F|","C|","G|","C|"];

kick=new Audio("Sounds/kick.mp3")
snare=new Audio("Sounds/snare.mp3")
ride_cymbal=new Audio("Sounds/ride_cymbal.mp3")

async function sound() {
	cleancount=0;
	if(paused){
	 paused=0;
	 clean=0;
	 notevolume=1;
	 kickdrum(); 
	 snaredrum(); 
	 ride_cymbaldrum();
	 //cleanrhythm();
	 rhythm();
	 paintnotes();
	 document.getElementById("play").innerText="Stop";
	}
	else{
	 document.getElementById("play").innerText="Play";
	 document.getElementById("play").disabled=true;
	 paused=1;
     	for(hhj=0;hhj<12;hhj++){
		audio[6][hhj].pause();
		audio[6][hhj].currentTime=0;
	}
	await sleep(60000/(bpm));
		 document.getElementById("play").disabled=false;

	 return;
	}
aa=0

var random=0;

x=Math.floor(Math.random()*(maxstring-minstring+1))+minstring
  noteloop=[]
  
  //x=5
randomnote=Math.floor(Math.random() * scales[scalenum].length)
//if(scales[scalenum][randomnote]>=12)highnotes=1
	random=(scales[scalenum][randomnote]+key)%24;  //first note
	//random+=highnotes*12
	//audio[x][random].volume=1
 
var harmonies,harmony,tmpscale=[],tmpscale2;
  while(1) {
		if(paused)return;
  if(aa){
	  repeatnum=Math.floor(Math.random() * 4);
  for(m=0;m<repeatnum;m++){
  for(l=0;l<noteloop.length;l+=3){
		if(paused)return;
		if(repeatnum==3 && m>=1 && noteloop[l]<5 && !clean) harmony=1
		else harmony=0
		if(harmony){
			for(nn=0;nn<scales[scalenum].length;nn++){
				tmpscale[nn]=(scales[scalenum][nn]+key)%24
			}
			for(nnn=0;nnn<tmpscale.length-1;nnn++){
				for (nnnn = 0; nnnn < tmpscale.length-1; nnnn++){
					if (tmpscale[nnnn] > tmpscale[nnnn+1]){
						tmpscale2=tmpscale[nnnn]
						tmpscale[nnnn]=tmpscale[nnnn+1]
						tmpscale[nnnn+1]=tmpscale2
					}
			}
			}

			if(tmpscale.indexOf(noteloop[l+1])+2==tmpscale.length) harmonies=tmpscale[1];
			else if(tmpscale.indexOf(noteloop[l+1])+2==tmpscale.length+1) harmonies=tmpscale[0];
			else harmonies=tmpscale.indexOf(noteloop[l+1])+2
		}
  	//console.log(audio[noteloop[l]][noteloop[l+1]],noteloop[l+1],scales[scalenum][harmonies],audio[noteloop[l]+1][scales[scalenum][harmonies]])
		shownotes(audio[noteloop[l]][noteloop[l+1]].src,60000/(bpm*notebeats[noteloop[l+2]]),0)
	audio[noteloop[l]][noteloop[l+1]].volume=notevolume
	audio[noteloop[l]][noteloop[l+1]].play()
	if(harmony){
		audio[noteloop[l]+1][tmpscale[harmonies]].volume=notevolume     //harmonies
		audio[noteloop[l]+1][tmpscale[harmonies]].play()       //harmonies
		//shownotes(audio[noteloop[l]+1][tmpscale[harmonies]].src,60000/(bpm*notebeats[noteloop[l+2]]))
	}
	//snare.volume=0.5
	//snare.play();
    await sleep(60000/(bpm*notebeats[noteloop[l+2]]));
	//snare.pause();
	//snare.currentTime=0;
	audio[noteloop[l]][noteloop[l+1]].pause()
	audio[noteloop[l]][noteloop[l+1]].currentTime=0;
	if(harmony){
		audio[noteloop[l]+1][tmpscale[harmonies]].pause()        //harmonies
		audio[noteloop[l]+1][tmpscale[harmonies]].currentTime=0; //harmonies
	}
	}
	}
	aa=0
	noteloop=[]
	}
		console.log(cleancount)
	cleancount++;
	if(cleancount==5+cleanswitch){
		//sound();
		
		notevolume=0.5;
		clean=1;
		cleanrhythm();
		if(bpm<100) notebeats=[2,2,4];
		else notebeats=[1,2];
		await sleep(60000/(bpm/16));

		
	}
 if(!aa){
 for(p=0;p<(2 ** Math.floor(Math.random()*3));p++){
 	notebeat=Math.floor(Math.random()*notebeats.length)

  	for(i=0;i<notebeats[notebeat]*2;i++){
		if(paused)return;
  stringchange=0;
  if (x<=minstring) stringchange=Math.floor(Math.random()*2)
  else if (x>=maxstring) stringchange=Math.floor(Math.random()*2)-1
  else stringchange=Math.floor(Math.random()*3)-1
  x=x+stringchange
  if (stringchange==1){ 
	randomnote+=3
	if(x==3) randomnote++;
	}
  else if (stringchange==-1){
	randomnote+=4
	if (x==4) randomnote--;
	}
	if (randomnote>0) randomupordown=Math.floor(Math.random()*5)-2
	else randomupordown=Math.floor(Math.random()*3)
	if (randomupordown>1) randomupordown=1;
	if (randomupordown<-1) randomupordown=-1;
	randomnote= (randomnote + randomupordown)%scales[scalenum].length
	var temp=0;
	if(randomupordown==1){
	if(scales[scalenum][randomnote]==0)temp=scales[scalenum][scales[scalenum].length-1]-scales[scalenum][scales[scalenum].length-2]
	else temp=scales[scalenum][randomnote]-scales[scalenum][randomnote-1]
	}
	else if(randomupordown==-1){
		temp=scales[scalenum][randomnote]-scales[scalenum][randomnote+1]
	}
  	random=(scales[scalenum][randomnote]+key)%12; 
	if(x==5  && randomupordown==1 && stringchange==0 && ((random==2 && temp>=1)||(random==3 && temp>=2)|| (random==4 && temp>=3))){
		highnotes=!highnotes
	}
		if(x==5  && randomupordown==-1 && stringchange==0 && ((random==1 && (temp*-1)>=1)||(random==0 && (temp*-1)>=2)||(random==11 && (temp*-1)>=3))){
		highnotes=!highnotes
	}
	if(x==4  && randomupordown==1 && stringchange==0 && ((random==9 && temp>=1)||(random==10 && temp>=2)|| (random==11 && temp>=3))){
		highnotes=!highnotes
	}
		if(x==4  && randomupordown==-1 && stringchange==0 && ((random==8 && (temp*-1)>=1)||(random==7 && (temp*-1)>=2)||(random==6 && (temp*-1)>=3))){
		highnotes=!highnotes
	}
		if(x==3  && randomupordown==1 && stringchange==0 && ((random==5 && temp>=1)||(random==6 && temp>=2)|| (random==7 && temp>=3))){
		highnotes=!highnotes
	}
		if(x==3  && randomupordown==-1 && stringchange==0 && ((random==4 && (temp*-1)>=1)||(random==3 && (temp*-1)>=2)||(random==2 && (temp*-1)>=3))){
		highnotes=!highnotes
	}
		if(x==2  && randomupordown==1 && stringchange==0 && ((random==0 && temp>=1)||(random==1 && temp>=2)|| (random==2 && temp>=3))){
		highnotes=!highnotes
	}
		if(x==2  && randomupordown==-1 && stringchange==0 && ((random==11 && (temp*-1)>=1)||(random==10 && (temp*-1)>=2)||(random==9 && (temp*-1)>=3))){
		highnotes=!highnotes
	}
			if(x==1  && randomupordown==1 && stringchange==0 && ((random==7 && temp>=1)||(random==8 && temp>=2)|| (random==9 && temp>=3))){
		highnotes=!highnotes
	}
		if(x==1  && randomupordown==-1 && stringchange==0 && ((random==6 && (temp*-1)>=1)||(random==5 && (temp*-1)>=2)||(random==4 && (temp*-1)>=3))){
		highnotes=!highnotes
	}
			if(x==0  && randomupordown==1 && stringchange==0 && ((random==0 && temp>=1)||(random==1 && temp>=2)|| (random==2 && temp>=3))){
		highnotes=!highnotes
	}
		if(x==0  && randomupordown==-1 && stringchange==0 && ((random==11 && (temp*-1)>=1)||(random==10 && (temp*-1)>=2)||(random==9 && (temp*-1)>=3))){
		highnotes=!highnotes
	}

	random+=highnotes*12

if (x==1 && (Math.floor(Math.random()*10))==0 && maxstring==5 && !clean){
	for(e=0;e<((Math.floor(Math.random()*2)+1));e++){
		for(ii=0;ii<8;ii++){
		if(paused)return;
			random=(scales[scalenum][randomnote]+key)%12; 
			random+=highnotes*12;
			shownotes(audio[x][random].src,60000/(bpm*4),0)
			audio[x][random].volume=notevolume
			audio[x][random].play()
			await sleep(60000/(bpm*4));
			audio[x][random].pause()
			audio[x][random].currentTime=0;

			switch(ii){
			case 0: x++; randomnote+=2; break;
			case 1: x++; randomnote+=2; break;
			case 2: x++; randomnote+=3; break;
			case 3: x++; randomnote+=2; break;
			case 4: x--; randomnote-=2; break;
			case 5: x--; randomnote-=3; break;
			case 6: x--; randomnote-=2; break;
			case 7: x--; randomnote-=2; break;
			}
			randomnote=randomnote %scales[scalenum].length
			if(randomnote<0) randomnote=scales[scalenum].length+randomnote
		}
		}
		p=4;
		aa=0
		break;
}
if (x>2 && Math.floor(Math.random()*20)==0 && !highnotes && !clean){
				console.log("q");
				zzzz=4 +4*Math.floor(Math.random()*2);
				taploop=[];
				for(zzz=0;zzz<zzzz;zzz++){
		for(ee=0;ee<8;ee++){
			console.log("e");
		if(paused)return;
		if(!zzz){
			random=(scales[scalenum][randomnote]+key)%12; 
			if(ee%3==1){
			random=((scales[scalenum][Math.floor(Math.random() * scales[scalenum].length)]+key)%12)+12;  //random note in highnotes
			}
			taploop[ee]=random;
			shownotes(audio[x][random].src,60000/(bpm*4),0)
			audio[x][random].volume=notevolume
			audio[x][random].play()
			await sleep(60000/(bpm*4));
			audio[x][random].pause()
			audio[x][random].currentTime=0;
			
			
				if (randomnote==0) randomupordown=1
			else randomupordown=Math.floor(Math.random()*2)
			if (randomupordown==0) randomupordown=-1;
			randomnote= (randomnote + randomupordown)%scales[scalenum].length
		}
		else{
			shownotes(audio[x][taploop[ee]].src,60000/(bpm*4),0)
			audio[x][taploop[ee]].volume=notevolume
			audio[x][taploop[ee]].play()
			await sleep(60000/(bpm*4));
			audio[x][taploop[ee]].pause()
			audio[x][taploop[ee]].currentTime=0;
		}
		}
}
		p=4;
		aa=0
		break;
}

	//console.log(x,audio[x][random],random,"   ",notebeats[notebeat],notebeat)
	shownotes(audio[x][random].src,60000/(bpm*notebeats[notebeat]),0)
	noteloop.push(x)
	noteloop.push(random)
	noteloop.push(notebeat)
	audio[x][random].volume=notevolume
	audio[x][random].play()
	
	//snare.volume=0.5
	//snare.play();
    await sleep(60000/(bpm*notebeats[notebeat]));
	//snare.pause();
	//snare.currentTime=0;
	audio[x][random].pause()
	audio[x][random].currentTime=0;
	}
	}
	aa=1}

}
}

async function rhythm() {
//if(scales[scalenum][randomnote]>=12)highnotes=1
cleanswitch=Math.floor(Math.random() * 20)
console.log("cleanswitch",cleanswitch+5)
  while(1) {

  	rrandom=(scales[scalenum][Math.floor(Math.random() * scales[scalenum].length)]+key)%12;
  	//for(i=0;i<notebeats[0]*2;i++){
		if(paused || clean){
			audio[6][rrandom].pause()
			audio[6][rrandom].currentTime=0;
			audio[7][rrandom].pause()
			audio[7][rrandom].currentTime=0;
			audio[8][rrandom].pause()
			audio[8][rrandom].currentTime=0;
			return;
			}
	audio[6][rrandom].volume=0.9

	audio[6][rrandom].play();
	rhythmnotebeat=Math.floor(Math.random()*notebeats.length)
	palmran=Math.floor(Math.random()*4)
	  	for(j=0;j<notebeats[rhythmnotebeat]*2;j++){
			if(paused || clean){
				audio[6][rrandom].pause()
				audio[6][rrandom].currentTime=0;
				audio[7][rrandom].pause()
				audio[7][rrandom].currentTime=0;
				audio[8][rrandom].pause()
				audio[8][rrandom].currentTime=0;
				return;
			}
		ran=Math.floor(Math.random()*6)
	if (ran>=1)ran=0.8
    if(!j || !palmran)audio[7][rrandom].volume=0
	else  audio[7][rrandom].volume=0
	audio[8][rrandom].volume=0.5
	//snare.volume=ran
	//shownotes(audio[0][rrandom].src,60000/(bpm*(0.5*notebeats[rhythmnotebeat])),1)
	audio[7][rrandom].play();
	audio[8][rrandom].play();

	//snare.play()
    await sleep(60000/(bpm*(0.5*notebeats[rhythmnotebeat])));
	audio[7][rrandom].pause()
	audio[7][rrandom].currentTime=0;
	audio[8][rrandom].pause()
	audio[8][rrandom].currentTime=0;
		//snare.pause()
		//snare.currentTime=0
	//}

}
	
	audio[6][rrandom].pause()
	audio[6][rrandom].currentTime=0;
	
			
}
}
async function ride_cymbaldrum() {
  while(1) {
	  		  ride_cymbal.volume=Math.floor(Math.random() * 2)
	  for(ride=0;ride<16;ride++){
		if(paused || clean)return;
		if(ride%4==0){
			for(qqw=0;qqw<6;qqw++){
				savednotes[qqw]=savednotes[qqw]+'|'
				savednotesrhythm[qqw]=savednotesrhythm[qqw]+'|'
			}
		}
	ride_cymbal.play();
    await sleep(60000/(bpm));
	ride_cymbal.pause()
	ride_cymbal.currentTime=0;
	  }
}
}

async function kickdrum() {
kick.volume=1
bbb=0
  drumloop2=[]
  while(1) {
		if(paused || clean)return;

	  if(bbb){
		  for(zzzzz=0;zzzzz<3;zzzzz++){
		  for(zzzd=0;zzzd<drumloop2.length;zzzd++){
		if(paused || clean)return;

			  	kick.play()
				await sleep(60000/(bpm* (2 ** drumloop2[zzzd])));
				kick.pause()
				kick.currentTime=0;
		  }
		  }
		  bbb=0
		  drumloop2=[]
	  }
	  if(!bbb){
	for(mm=0;mm<4;mm++){
		randommm=Math.floor(Math.random() * 3)
		for(aa=0;aa<2 ** randommm;aa++){
		if(paused || clean)return;

			drumloop2.push(randommm)
			kick.play()
			await sleep(60000/(bpm* (2 ** randommm)));
			kick.pause()
			kick.currentTime=0;
	}
}
	 bbb=1
	  }
}
}
async function snaredrum() {
snare.volume=0.8
bb=0
  drumloop=[]
  while(1) {
		if(paused || clean)return;

	  if(bb){
		  for(zz=0;zz<3;zz++){
		  for(z=0;z<drumloop.length;z++){
		if(paused || clean)return;
			  	snare.play()
				await sleep(60000/(bpm* (2 ** drumloop[z])));
				snare.pause()
				snare.currentTime=0;
		  }
		  }
		  bb=0
		  drumloop=[]
	  }
	  if(!bb){
	for(m=0;m<4;m++){
		randomm=Math.floor(Math.random() * 3)
		for(a=0;a<2 ** randomm;a++){
		if(paused || clean)return;

			drumloop.push(randomm)
			snare.play()
			await sleep(60000/(bpm* (2 ** randomm)));
			snare.pause()
			snare.currentTime=0;
	}
}
	 bb=1
	  }
}
}



async function keychange(keyy){

key=keyy;
for(y=0;y<12;y++){
document.getElementsByClassName("keybuttons")[0].children[y].disabled=false;
}
document.getElementsByClassName("keybuttons")[0].children[key].disabled=true;
paintnotes();

}

function scalechange(num){
scalenum=num
for(yy=0;yy<scales.length/2;yy++){
document.getElementsByClassName("scalebuttons")[0].children[yy].disabled=false;
}
for(yyy=0;yyy<scales.length/2;yyy++){
document.getElementsByClassName("scalebuttons")[1].children[yyy].disabled=false;
}
if(scalenum<12)document.getElementsByClassName("scalebuttons")[0].children[scalenum].disabled=true;
else document.getElementsByClassName("scalebuttons")[1].children[scalenum-12].disabled=true; 
paintnotes();


}

function changerhythm(flag){
rhythmnum=flag
}

async function shownotes(note,time,rhythmflag){
	var charnum=6;
	var octave=0;
	if(note.charAt(note.length-5)==")"){ charnum=12;octave=1;}
	else {charnum=6;octave=0;}
	//if(charnum==12)console.log(note.length-charnum)
	if(note.charAt(note.length-charnum)=="s") string="note "+note.charAt(note.length-(charnum+1)).toUpperCase()+"#"
	else string="note "+note.charAt(note.length-charnum).toUpperCase()
	if(note.charAt(note.length-charnum)=="h"){
dd=parseInt(note.charAt(note.length-(charnum-1)))
		switch(dd){
			case 1:string ="note C"; break;
			case 2:string ="note G"; break;
			case 3:string ="note C"; break;
			case 4:string ="note F"; break;
			case 5:string ="note A"; break;
			case 6:string ="note D"; break;
		}
		octave=2;
		
	}

	//console.log(document.getElementById(note.charAt(note.length-(charnum-1))),string)
	if(!rhythmflag)document.getElementById(note.charAt(note.length-(charnum-1))).getElementsByClassName(string)[octave].style.backgroundColor="#9F0000"
	createtab(findfret(note.charAt(note.length-(charnum-1)),string,octave),note.charAt(note.length-(charnum-1)),(60000/time)/bpm,rhythmflag)
	await sleep(time);
	if(!rhythmflag){
		document.getElementById(note.charAt(note.length-(charnum-1))).getElementsByClassName(string)[octave].style.backgroundColor="#004C7C"
		document.getElementById(note.charAt(note.length-(charnum-1))).getElementsByClassName(string)[octave].style.color="#FFFFFF"
	}
}

async function paintnotes(){
	while(1){
	for(qq=1;qq<7;qq++){
for(q=0;q<12;q++){
	switch(q){
		case 0:string="note C"; break;
		case 1:string="note C#"; break;
		case 2:string="note D"; break;
		case 3:string="note D#"; break;
		case 4:string="note E"; break;
		case 5:string="note F"; break;
		case 6:string="note F#"; break;
		case 7:string="note G"; break;
		case 8:string="note G#"; break;
		case 9:string="note A"; break;
		case 10:string="note A#"; break;
		case 11:string="note B"; break;
	}
Array.prototype.slice.call(document.getElementById(qq).getElementsByClassName(string)).forEach(function(v){
			v.style.backgroundColor="#999999";
			v.style.color="#000000";
	})
}
}
	for(qq=1;qq<7;qq++){
for(q=0;q<scales[scalenum].length;q++){
	switch((scales[scalenum][q]+key)%12){
		case 0:string="note C"; break;
		case 1:string="note C#"; break;
		case 2:string="note D"; break;
		case 3:string="note D#"; break;
		case 4:string="note E"; break;
		case 5:string="note F"; break;
		case 6:string="note F#"; break;
		case 7:string="note G"; break;
		case 8:string="note G#"; break;
		case 9:string="note A"; break;
		case 10:string="note A#"; break;
		case 11:string="note B"; break;
	}
	Array.prototype.slice.call(document.getElementById(qq).getElementsByClassName(string)).forEach(function(v){
			v.style.backgroundColor="#004C7C";
			v.style.color="#FFFFFF";
	})

}
}
await sleep(3000)

	}
}

function findfret(fstring,fnote,foctave){
	var fret;
		switch(fnote){
		case "note C":fret=0; break;
		case "note C#":fret=1; break;
		case "note D":fret=2; break;
		case "note D#":fret=3; break;
		case "note E":fret=4;break;
		case "note F":fret=5; break;
		case "note F#":fret=6; break;
		case "note G":fret=7; break;
		case "note G#":fret=8; break;
		case "note A":fret=9; break;
		case "note A#":fret=10; break;
		case "note B":fret=11; break;
	}
		switch(fstring){
		case '1':fret=fret+0; break;
		case '2':fret=(fret+5)%12; break;
		case '3':fret=fret+0; break;
		case '4':fret=(fret+7)%12; break;
		case '5':fret=(fret+3)%12; break;
		case '6':fret=(fret+10)%12; break;
	}
	return fret+12*foctave
}

function createtab(ffret,sstring,nnotebeat,rhythmflagg){
	if(!rhythmflagg){
	for(ffr=0;ffr<6;ffr++){
		if(sstring==ffr+1) {
			if(ffret<10) savednotes[5-ffr]=savednotes[5-ffr]+'-'+ffret+'-'
			else savednotes[5-ffr]=savednotes[5-ffr]+'-'+ffret
		}
		else savednotes[5-ffr]=savednotes[5-ffr]+'---'
		if(nnotebeat==2) savednotes[5-ffr]=savednotes[5-ffr]+'---'
		if(nnotebeat==1) savednotes[5-ffr]=savednotes[5-ffr]+'---------'
		//console.log(savednotes[ffr])
	}
	}
	else{
	for(ffrr=0;ffrr<6;ffrr++){
		if(ffrr==0||ffrr==1||ffrr==2) {
			if(ffret<10) savednotesrhythm[5-ffrr]=savednotesrhythm[5-ffrr]+'-'+ffret+'-'
			else savednotesrhythm[5-ffrr]=savednotesrhythm[5-ffrr]+'-'+ffret
		}
		else savednotesrhythm[5-ffrr]=savednotesrhythm[5-ffrr]+'---'
		if(nnotebeat==2) savednotesrhythm[5-ffrr]=savednotesrhythm[5-ffrr]+'---'
		if(nnotebeat==1) savednotesrhythm[5-ffrr]=savednotesrhythm[5-ffrr]+'---------'
		//console.log(savednotes[ffr])
	}
	}
}

function downloadtab(){
	for(ddown=0;ddown<6;ddown++){
		savednotes[ddown]=savednotes[ddown]+'\n'
		savednotesrhythm[ddown]='\n'+savednotesrhythm[ddown]
	}
	ssavednotes=savednotes.concat(savednotesrhythm);
let blob = new Blob(ssavednotes, {type: 'text/plain'});
link.href = URL.createObjectURL(blob);
savednotes=["D|","A|","F|","C|","G|","C|"];
savednotesrhythm=["D|","A|","F|","C|","G|","C|"];

}

var slider = document.getElementById("slider");
var output = document.getElementById("bpm");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  bpm=this.value
  if(bpm<100) notebeats=[2,2,4];
  else {
	  if(!clean)notebeats=[1,2,2,4];
	  else notebeats=[1,2];
  }
}
var slidervermax=document.getElementById("slider vertical max");
var slidervermin=document.getElementById("slider vertical min");

slidervermax.oninput = function() {
	if(minstring>=parseInt(this.value)) slidervermax.value=maxstring;
  maxstring=parseInt(this.value);
  for(qq=1;qq<7;qq++){

if(qq>=minstring+1 && qq<=maxstring+1){
	document.getElementById(qq.toString()).style.opacity= "1";

}
else{
	document.getElementById(qq.toString()).style.opacity= "0.5";
  }
if(qq>=minstring+2 && qq<=maxstring+1){
	document.getElementById(qq.toString()).getElementsByClassName("allownote")[0].style.opacity="1";
}
else{
	document.getElementById(qq.toString()).getElementsByClassName("allownote")[0].style.opacity="0";
}
}
}
slidervermin.oninput = function() {
		if(maxstring<=parseInt(this.value)) slidervermin.value=minstring;
  minstring=parseInt(this.value);
  var e=slidervermin.getBoundingClientRect();
  for(jkb=1;jkb<7;jkb++){
if(jkb>=minstring+1 && jkb<=maxstring+1){
	document.getElementById(jkb.toString()).style.opacity= "1";
}
else{
	document.getElementById(jkb.toString()).style.opacity= "0.5";

}
if(jkb>=minstring+2 && jkb<=maxstring+1){
	document.getElementById(jkb.toString()).getElementsByClassName("allownote")[0].style.opacity="1";
}
else{
	document.getElementById(jkb.toString()).getElementsByClassName("allownote")[0].style.opacity="0";
}
  	  //if(parseInt(document.getElementById(jkb.toString()).style.opacity)< 1)

}
}
  for(jkb=1;jkb<7;jkb++){
if(jkb>=minstring+1 && jkb<=maxstring+1){
	document.getElementById(jkb.toString()).style.opacity= "1";
}
else{
	document.getElementById(jkb.toString()).style.opacity= "0.5";

}
if(jkb>=minstring+2 && jkb<=maxstring+1){
	document.getElementById(jkb.toString()).getElementsByClassName("allownote")[0].style.opacity="1";
}
else{
	document.getElementById(jkb.toString()).getElementsByClassName("allownote")[0].style.opacity="0";
}
  }
paintnotes(); keychange(0); scalechange(0);


/*
async function rhythm() {
var randomm=0;
//if(scales[scalenum][randomnote]>=12)highnotes=1
xx=0

  while(1) {
  	rrandom=(scales[scalenum][Math.floor(Math.random() * scales[scalenum].length)]+key)%12;
	randomm=rrandom
	randomnotee=scales[scalenum].findIndex(function(eee){return eee==randomm});
  	//for(i=0;i<notebeats[0]*2;i++){
		if(paused)return;
console.log(rrandom,randomnotee)
	audio[6][rrandom].volume=0.8
	audio[6][rrandom].play();
	
	await sleep(60000/(bpm*notebeats[0]/2));

	
	
	
  	for(ir=0;ir<notebeats[2]*2;ir++){
		if(paused)return;
  stringchangee=0;
  if (xx==0) stringchangee=Math.floor(Math.random()*2)
  else if (xx==1) stringchangee=Math.floor(Math.random()*2)-1
  else stringchangee=Math.floor(Math.random()*3)-1
  xx=xx+stringchangee
  if (stringchangee==1){ 
	randomnotee+=3
	}
  else if (stringchangee==-1){
	randomnotee+=4
	}
	if (randomnotee>0) randomupordownn=Math.floor(Math.random()*5)-2
	else randomupordownn=Math.floor(Math.random()*3)
	if (randomupordownn>1) randomupordownn=1;
	if (randomupordownn<-1) randomupordownn=-1;
	randomnotee= (randomnotee + randomupordownn)%scales[scalenum].length

  	randomm=(scales[scalenum][randomnotee]+key)%12; 

	//console.log(x,audio[x][random],random,"   ",notebeats[notebeat],notebeat)
	audio[xx][randomm].volume=0.7
	audio[xx][randomm].play()
	//snare.volume=0.5
	//snare.play();
    await sleep(60000/(bpm*notebeats[2]));
	//snare.pause();
	//snare.currentTime=0;
	audio[xx][randomm].pause()
	audio[xx][randomm].currentTime=0;
	}
	
	
	
	
	
	
    //await sleep(60000/(bpm*notebeats[0]/2));
	audio[6][rrandom].pause()
	audio[6][rrandom].currentTime=0;
	//}

}
}
*/