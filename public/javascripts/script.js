var stage = (function(){
  'use strict'
  
  var scene = new THREE.Scene(),
  renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
  light = new THREE.AmbientLight(0xffffff),
  camera,
  box;
  
  function initScence(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    scene.add(light);
    
    camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth /window.innerHeight,
      1,
      1000
    );
    
    camera.position.z = 100;
    scene.add(camera);
    
    box = new THREE.Mesh(
      new THREE.BoxGeometry(20,20,20),
      new THREE.MeshBasicMaterial({color:0xFF0000})
    );
    box.name='box';
    
    scene.add(box);  
    render();
  }
  
  function render(){
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  
  window.onload = initScence;
  
  return{
    scene: scene
  }
  
})(); 