// alert("wrong window")
// Convert time to a format of hours, minutes, seconds, 

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let formattedHH = hh.toString().padStart(2, "0");//new
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
  
  
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
  }
  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("timeFormat").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
    
    
    function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    // showButton("STOP");
    showButton("LAP");
  }
  
  function stop() {
    clearInterval(timerInterval);
    showButton("RESET");
    showButton("RESUME");
  }
    
    function lap() {
    
    showButton("LAP");
  }

  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("START");
    showButton("STOP");
    
  }
  function resume() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("LAP");
    showButton("STOP");
    
  }
     
  
  // Create function to display buttons
  

  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "START" ? startButton : resumeButton;
    const buttonToHide = buttonKey === "START" ? resumeButton : startButton;
    const buttonToShowResume = buttonKey === "RESUME" ? resumeButton : lapButton;
    const buttonToHideResume = buttonKey === "RESUME" ? lapButton : resumeButton;
    const buttonToShowReset = buttonKey === "RESET" ? resetButton : stopButton;
    const buttonToHideReset = buttonKey === "RESET" ? stopButton : resetButton;
    const buttonToShowStop = buttonKey === "STOP" ? stopButton : resetButton;
    const buttonToHideStop = buttonKey === "STOP" ? resetButton : stopButton;
    const buttonToShowLap = buttonKey === "LAP" ? lapButton : resumeButton;
    const buttonToHideLap = buttonKey === "LAP" ? resumeButton : lapButton;
    // const buttonToShowLapFirst = buttonKey === "LAPFIRST" ? lapButton : startButton;
    // const buttonToHideLapFirst = buttonKey === "LAPFIRST" ? startButton : lapButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
    buttonToShowResume.style.display = "block";
    buttonToHideResume.style.display = "none";
    buttonToShowReset.style.display = "block";
    buttonToHideReset.style.display = "none";
    buttonToShowStop.style.display = "block";
    buttonToHideStop.style.display = "none";
    buttonToShowLap.style.display = "block";
    buttonToHideLap.style.display = "none";
    // buttonToShowLapFirst.style.display = "block";
    // buttonToHideLapFirst.style.display = "none";
  }
   
  // Create event listeners
  

  
  let startButton = document.getElementById("start");
  let lapButton = document.getElementById("lap");
  let resumeButton = document.getElementById("resume");
  let resetButton = document.getElementById("reset");
  let stopButton = document.getElementById("stop");
   
  


  startButton.addEventListener("click", start);
  lapButton.addEventListener("click", lap);
  resetButton.addEventListener("click", reset);
  stopButton.addEventListener("click", stop);
  resumeButton.addEventListener("click", resume);

