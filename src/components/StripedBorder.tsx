export default function StripedBorder() {
  return (
    <>
      {/* Left stripe */}
      <div className="fixed left-0 top-0 bottom-0 w-8 md:w-12 z-30 bg-gradient-to-b from-yellow-400 via-black to-green-500 pattern-stripes"></div>
      
      {/* Right stripe */}
      <div className="fixed right-0 top-0 bottom-0 w-8 md:w-12 z-30 bg-gradient-to-b from-green-500 via-black to-yellow-400 pattern-stripes"></div>
      
      {/* Top stripe */}
      <div className="fixed top-0 left-0 right-0 h-6 z-30 bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 pattern-stripes-horizontal"></div>
      
      {/* Bottom stripe */}
      <div className="fixed bottom-0 left-0 right-0 h-6 z-30 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500 pattern-stripes-horizontal"></div>
    </>
  );
}
