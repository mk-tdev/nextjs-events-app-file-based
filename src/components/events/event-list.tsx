import EventItem from "./event-item";

const EventList = (props: any) => {
  const { items } = props;

  return (
    <ul className="grid gap-4 md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-4">
      {items.map((item: any) => {
        return <EventItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default EventList;
