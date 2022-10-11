//@input SceneObject spawnPoint
//@input Asset.ObjectPrefab myPrefab


var initialized = false;
var audio = script.getSceneObject().getComponent("Component.AudioComponent");

script.api.launch = function() {

  var obj = createObjectFromPrefab();

  obj.getTransform().setWorldPosition(script.spawnPoint.getTransform().getWorldPosition());
  var body=obj.getComponent("Physics.BodyComponent");
  body.addForce(new vec3(0.0, 25.0, 0.0), Physics.ForceMode.Force);
  

   
  
};


function createObjectFromPrefab(){
    if(script.myPrefab){
        var instanceObject = script.myPrefab.instantiate(script.getSceneObject());
        audio.play(1);
        return instanceObject;
    }
    else{
        return undefined;
    }
}