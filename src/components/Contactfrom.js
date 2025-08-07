import { useState } from "react";
const Contactform = () => {
  const [submittedData, setsubmittedData] = useState(null);

  const onSubmit = (event) => {
    // console.log(event);
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      contactno: formData.get("contactno"),
      message: formData.get("message"),
    };
    console.log("form submitted", data);
    setsubmittedData(data);

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="m-10 w-[85%] ">
        <div className="relative">
          <label
            htmlFor="name"
            className="absolute -top-4 left-4 text-sm p-1 bg-white text-gray-500"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="name border-2 border-black w-full p-2 mb-6 rounded-md"
            placeholder="Name"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-4 left-4 text-sm p-1 bg-white text-gray-500"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="email border-2 border-black w-full p-2 mb-6 rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="Contactno"
            className="absolute -top-4 left-4 text-sm p-1 bg-white text-gray-500"
          >
            Contactno
          </label>
          <input
            type="tel"
            name="contactno"
            className="contactno border-2 border-black w-full p-2 mb-6 rounded-md"
            placeholder="Contact no"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="Message"
            className="absolute -top-4 left-4 text-sm p-1 bg-white text-gray-500"
          >
            Message
          </label>
          <input
            type="text"
            name="message"
            className="textbox border-2 border-black w-full p-2  h-40 rounded-md"
            placeholder="Message"
          />
        </div>
        <div className="flex w-[85%] justify-center align-middle">
          <button
            type="submit"
            className="w-1/4 bg-slate-400 text-black justify-center flex ml-10 my-2 rounded-md text-xl p-1 shadow-2xl"
          >
            Submit
          </button>
        </div>
       {submittedData &&( <div>
          <p>name:{submittedData.name}</p>
          <p>email:{submittedData.email}</p>
          <p> contactno:{submittedData.contactno}</p>
          <p> message:{submittedData.message}</p>
        </div>)}
      </form>
    </div>
  );
};

export default Contactform;
