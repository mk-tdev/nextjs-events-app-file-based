import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/utils/api-util";
import Head from "next/head";

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
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find great events near you!" />
      </Head>
      {allEvents && <EventList items={allEvents} />}
    </div>
  );
};

export default Home;
