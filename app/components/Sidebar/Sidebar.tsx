import Image from "next/image";
import search from "@/assets/svgs/search.svg";
import chevronRight from "@/assets/svgs/chevron-right.svg";
import docs from "@/assets/svgs/docs.svg";

export default function Sidebar({ sideBar, setSideBar }: any) {
  return (
    <div>
      <div
        onClick={() => {
          setSideBar(false);
        }}
        id="cursor-bg"
        className={`absolute top-0 left-0 right-0 bottom-0 h-full bg-[rgba(33,131,146,0.5)] flex justify-end ${
          sideBar ? "z-[997] opacity-100" : "z-[-1] opacity-0"
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 z-[998] ${
          sideBar ? "translate-x-0" : "translate-x-full"
        } w-[310px] h-full bg-[#fff] p-[26px_30px_60px] overflow-y-auto transition-all duration-500`}
      >
        <div>
          <p className="text-2xl text-[#4c4c4c] font-bold mb-[14px]">
            My account
          </p>
          <ul>
            <li>
              <a
                href="/services"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={chevronRight} height={10} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  My tickets
                </p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={chevronRight} height={10} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  New tickets
                </p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={chevronRight} height={10} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  Knowledge tickets
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-[60px]">
          <p className="text-2xl text-[#4c4c4c] font-bold mb-[14px]">
            Popular FAQs
          </p>
          <ul>
            <li>
              <a
                href="/"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={docs} height={16} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  Lorem ipsum dolor sit
                </p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={docs} height={16} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  Lorem ipsum
                </p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={docs} height={16} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  Fusce rutrum dolor
                </p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={docs} height={16} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  Incididunt ut labore
                </p>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center gap-[10px] py-[9px] border-y-[1px] border-solid border-[rgba(76,76,76,0.1)]"
              >
                <Image src={docs} height={16} alt="" />
                <p className="text-base text-[#4c4c4c] hover:text-[#0755d1]">
                  Lorem ipsum sit amet
                </p>
              </a>
            </li>
          </ul>

          <div className="mt-[60px]">
            <p className="text-2xl text-[#4c4c4c] font-bold mb-6">
              Search FAQs
            </p>
            <form action="" className="flex items-center">
              <input
                type="text"
                className="w-[190px] h-[60px] p-[6px_12px_6px_20px] border-[1px] border-solid border-[#4c4c4c1a] rounded-[5px_0_0_5px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] outline-none text-xs text-[#808080] font-medium"
                placeholder="SEARCH"
              />
              <button className="shrink-0 w-[60px] h-[60px] bg-[#d5550f] p-3 rounded-[0_5px_5px_0] flex justify-center items-center">
                <Image src={search} height={24} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
