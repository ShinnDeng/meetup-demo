// slash nothing, domain name

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.cremodels.com/wp-content/uploads/2020/02/IRR-Viewpoint-2020-1024x683.jpg",
    address: "Some addr 5, 1234 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.cremodels.com/wp-content/uploads/2020/02/IRR-Viewpoint-2020-1024x683.jpg",
    address: "Some addr 5, 1234 Some City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
