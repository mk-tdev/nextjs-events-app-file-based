import EventItem from "./event-item";

const EventList = (props: any) => {
  const { items } = props;

  return (
    <ul className="flex gap-3 ">
      {items.map((item: any) => {
        return <EventItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default EventList;
