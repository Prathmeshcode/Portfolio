"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Environment,
  Float,
  ScrollControls,
  Stars,
  Text,
  useAnimations,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { forwardRef, useEffect, useMemo, useRef } from "react";

const STATIONS = [
  { id: "hero", label: "Start", z: 0, hue: 200 },
  { id: "about", label: "About", z: -18, hue: 330 },
  { id: "skills", label: "Skills", z: -36, hue: 140 },
  { id: "projects", label: "Projects", z: -54, hue: 45 },
  { id: "experience", label: "Experience", z: -72, hue: 270 },
  { id: "creative", label: "Creative", z: -90, hue: 10 },
  { id: "services", label: "Services", z: -108, hue: 190 },
  { id: "achievements", label: "Goals", z: -126, hue: 115 },
  { id: "contact", label: "Contact", z: -144, hue: 310 },
] as const;

export function Journey() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.8, 6], fov: 55, near: 0.1, far: 400 }}
      >
        <color attach="background" args={["#03040a"]} />
        <fog attach="fog" args={["#03040a", 18, 80]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[6, 8, 6]} intensity={1.4} />
        <directionalLight position={[-8, -2, 4]} intensity={0.4} color="#7dd3fc" />
        <AdaptiveDpr pixelated />
        <Stars radius={80} depth={60} count={1200} factor={3} fade speed={0.6} />

        <ScrollControls pages={STATIONS.length} damping={0.14}>
          <Scene />
        </ScrollControls>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function Scene() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);
  const traveler = useRef<THREE.Group>(null);
  const tunnelMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0b1022"),
        emissive: new THREE.Color("#0a1030"),
        metalness: 0.2,
        roughness: 0.8,
      }),
    [],
  );

  const pathPoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 220; i++) {
      const t = i / 219;
      const z = THREE.MathUtils.lerp(10, -155, t);
      const x = Math.sin(t * Math.PI * 3) * 1.0;
      const y = Math.cos(t * Math.PI * 2) * 0.35;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(pathPoints), [pathPoints]);
  const tubeGeo = useMemo(
    () => new THREE.TubeGeometry(curve, 260, 0.23, 14, false),
    [curve],
  );

  useFrame((state, delta) => {
    const t = scroll.offset;
    const targetZ = THREE.MathUtils.lerp(2, -148, t);
    const wobbleX = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    const wobbleY = Math.cos(state.clock.elapsedTime * 0.5) * 0.05;

    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      targetZ + 6,
      6,
      delta,
    );
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      wobbleX,
      5,
      delta,
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      0.7 + wobbleY,
      5,
      delta,
    );
    state.camera.lookAt(0, 0, targetZ - 6);

    if (group.current) {
      group.current.rotation.z = THREE.MathUtils.damp(
        group.current.rotation.z,
        Math.sin(t * Math.PI * 2) * 0.03,
        4,
        delta,
      );
    }

    if (traveler.current) {
      // Map scroll [0..1] along curve [0..1]
      const p = curve.getPointAt(t);
      const dir = curve.getTangentAt(t).normalize();

      traveler.current.position.copy(p).add(new THREE.Vector3(0, -0.45, 0));

      const lookAt = p.clone().add(dir);
      traveler.current.lookAt(lookAt);
      traveler.current.rotateY(Math.PI); // face forward
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={tubeGeo} material={tunnelMat} />
      {/* Small light near camera to keep motion readable */}
      <pointLight position={[0, 0.8, 4]} intensity={0.9} color="#93c5fd" distance={12} />
      <SpeedLines curve={curve} />
      <JourneyStations />
      <Traveler ref={traveler} />
    </group>
  );
}

function JourneyStations() {
  return (
    <group>
      {STATIONS.map((s, idx) => (
        <Float key={s.id} floatIntensity={0.6} rotationIntensity={0.25} speed={1.0}>
          <group position={[Math.sin(idx) * 1.25, 0.35 + Math.cos(idx) * 0.25, s.z]}>
            <mesh>
              <dodecahedronGeometry args={[0.55, 0]} />
              <meshStandardMaterial
                color={new THREE.Color(`hsl(${s.hue} 90% 60%)`)}
                emissive={new THREE.Color(`hsl(${s.hue} 100% 20%)`)}
                metalness={0.2}
                roughness={0.35}
              />
            </mesh>
            <mesh position={[0, -1.05, 0]}>
              <torusGeometry args={[1.15, 0.08, 12, 64]} />
              <meshStandardMaterial
                color={new THREE.Color(`hsl(${s.hue} 80% 55%)`)}
                emissive={new THREE.Color(`hsl(${s.hue} 100% 25%)`)}
                metalness={0.1}
                roughness={0.55}
              />
            </mesh>
            <Text
              position={[0, 1.1, 0]}
              fontSize={0.35}
              letterSpacing={-0.03}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {s.label}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

const travelerScale = 1.8;

const Traveler = forwardRef<THREE.Group>(function Traveler(_props, forwardedRef) {
  const { scene, animations } = useGLTF("/models/CesiumMan.glb");
  const group = useRef<THREE.Group>(null);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    const first = names?.[0];
    const walk =
      actions?.Walk ??
      actions?.walk ??
      actions?.Run ??
      actions?.run ??
      (first ? actions?.[first] : undefined);

    if (!walk) return;
    walk.reset().fadeIn(0.3).play();

    return () => {
      walk.fadeOut(0.2);
    };
  }, [actions, names]);

  return (
    <group ref={forwardedRef}>
      <Float floatIntensity={0.18} rotationIntensity={0.05} speed={0.8}>
        <group ref={group} scale={travelerScale} position={[0, 0, 0]}>
          <primitive object={scene} />
        </group>
      </Float>
    </group>
  );
});

useGLTF.preload("/models/CesiumMan.glb");

function SpeedLines({ curve }: { curve: THREE.CatmullRomCurve3 }) {
  const scroll = useScroll();
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Density tuned for performance; stable across screen sizes.
  const count = 140;
  const seeds = useMemo(() => {
    const arr = new Array(count).fill(0).map((_, i) => {
      const s = (i / count + Math.random() * 0.2) % 1;
      const r = 0.25 + Math.random() * 0.75;
      const a = Math.random() * Math.PI * 2;
      return { s, r, a, w: 0.25 + Math.random() * 0.55 };
    });
    return arr;
  }, []);

  useFrame((state, delta) => {
    const speed = 0.35 + scroll.offset * 0.9;
    for (let i = 0; i < seeds.length; i++) {
      const seed = seeds[i];
      seed.s = (seed.s + delta * speed) % 1;

      const p = curve.getPointAt(seed.s);
      const t = curve.getTangentAt(seed.s).normalize();
      const n = new THREE.Vector3().crossVectors(t, new THREE.Vector3(0, 1, 0)).normalize();
      const b = new THREE.Vector3().crossVectors(n, t).normalize();

      const offset = n.multiplyScalar(Math.cos(seed.a) * seed.r).add(b.multiplyScalar(Math.sin(seed.a) * seed.r));
      dummy.position.copy(p).add(offset);

      // Align line with tunnel direction
      dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), t);
      dummy.scale.set(1, 1, THREE.MathUtils.lerp(0.8, 2.2, scroll.offset) * seed.w);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(i, dummy.matrix);
    }
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <cylinderGeometry args={[0.006, 0.006, 1, 6, 1, true]} />
      <meshStandardMaterial
        color="#e2e8f0"
        emissive="#60a5fa"
        emissiveIntensity={1.0}
        transparent
        opacity={0.68}
        metalness={0.1}
        roughness={0.25}
      />
    </instancedMesh>
  );
}

