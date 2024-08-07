
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-4 md:px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="w-full md:w-1/3">
                    <h4 className="text-lg font-bold mb-4">Explora y Aprende</h4>
                    <p className="text-sm">&copy; 2024 Explora y Aprende. Todos los derechos reservados.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-sm hover:text-gray-300">Inicio</a></li>
                        <li><a href="#hero" className="text-sm hover:text-gray-300">Sobre Nosotros</a></li>
                        <li><a href="#services" className="text-sm hover:text-gray-300">Servicios</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h4 className="text-lg font-bold mb-4">Síguenos</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.404.595 24 1.325 24h11.494v-9.294H9.691v-3.62h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.92c-1.507 0-1.797.717-1.797 1.767v2.315h3.593l-.468 3.62h-3.125V24h6.116c.73 0 1.325-.596 1.325-1.324V1.325C24 .595 23.404 0 22.675 0z" /></svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.92 4.92 0 002.163-2.724 9.86 9.86 0 01-3.127 1.195 4.907 4.907 0 00-8.373 4.466 13.933 13.933 0 01-10.11-5.13 4.907 4.907 0 001.523 6.544 4.865 4.865 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.946 4.89a4.897 4.897 0 01-2.224.085 4.912 4.912 0 004.59 3.419 9.867 9.867 0 01-6.102 2.102c-.395 0-.787-.023-1.175-.069a13.952 13.952 0 007.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.21-.005-.423-.014-.635A9.935 9.935 0 0024 4.59z" /></svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.337-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163m0-2.163c-3.259 0-3.667.012-4.947.07-1.462.065-2.892.338-3.996 1.442-1.105 1.105-1.377 2.534-1.442 3.996-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.065 1.462.338 2.892 1.442 3.996 1.105 1.105 2.534 1.377 3.996 1.442 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.462-.065 2.892-.338 3.996-1.442 1.105-1.105 1.377-2.534 1.442-3.996.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.065-1.462-.338-2.892-1.442-3.996-1.105-1.105-2.534-1.377-3.996-1.442-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    )
}
