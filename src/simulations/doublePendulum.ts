export type PendulumState={a1:number;a2:number;w1:number;w2:number};
export type Point={x:number;y:number};

export const initialState=(a1=1.05,a2=1.0501):PendulumState=>({a1,a2,w1:0,w2:0});
const deriv=(s:PendulumState,g=9.81,l1=1,l2=1,m1=1,m2=1):PendulumState=>{const {a1,a2,w1,w2}=s,d=a1-a2;const den1=(m1+m2)*l1-m2*l1*Math.cos(d)**2;const den2=(l2/l1)*den1;return{a1:w1,a2:w2,w1:(m2*l1*w1*w1*Math.sin(d)*Math.cos(d)+m2*g*Math.sin(a2)*Math.cos(d)+m2*l2*w2*w2*Math.sin(d)-(m1+m2)*g*Math.sin(a1))/den1,w2:(-m2*l2*w2*w2*Math.sin(d)*Math.cos(d)+(m1+m2)*(g*Math.sin(a1)*Math.cos(d)-l1*w1*w1*Math.sin(d)-g*Math.sin(a2)))/den2};};
const add=(s:PendulumState,k:PendulumState,h:number):PendulumState=>({a1:s.a1+h*k.a1,a2:s.a2+h*k.a2,w1:s.w1+h*k.w1,w2:s.w2+h*k.w2});
export const rk4=(s:PendulumState,dt=1/240):PendulumState=>{const k1=deriv(s),k2=deriv(add(s,k1,dt/2)),k3=deriv(add(s,k2,dt/2)),k4=deriv(add(s,k3,dt));return{a1:s.a1+dt*(k1.a1+2*k2.a1+2*k3.a1+k4.a1)/6,a2:s.a2+dt*(k1.a2+2*k2.a2+2*k3.a2+k4.a2)/6,w1:s.w1+dt*(k1.w1+2*k2.w1+2*k3.w1+k4.w1)/6,w2:s.w2+dt*(k1.w2+2*k2.w2+2*k3.w2+k4.w2)/6};};
export const stateAt=(frame:number,fps:number,second=false)=>{let s=initialState(second?1.0501:1.05);for(let i=0;i<Math.floor(frame*240/fps);i++)s=rk4(s);return s;};
export const points=(s:PendulumState,scale=155):Point[]=>[{x:0,y:0},{x:Math.sin(s.a1)*scale,y:Math.cos(s.a1)*scale},{x:Math.sin(s.a1)*scale+Math.sin(s.a2)*scale*.82,y:Math.cos(s.a1)*scale+Math.cos(s.a2)*scale*.82}];
// Backward-compatible visual-test motion used only by the original 5-second composition.
export const testPendulum=(frame:number,fps:number):{a1:number;a2:number}=>{const t=frame/fps;return {a1:0.55*Math.sin(t*4.2)+0.12*Math.sin(t*7.1),a2:1.02*Math.sin(t*3.4+0.7)+0.16*Math.sin(t*8.2)};};
