
import { useState } from "react";
import { Modal } from "./Modal";
import explora from "../assets/explora_aprende.jpeg";

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal  = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <header className="sticky top-0 bg-gray-900 text-white py-3 px-6 md:px-10 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={explora} alt="Logo" className="h-8 md:h-8" />
                    <a href="#" className="text-2xl font-bold">
                        Explora y aprende
                    </a>
                </div>

                <nav className="hidden md:flex space-x-6">
                    <a href="#mision" className="hover:text-gray-400">
                        Misión
                    </a>
                    <a href="#vision" className="hover:text-gray-400">
                        Visión
                    </a>
                    <a href="#servicios" className="hover:text-gray-400">
                        Servicios
                    </a>
                    <a href="#experiencias" className="hover:text-gray-400">
                        Experiencias
                    </a>
                </nav>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Reservar una visita
                    </button>
                </div>

            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    );
};
