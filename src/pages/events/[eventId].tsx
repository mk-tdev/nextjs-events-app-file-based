import EventItem from "@/components/events/event-item";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "@/utils/api-util";
import Head from "next/head";

export const getStaticProps = async (context: any) => {
  const eventId = context.params.eventId;
  const eventItem = await getEventById(eventId);

  if (!eventItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      eventItem,
      revalidate: 30,
    },
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();

  // we dont need all events to be generated all time
  // const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

const EventDetailsPage = ({ eventItem }: any) => {
  const pageHeadData = (
    <Head>
      <title>{eventItem.title}</title>
      <meta name="description" content={`${eventItem.description}`} />
    </Head>
  );
  if (!eventItem) {
    return (
      <>
        {pageHeadData}
        <div className="center">Loading...</div>;
      </>
    );
  }

  return (
    <>
      {pageHeadData}
      <div className="grid gap-4 grid-cols-2 grid-rows-2 ">
        <EventItem item={eventItem} />
      </div>
    </>
  );
};

export default EventDetailsPage;
