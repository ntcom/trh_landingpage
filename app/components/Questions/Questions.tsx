"use client";
import { useState } from "react";
import Image from "next/image";
import plus from "@/assets/svgs/plus.svg";
import minus from "@/assets/svgs/minus.svg";

const questionsList = [
  {
    id: 1,
    tag: "User Interface",
    questions: [
      {
        id: 101,
        title:
          "Ex ratione and consectetur laborum suscipit, incidunt and consequuntur?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 102,
        title:
          "Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 103,
        title:
          "Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 104,
        title:
          "Culpa aspernatur nisi adipisicing yet laudantium. Consectetur consequatur ipsam?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 105,
        title: "Numquam commodi so adipisci voluptate. Ipsa quae rem quia num?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 106,
        title:
          "Nequeporro sint for ratione or autem, aliqua yet reprehenderit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 107,
        title: "Anim magna. Amet ex. Laborum et. Sit amet dia carpem et?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 108,
        title:
          "Exercitation labore qui lorem and natus. Aliquid. Mollit rem dolorem so suscipit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 109,
        title:
          "Nesciunt deserunt. Nesciunt rem fugiat accusantium non yet deserunt?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
    ],
  },
  {
    id: 2,
    tag: "Payment Method",
    questions: [
      {
        id: 201,
        title:
          "Ex ratione and consectetur laborum suscipit, incidunt and consequuntur?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 202,
        title:
          "Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 203,
        title:
          "Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 204,
        title:
          "Culpa aspernatur nisi adipisicing yet laudantium. Consectetur consequatur ipsam?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 205,
        title: "Numquam commodi so adipisci voluptate. Ipsa quae rem quia num?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 206,
        title:
          "Nequeporro sint for ratione or autem, aliqua yet reprehenderit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 207,
        title: "Anim magna. Amet ex. Laborum et. Sit amet dia carpem et?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 208,
        title:
          "Exercitation labore qui lorem and natus. Aliquid. Mollit rem dolorem so suscipit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
    ],
  },
  {
    id: 3,
    tag: "System Solutions",
    questions: [
      {
        id: 301,
        title:
          "Ex ratione and consectetur laborum suscipit, incidunt and consequuntur?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 302,
        title:
          "Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 303,
        title:
          "Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 304,
        title:
          "Culpa aspernatur nisi adipisicing yet laudantium. Consectetur consequatur ipsam?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 305,
        title: "Numquam commodi so adipisci voluptate. Ipsa quae rem quia num?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 306,
        title:
          "Nequeporro sint for ratione or autem, aliqua yet reprehenderit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 307,
        title: "Anim magna. Amet ex. Laborum et. Sit amet dia carpem et?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
    ],
  },
  {
    id: 4,
    tag: "Technical Support",
    questions: [
      {
        id: 401,
        title:
          "Ex ratione and consectetur laborum suscipit, incidunt and consequuntur?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 402,
        title:
          "Molestiae suscipit ipsum non eos so autem dolores. Exercitation si or laudantium?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 403,
        title:
          "Veniam magna for ut or adipisci veritatis. In ipsa and eu. Id omnis dicta?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 404,
        title:
          "Culpa aspernatur nisi adipisicing yet laudantium. Consectetur consequatur ipsam?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 405,
        title: "Numquam commodi so adipisci voluptate. Ipsa quae rem quia num?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
      {
        id: 406,
        title:
          "Nequeporro sint for ratione or autem, aliqua yet reprehenderit?",
        content:
          "Beatae quae reprehenderit accusantium and sunt eum. Laboris iste. Laborum dolore or quaerat. Quam. Ut nulla or exercitation but veniam yet duis yet vitae doloremque. Doloremque sint yet eos explicabo yet molestiae and molestiae, yet consequatur. Quisque ligula massa, porttitor vitae volutpat ut, luctus a mi.",
      },
    ],
  },
];

export default function Questions() {
  const [tabActive, setTabActive] = useState(1);
  const [quesActive, setQuesActive] = useState(
    questionsList[0].questions[0].id
  );

  return (
    <div className="bg-[#fff]">
      <div className="container2 p-[150px_15px]">
        <ul className="flex flex-col md:flex-row">
          {questionsList.map((tab) => {
            return (
              <li key={tab.id} className="">
                <button
                  onClick={() => setTabActive(tab.id)}
                  className={`${
                    tabActive === tab.id
                      ? "bg-[#218392] text-[#fff] hover:opacity-90"
                      : "bg-[#f7f6fb] text-[#d5550f] hover:text-[#218392]"
                  } w-full md:w-auto p-[15px_28px] rounded-[5px_5px_0_0] text-xs font-medium leading-5 tracking-[2.4px] uppercase`}
                >
                  {tab.tag}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="bg-[#fff] p-10 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
          {questionsList[tabActive - 1].questions.map((ques) => {
            return (
              <li key={ques.id} className="mb-4">
                <button
                  onClick={() => {
                    if (quesActive === ques.id) {
                      setQuesActive(0);
                    } else {
                      setQuesActive(ques.id);
                    }
                  }}
                  className="flex gap-2 cursor-pointer py-[5px]"
                >
                  <div className="shrink-0 w-4 h-4 md:w-5 md:h-5 pt-1 md:pt-0">
                    {quesActive !== ques.id ? (
                      <Image src={plus} alt="" />
                    ) : (
                      <Image src={minus} alt="" />
                    )}
                  </div>
                  <p className="text-sm lg:text-base text-[#4c4c4c] font-medium tracking-[0.72px] text-left">
                    {ques.title}
                  </p>
                </button>
                <div
                  className={`${
                    quesActive === ques.id
                      ? "max-h-[150px] md:max-h-[72px] opacity-100"
                      : "max-h-0 overflow-hidden opacity-0"
                  } p-[0_28px] transition-all duration-300`}
                >
                  <p className="text-sm lg:text-base text-[#808080] font-light">
                    {ques.content}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
