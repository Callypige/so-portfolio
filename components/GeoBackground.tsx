export default function GeoBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute w-80 h-80 rounded-full bg-yellow-300 opacity-15 -top-20 -right-16" />
      <div className="absolute w-48 h-48 rounded-full bg-violet-700 opacity-10 bottom-20 -left-14" />
      <div className="absolute w-14 h-14 bg-violet-200 opacity-20 rotate-45 top-44 right-24" />
      <div className="absolute w-10 h-10 bg-yellow-300 opacity-25 rotate-12 bottom-48 right-52" />
      <div className="absolute w-20 h-20 bg-yellow-200 opacity-15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}