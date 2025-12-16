const GradientCodeWaveLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 text-white">

      {/* Container untuk 4 Balok */}
      <div className="flex space-x-3 justify-center items-center">

        {/* Blok 1 */}
        <div className="h-12 w-3 bg-green-400 rounded-sm animate-bounce duration-[1500ms] shadow-lg ease-in-out" />

        {/* Blok 2 */}
        <div className="h-12 w-3 bg-teal-400 rounded-sm animate-bounce duration-[1500ms] shadow-lg ease-in-out [animation-delay:-0.5s]" />

        {/* Blok 3 */}
        <div className="h-12 w-3 bg-cyan-400 rounded-sm animate-bounce duration-[1500ms] shadow-lg ease-in-out [animation-delay:-1s]" />

        {/* Blok 4 */}
        <div className="h-12 w-3 bg-lime-400 rounded-sm animate-bounce duration-[1500ms] shadow-lg ease-in-out [animation-delay:-1.5s]" />
      </div>

      <p className="mt-12 text-2xl font-mono font-bold text-gray-200 tracking-wider animate-pulse duration-[5000ms]">
        Memuat isi dari portofolio... Sabar ya!
      </p>

      <p className="mt-2 text-sm text-gray-400">
        Terimakasih atas kesabaran Anda.
      </p>

    </div>
  );
};

export default GradientCodeWaveLoader;
