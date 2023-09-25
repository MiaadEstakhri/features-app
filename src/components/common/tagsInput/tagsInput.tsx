import React, { useState } from "react";

interface Flight {
  name: {
    en: string;
    fa: string;
  };
  id: string;
}

const FLIGHT_TUR: Flight[] = [
  { name: { en: "Free transfer", fa: "ترانسفر رایگان" }, id: "1" },
  { name: { en: "Free sim card", fa: "سیم کارت رایگان" }, id: "2" },
  { name: { en: "Travel insurance", fa: "بیمه مسافرتی" }, id: "3" },
  { name: { en: "Local guidance", fa: "راهنمایی محلی" }, id: "4" },
  { name: { en: "Farsi guide", fa: "راهنمایی فارسی" }, id: "5" },
];

const TagsInput: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddRemoveToArray = (
    id: string,
    name: { en: string; fa: string }
  ) => {
    tags.includes(name.fa)
      ? setTags(tags.filter((tag) => tag !== name.fa))
      : setTags([...tags, name.fa]);
  };

  const addTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value !== "") {
      event.preventDefault();
      const newAdd = [...tags, event.currentTarget.value];
      setTags(newAdd);
      event.currentTarget.value = "";
    }
  };

  const removeTag = (index: number) => {
    const remove = [...tags.filter((tag, i) => i !== index)];
    setTags(remove);
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={addTag}
        placeholder="Press enter to add tags"
      />
      {tags.map((tag, index) => (
        <div key={index}>
          {tag}
          <button onClick={() => removeTag(index)}>Remove</button>
        </div>
      ))}
      <ul className="col-12  d-flex flex-wrap justify-content-center justify-content-sm-between mt-4">
        {FLIGHT_TUR.map(({ id, name }) => (
          <li
            key={id}
            className={`card-Routes d-flex flex-column align-items-center justify-content-center bg-third-light cursor-pointer border px-1 my-1 mx-1 mx-sm-0 ${
              tags.includes(id) ? "border-click" : ""
            }`}
            onClick={() => handleAddRemoveToArray(id, name)}>
            <span className="w-100 text-center font-weight-lighter mb-1 text-nowrap ">
              {name.fa}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsInput;
