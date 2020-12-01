import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import Asection from '../imgs/panoA.jpg';
import Bsection from '../imgs/panoB.jpg';
import Csection from '../imgs/panoC.jpg';
import Dsection from '../imgs/panoD.jpg';
import Esection from '../imgs/panoE.jpg';
import { Canvas, useThree, useLoader, extend,useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = (props) => {
    const { camera, gl } = useThree();
    const ref = useRef();
    useFrame(() => ref.current.update());
    return <orbitControls ref={ref} {...props} args={[camera, gl.domElement]} />;
};

const Dome = (props) => {
    const Sectionimg = props.texture === 'A' 
    ? Asection
    : props.texture === 'B'
    ? Bsection
    : props.texture === 'C'
    ? Csection
    : props.texture === 'D'
    ? Dsection
    : props.texture === 'E'
    ? Esection
    : Asection

    const texture = useLoader(THREE.TextureLoader, Sectionimg);
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[100, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    );
};

const TestVr = (props) => {
    return (
    <Canvas camera={{ position: [0, 0, 10] }}>
        <Controls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI*2/3} enableDamping dampingFactor={0.2} />
        <Suspense fallback={null}>
          <Dome texture={props.section} />
        </Suspense>
    </Canvas>
    )
};

export default TestVr;
