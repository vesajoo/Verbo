import React from "react";
import CheckLoginStatus from "./CheckLoginStatus";
import GetUser from "./GetUser";

function Layout() {
    return (
        <div className="flex justify-center items-center h-full">
            <header className="w-5/6 h-10000 flex flex-row sm:justify-around p-5 border-x-2 border-b-2 border-purple-400 bg-gradient-to-r from-header-color via-purple-500 to-blue-400 rounded-b-lg">
                <h1 className="text-white text-5xl hover:text-purple-300" href="/">Test</h1>
                <div>
                    {CheckLoginStatus() ? <p className="text-white text-xl">{console.log(GetUser())}</p> : <div className="text-white"> <a href="/login" className="hover:text-purple-200 text-xl">Login</a> <a href="/register" className="hover:text-purple-200 text-xl">Register</a> </div>}
                </div>
            </header>
        </div>
    )
}
export default Layout