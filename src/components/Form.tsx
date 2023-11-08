import React, { useRef, FormEvent } from "react";
import axios from "axios";

function Form() {
  const ärendeRef = useRef<HTMLSelectElement>(null);
  const förnamnRef = useRef<HTMLInputElement>(null);
  const efternamnRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telefonnummerRef = useRef<HTMLInputElement>(null);
  const meddelandeRef = useRef<HTMLTextAreaElement>(null);
  const gdprRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    let formData;
    if (
      ärendeRef.current &&
      förnamnRef.current &&
      efternamnRef.current &&
      emailRef.current &&
      telefonnummerRef.current &&
      meddelandeRef.current &&
      gdprRef.current
    ) {
      formData = {
        ärende: ärendeRef.current.value,
        förnamn: förnamnRef.current.value,
        efternamn: efternamnRef.current.value,
        email: emailRef.current.value,
        telefonnummer: telefonnummerRef.current.value,
        meddelande: meddelandeRef.current.value,
        gdpr: gdprRef.current.checked,
      };
    }

    try {
      console.log(formData);
      const response = await axios.post(
        "https://your-api-endpoint.com/submit",
        formData,
      );
      console.log("Response:", response.data);
      // change the api call
      // handle success (maybe update the UI to show a success message)
    } catch (error) {
      console.error("Error submitting form:", error);
      // handle error (maybe update the UI to show an error message)
    }
  };

  const inputStyle =
    "bg-white py-1 px-4 font-medium rounded-md outline-slate-800 outline-0 focus:outline-1 outline outline-offset-1 mt-1";
  return (
    <div className="bg-zinc-200 py-12 px-6 overflow-hidden">
      <div className="relative max-w-2xl mx-auto font-serif text-[2rem] font-semibold mb-2">
        <div className="flex justify-between sm:flex-row flex-col">
          <h4>Kontakta oss</h4>
          <div className="relative right-0 font-extrabold text-rose-600">
            073 123 12 98
          </div>
        </div>
        <div className="relative right-0 text-lg text-left sm:text-right font-extrabold text-slate-800">
          email@wii.com
        </div>
      </div>

      <form
        className="max-w-2xl mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="ärende" className="px-2 font-medium">
            Välj ärende <span className="select-none">*</span>
          </label>
          <select id="ärende" className={inputStyle} ref={ärendeRef} required>
            <option value="okategoriserat">Okategoriserat ärende</option>
            <option value="rådgivning">Frågor och rådgivning</option>
            <option value="anbudsförfrågan">Anbudsförfrågan</option>
            <option value="jobbahososs">Jobba hos oss</option>
            <option value="övrigt">Övrigt</option>
          </select>
        </div>
        <div className="flex-wrap flex gap-2">
          <div className="grow shrink flex flex-col">
            <label htmlFor="förnamn" className="px-2 font-medium">
              Förnamn <span className="select-none">*</span>
            </label>
            <input
              type="text"
              className={inputStyle}
              placeholder="Ditt förnamn"
              name="förnamn"
              id="förnamn"
              ref={förnamnRef}
              required
            />
          </div>
          <div className="grow shrink flex flex-col">
            <label htmlFor="efternamn" className="px-2 font-medium">
              Efternamn
            </label>
            <input
              type="text"
              className={inputStyle}
              placeholder="Ditt efternamn"
              name="efternamn"
              id="efternamn"
              ref={efternamnRef}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="grow shrink flex flex-col">
            <label htmlFor="email" className="px-2 font-medium">
              E-post <span className="select-none">*</span>
            </label>
            <input
              type="email"
              className={inputStyle}
              placeholder="Din e-postadress"
              name="email"
              id="email"
              ref={emailRef}
              required
            />
          </div>
          <div className="grow shrink flex flex-col">
            <label htmlFor="telefonnummer" className="px-2 font-medium">
              Telefonnummer
            </label>
            <input
              type="tel"
              className={inputStyle}
              placeholder="Ditt telefonnummer"
              name="telefonnummer"
              id="telefonnummer"
              ref={telefonnummerRef}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="meddelande" className="px-2 font-medium">
            Meddelande <span className="select-none">*</span>
          </label>
          <textarea
            name="meddelande"
            id="meddelande"
            cols={30}
            rows={10}
            className={inputStyle}
            placeholder="Ditt meddelande"
            ref={meddelandeRef}
            required
          ></textarea>
        </div>
        <div className="flex gap-2 items-center">
          <input
            required
            type="checkbox"
            name="gdpr"
            id="gdpr"
            className="accent-slate-800 w-4 h-4 border-8 border-green-500"
            ref={gdprRef}
          />
          <label htmlFor="gdpr" className="text-sm">
            Jag godkänner att mina personuppgifter sparas i enlighet med GDPR.
          </label>
        </div>
        <button className="w-full bg-rose-500 py-2 font-bold text-white rounded-md">
          Skicka
        </button>
      </form>
    </div>
  );
}

export default Form;
