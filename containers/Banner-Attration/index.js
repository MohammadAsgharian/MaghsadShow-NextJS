import React, { useEffect, useState } from "react";
import axios from "axios";
import CardLg from "../../components/Card/CarlLg";

const BannerAttration = () => {
  const [bannerAttraction, setbannerAttraction] = useState([]);
  useEffect(() => {
    const CONTAINER_URL = `${process.env.API_URL}place/getbannerattraction`;
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: CONTAINER_URL,
      });
      setbannerAttraction(response.data);
    };
    fetchData();
  }, []);
  const useBannerAttraction = bannerAttraction.map((attraction) => {
    console.log(attraction.placePhoto);
    return <CardLg imgUrl={attraction.placePhoto}></CardLg>;
  });

  return <>{bannerAttraction && useBannerAttraction}</>;
};

export default BannerAttration;
