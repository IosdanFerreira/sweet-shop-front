import { Candy } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className={"text-2xl font-extrabold flex items-center gap-2"}>
      <div className="rounded-xl bg-gradient-to-r from-primary to-primary/70 p-2">
        <Candy size={20} className="stroke-white" />
      </div>
      <div>
        <span className="text-primary bg-clip-text">Sweet Shop</span>
      </div>
    </Link>
  );
}
