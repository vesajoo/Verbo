import React from "react";

function Layout() {

    return (   <div>
        <div className="flex justify-center items-center">
            <header className="w-5/6 flex flex-row sm:justify-between p-5 border-x-2 border-b-2 border-purple-400 bg-gradient-to-r from-header-color via-purple-500 to-blue-400 rounded-b-lg">
                <a className="text-white text-5xl hover:text-purple-200" href="/">Verbo</a>
                <div className="w-1/3 flex justify-around text-white border-2 rounded">
                        <a href="/login" className="hover:text-purple-200 text-xl border-r-2 p-2">Kirjaudu</a> 
                        <a href="/register" className="hover:text-purple-200 text-xl p-2">Rekisteröidy</a> 
                </div>
            </header>
        </div>
        <div className="w-5/6 flex justify-end">
            <div className="flex justify-end border-x-2 border-b-2 w-fit rounded text-white bg-gray-600">
                <a href="/create_sub" className=" border-r-2 p-1 hover:bg-purple-600 cursor-pointer">Luo uusi yhteisö</a>
                <a href="/submit" className="p-1 hover:bg-purple-600 cursor-pointer">Lisää uusi</a>
            </div>
        </div>
        </div>
    )
}
export default Layout