// -----JS CODE-----
//@input Component.RenderMeshVisual particle


var body=script.getSceneObject().getComponent("Physics.BodyComponent");
var audio = script.getSceneObject().getComponent("Component.AudioComponent");
var mesh = script.getSceneObject().getComponent("Component.RenderMeshVisual");
var delayedEvent = script.createEvent("DelayedCallbackEvent");
script.particle.enabled=false;
delayedEvent.bind(function(eventData)
{
    script.getSceneObject().destroy();

});

body.onCollisionEnter.add(function (e) {
    audio.play(1);
    mesh.enabled=false;
    body.enabled=false;
    script.particle.mainPass.externalTimeInput=10;
    script.particle.enabled=true;

    delayedEvent.reset(1);

});

