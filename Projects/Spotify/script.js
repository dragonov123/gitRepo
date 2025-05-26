let noco = document.querySelector("#noco");
let albums= document.querySelector(".albums");
let nocoi = document.querySelector(".nocoi");
let back = document.querySelector(".back");
let play=document.querySelector(".play");
let box = document.querySelector(".box");
let songname=document.querySelectorAll('.songname');
let songplay = document.querySelector(".songplay");
let nocopyrightsongs= document.querySelectorAll(".nocopyrightsongs");
var songlistname;
var songnumber;
var playpause = document.querySelectorAll(".playpause")
let previous=document.querySelector(".previous");
let next = document.querySelector(".next");
let playsong=document.querySelector(".playsong");
let pausesong = document.querySelector(".pausesong");
let playsong1 = document.querySelector(".playsong1");
let durationp1 = document.querySelector(".durationp1");
let durationp2 = document.querySelector(".durationp2");
let ball = document.querySelector(".ball");
let seekbar=document.querySelector("#seekbar");
let audioloop=document.querySelector(".audioloop");
let volumeSlider = document.getElementById('volume');
let highvolume = document.querySelector(".highvolume");
let lowvolume = document.querySelector(".lowvolume");
let verylowvolume = document.querySelector(".verylowvolume");
let mute = document.querySelector(".mute");
let home = document.querySelector(".home");
let signup = document.querySelector(".signup");
let login =document.querySelector(".login");
let names = document.querySelector(".name");
let nav = document.querySelector(".nav");
let container = document.querySelector(".container");
let signuppage = document.querySelector(".signuppage");

let spotifylogo = document.querySelector(".spotifylogo");
let passwordInput = document.getElementById('password');
let showPassword = document.getElementById('showPassword');
let hidePassword = document.getElementById('hidePassword');
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let alertu = document.querySelector(".alertu");
let alertp = document.querySelector(".alertp");
let headlinec = document.querySelector(".headlinec");

let next1 = document.querySelector(".next1");



spotifylogo.addEventListener('click',()=>{
  
  nocoi.classList.add("close");
  albums.classList.remove("close");
})

hidePassword.addEventListener('click', () => {
    passwordInput.type = 'text';
    hidePassword.style.display = 'none';
    showPassword.style.display = 'block';
});

showPassword.addEventListener('click', () => {
    passwordInput.type = 'password';
    showPassword.style.display = 'none';
    hidePassword.style.display = 'block';
});



next1.addEventListener("click", () => {
    if (username.value == "" && password.value == "") {
        alertu.innerHTML = "*Please enter your username";
        alertp.innerHTML = "*Please enter your password";
    } else if (password.value == "") {
        alertp.innerHTML = "*Please enter your password";
        alertu.innerHTML = "";
    } else if (username.value == "") {
        alertu.innerHTML = "*Please enter your username";
        alertp.innerHTML = "";
    } else {
        alertu.innerHTML = "";
        alertp.innerHTML = "";  
        names.innerHTML = `Hi, ${username.value}!`;
        signup.classList.add("close")
        login.classList.add("close")
        nav.classList.remove("close");
  container.classList.remove("close");
  signuppage.classList.add("close")



    }
});



noco.addEventListener("click",function(){
    albums.classList.add("close")  ;
    nocoi.classList.remove("close");
})
back.addEventListener("click",function(){
    albums.classList.remove("close");
    nocoi.classList.add("close");
})

home.addEventListener("click",()=>{
  
  nocoi.classList.add("close");
  albums.classList.remove("close");
})

signup.addEventListener("click",()=>{
  nav.classList.add("close");
  container.classList.add("close");
  signuppage.classList.remove("close")
  headlinec.innerHTML="Sign up to start listening"
  check();

})

login.addEventListener("click",()=>{
  nav.classList.add("close");
  container.classList.add("close");
  signuppage.classList.remove("close");
  headlinec.innerHTML="Log in to Spotify";
  check();

})


function updateVolumeSlider() {
  const value = volumeSlider.value * 100;
  volumeSlider.style.background = `linear-gradient(to right, #4CAF50 ${value}%, #ddd ${value}%)`;
  
}

// Set the initial background and volume
updateVolumeSlider();

// Update the background and volume as the slider value changes
volumeSlider.addEventListener('input', updateVolumeSlider);

function updateseekbarSlider() {
  const value1 = seekbar.value;
  seekbar.style.background = `linear-gradient(to right, #4CAF50 ${value1}%, #ddd ${value1}%)`; 
}

// Set the initial background and volume
updateseekbarSlider();




let nocopyrightsongsarray = ['Amalgam', 'Creative Technology Showreel', 'In Slow Motion Inspiring Ambient Lounge','Lazy Day Stylish Furistic Chill','Night Detective','Nightfall Future Bass Music'];

