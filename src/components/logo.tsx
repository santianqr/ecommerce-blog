import { Bone } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Bone />
      <span className="font-bold">Huellitas</span>
    </Link>
  );
}
