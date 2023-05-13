import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default class ThreeClass {
  scene!: Scene
  camera!: PerspectiveCamera
  renderer!: WebGLRenderer
  ambientLignt!: AmbientLight
  mesh!: Mesh
  controls!: OrbitControls
  container: HTMLCanvasElement
  constructor(el: HTMLCanvasElement) {
    this.container = el
    this.init()
  }
  init(): void {
    this.scene = new Scene()
    this.setCamera()
    this.setRenderer()
    this.setLight()
    this.setCube()
    this.animate()
  }
  setCamera(): void {
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.camera.position.z = 50
  }

  setRenderer(): void {
    this.renderer = new WebGLRenderer({
      canvas: this.container,
      antialias: true
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild(this.renderer.domElement)
  }
  setControl(): void {
    if (this.camera) {
      this.controls = new OrbitControls(this.camera, this.container)
      this.controls.enableDamping = true
    }
  }
  setLight(): void {
    if (this.scene) {
      this.ambientLignt = new AmbientLight(0xffffff)
      this.scene.add(this.ambientLignt)
    }
  }
  setCube(): void {
    if (this.scene) {
      const geometry = new BoxGeometry(10, 10, 10)
      const meterial = new MeshBasicMaterial({ color: 'FC1944' })
      this.mesh = new Mesh(geometry, meterial)
      this.scene.add(this.mesh)
    }
  }
  render(): void {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera)
    }
  }
  animate(): void {
    if (this.mesh) {
      this.render()

      this.controls.update()

      // requestAnimationFrame(this.animate.bind(this))
      window.requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.01
    }
  }
}
