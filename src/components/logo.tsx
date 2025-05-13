import Image from "next/image";
import LOGO from "@images/images/logo.png";
import Link from "next/link";
import { HOME_PAGE } from "@/constants/common";

const Logo = () => {
  return (
    <Link href={HOME_PAGE} className="flex justify-center">
      <Image
        src={LOGO}
        alt="투데이 투두 로고 이미지"
        height={50}
        style={{ height: "auto" }}
        className="rounded-full"
      />
    </Link>
  );
};

export default Logo;
