import EventItem from "@/components/events/event-item";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "@/utils/api-util";

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
  if (!eventItem) {
    return <div className="center">Loading...</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-2 ">
      <EventItem item={eventItem} />
    </div>
  );
};

export default EventDetailsPage;
