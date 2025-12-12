import Image from "next/image";

export default function EventDetails() {
  return (
    <div className="w-full bg-purple-200/40 py-12">
      {/* Contenedor interno centrado solo para el contenido */}
      <div className="flex flex-col items-center">
        <br />
        <br />
        <p className="text-lg font-semibold mb-6 text-purple-900 text-center">
          La fiesta será en:
        </p>
        <br />
        <div className="w-full max-w-md flex justify-center mb-6 px-4">
          <Image
            key="/images/viloco2.jpg"
            src="/images/viloco2.jpg"
            alt="Foto del lugar"
            width={500}
            height={550}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        <p className="text-lg font-bold text-purple-800 mb-1 text-center">
          Viloco
        </p>
        <p className="text-base font-medium text-purple-600 mb-2 text-center">
          Salón San Antonio
        </p>
        <p className="text-sm text-gray-700 mb-6 text-center">
          Calle, Zona Numero ...
        </p>

        <a
          href="https://maps.app.goo.gl/qDaQ984N6BKzuhjK8"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mapa"
        >
          📍Ver mapa
        </a>
      </div>
      <br />
      <br />
    </div>
  );
}