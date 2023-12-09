import React from "react";

function Footer() {
  return (
    <>
      <footer className="relative z-10 bg-slate-800 px-10 py-16 text-white">
        <div className="mx-auto flex max-w-7xl gap-12">
          <div>
            <h6 className="mb-2 font-serif text-xl font-medium">Kontak Info</h6>
            <table className="border-separate border-spacing-y-1">
              <tbody>
                <tr>
                  <td>Email: </td>
                  <td>epoxyrelining.com</td>
                </tr>
                <tr>
                  <td>Telefon: </td>
                  <td>073 123 45 67</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
