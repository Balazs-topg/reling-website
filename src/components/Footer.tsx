import React from "react";

function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 bg-slate-800 text-white">
      <div className="mx-auto max-w-5xl flex flex-wrap gap-4">
        <div className="flex-1">
          <h6 className="text-center bg-slate-600 p-1">kontakt info</h6>
          <table className="border-separate border-spacing-2 w-full">
            <tbody>
              <tr>
                <td>email:</td>
                <td>eifjife@feji.com</td>
              </tr>
              <tr>
                <td>telefon:</td>
                <td>073 123123123</td>
              </tr>
              <tr>
                <td>adress:</td>
                <td>weifjwiefgatan 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <h6 className="text-center bg-slate-600 p-1">öppentider</h6>
          <table className="border-separate border-spacing-2 w-full">
            <tbody>
              <tr>
                <td>email:</td>
                <td>eifjife@feji.com</td>
              </tr>
              <tr>
                <td>telefon:</td>
                <td>073 123123123</td>
              </tr>
              <tr>
                <td>adress:</td>
                <td>weifjwiefgatan 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1 basis-40">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
            atque libero dolorem deserunt molestias quidem maiores ratione.
            Cumque officia magni aut dolorum ad eos enim aspernatur, pariatur
            ipsa atque!
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl flex justify-center gap-4 mt-8">
        integritets policy - Cookie information och inställningar
      </div>
      <div className="mx-auto max-w-5xl flex justify-center gap-4 mt-8">
        Hemsida skapad av Balazs Hevesi
      </div>
    </footer>
  );
}

export default Footer;
