import React from "react";

export default function HexCoreLanding() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <nav className="bg-gray-950 text-white px-4 py-3 sticky top-0 z-50 border-b border-gray-800 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/hexcore-logo.png" alt="HexCore Logo" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold tracking-wide">HexCore</span>
          </div>
          <ul className="flex space-x-4 text-sm sm:text-base">
            <li><a href="#about" className="hover:text-blue-400">من نحن</a></li>
            <li><a href="#games" className="hover:text-blue-400">ألعابنا</a></li>
            <li><a href="#team" className="hover:text-blue-400">فريقنا</a></li>
            <li><a href="#tournaments" className="hover:text-blue-400">بطولاتنا</a></li>
            <li><a href="#news" className="hover:text-blue-400">الأخبار</a></li>
            <li><a href="#store" className="hover:text-blue-400">المتجر</a></li>
            <li><a href="#contact" className="hover:text-blue-400">تواصل</a></li>
          </ul>
        </div>
      </nav>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4">HexCore Esports</h1>
        <p className="text-lg text-gray-400">نحو القمة في عالم الرياضات الإلكترونية</p>
      </header>
    </div>
  );
}
