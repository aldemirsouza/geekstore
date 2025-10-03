'use client'

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setMessage("Por favor, insira um e-mail válido.");
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage("");
    setIsError(false);

    setTimeout(() => {
      setLoading(false);
      setMessage(`E-mail ${email} inscrito com sucesso!`);
      setIsError(false);
      setEmail("");
    }, 1500);
  };

  return (
    <div
      className="
        max-w-[1055px] mx-auto 
        flex flex-col justify-center items-center text-center gap-4 pb-12
        px-4 sm:px-0"
    >
      <h2
        className="
          text-white
          text-[24px] font-bold leading-8 tracking-[0.07px]"
      >
        Fique por dentro das novidades
      </h2>

      <p
        className="
          text-white/80
          text-[16px] font-normal leading-6 tracking-[-0.312px]"
      >
        Receba primeiro as ofertas exclusivas, lançamentos e promoções especiais
      </p>

      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col items-center justify-center gap-3 mt-4 w-full sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          className="
            rounded-lg bg-white text-[#717182]
            w-full sm:w-[330px] h-[36px] px-3
            text-[14px] font-normal tracking-[-0.15px]
            placeholder:text-[#717182]
            outline-transparent
          "
        />
        <button
          type="submit"
          disabled={loading}
          className="
            flex justify-center items-center
            sm:w-[109px] h-[36px] px-6
            rounded-lg bg-[#F5AB00] text-[#09235C]
            text-[14px] font-medium leading-5 tracking-[-0.15px]
            transition-colors duration-300 hover:brightness-110
            cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Inscrever"}
        </button>
      </form>

      {message && (
        <p
          className={`
            mt-2 px-6 py-2 text-sm rounded-lg
            ${isError ? "text-red-500 bg-red-500/10" : "text-green-500 bg-green-500/10"}
          `}
        >
          {message}
        </p>
      )}
    </div>
  );
}
