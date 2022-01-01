import { lazy, useState, useEffect } from "react";
import { getPricing } from "constant/apiUrl";
import { useDispatch, useSelector } from "react-redux";
import dataActionCreator from "Redux/Action Creators/dataActionCreators";
import dataActions from "Redux/Actions/dataAction";
import { fallback } from "constant/navList";
import "./Package.css";

const Header = lazy(() => import("component/Common/Header/Header"));
const Pricing = lazy(() => import("component/Package/Pricing"));
const Footer = lazy(() => import("component/Common/Footer/Footer"));

export default function Package() {
  let [pricing, setPricing] = useState([]);
  let data = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dataActionCreator.getAdminData(
      dispatch,
      getPricing,
      dataActions.setPricing
    );
  }, [dispatch]);

  useEffect(() => {
    if (data.pricing !== undefined) {
      setPricing(data.pricing.data);
    }
  }, [data]);

  return (
    <>
      <Header />
      {pricing.length ? <Pricing pricing={pricing} /> : <>{fallback}</>}
      <Footer />
    </>
  );
}
