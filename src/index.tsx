import {Composition} from 'remotion'; import {ButterflyTest} from './scenes/ButterflyTest';
export const RemotionRoot=()=> <Composition id="ButterflyTest" component={ButterflyTest} durationInFrames={150} fps={30} width={1920} height={1080}/>;
