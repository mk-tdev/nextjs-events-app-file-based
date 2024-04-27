import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "@/utils/api-util";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
      revalidate: 100,
    },
  };
};

const Home = ({ featuredEvents }: { featuredEvents: any }) => {
  const router = useRouter();

  const handleOnSearch = (year: any, month: any) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={handleOnSearch} />;
      {featuredEvents && <EventList items={featuredEvents} />}
      {!featuredEvents && (
        <p className="center">Loading or no events found!...</p>
      )}
    </>
  );
};

export default Home;
