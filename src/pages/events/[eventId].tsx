import EventItem from "@/components/events/event-item";
import { getEventById } from "@/dummyData";
import { useRouter } from "next/router";

const EventDetailsPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return <div>No event found...</div>;
  }

  return <EventItem item={event} />;
};

export default EventDetailsPage;
