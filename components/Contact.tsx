import React, { useState, useEffect } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

function Contact() {
  const [email, setEmail] = useState("");
  const changeEmail = (e) => {
    if (
      (/^[0-9a-zA-Z@_-\w.]+$/.test(e.target.value) &&
        e.target.value.length <= 50) ||
      !e.target.value
    ) {
      setEmail(e.target.value);
    }
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute uppercase top-20 md:top-24  tracking-[20px] text-xl md:text-2xl text-[#424242]">
        Contact
      </h3>
      <div className="flex flex-col md:space-y-5 lg:mt-20 mg:mt-20 mt-8 md:h-3/4">
        <h4 className=" font-semibold text-xl md:text-2xl lg:text-2xl text-center">
          Envie d'en savoir plus, une interogation ?{" "}
          <span className="decoration-[#805231] decoration-4  underline ">
            contactez Moi !
          </span>
        </h4>
        <div className="space-y-1 md:space-y-4 pt-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-black animate-pulse" />
            <p className="md:text-lg">+33658997557</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7  text-black animate-pulse" />
            <p className="md:text-lg ">mustaphasaid.pr@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-black animate-pulse" />
            <p className="md:text-lg ">Paris, France</p>
          </div>

          <h5 className="font font-semibold text-xl text-center md:pt-2 ">
            ou, si vous preferez un formulaire
          </h5>
        </div>
        <form className="flex flex-col space-y lg:space-y-4 w-80 md:w-[450px] lg:w-[600px] mx-auto ">
          <label className="flex flex-start md:p-0 p-1">Email</label>

          <input
            className="outline-none bg-slate-300/40 rounded-md border-b p-4 pl-3 h-11 mb-2 "
            type="email"
            placeholder="mail"
            value={email}
            onChange={changeEmail}
          />
          <label className="flex flex-start md:p-0 p-1">Message</label>
          <textarea
            className="outline-none bg-slate-300/40 rounded-md border-b px-5 py-5 h-40 resize-none mb-4 "
            spellCheck="true"
            rows={6}
            name=""
            id=""
            placeholder="Que souhaitez vous dire ?"
          />
          <button className="bg-transparent text-black border-2 border-black text-md p-4 pr-6 pl-6 font-medium rounded-md mx-auto transition-colors duration-700 transform hover:bg-black hover:text-white focus:border-4 focus:border-black ">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
