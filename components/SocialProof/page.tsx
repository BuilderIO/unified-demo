/**
 * This code was generated by Builder.io.
 */
import * as React from "react";
import Image from 'next/image';

interface PartnerLogoProps {
  src: string;
  alt: string;
  aspectRatio: string;
  width: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({
  src,
  alt,
  aspectRatio,
  width,
}) => (
  <Image
    loading="lazy"
    src={src}
    alt={alt}
    className={`shrink-0 max-w-full aspect-[${aspectRatio}] w-[${width}]`}
  />
);

const partnerLogos: PartnerLogoProps[] = [
  // {
  //   src: "https://example.com/logo1.png",
  //   alt: "Partner logo 1",
  //   aspectRatio: "3.57",
  //   width: "170px",
  // },
];

function SocialProof() {
  return (
    <section className="flex flex-col px-8 max-md:px-5">
      <p className="text-base font-medium leading-6 text-center text-neutral-400 max-md:max-w-full">
        Join our growing list of partners
      </p>
      <div className="flex flex-wrap gap-5 justify-center content-start px-2 mt-8 w-full max-md:max-w-full">
        {partnerLogos.map((logo, index) => (
          <PartnerLogo key={index} {...logo} />
        ))}
        <div className="flex gap-3 py-0.5">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center p-1 rounded-full border-white border-solid border-[3px]">
              <div className="flex flex-col justify-center rounded-full border-white border-solid border-[3px]">
                <div className="shrink-0 h-9 rounded-full border-white border-solid border-[3px]" />
              </div>
            </div>
          </div>
          <Image
            loading="lazy"
            src="https://example.com/logo4.png"
            alt="Partner logo 4"
            className="shrink-0 my-auto max-w-full aspect-[4] fill-white w-[111px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SocialProof;