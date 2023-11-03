import React from "react";
import Link from "next/link";
import Image from "next/image";

const heroContent = {
  text: {
    subheading: "Bienvenido a la Comunidad Cristiana de la Villa",
    heading: "Sirviendo en el poder del Evangelio",
    description:
      "La Comunidad Cristiana de la Villa existe para ayudar a construir una gran ciudad para todas las personas a través de un movimiento del evangelio que trae conversión personal, formación comunitaria, justicia social y renovación cultural a la ciudad de Guanabacoa.",
  },
  images: {
    img1: "/images/hero-img-1-min.webp",
    img2: "/images/hero-img-2-min.webp",
    img3: "/images/hero-img-3-min.webp",
    img4: "/images/hero-img-4-min.webp",
    img5: "/images/hero-img-5-min.webp",
  },
};

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {heroContent.text.subheading}
              </span>
            )}
            {heroContent.text.heading && (
              <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-10">
                {heroContent.text.description}
              </p>
            )}

            <div className="flex space-x-3">
              <Link
                href="#_"
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#7c2d12] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Comenzar
              </Link>
              <Link
                href="#_"
                className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Conocer más
              </Link>
            </div>
          </div>
          <div className="lg-w6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="joefreycodes.com"
                    className="object-cover h-full w-full rounded-2xl"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="joefreycodes.com"
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                  <div className="bg-yellowLight rounded-2xl rounded-tr-[200px]"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="joefreycodes.com"
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                  {heroContent.images.img4 && (
                    <Image
                      src={heroContent.images.img4}
                      width={394}
                      height={394}
                      alt="joefreycodes.com"
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  )}
                </div>
              </div>
              <div className="w-5/12">
                {heroContent.images.img5 && (
                  <Image
                    src={heroContent.images.img5}
                    width={446}
                    height={495}
                    alt="joefreycodes.com"
                    className="object-cover h-full w-full rounded-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