function check() {
    for (let index = 0; index < nocopyrightsongs.length; index++) {
          nocopyrightsongs[index].pause();
    }
}
function durations(songnumber) {
  
  var forduration=nocopyrightsongs[songnumber];
  
  forduration.addEventListener('timeupdate',()=>{
   
    const minutes1 = Math.floor(forduration.currentTime / 60);
    const seconds1 = Math.floor(forduration.currentTime % 60);
    durationp1.textContent = `${minutes1}:${seconds1 < 10 ? '0' : ''}${seconds1}`;
    

  })
  audioloop.classList.remove("close");
  audioloop.addEventListener('click',()=>{
    console.log(forduration.loop);
    if(forduration.loop == true){
      audioloop.classList.remove("border");
      forduration.loop = false;
    }
    else{
      audioloop.classList.add("border");
      forduration.loop = true;
    }
  })
  
  
  highvolume.addEventListener("click",()=>{
    volumeSlider.value=0
    forduration.volume=0
    mute.classList.remove("close");
    verylowvolume.classList.add("close");
    lowvolume.classList.add("close");
    highvolume.classList.add("close");
  })
  lowvolume.addEventListener("click",()=>{
    volumeSlider.value=0
    forduration.volume=0
    mute.classList.remove("close");
    verylowvolume.classList.add("close");
    lowvolume.classList.add("close");
    highvolume.classList.add("close");
  })
  verylowvolume.addEventListener("click",()=>{
    volumeSlider.value=0
    forduration.volume=0
    mute.classList.remove("close");
    verylowvolume.classList.add("close");
    lowvolume.classList.add("close");
    highvolume.classList.add("close");
  })
  mute.addEventListener("click",()=>{
    volumeSlider.value=0.1
    forduration.volume=0.1
    mute.classList.add("close");
    verylowvolume.classList.remove("close");
    lowvolume.classList.add("close");
    highvolume.classList.add("close");
  })



// Set the initial volume to match the slider value
forduration.volume = volumeSlider.value;

// Update the volume when the slider value changes
volumeSlider.addEventListener('input', () => {
  forduration.volume = volumeSlider.value;
  if(volumeSlider.value==0){
    mute.classList.remove("close");
    verylowvolume.classList.add("close");
    lowvolume.classList.add("close");
    highvolume.classList.add("close");
  }
  else if (volumeSlider.value < 0.3){
    
    mute.classList.add("close");
    verylowvolume.classList.remove("close");
    lowvolume.classList.add("close");
    highvolume.classList.add("close");
  }
  else if (volumeSlider.value>=0.3  &&  volumeSlider.value < 0.6){
    
    mute.classList.add("close");
    verylowvolume.classList.add("close");
    lowvolume.classList.remove("close");
    highvolume.classList.add("close");
  }
  else
  {
    mute.classList.add("close");
    verylowvolume.classList.add("close");
    lowvolume.classList.add("close");
    highvolume.classList.remove("close");
  }
});



// Update the seekbar position as the audio plays
forduration.addEventListener('timeupdate', () => {
  const value = (forduration.currentTime / forduration.duration) * 100;
  seekbar.value = value;
  
  if(seekbar.value < 45 ){

    seekbar.style.background = `linear-gradient(to right, #4CAF50 ${value+0.7}%, #ddd ${value+0.7}%)`;
  }
  else if(seekbar.value <100){
    seekbar.style.background = `linear-gradient(to right, #4CAF50 ${value-0.5}%, #ddd ${value-0.5}%)`;
  }
  if(forduration.ended==true){
    if(songnumber + 1 < nocopyrightsongsarray.length){
      songnumber++;
      check();
      playsongs(songnumber);
      
    }
    else
    {
      check();
    }
  }
  
});

// Update the audio current time when the seekbar value changes
seekbar.addEventListener('input', () => {
  const value = (seekbar.value / 100) * forduration.duration;
  forduration.currentTime = value;
  seekbar.style.background = `linear-gradient(to right, #4CAF50 ${seekbar.value}%, #ddd ${seekbar.value}%)`;
  
});



 const minutes = Math.floor(forduration.duration / 60);
 const seconds = Math.floor(forduration.duration % 60);
 durationp2.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 

}



function playsongs(index) {
  check();
  nocopyrightsongs[index].play();
  pausesong.classList.remove("close");
  playsong1.classList.add("close");
  songplay.innerHTML=`${nocopyrightsongsarray[index]}`;
  durations(index);  
  volumeSlider.classList.remove("close");
  highvolume.classList.remove("close");
}
function pausesongs(index) {
  nocopyrightsongs[index].pause();
  pausesong.classList.add("close");
  playsong1.classList.remove("close");
}
next.addEventListener('click',(event)=>{  
  if(songnumber + 1 < nocopyrightsongsarray.length){
    songnumber++;
    check();
    playsongs(songnumber);
    
  }
  else
  {
    check();
  }
  
})
previous.addEventListener('click',(event)=>{  
  if(songnumber>0){
    songnumber--;
    check();
    playsongs(songnumber);
  }
  else
  {
    check();
  }
  
})
playpause.forEach((Image) => {
  Image.addEventListener('click', () => {
      if (pausesong.classList.contains('close')) {
          
          playsongs(songnumber);
      } else if (playsong1.classList.contains('close')) {
        pausesongs(songnumber);   
      }
  });
});



songname.forEach((li,idx) => {
    li.addEventListener('click', (event) => {
        songlistname=(`${event.target.textContent}`);
        songplay.innerHTML=`${songlistname}`;
        songnumber = idx;
        check();
        playsongs(songnumber);
        
    });
  });
