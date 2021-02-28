import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArcRotateCamera, Camera, Color4, Engine, HemisphericLight, Mesh, MeshBuilder, Scene, Vector3 } from 'babylonjs';
import * as GUI from 'babylonjs-gui'

@Component({
  selector: 'app-about-skill',
  templateUrl: './about-skill.component.html',
  styleUrls: ['./about-skill.component.scss']
})
export class AboutSkillComponent implements OnInit {

  @ViewChild("skillCanvas") skillCanvas: ElementRef
  private engine: Engine
  private scene: Scene
  private camera: Camera
  private sphereRadius = 1.5
  private sphere: Mesh;
  private skills: Array<string> = ["HTML5", 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap', 
    'Kotlin', 'Java', 'Node.js', 'Spring Framework', 'MySQL', 'PostgreSQL', 'Docker', 'Selenium', 'Web Services',
    'Crawler', 'JPA/Hibernate', 'JSON', 'Git'
  ]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createContext()
      let sphere = this.createReferenceSphere()
      let points = this.getSpherePoints([1.5, 0.75, 0], sphere)
      this.createTextMesh(points)
      this.startRenderLoop()
    }, 20)
  } 

  private createContext = () => {
    this.engine = new Engine(this.skillCanvas.nativeElement)
    this.createScene()
    this.createCamera()
    this.camera.attachControl(this.skillCanvas, true)
    this.createLight()
  }
  
  private createScene = () => {
    this.scene = new Scene(this.engine)
    this.scene.clearColor = new Color4(0, 0, 0, 0)
  }

  private createLight = () => {
    const light = new HemisphericLight("light", new Vector3(1, 1, 1), this.scene)
    light.intensity = 0.8
  }

  private createCamera = () => {
    let arcRotateCamera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 4, new Vector3(0, 0, 0), this.scene)
    arcRotateCamera.wheelDeltaPercentage = 0
    arcRotateCamera.wheelPrecision = 99
    this.camera = arcRotateCamera
  }

  private createReferenceSphere = () => {
    this.sphere = MeshBuilder.CreateSphere("sphere", {diameter: this.sphereRadius * 2})
    return this.sphere
  }

  private getSpherePoints = (arrayHeight, sphere) => {
    const spherePivot = sphere.getPivotPoint()
    let heightDesired = arrayHeight
    let divisions = 6
    let arrayPoints = []
    for(let i = 0; i < heightDesired.length; i++){
      let variation = i % 2 != 0 ? -((360 / divisions) / 2) : 0
      let totalRotation = (360 / divisions) + variation
      let height = heightDesired[i]
      let polarRadius = this.pythagorasCalculationWithHypotenuse(this.sphereRadius, height)
      let vectorPositive = new Vector3(spherePivot.x + polarRadius, spherePivot.y + height, spherePivot.z)
      let vectorNegative = new Vector3(spherePivot.x + polarRadius, spherePivot.y - height, spherePivot.z)
      if(height == this.sphereRadius){
        totalRotation = 359
      } 
      if(height == 0){
        while(totalRotation <= 360){
          totalRotation += (360 / divisions)
          arrayPoints.push(this.getAbsoluteVectorPosition(vectorPositive, totalRotation, sphere))
        }
      } else {
        while(totalRotation <= 360){
          totalRotation += (360 / (divisions + 0.1))
          arrayPoints.push(this.getAbsoluteVectorPosition(vectorPositive, totalRotation, sphere))
          arrayPoints.push(this.getAbsoluteVectorPosition(vectorNegative, totalRotation, sphere))
        }
      }
    }   
    sphere.dispose()
    return arrayPoints
  }

  private createTextMesh = (points) => {
    for(let i = 0; i < this.skills.length; i++){
      var plane = Mesh.CreatePlane("plane", 2, this.scene)
      plane.parent = this.sphere
      plane.position = points[i]
      plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL
      var advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane)
      var text = new GUI.TextBlock("text", this.skills[i])
      text.fontSize = 60
      advancedTexture.addControl(text)
    }
  }

  private getAbsoluteVectorPosition = (vector, rotation, sphere) => {
    let spherePositive = MeshBuilder.CreateSphere("sphere", {diameter: 0.1})
    spherePositive.setPositionWithLocalVector(vector)
    spherePositive.setPivotMatrix(sphere.getPivotMatrix())
    spherePositive.rotateAround(sphere.getPivotPoint(), new Vector3(0, 1, 0), this.degreesToRadians(rotation))
    let vectorPosition = spherePositive.getAbsolutePosition()
    spherePositive.dispose()
    return vectorPosition
  }

  /* 
    h² = c² + c²
    c² = h² - c²
    c = (h² - c²)¹/²
  */
  private pythagorasCalculationWithHypotenuse = (hypotenuse: number, cathetus: number) => {
    return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(cathetus, 2))
  }

  private degreesToRadians = degrees => (Math.PI / 180) * degrees

  private startRenderLoop = () => {
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  resizeCanvas = () => {
    this.engine.resize()
  }
}
