import { NextPage } from "next"
import Head from "next/head"
import Script from "next/script"
import OrderModule from "../components/order/OrderModule"
import OrderSection from "../components/order/OrderSection"
const order:NextPage = () => {

  return (
    <>
      <Head>
      <link rel="stylesheet" href="css/order.css" />
      </Head>

      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="svg-order"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width={909}
  height={909}
  viewBox="0 0 909 909"
>
  <defs>
    <linearGradient
      id="linear-gradient"
      x1="0.138"
      y1="0.675"
      x2="0.984"
      y2="0.088"
      gradientUnits="objectBoundingBox"
    >
      <stop offset={0} stopColor="#6edd40" />
      <stop offset={1} stopColor="#2e8809" />
    </linearGradient>
  </defs>
  <path
    id="Path_1"
    data-name="Path 1"
    d="M454.5,0C705.513,0,909,203.487,909,454.5S705.513,909,454.5,909,0,705.513,0,454.5,203.487,0,454.5,0Z"
    fill="url(#linear-gradient)"
  />
</svg>

<OrderSection />
<OrderModule />



    </>
  )
}

export default order