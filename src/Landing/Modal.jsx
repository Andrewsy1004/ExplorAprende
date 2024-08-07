
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-hot-toast";

export const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email, !telefono) {
            toast.error('Por favor, rellena todos los campos');
            return;
        }

        if (telefono < 0 || telefono.length < 10) {
            toast.error('Por favor, introduce un telefono valido');
            return;
        }

        toast.success('Nos contactaremos contigo pronto!!');
         
        
        

        onClose();
    };;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-3 text-gray-500 hover:text-red-600"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <h2 className="text-xl font-bold mb-3 text-center text-black">
                    Reservar una visita
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-1">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="telefono" className="block text-gray-700 mb-1">
                            Telefono
                        </label>
                        <input
                            type="number"
                            id="telefono"
                            value={telefono}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-1">
                            Correo
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                        />
                    </div>


                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Enviar
                    </button>

                </form>
            </div>
        </div>
    )
}
