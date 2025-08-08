import React from "react";

interface InfoPropsCard {
  icon: React.ReactNode;
  title: string;
  value: string;
  timeUpdate: string;
}

const InfoCard: React.FC<InfoPropsCard> = ({
  icon,
  timeUpdate,
  title,
  value,
}) => {
  return (
    <div className="size-full border rounded-lg">
      <div className="flex flex-col p-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-primary-500 size-10 p-2.5 flex justify-center items-center rounded-lg">
            {icon}
          </div>
          <span className="text-sm font-normal leading-[140%] tracking-[-0.28px] text-dark-500 dark:text-white">
            {title}
          </span>
        </div>
        <span className="text-dark-500 dark:text-white leading-[120%] tracking-[-0.6px] font-bold text-[30px]">
          {value}
        </span>
      </div>
      <div className="border-t px-4 py-2">
        <span className="text-gray-500 text-[12px] font-normal leading-[130%] tracking-[-0.24px]">
          {timeUpdate}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
