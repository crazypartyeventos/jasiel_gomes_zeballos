export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white py-16 flex flex-col items-center gap-4">
      
      {/* Nombre de la empresa */}
      <p className="font-[var(--font-michroma)] text-lg md:text-xl">
        Crazy Party Eventos
      </p>

      {/* Redes sociales */}
      <div className="flex gap-6">
        <a href="https://facebook.com" target="_blank" className="hover:underline">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" className="hover:underline">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:underline">
          Twitter
        </a>
      </div>

      {/* Mensaje opcional */}
      <p className="text-sm md:text-base opacity-80">
        &copy; 2025 Mi Empresa. Todos los derechos reservados.
      </p>
    </footer>
  );
}
