import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/events-search";
import { getAllEvents } from "@/utils/api-util";
import Head from "next/head";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const handleOnSearch = (year: any, month: any) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find great events near you!" />
      </Head>
      <EventSearch onSearch={handleOnSearch} />;
      {allEvents && <EventList items={allEvents} />}
    </div>
  );
};

export default Home;
