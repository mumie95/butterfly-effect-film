export type PendulumState={a1:number;a2:number};
// A deterministic, clearly non-physical visual test motion. Replace with validated dynamics in a later scene.
export const testPendulum=(frame:number,fps:number):PendulumState=>{const t=frame/fps;return {a1:0.55*Math.sin(t*4.2)+0.12*Math.sin(t*7.1),a2:1.02*Math.sin(t*3.4+0.7)+0.16*Math.sin(t*8.2)};};
