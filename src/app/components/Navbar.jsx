"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú de hamburguesa
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); // Estado para controlar la visibilidad del menú de notificaciones
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Estado para controlar la visibilidad del menú de perfil

  // Función para manejar la apertura y cierre del menú de hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar la apertura y cierre del menú de notificaciones
  const toggleNotificationsMenu = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  // Función para manejar la apertura y cierre del menú de perfil
  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-[#9f5095]/50 p-1 relative z-[1000]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Menú de hamburguesa */}
        <div
          className="text-white text-xl font-bold cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Logo en el centro */}
        <div className="text-white text-xl font-bold flex justify-center items-center">
          <a href="/">
            <img
              className="w-16"
              src="https://res.cloudinary.com/dcu06etml/image/upload/v1696118047/jaguarbox/mwkqpqgvzx8wdwrhwu6f.png"
              alt="Logo"
            />
          </a>
        </div>

        {/* Icono de notificaciones */}

        {/* Icono de perfil */}
        <div className="relative group">
          <img
            src="https://res.cloudinary.com/dcu06etml/image/upload/v1696118037/jaguarbox/mj2tqrfzuyhwnerfkdrc.jpg" // Reemplaza esto con la URL de tu imagen de perfil
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleProfileMenu}
          />
          {/* Menú de perfil */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                <li>
                  <a
                    href="/perfil"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Modificar Perfil
                  </a>
                </li>
                <li>
                  <a
                    href="/configuracion"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Configuración General
                  </a>
                </li>
                {/* Agrega más elementos de menú según tus necesidades */}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Menú de navegación */}
      {isOpen && (
        <ul className="flex flex-col mt-2 space-y-2">
          <li>
            <a href="/dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-200">
              About us
            </a>
          </li>
          <li>
            <a href="/faqs" className="text-white hover:text-gray-200">
              FAQs
            </a>
          </li>
          <li>
            <a href="/investor" className="text-white hover:text-gray-200">
              Investor
            </a>
          </li>
          <li>
            <a href="/blog" className="text-white hover:text-gray-200">
              Blog
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
