import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummyData";

const Home = () => {
  const featuredEvents = getAllEvents();

  return <EventList items={featuredEvents} />;
};

export default Home;
