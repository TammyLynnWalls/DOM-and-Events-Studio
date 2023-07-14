// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeoff = document.getElementById('takeoff');

    takeoff.addEventListener("click", function(event){

        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {

            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
    });
    const land = document.getElementById("landing");
    landing.addEventListener("click", function(event){
       window.alert("the shuttle is landing. Landing gear engaged.") 
       flightStatus.innerHTML = "The shuttle has landed."
       spaceShuttleHeight.innerHTML = 0;
    });
    const abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener("click", function(event){
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "";
            spaceShuttleHeight.innerHTML= 0;
        }
    });
    
    
   
    

})
