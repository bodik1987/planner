export default function App() {
  return (
    <main className="max-w-md mx-auto p-6 text-[#2A2A2A]">
      <>
        <h2 className="font-medium font-mazzardH tracking-widest">TODAY</h2>

        <div className="mt-2 flex items-baseline">
          <p className="text-4xl font-myFont text-[#233BAF]">25.10</p>

          <div className="font-medium font-mazzardH flex gap-4 text-sm ml-8">
            <div>M</div>
            <div>T</div>
            <div className="relative text-[#7A7890]">
              W
              <svg
                width="40.000000"
                height="40.000000"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <defs />
                <path
                  id="Форма 2"
                  d="M2.4 13.92C-1.99 26.67 0.3 28.99 3.92 32.85C7.54 36.72 8.15 36.1 13.64 39.04C19.13 41.98 28.2 37.65 32.32 32.85C36.43 28.06 36.51 30.15 39.56 19.71C42.61 9.28 28.89 -4.05 21.26 1.16C13.64 6.38 6.78 1.16 2.4 13.92Z"
                  fill="#DFDCFC"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
        </div>

        <h3 className="mt-8 font-medium font-mazzardH tracking-widest mb-2 border-b border-[#B2B2B2] pb-1 pl-1">
          PRIORITIES
        </h3>

        <p className="text-3xl font-myFont border-b border-[#DADCDB] pb-1 pl-1">
          1. <input className="text-[#233BAF] outline-none" type="text" />
        </p>
        <p className="text-3xl font-myFont border-b border-[#DADCDB] pb-1 pl-1">
          2. <span className="text-[#233BAF]">Вернуть книги</span>
        </p>
        <p className="text-3xl font-myFont border-b border-[#DADCDB] pb-1 pl-1">
          3. <span className="text-[#233BAF]"></span>
        </p>
      </>

      <div className="mt-8">
        <h3 className="font-medium font-mazzardH tracking-widest mb-2 border-b border-[#B2B2B2] pb-1 pl-1">
          TO DO
        </h3>

        <div className="text-3xl font-myFont border-b border-[#DADCDB] pb-2.5 pl-1.5">
          <div className="border border-[#B2B2B2] border-dashed w-6 h-6 rounded-full relative">
            <svg
              width="24.428467"
              height="17.018188"
              viewBox="0 0 24.4285 17.0182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-0 left-[2px]"
            >
              <defs />
              <path
                id="Форма 1"
                d="M1 7.31L8.73 15.69C9.22 16.22 10.11 16.07 10.45 15.43C12.73 11.09 16.65 7.31 16.65 7.31C16.65 7.31 19.31 4.47 23.42 1"
                stroke="#D48EA0"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="text-3xl font-myFont border-b border-[#DADCDB] pt-2.5 pb-2.5 pl-1.5">
          <div className="border border-[#B2B2B2] border-dashed w-6 h-6 rounded-full relative">
            <svg
              width="26.007812"
              height="21.224121"
              viewBox="0 0 26.0078 21.2241"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-1 left-1"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                d="M1 12.24L6.65 19.82C7.07 20.38 7.93 20.34 8.31 19.75C11.46 14.8 17.49 6.34 25 1"
                stroke="#D48EA0"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="text-3xl font-myFont border-b border-[#DADCDB] pt-2 pb-2 pl-1.5 flex items-center gap-4">
          <div className="border border-[#B2B2B2] border-dashed w-6 h-6 rounded-full relative"></div>
          <span>Купить</span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-medium font-mazzardH tracking-widest mb-2 border-b border-[#B2B2B2] pb-1 pl-1">
          NOTES
        </h3>

        <p className="text-3xl font-myFont pb-2.5 pl-1.5">
          <input
            className="text-[#233BAF] outline-none"
            type="text"
            defaultValue={`Что-то написано`}
          />
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-medium font-mazzardH tracking-widest border-b border-[#B2B2B2] pb-1 pl-1">
          PLAN
        </h3>
        {Array(2)
          .fill(undefined)
          .map((_, index) => (
            <Hour key={index} hour={index + 4} />
          ))}
        <Hour
          hour={6}
          node={
            <input
              className="ml-2 h-8 pl-4 text-3xl font-myFont text-[#233BAF] outline-none bg-[#DAEFF1] rounded-full"
              type="text"
              defaultValue={`Что-то написано`}
            />
          }
        />
        <Hour
          hour={7}
          node={
            <input
              className="ml-2 h-8 pl-4 text-3xl font-myFont text-[#233BAF] outline-none bg-[#E8F4D9] rounded-full"
              type="text"
              defaultValue={`Что-то написано`}
            />
          }
        />
        <Hour
          hour={8}
          node={
            <input
              className="ml-2 h-8 pl-4 text-3xl font-myFont text-[#233BAF] outline-none bg-[#E8E8E8] rounded-full"
              type="text"
              defaultValue={`Что-то написано`}
            />
          }
        />
      </div>
      {Array(15)
        .fill(undefined)
        .map((_, index) => (
          <Hour key={index} hour={index + 9} />
        ))}
    </main>
  );
}

function Hour({ hour, node }: { hour: number; node?: React.ReactNode }) {
  return (
    <div className="flex relative items-center">
      <div className="font-medium font-mazzardH text-sm border-r border-dashed border-[#DADCDB] w-10 h-10 flex justify-center items-center">
        {hour}
      </div>

      {node}

      <div className="absolute bottom-0 pl-10 flex justify-evenly border-b border-[#DADCDB] w-full">
        <div className="bg-[#B2B2B2] rounded-full w-[3px] h-[3px] translate-y-[2px]" />
        <div className="bg-[#B2B2B2] rounded-full w-[3px] h-[3px] translate-y-[2px]" />
        <div className="bg-[#B2B2B2] rounded-full w-[3px] h-[3px] translate-y-[2px]" />
        <div className="bg-[#B2B2B2] rounded-full w-[3px] h-[3px] translate-y-[2px]" />
        <div className="bg-[#B2B2B2] rounded-full w-[3px] h-[3px] translate-y-[2px]" />
      </div>
    </div>
  );
}
