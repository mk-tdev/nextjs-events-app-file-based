import Link from "next/link";

const EventItem = (props: any) => {
  const { title, image, date, location, id } = props.item;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className=" shadow-lg p-3 cursor-pointer">
      <img src={`/${image}`} alt="title" />

      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className="shadow-lg p-3 bg-yellow-600 text-white">
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
