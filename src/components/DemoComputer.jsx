import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoComputer = ({ onToggle, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/computer.glb');
  const { actions } = useAnimations(animations, group);

  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');

  useEffect(() => {
    if (!txt) return;
    txt.flipY = false;

    const video = txt.source?.data;
    if (!video || !(video instanceof HTMLVideoElement)) return;

    let unlockHandler = null;

    document.querySelectorAll('video').forEach((v) => {
      if (v !== video) {
        v.muted = true;
        v.pause();
      }
    });

    video.currentTime = 0;
    video.muted = false;
    video.volume = 0.25;

    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});

      unlockHandler = () => {
        if (!video.muted) return;
        video.muted = false;
        video.volume = 0.25;
        video.play().catch(() => {});
      };
      window.addEventListener('click', unlockHandler, { once: true });
    });

    return () => {
      if (unlockHandler) {
        window.removeEventListener('click', unlockHandler);
        unlockHandler = null;
      }
      video.muted = true;
      video.pause();
    };
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* Clickable screen mesh */}
        <mesh
          name="monitor-screen"
          geometry={nodes['monitor-screen'].geometry}
          material={nodes['monitor-screen'].material}
          position={[0.127, 1.831, 0.511]}
          rotation={[1.571, -0.005, 0.031]}
          scale={[0.661, 0.608, 0.401]}
          onClick={(e) => {
            e.stopPropagation();
            if (onToggle) onToggle();
          }}
          onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
          onPointerOut={() => { document.body.style.cursor = 'none'; }}
        >
          <meshBasicMaterial map={txt} toneMapped={false} />
        </mesh>
        <group name="RootNode" position={[0, 1.093, 0]} rotation={[-Math.PI / 2, 0, -0.033]} scale={0.045}>
          <group name="Screen001" position={[5.658, 1.643, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen002" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen003" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen004" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen005" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen006" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen007" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen008" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen009" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Screen010" position={[5.658, 1.644, 0.812]} rotation={[Math.PI / 2, 0, 0]} scale={[0.923, 0.855, 0.855]} />
          <group name="Tower-light-007" position={[16.089, -3.47, -14.495]} rotation={[Math.PI / 2, 0, 0]} scale={0.963} />
          <group name="Tower-light-008" position={[15.155, -3.47, -14.495]} rotation={[Math.PI / 2, 0, 0]} scale={0.963} />
        </group>
        <group
          name="Monitor-B-_computer_0"
          position={[0.266, 1.132, 0.051]}
          rotation={[0, -0.033, 0]}
          scale={[0.042, 0.045, 0.045]}>
          <mesh name="Monitor-B-_computer_0_1" geometry={nodes['Monitor-B-_computer_0_1'].geometry} material={materials.computer} />
          <mesh name="Monitor-B-_computer_0_2" geometry={nodes['Monitor-B-_computer_0_2'].geometry} material={materials.base__0} />
          <mesh name="Monitor-B-_computer_0_3" geometry={nodes['Monitor-B-_computer_0_3'].geometry} material={materials.Material_36} />
          <mesh name="Monitor-B-_computer_0_4" geometry={nodes['Monitor-B-_computer_0_4'].geometry} material={materials.Material_35} />
          <mesh name="Monitor-B-_computer_0_5" geometry={nodes['Monitor-B-_computer_0_5'].geometry} material={materials.Material_34} />
          <mesh name="Monitor-B-_computer_0_6" geometry={nodes['Monitor-B-_computer_0_6'].geometry} material={materials.keys} />
          <mesh name="Monitor-B-_computer_0_7" geometry={nodes['Monitor-B-_computer_0_7'].geometry} material={materials.keys2} />
          <mesh name="Monitor-B-_computer_0_8" geometry={nodes['Monitor-B-_computer_0_8'].geometry} material={materials.Material_37} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/computer.glb');

export default DemoComputer;