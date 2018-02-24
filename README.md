npm install

npm start

npm build

### To Use Orbit Controls

`npm i orbit-controls-es6 --save`

in `main.js`:

```
import OrbitControls from 'orbit-controls-es6'
 
this.controls = new OrbitControls(this.camera, this.renderer.domElement)
this.controls.enabled = true
this.controls.maxDistance = 1500
this.controls.minDistance = 0
```
