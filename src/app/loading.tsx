import DOT_SPINNER from "@images/images/dot-spinner.svg";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <section className="text-slate-800 flex flex-col w-full min-h-screen items-center justify-center gap-3">
      <Image
        src={DOT_SPINNER}
        alt="스피너 svg 파일"
        height={80}
        width={80}
        priority
      />
      <h1 className="font-bold text-3xl">Loading</h1>
    </section>
  );
};
export default LoadingPage;
