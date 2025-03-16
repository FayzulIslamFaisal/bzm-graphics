import Image from "next/image";
import Link from "next/link";
import { TiLocation } from "react-icons/ti";
import { PiClockLight } from "react-icons/pi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaExternalLinkAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="mx-auto">
      {/* hero section area */}
      <section className="relative h-[65vh] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dnroxwdfm/video/upload/v1727176901/videos/nike-model_o7qdlk_c3ouvh.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 py-10">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold leading-tight md:leading-snug mb-4">
            Visual Contents for <br /> E-Commerce & Brands
          </h1>
          <p className="text-lg md:text-2xl pb-4 ">
            Best quality Image Editing, Video Editing & CG
          </p>
          <div className="pt-4 md:pt-8">
            <Link
              target=""
              className="group relative inline-flex w-fit items-center justify-center overflow-hidden py-4 pl-6 pr-12 font-semibold  transition-all duration-150 ease-in-out hover:pl-12  hover:bg-[#92C46A] bg-black text-white
      "
              href="#"
            >
              <span className="absolute bottom-0 left-0 h-full w-1 bg-brand transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <HiArrowNarrowRight />
              </span>
              <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                <HiArrowNarrowRight />
              </span>
              <span className="relative uppercase transition-colors duration-200 ease-in-out">
                Free Trial
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div className=" max-w-[100%] md:max-w-[550px] mx-auto text-center">
            <h2 className="text-2xl !leading-tight lg:text-4xl">
              From Startups to the World Largest Companies
            </h2>
          </div>
          <div className="pt-5 md:pt-7 text-center">
            <p className=" text-[18px]">
              We help Create enga5ing & high-performing visual content for
              eCommerce and Brands.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center pt-10">
            <div className="bg-gray-300 h-full hover:bg-gray-400 transition-all px-2 duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/hudsons-bay.webp"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
            <div className="g-gray-300  h-fullhover:bg-gray-400 transition-all  px-2duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/saks-fifth-avenue.webp"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-full hover:bg-gray-400 transition-all px-2 duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/lord-taylor.webp"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-full hover:bg-gray-400 transition-all px-2 duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/jr-dunn.webp"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-full hover:bg-gray-400 transition-all px-2 duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/gindi-photography.webp"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-full hover:bg-gray-400 transition-all px-2 duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/thredup.webp"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-full hover:bg-gray-400 transition-all px-2 duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/home-outfitters-removebg-preview.png"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
            <div className="bg-gray-300 h-full hover:bg-gray-400 transition-all px-2 duration-150 linear py-2 ">
              <div className=" h-[180px] flex items-center justify-center">
                <Image
                  src="/images/a-plus-creative-removebg-preview.png"
                  alt="image"
                  width={300}
                  height={150}
                  className="object-scale-down max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E9F3E1] pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl leading-tight lg:text-4xl mb-7">
              Where Would You Like To Start?
            </h2>
            <p className="text-sm !leading-6  md:text-lg lg:!leading-7 ">
              At bZm Graphics we always put our customers first. We smile when
              You smile
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-center pt-8">
            <div className="shadow-md hover:shadow-xl transition duration-150 linear">
              <div className="bg-white px-8 py-6 rounded-lg text-center">
                <div className="flex justify-center mb-4 ">
                  <Image
                    src="/images/Photo-Editing.jpg"
                    alt=""
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm !leading-6 md:text-lg lg:!leading-7 font-semibold mb-2 md:mb-4 transition duration-150 linear hover:text-[#8CBD65] ">
                  Photo Editing
                </h3>
                <p className="text-sm !leading-6 md:text-lg lg:!leading-7">
                  Combination of AI & Highly skilled photo editors we offer best
                  experience for your image editing with Highest Quality.
                </p>
              </div>
            </div>
            <div className="shadow-md hover:shadow-xl transition duration-150 linear">
              <div className="bg-white px-8 py-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/video-editing.jpg"
                    alt=""
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm !leading-6 md:text-lg lg:!leading-7 font-semibold mb-2 md:mb-4 transition duration-150 linear hover:text-[#8CBD65]">
                  VIdeo Editing
                </h3>
                <p className="text-sm !leading-6 md:text-lg lg:!leading-7">
                  Combination of AI & Highly skilled photo editors we offer best
                  experience for your image editing with Highest Quality.
                </p>
              </div>
            </div>
            <div className="shadow-md hover:shadow-xl transition duration-150 linear">
              <div className="bg-white px-8 py-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/3d.jpg"
                    alt="image"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm !leading-6 md:text-lg lg:!leading-7 font-semibold mb-2 md:mb-4 transition duration-150 linear hover:text-[#8CBD65]">
                  3D and CGI
                </h3>
                <p className="text-sm !leading-6 md:text-lg lg:!leading-7">
                  Combination of AI & Highly skilled photo editors we offer best
                  experience for your image editing with Highest Quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div>
            <p className="text-center text-[16px] font-bold uppercase tracking-wide xl:text-xl 2xl:text-xl">
              WELCOME TO THE
              <span className="text-brand"> BZM GRAPHICS</span>
            </p>
            <div className=" max-w-[100%] lg:max-w-[600px] mx-auto">
              <h2 className="text-center text-4xl !leading-tight lg:text-6xl">
                eCommerce Content <span className="text-brand">Retouching</span>
              </h2>
            </div>
            <p className="pt-4 md:pt-6 text-center text-[18px]">
              Trustworthy name to E-commerce, Brands and Photo Studios since
              2015.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 pt-[30px] md:pt-[40px] items-center">
            <div className="flex justify-center flex-col items-center">
              <h3 className="text-2xl font-medium uppercase lg:text-3xl xl:pb-2">
                SNAPSHOTS
              </h3>
              <Link
                href="#"
                className=" transition hover:font-semibold flex items-center gap-2"
              >
                <span className="border-brand">READ ABOUT US</span>
                <span className=" text-brand">
                  <FaExternalLinkAlt />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10 ">
              <div>
                <h3 className="text-3xl font-medium lg:text-4xl mb-2  text-center md:text-left">
                  12+
                </h3>
                <hr className="text-gray-200 pb-2" />
                <p className="text-center md:text-left text-xs uppercase tracking-wide text-gray-500 sm:text-xs xl:text-sm 2xl:text-sm">
                  Brands
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-medium lg:text-4xl mb-2  text-center md:text-left">
                  250+
                </h3>
                <hr className="text-gray-200 pb-2" />
                <p className="text-center md:text-left text-xs uppercase tracking-wide text-gray-500 sm:text-xs xl:text-sm 2xl:text-sm">
                  Permanent Employees
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-medium lg:text-4xl mb-2  text-center md:text-left">
                  7500
                </h3>
                <hr className="text-gray-200 pb-2" />
                <p className="text-center md:text-left text-xs uppercase tracking-wide text-gray-500 sm:text-xs xl:text-sm 2xl:text-sm">
                  SFT Production Space
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-medium lg:text-4xl mb-2  text-center md:text-left">
                  7M+
                </h3>
                <hr className="text-gray-200 pb-2" />
                <p className="text-center md:text-left text-xs uppercase tracking-wide text-gray-500 sm:text-xs xl:text-sm 2xl:text-sm">
                  Delivered Photos Per Year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7EC] pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[672px] mx-auto">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/francois-thibault_khuwra.webp"
                alt="image"
                width={120}
                height={120}
                className="rounded-full border-3 border-gray-500 shadow-lg"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <Image
                  src="/images/quotation-marks-start_q_left.webp"
                  alt="image"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-center text-base font-medium text-gray-800 xl:text-lg 2xl:text-xl">
                bZm Graphics has been a very good help to speed up the day to
                day process at our Studio. Very dedicated and always ready to
                take challenges.
              </p>
              <div>
                <Image
                  src="/images/quotation-marks-end_y2om_right.webp"
                  alt="image"
                  width={80}
                  height={80}
                  className=""
                />
              </div>
            </div>
            <div className="pt-3 text-center">
              <p className="text-base font-bold sm:text-base xl:text-2xl 2xl:text-2xl">
                François Thibault
              </p>
              <p className="text-xs text-gray-500 sm:text-xs xl:text-xl 2xl:text-xl">
                Creative Director
              </p>
            </div>
            <div className="pt-8 flex justify-center">
              <Image
                src="/images/hudsons-bay.webp"
                alt="image"
                className="object-scale-down"
                width={240}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fff] pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="pb-2 md:pb-6">
                <span className="border-b border-gray-100 pb-2 text-xl font-semibold uppercase text-brand">
                  Image Editing Services
                </span>
              </div>

              <h2 className="mx-auto max-w-lg text-3xl !leading-tight lg:mx-0 lg:text-5xl mb-4 md:mb-6">
                Let The Photo Represent the Product
              </h2>
              <p className="pb-2 max-w-[100%] md:max-w-[645px]">
                A perfectly shot product photo can bring more attention and sell
                more. However, even a perfect shoot also needs some adjustment.
                Thats where bZm Graphics comes in. We ensure you have a best
                experience with your Image editing project.
              </p>
              <div className="pt-8 md:pt-4">
                <Link
                  target=""
                  className="group relative inline-flex w-fit items-center justify-center overflow-hidden py-4 pl-6 pr-12 font-semibold  transition-all duration-150 ease-in-out hover:pl-12  hover:bg-[#92C46A] bg-black text-white
      "
                  href="#"
                >
                  <span className="absolute bottom-0 left-0 h-full w-1 bg-brand transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <HiArrowNarrowRight />
                  </span>
                  <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                    <HiArrowNarrowRight />
                  </span>
                  <span className="relative uppercase transition-colors duration-200 ease-in-out">
                    Free Trial
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <Image
                  src="/images/image-editing-services-pmo8jo.webp"
                  alt="image"
                  className="object-scale-down"
                  width={560}
                  height={460}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFEFEF] pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex justify-center">
              <div className="relative w-full h-[320px] md:h-[400px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/dnroxwdfm/video/upload/v1727176901/videos/nike-model_o7qdlk_c3ouvh.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div>
              <div className="pb-2 md:pb-6">
                <span className="border-b border-gray-100 pb-2 text-xl font-semibold uppercase text-brand">
                  Video Editing Services
                </span>
              </div>

              <h2 className="mx-auto max-w-lg text-3xl !leading-tight lg:mx-0 lg:text-5xl mb-4 md:mb-6">
                Make The Video <span className="text-brand">Ecommerce </span>
                Ready
              </h2>
              <p className="pb-2 max-w-[100%] md:max-w-[645px]">
                Videos are the real story teller. If placed at the perfect place
                a video can create a lasting impact on its viewers. Product
                videos are not exceptional.Our video editors are well skilled to
                make your video go loud and Speaks what you want it to.
              </p>
              <div className="pt-8 md:pt-4">
                <Link
                  target=""
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-fit ite4s-center justify-center overflow-hidden py-4 pl-12 pr-12 font-semibold  transition-all duration-150 ease-in-out hover:pl-12  hover:bg-[#92C46A] bg-black text-white
      "
                  href="#"
                >
                  <span className="absolute bottom-0 left-0 h-full w-1 bg-brand transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <HiArrowNarrowRight />
                  </span>
                  <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                    <HiArrowNarrowRight />
                  </span>
                  <span className="relative uppercase transition-colors duration-200 ease-in-out">
                    Free Trial
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div className=" space-md flex flex-col items-center justify-center text-center pb-7 md:pb-12">
            <h2 className="text-3xl !leading-tight lg:text-5xl mb-6">
              <span className="text-brand">3D and CGI</span> <span>Model</span>
            </h2>
            <p className="text-sm !leading-6 text-primary md:text-lg lg:!leading-7 mx-auto max-w-2xl">
              We model, visualize and contextualize products to increase sales,
              reduce costs and drive customer engagement and conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex justify-center">
              <div className="relative w-full h-[320px] md:h-[400px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/dnroxwdfm/video/upload/v1727176898/videos/headphone_1080p_xmdwio.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[320px] md:h-[400px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/dnroxwdfm/video/upload/v1727176897/videos/3d_video_1080p_p6yiuw.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px] bg-[url('/images/bzm-office_ibfboe_pxa6vs.webp')] bg-no-repeat bg-fixed bg-cover h-full w-full px-[15px] md:px-[30px] lg-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-10 items-center">
          <div className=" rounded bg-white p-5 shadow-md lg:p-10">
            <Image
              alt="logo"
              src="/images/bzm-round-logo_xztryg.webp"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="pt-4 pb-4">
              <p>BZM Graphics Ltd</p>
              <h2 className="text-2xl font-bold">30 Minute Meeting</h2>
            </div>
            <div className="pb-4">
              <p className="text-sm pb-3 !leading-6 text-primary md:text-lg lg:!leading-7 flex items-center gap-2.5">
                <PiClockLight className="text-2xl" />
                30 min
              </p>
              <p className="text-sm !leading-6 text-primary md:text-lg lg:!leading-7 flex gap-2.5">
                <span>
                  <BsFillCameraVideoFill />
                </span>
                Web conferencing details provided upon confirmation.
              </p>
            </div>
            <div>
              <button className="rounded bg-brand px-5 py-3 font-bold text-white transition hover:bg-[#80b255] pointer">
                Book a Meeting
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <TiLocation className="text-brand text-2xl" />
            </div>
            <div>
              <p className="mb-4 font-semibold text-white">Dhaka, BD</p>
              <p className="text-white">
                Mahfuza Tower, 36/37 Probal Housing Ring Road, Dhaka - 1207
              </p>
              <p className="text-white ">
                Phone: <span>+88 02 55020348</span>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <TiLocation className="text-brand text-2xl" />
            </div>
            <div>
              <p className="mb-4 font-semibold text-white">Dubai, UAE</p>
              <p className="text-white">
                The Burjuman، Business Tower - Sheikh Zayed Street, UAE.
              </p>
              <p className="text-white ">
                Phone: <span>+971 58 571 8686</span>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <TiLocation className="text-brand text-2xl" />
            </div>
            <div>
              <p className="mb-4 font-semibold text-white">Texas, USA</p>
              <p className="text-white">
                5900 Balcones Drive, Suite 100, Austin, TX 78731, Texas USA.
              </p>
              <p className="text-white ">
                Phone: <span>+1 737 307 3852</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffedd63d] pt-[50px] md:pt-[80px] pb-[50px] md:pb-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex justify-center">
              <div className=" h-full md:h-[350px]">
                <Image
                  src="/images/join-us.webp"
                  alt="image"
                  className="object-scale-down max-w-full h-full"
                  width={500}
                  height={200}
                />
              </div>
            </div>
            <div>
              <div className="pb-2 md:pb-6">
                <small className=" font-bold text-primary block">
                  LETS START
                </small>
                <span className="text-2xl font-bold text-brand md:text-3xl text-brand">
                  A Partnership
                </span>
              </div>

              <p className="text-sm !leading-6 text-primary md:text-lg lg:!leading-7 pb-3 md:pb-4">
                Get more sales on Amazon, Etsy, Shopify, ebay, etc. marketplaces
                using our Image editing & video editing services.
              </p>
              <p className="text-sm !leading-6 text-primary md:text-lg lg:!leading-7 pb-4 md:pb-6">
                Just upload the Photos or Videos and relax till we send you the
                very best result for marketplace listing. Our Photo editors and
                Video Editors will make you contents eye catching and engaging.
              </p>
              <div className="pt-8 md:pt-4">
                <Link
                  target=""
                  className="group relative inline-flex w-fit items-center justify-center overflow-hidden py-4 pl-12 pr-12 font-semibold  transition-all duration-150 ease-in-out hover:pl-12  hover:bg-[#92C46A] bg-black text-white
      "
                  href="#"
                >
                  <span className="absolute bottom-0 left-0 h-full w-1 bg-brand transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <HiArrowNarrowRight />
                  </span>
                  <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                    <HiArrowNarrowRight />
                  </span>
                  <span className="relative uppercase transition-colors duration-200 ease-in-out">
                    Join Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#000] pt-[50px] md:pt-[80px]">
        <section className="pt-[10px] md:pt-[40px] ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-4 pb-[30px] md:pb-[40px]">
              <div className="flex flex-col items-center">
                <div className="pb-3">
                  <Image
                    src="/images/bzm-round-logo_xztryg.webp"
                    alt="iamge"
                    width={200}
                    height={70}
                    className="max-w-full max-h-full"
                  />
                </div>
                <div>
                  <p className="text-sm md:text-lg lg:!leading-7 !lg:text-base text-nowrap !text-sm text-gray-400">
                    <span>hello@bzmgraphics.com</span>
                  </p>
                  <p className="text-sm md:text-lg lg:!leading-7 !lg:text-base !text-sm text-gray-400">
                    <span>+88 02 55020348</span>
                  </p>
                  <ul className="flex items-center justify-between pt-3">
                    <li>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-400 hover:text-brand text-[24px] transition-colors duration-300"
                      >
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-400 hover:text-brand text-[24px] transition-colors duration-300"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-400 hover:text-brand text-[24px] transition-colors duration-300"
                      >
                        <FaXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-gray-400 hover:text-brand text-[24px] transition-colors duration-300"
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="mb-3 font-bold uppercase tracking-widest text-gray-100 lg:mb-6">
                  COMPANY
                </h2>
                <ul className="list-none">
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_blank" href="#">
                      Career
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      Affiliate Program
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="mb-3 font-bold uppercase tracking-widest text-gray-100 lg:mb-6">
                  Legal
                </h2>
                <ul className="list-none">
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      Terms and Condition
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_blank" href="#">
                      Cookie Policy
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="mb-3 font-bold uppercase tracking-widest text-gray-100 lg:mb-6">
                  Resources
                </h2>
                <ul className="list-none">
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      Maskbg.ai
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      E-Com.photos
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_blank" href="#">
                      Shootcount.com
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <a target="_self" href="#">
                      We Accept
                    </a>
                  </li>
                  <li className="text-[14px] md:text-lg md:!leading-7 !lg:text-base mb-3 !text-sm text-gray-400 hover:text-brand">
                    <Image
                      src="/images/payment-gateway_wm02l8.webp"
                      alt="iamge"
                      width={106}
                      height={30}
                    />
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/images/trust-pilot_m6wnjn.svg"
                    alt="iamge"
                    width={200}
                    height={120}
                  />
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div>
                    <Image
                      src="/images/basis-logo_hemb1s.svg"
                      alt="iamge"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/dcci-logo_zvkjqy.webp"
                      alt="iamge"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/images/iso-logo-bnw-200_wt232s.webp"
                    alt="iamge"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-4">
            <p className="border-t border-gray-800 py-8 text-center text-sm text-gray-400 ">
              bZm Graphics All rights reserved. 2016 - 2024 © ISO - 27001
              Certified
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}
