import Link from "next/link";

const GradientCodeWaveLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 text-white">

      <div className="flex space-x-3 justify-center items-center">
        <div className="h-12 w-3 bg-green-400 rounded-sm animate-bounce duration-[1500ms] delay-[0ms] shadow-lg ease-in-out" />
        <div className="h-12 w-3 bg-teal-400 rounded-sm animate-bounce duration-[1500ms] delay-[150ms] shadow-lg ease-in-out" />
        <div className="h-12 w-3 bg-cyan-400 rounded-sm animate-bounce duration-[1500ms] delay-[300ms] shadow-lg ease-in-out" />
        <div className="h-12 w-3 bg-lime-400 rounded-sm animate-bounce duration-[1500ms] delay-[450ms] shadow-lg ease-in-out" />
      </div>

      <p className="mt-12 text-2xl font-mono font-bold text-gray-200 tracking-wider animate-pulse duration-[5000ms]">
        Memuat isi dari portofolio... Sabar ya!
      </p>

      <p className="mt-2 text-sm text-gray-400">
        Terimakasih atas kesabaran Anda.
      </p>

      <Link
        href="/"
        className="mt-6 text-blue-400 underline hover:text-blue-500 transition"
      >
        Kembali ke Beranda
      </Link>

    </div>
  );
};

export default GradientCodeWaveLoader;
