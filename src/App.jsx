
import { Typewriter } from 'react-simple-typewriter';

import { Footer, Header, Section } from "./Landing"
import { CalendarIcon, HeadsetIcon, LeafIcon, UtensilsIcon, CompassIcon } from "./Icons"

import mision from "./assets/mision.jpeg"
import vision from "./assets/vision.jpeg"
import barranquilla from "./assets/Barranquilla.jpg"

import historico from "./assets/tour_historico.png"
import gastronomia from "./assets/tour_gastronomico.png"
import ecologico from "./assets/tour_ecologico.png"

export const App = () => {
  return (
    <div className={"flex flex-col min-h-screen"}>
      <Header />

      <main className="flex-1">

        <Section
          id="mision"
          title="Nuestra Misión"
          bgColor="bg-gray-900"
          textColor="text-white"
          image={mision}
          alt="Hero Image"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Brindar experiencias únicas e inolvidables en tours presenciales y virtuales por Barranquilla, adaptándonos a tus intereses y preferencias.
          </p>


        </Section>

        <Section
          id="vision"
          title="Nuestra Visión"
          bgColor="bg-gray-900"
          textColor="text-white"
          image={vision}
          alt="Mission Image"
        >
          <p className="text-gray-400 text-lg">
            Ser la empresa líder en tours guiados, ofreciendo experiencias excepcionales que superan las expectativas y dejan una huella positiva en cada visitante.
          </p>


        </Section>

        <section id={"servicios"} className={`bg-gray-900 text-white py-20 md:py-32`}>
          <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
            <div className={`md:w-1/2 space-y-6`}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Nuestros Servicios,

                <span className='text-3xl md:text-4xl font-bold text-blue-700'>
                  <Typewriter
                    words={[' facil', ' sencillo', ' rapido', ' amigable']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
            </div>
          </div>

          <div className="container mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-6">

              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700">
                <CalendarIcon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Tours Presenciales</h3>
                <p className="text-gray-400 text-lg">
                  Descubre los lugares más icónicos de Barranquilla y aprende sobre su fascinante historia.
                </p>
                <div className="mt-4">
                  <button className="bg-gray-600 text-white px-4 py-2 rounded">Más Información</button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700">
                <UtensilsIcon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Tours Culinarios</h3>
                <p className="text-gray-400 text-lg">
                  Explora los sabores únicos de la cocina local y disfruta de una experiencia culinaria inolvidable.
                </p>
                <div className="mt-4">
                  <button className="bg-gray-600 text-white px-4 py-2 rounded">Más Información</button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700">
                <LeafIcon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Eco-Aventuras</h3>
                <p className="text-gray-400 text-lg">
                  Sumérgete en la naturaleza y descubre los tesoros ambientales de Barranquilla.
                </p>
                <div className="mt-4">
                  <button className="bg-gray-600 text-white px-4 py-2 rounded">Más Información</button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700">
                <HeadsetIcon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Tours Virtuales</h3>
                <p className="text-gray-400 text-lg">
                  Explora Barranquilla desde la comodidad de tu hogar con nuestros tours virtuales guiados por expertos.
                </p>
                <div className="mt-4">
                  <button className="bg-gray-600 text-white px-4 py-2 rounded">
                    Más Información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="hero"
          title="Sobre Barranquilla"
          bgColor="bg-gray-900"
          textColor="text-white"
          image={barranquilla}
          alt="Hero Image"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Barranquilla, se alza como una ciudad vibrante y llena de vida en la costa norte de Colombia. Conocida como "La Arenosa" o "Curramba la Bella", es un destino turístico que enamora con su rica cultura, su contagiosa alegría y su ritmo caribeño.
            Es una ciudad mestiza, donde se mezclan las raíces, dando lugar a una identidad única que se refleja en su música, gastronomía, tradiciones y arquitectura.
            Se transforma en el epicentro de la alegría con su famoso Carnaval. Un derroche de disfraces, música, bailes y comparsas que inundan las calles de color y ritmo.
            Barranquilla es una ciudad que te invita a vivirla con todos los sentidos. Déjate contagiar por su ritmo, disfruta de su gente amable y descubre la magia que la convierte en La Puerta de Oro de Colombia.
          </p>


        </Section>


        <section id="experiencias" className="bg-gray-100 dark:bg-gray-900 dark:text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-10 space-y-10">

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Nuestras Experiencias
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={historico}
                  width={600}
                  height={400}
                  alt="Experience 1"
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6">

                  <h3 className="text-xl font-bold mb-2">
                    Tour histórico
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Descubre los tesoros de Barranquilla con un recorrido guiado por sus principales atracciones.
                  </p>

                  <div className="flex justify-between items-center mt-4">

                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                      onClick={() => window.open('https://www.canalinstitucional.tv/top-5-monumentos-historicos-debes-visitar/', '_blank')}
                    >
                      Saber más..
                    </button>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <CompassIcon className="mr-2 h-5 w-5" />
                      <span>Presencial</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={gastronomia}
                  width={600}
                  height={400}
                  alt="Experience 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Tour Gastronómico
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Disfruta los sabores de Barranquilla en un recorrido por sus mejores restaurantes y mercados.
                  </p>

                  <div className="flex justify-between items-center mt-4">

                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                      onClick={() => window.open('https://aventurecolombia.com/es/gastronomia-colombiana/', '_blank')}
                    >
                      Saber más..
                    </button>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <CompassIcon className="mr-2 h-5 w-5" />
                      <span>Presencial</span>
                    </div>

                  </div>

                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ecologico}
                  width={600}
                  height={400}
                  alt="Experience 1"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Tour Ecologico
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Explora la belleza natural de Barranquilla con un recorrido guiado por sus parques, reservas y espacios verdes.
                  </p>

                  <div className="flex justify-between items-center mt-4">

                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                      onClick={() => window.open('https://www.turismocity.com.co/promociones_aereas/p-10_paisajes_naturales_de_colombia_que_necesitas_conocer-4661.html/', '_blank')}
                    >
                      Saber más..
                    </button>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <CompassIcon className="mr-2 h-5 w-5" />
                      <span>Presencial</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>


          </div>
        </section>


      </main>

      <Footer />

    </div>
  )
}
