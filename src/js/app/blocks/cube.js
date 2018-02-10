import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

export default class Cube {
  constructor(){
    let geometry = new BoxGeometry(1, 1, 1)
    let material = new MeshBasicMaterial({ color: 0x00ff00 })

    this.mesh = new Mesh(geometry, material)
  }

  update(){
    this.mesh.rotation.x += 1
    this.mesh.rotation.y += 0.1
  }
}
