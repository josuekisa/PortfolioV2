import React from "react";

const Contact = () => {
  const data = [
    {
      icon: "📧",
      label: "email",
      value: "josue.kisa31@gmail.com",
    },
    {
      icon: "📱",
      label: "Téléphone",
      value: "0769387417",
    },
    {
      icon: "💼",
      label: "Linkedin",
      value: "https://www.linkedin.com/in/josue-kisa1/",
    },
    {
      icon: "⚡️",
      label: "Réponse rapide",
      value: "Sous 24h en moyenne",
    },
  ];
  return (
    <section
      id="contact"
      className="min-h-screen w-full gap-10 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4b2e81] flex flex-col items-center justify-center px-6 py-12"
    >
      {/* Titre principal */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold md:text-5xl mb-6 bg-gradient-to-r from-[#00ffff] to-[#7877c6] bg-clip-text text-transparent">
          Contact
        </h2>
        <hr className="w-1/2 border border-[#7877c6]" />
      </div>
      <div className="flex flex-col  md:flex-row gap-10 w-full max-w-6xl">
        {/*************------------ colone  gauche------------------*************/}
        <div className="flex flex-col flex-1 bg-[#1a202c]/90 rounded-2xl p-8 shadow-lg backdrop-blur-lg">
          <h1 className="text-2xl font-bold text-white mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-gray-300 text-sm  mb-8">
            Vous avez une idée géniale ? Un projet ambitieux ? Ou simplement
            besoin de conseils techniques ? Je suis là pour vous accompagner
            dans la réalisation de vos objectifs digitaux.
          </p>
          <div className=" flex flex-col space-y-6">
            {data.map((item) => (
              <div
                key={item.icon}
                className="flex items-stretch bg-[#2d3748] p-4 rounded-xl text-white overflow-hidden hover:bg-[#3b4860] transition-all"
              >
                <div className=" bg-gradient-to-br rounded-xl  from-orange-400 to-pink-500 p-3 ">
                  <span className=" ">{item.icon}</span>
                </div>
                <div className="flex flex-col  justify-center ml-4">
                  <span className="font-semibold">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*************------------ colone  droite------------------*************/}
        <form
          action="https://getform.io/f/brogvrra"
          className="flex flex-col flex-1 items-center bg-[#1a202c]/90 rounded-2xl p-8 shadow-lg relative overflow-hidden "
          method="POST"
        >
          <h1 className="text-2xl font-bold text-white mb-3">
            Démarrons ensemble
          </h1>

          <p className="text-gray-300">
            Remplir le formulaire, je vous contacterais par la suite
          </p>
          <div className=" flex flex-row gap-3 mt-5 w-full justify-between ">
            <div className="flex flex-col items-center ">
              <label className="text-gray-300 text-sm mb-1">Nom complet</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="bg-[#2d3748] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex flex-col items-center ">
              <label className="text-gray-300 text-sm mb-1">Email *</label>
              <input
                type="email"
                placeholder="Votre@email.com"
                className="bg-[#2d3748] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>
          <div className="flex flex-col  mt-5 w-full">
            <label className="text-gray-300 mb-2 text-center " htmlFor="">
              Type de service
            </label>
            <select
              className="bg-[#2d3748] text-white rounded-lg p-3 "
              name="services"
            >
              <option value="select service">Sélectionnez un service</option>
              <option value="site-vitrine">Site vitrine</option>
              <option value="application">Application web</option>
              <option value="api-backend">API backend</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div className="flex flex-col mt-6  w-full ">
            <label className="text-gray-300 text-sm mb-1 text-center ">
              Décrivez votre projet
            </label>
            <textarea
              rows="6"
              placeholder="Parlez-moi de votre projet, vos objectifs, votre budget approximatif..."
              className="bg-[#2d3748] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            ></textarea>
            <button className="mt-4 inline-block bg-gradient-to-r text-white from-pink-500 to-purple-500 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">
              {" "}
              Envoyer{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
