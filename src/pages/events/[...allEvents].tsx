import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummyData";
import { useRouter } from "next/router";

const AllFilteredEvents = () => {
  const router = useRouter();
  const filteredData = router.query.allEvents;

  console.log(filteredData);
  filteredData;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const [year, month] = filteredData as string[];
  const results = getFilteredEvents({ year: +year, month: +month });

  return (
    <div>
      <p>All filtered Events</p>

      {results.length === 0 ? (
        <p className="center">No events found for the chosen filter.</p>
      ) : (
        <EventList items={results} />
      )}
    </div>
  );
};

export default AllFilteredEvents;
