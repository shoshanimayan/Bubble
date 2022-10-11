// HelpTextUI.js
// Version: 0.3.0
// Event: On Awake
// Description: Hints for hand tracking and hand colliders.

// @input Component.Text hintText

var touched =false;
var tracked=false;

if (script.hintText == undefined) {
    print("ERROR: Make sure to set Hint Text Component");
    script.getSceneObject().destroy();
    return;
}



script.createEvent("TouchStartEvent").bind(function () {

    touched=true
})

script.createEvent("UpdateEvent").bind(function () {
   if(!touched)
    {
        script.hintText.text = "Tap to blow a bubble";
    }
    else
    {
        if(!tracked){
        if (global.handTracking.getHand() === undefined) {
                script.hintText.text = "Pop the bubble with your real hand";
            }
            else {
                tracked=true;
                script.hintText.enabled = false;

            }
        }

    }
    
   
});
