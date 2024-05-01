import EventList from "@/components/events/event-list";
import EventRegister from "@/components/events/event-register";

import { getFeaturedEvents } from "@/utils/api-util";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find great events near you!" />
      </Head>
      <EventRegister />

      {featuredEvents && <EventList items={featuredEvents} />}
      {!featuredEvents && (
        <p className="center">Loading or no events found!...</p>
      )}
    </>
  );
};

export default Home;
