import { useRef } from "react";

const EventRegister = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = emailRef.current?.value;

    fetch(`api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log({ response });
      })
      .catch((e) => {
        console.error("Error subscribing to newsletter:", e);
      });
  };

  return (
    <div className="p-5 flex flex-col justify-center gap-4  items-center">
      <h2>Sign up to stay updated!</h2>

      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="Your Email"
          required
          className="p-3 border border-yellow-300 ring-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default EventRegister;
