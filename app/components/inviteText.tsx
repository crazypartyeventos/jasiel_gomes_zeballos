export default function InviteText() {
  return (
    <div className="text-center text-white drop-shadow-lg px-4">
      <h1 className="text-4xl font-bold mb-2">
        🎤👹 ¡ATENCIÓN CAZADORES! 👹🎤
      </h1>

      <p className="text-lg opacity-90">
        Se ha detectado una alta concentración de ritmo y diversión. ¡Tenemos una nueva misión clasificada!
      </p>
      <p className="text-lg opacity-90">
        Las Huntrix se reúnen para celebrar el Cumpleaños de  
        <span className="font-semibold"> Jasiel</span>.  
      </p>

      <p>¡Prepárate para una fiesta llena de magia, música y estrellas!</p>

      <p className="text-lg opacity-90">
        La animación y el show estarán oficialmente a cargo de: 
        ✨ <span className="font-semibold">CRAZY PARTY</span> ✨ 
        (¡Así que la diversión extrema está garantizada! 😉)
      </p>

      <div className="mt-4 bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-block text-left">
        <p><strong>📅 Fecha:</strong> 19 de Diciembre, 2025</p>
        <p><strong>⏰ Hora:</strong> 3:00 pm</p>
        <p><strong>📍 Dirección:</strong> Salón San Antonio, Av. Sakura</p>
        <p className="mt-2">
          <a 
            className="underline text-yellow-200"
            href="https://maps.app.goo.gl/qDaQ984N6BKzuhjK8"
          >
            Ver ubicación en Google Maps
          </a>
        </p>
      </div>
    </div>
  );
}
