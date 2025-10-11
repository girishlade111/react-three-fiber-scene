'use client'

import { Canvas } from '@react-three/fiber'
import { KinectScene } from '@/components/kinect-scene'
import { Leva } from 'leva' // Import Leva component

export default function Home() {
  return (
    <div className="w-full h-screen"> {/* Removed bg-white here, handled by KinectScene */}
      <Canvas
        camera={{ 
          position: [0, 0, 500], 
          fov: 50,
          near: 1,
          far: 10000
        }}
        gl={{ alpha: false }}
        scene={{ background: null }}
      >
        {/* Background color is now controlled by KinectScene via Leva */}
        <KinectScene />
      </Canvas>
      {/* Render Leva component here with collapsed prop */}
      <Leva collapsed={true} /> 
      <div className="absolute top-4 left-4 text-black font-medium font-sans text-2xl"> {/* Made bolder and slightly larger */}
        v0 | explore
      </div>
      <div className="absolute bottom-4 right-4 text-black font-medium font-sans text-xl"> {/* Made bolder */}
        <a 
          href="https://github.com/mrdoob/three.js/blob/master/examples/webgl_video_kinect.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @threejs
        </a>
      </div>
    </div>
  )
}
