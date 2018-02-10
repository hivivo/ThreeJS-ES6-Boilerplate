import * as THREE from 'three'
import Stats from 'stats.js'

import Config from '../data/config'

import Cube from './blocks/cube'

export default class Main {
  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({ antialias: true })

    this.renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.style.margin = 0
    document.body.appendChild(this.renderer.domElement)

    this.camera.position.z = 10

    this.addLights()
    this.addHelpers()

    window.addEventListener('resize', () => {
      let width = window.innerWidth
      let height = window.innerHeight

      this.renderer.setSize(width, height)

      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
    })

    this.loadAll()

    this.addStats()

    // let's render
    this.render()
  }

  loadAll() {
    let cube = new Cube()
    this.scene.add(cube.mesh)
  }

  render() {
    if (Config.isDev) {
      this.stats.begin()
    }

    this.renderer.render(this.scene, this.camera)

    if (Config.isDev) {
      this.stats.end()
    }

    requestAnimationFrame(this.render.bind(this))
  }

  addLights() {
    let ambientLight = new THREE.AmbientLight(0x000000)
    this.scene.add(ambientLight)

    let light = new THREE.PointLight(0xffffff, 1, 0)
    light.position.set(0, 200, 0)
    this.scene.add(light)
  }

  addHelpers() {
    if (Config.isDev) {
      let axisHelper = new THREE.AxisHelper(50)
      this.scene.add(axisHelper)
    }
  }

  addStats() {
    if (Config.isDev) {
      this.stats = new Stats()
      this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
      document.body.appendChild(this.stats.domElement)
    }
  }
}
