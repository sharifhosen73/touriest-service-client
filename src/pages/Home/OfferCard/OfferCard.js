import React from "react";
import OfferCardItem from "../OfferCardItem/OfferCardItem";

const OfferCard = () => {
  const offerData = [
    {
      id: 1,
      name: "Customized Experiences",
      img: "https://knowingcuba.com/theme/knowing-cuba/img/home/icon_tailored_travel.png",
      description:
        "We created Knowing Cuba for the traveler who seeks unique experiences. The traveler who wants to return home with unique stories, something different to show, an experience no one else has tried. Let us know the kind of Cuban experience you seek and we'll plan it for you!",
    },
    {
      id: 2,
      name: "Leaders in the market",
      img: "https://knowingcuba.com/theme/knowing-cuba/img/home/icon_leaders.png",
      description:
        "With over 20 years of experience receiving travelers from all over the world, our name is recognized all over Cuba. Whether you’re traveling alone, or with a group, our experienced team can help with every aspect of your trip, and will recommend the best options.",
    },
    {
      id: 3,
      name: "24/7 Support",
      img: "https://knowingcuba.com/theme/knowing-cuba/img/home/icon_support.png",
      description:
        "We know that when you are in a foreign country, things don’t always go as planned. Our local team in Havana is available to help with any emergency. Once you book a trip with us, you’ll have access to our 24/7 emergency number to make sure you travel worry-free.ns.",
    },
  ];

  return (
    <div className="my-8">
      <h2 className="text-4xl text-orange-400 text-center">
        What Do We Offer?
      </h2>
      <div className="grid grid-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offerData.map((data) => (
          <OfferCardItem key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
