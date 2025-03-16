import Link from "next/link";

const HeaderSection = () => {
  return (
    <header className=" flex justify-between items-center px-4 md:px10 py-3 header-transition z-50 w-full shadow-md">
      <div>
        <Link href="/" className="font-bold text-4xl">
          Grapich App
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="font-semibold text-xl capitalize">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-xl capitalize">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold text-xl capitalize">
              Service
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link
          href="#"
          className="bg-[#92c46a] px-8 py-2 font-bold hover:bg-black hover:text-white transition duration-200 ease-in-out"
        >
          Free Trial
        </Link>
      </div>
    </header>
  );
};

export default HeaderSection;
