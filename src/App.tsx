import { useState } from "react";

type DayItem = {
  id: number;
  name: string;
  content?: string;
};

export default function App() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const daysOfWeek: DayItem[] = [
    { id: 1, name: "ПОНЕДЕЛЬНИК", content: "Контент понедельника..." },
    { id: 2, name: "ВТОРНИК", content: "Контент вторника..." },
    { id: 3, name: "СРЕДА", content: "Контент среды..." },
    { id: 4, name: "ЧЕТВЕРГ", content: "Контент четверга..." },
    { id: 5, name: "ПЯТНИЦА", content: "Контент пятницы..." },
    { id: 6, name: "СУББОТА", content: "Контент субботы..." },
    { id: 7, name: "ВОСКРЕСЕНЬЕ", content: "Контент воскресенья..." },
  ];

  const toggleDay = (id: number) => {
    setExpandedDay(expandedDay === id ? null : id);
  };

  const getDayHeight = (id: number): string => {
    if (expandedDay === null) {
      return "h-[calc(100%/7)]";
    }
    if (id === expandedDay) {
      return "h-1/2";
    }
    return `h-[calc(50%/${daysOfWeek.length - 1})]`;
  };

  return (
    <main className="h-dvh flex flex-col">
      {daysOfWeek.map((day) => (
        <div
          key={day.id}
          className={`${getDayHeight(
            day.id
          )} border-y border-[#B4B4B4] cursor-pointer`}
        >
          <div
            className={`${
              !expandedDay && "justify-center"
            } max-w-3xl w-full mx-auto h-full py-4 px-8 flex flex-col `}
          >
            <div>
              <div
                onClick={() => toggleDay(day.id)}
                className="font-bold font-jet-medium text-[#3A3A3A] text-3xl"
              >
                {day.name}
              </div>
              {expandedDay === day.id && (
                <div className="mt-2 text-[#6F6F6F] text-lg">
                  <div>{day.content}</div>

                  <div className="mt-auto">Add new task</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
