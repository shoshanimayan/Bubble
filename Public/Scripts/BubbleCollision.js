// -----JS CODE-----

var body=script.getSceneObject().getComponent("Physics.BodyComponent");
var audio = script.getSceneObject().getComponent("Component.AudioComponent");
var mesh = script.getSceneObject().getComponent("Component.RenderMeshVisual");
var delayedEvent = script.createEvent("DelayedCallbackEvent");
delayedEvent.bind(function(eventData)
{
    script.getSceneObject().destroy();

});

body.onCollisionEnter.add(function (e) {
    audio.play(1);
    mesh.enabled=false;
    body.enabled=false;
    delayedEvent.reset(1);

});

