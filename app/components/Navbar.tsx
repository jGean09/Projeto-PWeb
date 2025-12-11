"use client";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx"; // opcional para classe condicional, mas podemos fazer sem

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // pega a rota atual

  const navItems = [
    { label: "Animes", path: "/" },
    { label: "Favoritos", path: "/favoritos" },
    { label: "Perfil", path: "/perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full border-t bg-white/90 backdrop-blur flex justify-around p-4 text-sm shadow-lg">
      {navItems.map(item => {
        const isActive = pathname === item.path;

        return (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`flex-1 text-center py-2 rounded-md ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
