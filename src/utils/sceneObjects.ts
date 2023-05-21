import {
  AmbientLight,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
interface Size {
  width: number
  height: number
}
export default class ThreeClass {
  scene!: Scene
  camera!: PerspectiveCamera
  renderer!: WebGLRenderer
  ambientLignt!: AmbientLight
  controls!: OrbitControls
  container: HTMLCanvasElement
  cube!: Object3D
  size: Size

  constructor(el: HTMLCanvasElement, cube: Object3D, size: Size) {
    this.container = el
    this.cube = cube
    this.size = size
    this.init()
  }
  init(): void {
    this.scene = new Scene()
    this.scene.add(this.cube)
    this.setCamera()
    this.setRenderer()
    this.setLight()
    this.setControl()
    this.animate()
  }
  setCamera(): PerspectiveCamera {
    this.camera = new PerspectiveCamera(
      75,
      this.size.width / this.size.height,
      0.1,
      1000
    )
    this.camera.position.z = 50
    return this.camera
  }

  setRenderer(): WebGLRenderer {
    this.renderer = new WebGLRenderer({
      canvas: this.container,
      antialias: true
    })
    this.renderer.setSize(this.size.width, this.size.height)
    return this.renderer
    // document.body.appendChild(this.renderer.domElement)
  }
  setControl(): OrbitControls {
    this.controls = new OrbitControls(this.camera, this.container)
    this.controls.enableDamping = true

    return this.controls
  }
  setLight(): AmbientLight {
    this.ambientLignt = new AmbientLight(0xffffff)
    this.scene.add(this.ambientLignt)

    return this.ambientLignt
  }

  animate() {
    this.container && this.controls.update()
    requestAnimationFrame(this.animate.bind(this))
    // window.requestAnimationFrame(this.animate)
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.renderer.render(this.scene, this.camera)
  }
}
