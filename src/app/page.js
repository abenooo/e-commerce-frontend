// "use client";
// import Carousel from "@/componet/Carousel";
// import Product from "@/componet/Product";
// import Testimonial from "@/componet/Testimonial";
// import Banner from "@/componet/Banner";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import React from "react";

// export default function Home() {
//   const BannerData = {
//     discount: "30% OFF",
//     title: "Fine Smile",
//     date: "10 Jan to 28 Jan",
//     image: "/asset/headphone.png",
//     title2: "Air Solo Bass",
//     title3: "Winter Sale",
//     title4:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   };
//   React.useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//       offset: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return (
    
//     <main>
//       {/* <Carousel /> */}

//       <Product />
//       {/* <Testimonial/> */}
//       <Banner data={BannerData} />
//     </main>
//   );
// }
"use client";
import Script from 'next/script'; // Correctly import Script from 'next/script'
import Carousel from "@/componet/Carousel";
import Product from "@/componet/Product";
import Testimonial from "@/componet/Testimonial";
import Banner from "@/componet/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function Home() {
  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: "/asset/headphone.png",
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
        type="module"
      />
      <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="beforeInteractive"
        nomodule
      />
      <main>
        <Carousel />
        <Product />
        {/* <Testimonial/> */}
        <Banner data={BannerData} />
      </main>
    </>
  );
}
