import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/utils/api-util";

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();

  if (!allEvents) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allEvents,
      revalidate: 60,
    },
  };
};

const Home = ({ allEvents }: any) => {
  return <div>{allEvents && <EventList items={allEvents} />}</div>;
};

export default Home;
