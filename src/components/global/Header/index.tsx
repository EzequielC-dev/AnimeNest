import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSearch, setIsSearch] = useState<Boolean>(false);
  const [isMenu, setIsMenu] = useState<Boolean>(false);

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header className="w-full py-2 px-2 bg-[#3C3C3C77] flex items-center select-none">
      <div className="cursor-pointer pr-2 z-50">
        <Link to="/">
          <img src="/icon.png" alt="Icon" className="w-24" />
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-end flex-1">
        <div className="relative">
          <div className="flex">
            <button
              onClick={toggleSearch}
              className={`z-20 md:hidden ${
                isSearch && "absolute right-0 top-0.5"
              }`}
            >
              <img
                src="../../src/assets/header/search.svg"
                alt="Search"
                className={`size-4 mr-2 cursor-pointer ${isSearch && "invert"}`}
              />
            </button>
            {isSearch && (
              <div className="flex z-10">
                <input
                  type="text"
                  className="z-10 w-full pl-2 pr-7 py-0 bg-[#D9D0DE] outline-none rounded-full text-sm"
                ></input>
              </div>
            )}
          </div>
        </div>
        <Link to="/login">
          <img
            src="../../src/assets/header/avatar.svg"
            alt="user"
            className="size-6 cursor-pointer md:hidden"
          />
        </Link>
        <button onClick={toggleMenu} className="flex z-50 md:hidden">
          <img
            src="../../src/assets/header/menu.svg"
            alt="menu"
            className="cursor-pointer"
          />
        </button>
        {isMenu === true ? (
          <nav
            className="
              fixed left-0 top-0
              bg-[#3C3C3C] h-screen w-screen z-40
              p-8"
          >
            <ul className="text-white mt-20">
              <li className="text-base font-light mb-4 transition-all">
                Navegação
              </li>
              <Link to="">
                <li className="hover:underline pl-2 text-lg font-semibold mb-4 hover:bg-[#0C1713] transition-all">
                  Catálogo
                </li>
              </Link>
              <Link to="">
                <li className="hover:underline text-lg font-semibold mt-2 pl-2 mb-4 hover:bg-[#0C1713] transition-all">
                  Lista
                </li>
              </Link>
              <Link to="">
                <li className="hover:underline text-lg font-semibold mt-2 pl-2 mb-4 hover:bg-[#0C1713] transition-all">
                  Salvos
                </li>
              </Link>
              <Link to="">
                <li className="hover:underline text-lg font-semibold mt-2 pl-2 mb-6 hover:bg-[#0C1713] transition-all">
                  Perfil
                </li>
              </Link>
              <li className="text-base font-light mb-4 transition-all">
                Extra
              </li>
              <Link to="">
                <li className="hover:underline text-xl font-semibold mt-2 pl-2 mb-4 bg-[#158528] transition-all">
                  Faça uma Doação 💸
                </li>
              </Link>
            </ul>
          </nav>
        ) : (
          <nav className="hidden md:flex items-center">
            <ul className="text-white flex gap-5">
              <Link to="">
                <li className="transition-all">Lista</li>
              </Link>
              <Link to="">
                <li className="transition-all">Lista</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
