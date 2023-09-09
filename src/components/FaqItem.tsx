import React from "react";

interface faqItemType {
  fråga: string;
  svar: string;
}

function FaqItem({ fråga, svar }: faqItemType) {
  return (
    <div className="collapse collapse-plus bg-slate-700 rounded-none">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-xl font-medium peer-checked:bg-slate-800">
        {fråga}
      </div>
      <div className="collapse-content peer-checked:bg-slate-800">
        <p>{svar}</p>
      </div>
    </div>
  );
}

export default FaqItem;
