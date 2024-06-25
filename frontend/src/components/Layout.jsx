import React from "react";

function Layout() {
    return (
        <div className="flex justify-center items-center h-full">
            <header className="w-5/6 flex flex-row sm:justify-between p-5 border-x-2 border-b-2 border-purple-400 bg-gradient-to-r from-header-color via-purple-500 to-blue-400 rounded-b-lg">
                <h1 className="text-white text-5xl hover:text-purple-200" href="/">Verbo</h1>
                <div className="w-1/2 flex justify-end text-white">
                        <a href="/login" className="hover:text-purple-200 text-xl">Login</a> 
                        <a href="/register" className="hover:text-purple-200 text-xl">Register</a> 
                </div>
                <div>
                    <a href="/create_sub">Luo uusi yhteisö</a>
                    <a href="/submit">Lisää uusi</a>
                </div>
            </header>
        </div>
    )
}
export default Layout