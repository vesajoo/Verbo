import React from "react";

function Layout() {

    return (
        <div className="flex justify-center items-center">
            <header className="w-5/6 flex flex-row sm:justify-between p-5 border-x-2 border-b-2 border-purple-400 bg-gradient-to-r from-header-color via-purple-500 to-blue-400 rounded-b-lg">
                <a className="text-white text-5xl hover:text-purple-200" href="/">Verbo</a>
                <div className="w-1/3 flex justify-around text-white border-2">
                        <a href="/login" className="hover:text-purple-200 text-xl">Kirjaudu</a> 
                        <a href="/register" className="hover:text-purple-200 text-xl">Rekisteröidy</a> 
                </div>
                <div className="w-1/3 flex justify-around text-white border-2">
                    <a href="/create_sub">Luo uusi yhteisö</a>
                    <a href="/submit">Lisää uusi</a>
                </div>
            </header>
        </div>
    )
}
export default Layout