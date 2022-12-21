import { Link, Head } from '@inertiajs/inertia-react';
import { Canvas } from '@react-three/fiber';
import Portfolio from './Portfolio';

export default function Home(props) {
    return (
        <div className='h-screen'>
            <Canvas
               camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ 0, 0, 4 ]
            } }
            >
                <Portfolio />
            </Canvas>

        </div>
    );
}
