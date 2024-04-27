import useSWR from "swr";
import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/utils/api-util";
import { DBDATA_URL } from "@/configs/appConfigs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// client side handling is replace server side props

// export const getServerSideProps = async (context: any) => {
//   const { params } = context;
//   const [year, month] = params.allEvents;
//   const results = await getFilteredEvents({ year: +year, month: +month });

//   if (!results || results.length === 0) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       results,
//     },
//   };
// };

const AllFilteredEvents = () => {
  const [loadedEvents, setLoadedEvents] = useState([] as any[]);
  const router = useRouter();

  const [year, month] = (router.query.allEvents as string[]) || [];
  const { data, error, isLoading } = useSWR(DBDATA_URL + "events.json", (url) =>
    fetch(url).then((res) => res.json())
  );

  const filteredEvents = loadedEvents.filter((event: any) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === +year && eventDate.getMonth() === +month - 1
    );
  });

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(transformedData);
    }
  }, [data]);

  return (
    <div>
      <p>All filtered Events</p>

      {isLoading && <p className="center">Loading...</p>}

      {error && <p className="center">Error occurred while fetching events.</p>}

      {filteredEvents.length === 0 ? (
        <p className="center">No events found for the chosen filter.</p>
      ) : (
        <EventList items={filteredEvents} />
      )}
    </div>
  );
};

export default AllFilteredEvents;
