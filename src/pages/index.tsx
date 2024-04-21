import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "@/dummyData";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const handleOnSearch = (year: any, month: any) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={handleOnSearch} />;
      <EventList items={featuredEvents} />;
    </>
  );
};

export default Home;
