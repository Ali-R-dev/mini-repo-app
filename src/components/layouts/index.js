import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen border-2 border-red-500 box-border flex flex-col">
      <header className="w-full h-20 border-2 border-green-500 flex justify-center items-center">
        <h1 className="text-3xl">Mini Repo</h1>
      </header>
      <div className="w-full h-full border-2 border-blue-500 flex flex-row">
        <aside className=" w-[20%] border-2 border-purple-500">
          <h1 className=" p-4 text-xl">Navigate</h1>
          <ul className="px-4 flex flex-col">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
          <h1 className="p-4 text-xl">Mini Projects</h1>
          <ul className="px-4 flex flex-col">
          <li><Link to="/todo">Todo</Link></li>
          <li><Link to="/">Project 1</Link></li>
          </ul>
        </aside>
        <main className="w-full h-full border-2 border-yellow-500">
          {children}
        </main>
      </div>
      <footer>Footer of my application</footer>
    </div>
  );
};

export default Layout;
