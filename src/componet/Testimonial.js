import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div>
        <h2>Testimonial</h2>
        <div>
            <div>
                <div>
                    <Image src="/user.jpg" width={80} height={80} alt="profile" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
