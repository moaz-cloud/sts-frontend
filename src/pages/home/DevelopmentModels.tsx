import React from "react";
import { FaUsers, FaUserPlus, FaMoneyCheckAlt, FaCheck } from "react-icons/fa";

const models = [
  {
    icon: <FaUsers className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "Dedicated Team",
    desc:
      "It is an expert autonomous team comprising of different roles (e.g. project manager, software engineers, QA engineers, and other roles) capable of delivering technology solutions rapidly and efficiently.",
    points: [
      "Agile processes",
      "Transparent pricing",
      "Monthly billing",
      "Maximum flexibility",
    ],
  },
  {
    icon: <FaUserPlus className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "Team Augmentation",
    desc:
      "Suitable for every scale of business and project, team augmentation helps add required talent to you team to fill the talent gap.",
    points: [
      "Scale on-demand",
      "Quick & cost-effective",
      "Monthly billing",
      "Avoid hiring hassles",
      "Transparent pricing",
    ],
  },
  {
    icon: <FaMoneyCheckAlt className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "Project Based",
    desc:
      <>
        <span className="font-semibold">Fixed Price Model:</span> When project specifications, scope, deliverables and acceptance criteria are clearly defined, we can evaluate and offer a fixed quote for the project.<br />
        <span className="font-semibold">Time Material:</span> For projects that have undefined or dynamic scope requirements or complicated business requirements, developers can be hired per their time.
      </>,
    points: [],
  },
];

const DevelopmentModels: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-10">
      <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 text-center">Hiring Software Developers With STEP TO SOFT = Flexibility</h1>
      <p className="text-lg text-gray-500 mb-10 text-center max-w-3xl mx-auto">
        We offer flexible engagement options including monthly, part-time, full-time hiring for you to choose from.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {models.map((model, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg">
            {model.icon}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{model.title}</h2>
            <p className="text-gray-500 text-base mb-6">{model.desc}</p>
            {model.points.length > 0 && (
              <ul className="space-y-2 w-full text-left mt-2">
                {model.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-red-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentModels;
