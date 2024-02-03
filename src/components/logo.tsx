import { Bone } from "lucide-react";
import Link from "next/link";

export default function Logo({ iconSize = 24, fontSize = "" }) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Bone size={iconSize} />
      <span className={`font-bold ${fontSize}`}>Huellitas</span>
    </Link>
  );
}
