import { useRef } from "react";

const EventSearch = (props: any) => {
  const yearInputRef = useRef<any>(null);
  const monthInputRef = useRef<any>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <>
      <form
        className="p-5 flex justify-center gap-4  items-center"
        onSubmit={submitHandler}
      >
        <div className="">
          <label htmlFor="year"></label>
          <select
            ref={yearInputRef}
            id="year"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="month"></label>
          <select
            ref={monthInputRef}
            id="month"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
        >
          Find Events
        </button>
      </form>
    </>
  );
};

export default EventSearch;
