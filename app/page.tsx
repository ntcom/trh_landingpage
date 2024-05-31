import "./styles/app.css";
export default function Home() {
  return (
    <main className="">
      <div className="bg-home relative">
        <div className="absolute transform translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2">
          <div>
            <h2 className="text-[#FFC800] text-3xl font-semibold text-center">
              Dịch vụ Hỗ trợ Nội bộ
            </h2>
            <p className="text-primary-dark text-xl text-center">
              Dịch vụ Hỗ trợ Nội bộ
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
