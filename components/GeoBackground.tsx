export default function GeoBackground() {
  return (
    <>
      <style>{`
        @keyframes float1 { 0%,100% { transform: translate(0,0) } 50% { transform: translate(-10px,20px) } }
        @keyframes float2 { 0%,100% { transform: translate(0,0) } 50% { transform: translate(15px,-25px) } }
        @keyframes float3 { 0%,100% { transform: rotate(45deg) scale(1) } 50% { transform: rotate(90deg) scale(1.1) } }
        @keyframes float4 { 0%,100% { transform: rotate(12deg) translateY(0) } 50% { transform: rotate(45deg) translateY(-15px) } }
        @keyframes pulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity:0.15 } 50% { transform: translate(-50%,-50%) scale(1.3); opacity:0.08 } }
      `}</style>
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div style={{ animation: "float1 8s ease-in-out infinite" }} className="absolute w-80 h-80 rounded-full bg-yellow-300 opacity-15 -top-20 -right-16" />
        <div style={{ animation: "float2 10s ease-in-out infinite" }} className="absolute w-48 h-48 rounded-full bg-violet-700 opacity-10 bottom-20 -left-14" />
        <div style={{ animation: "float3 12s ease-in-out infinite" }} className="absolute w-14 h-14 bg-violet-200 opacity-20 top-44 right-24" />
        <div style={{ animation: "float4 7s ease-in-out infinite" }} className="absolute w-10 h-10 bg-yellow-300 opacity-25 bottom-48 right-52" />
        <div style={{ animation: "pulse 9s ease-in-out infinite" }} className="absolute w-20 h-20 bg-yellow-200 opacity-15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
}