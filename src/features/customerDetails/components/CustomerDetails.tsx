import React from "react";
import { Label } from "@/components/ui/label";
import { ParamValue } from "next/dist/server/request/params";

interface CustomerDetailsProps {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  peymentType?: string;
  id?: ParamValue;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  address,
  email,
  name,
  peymentType,
  phone,
  id,
}) => {
  return (
    <div className="size-full p-4 border rounded-lg flex flex-col gap-4">
      <span className="text-xl font-bold leading-[150%] tracking-[-0.4px]">
        Customer Details
      </span>
      <div className="divide-y flex flex-col gap-4">
        <div className="flex flex-col pb-2 gap-1 ">
          <Label
            htmlFor="Customr name"
            className="text-gray-500 text-sm font-normal leading-[140%] tracking-[-0.28px]"
          >
            Customr name
          </Label>
          <input
            type="text"
            id="Customr name"
            className="!bg-transparent !border-0 rounded-none focus-visible:outline-0 focus-visible:ring-0 shadow-none p-0 text-nase font-normal leading-[150%] tracking-[-0.32px] cursor-text"
            defaultValue={name}
            disabled={!!id}
          />
        </div>
        <div className="flex flex-col pb-2 gap-1 ">
          <Label
            htmlFor="Email Address"
            className="text-gray-500 text-sm font-normal leading-[140%] tracking-[-0.28px]"
          >
            Email Address
          </Label>
          <input
            type="text"
            id="Email Address"
            className="!bg-transparent !border-0 rounded-none focus-visible:outline-0 focus-visible:ring-0 shadow-none p-0 text-nase font-normal leading-[150%] tracking-[-0.32px] cursor-text"
            defaultValue={email}
            disabled={!!id}
          />
        </div>
        <div className="flex flex-col pb-2 gap-1 ">
          <Label
            htmlFor="Mobile Number"
            className="text-gray-500 text-sm font-normal leading-[140%] tracking-[-0.28px]"
          >
            Mobile Number
          </Label>
          <input
            type="text"
            id="Mobile Number"
            className="!bg-transparent !border-0 rounded-none focus-visible:outline-0 focus-visible:ring-0 shadow-none p-0 text-nase font-normal leading-[150%] tracking-[-0.32px] cursor-text"
            defaultValue={phone}
            disabled={!!id}
          />
        </div>
        <div className="flex flex-col pb-2 gap-1 ">
          <Label
            htmlFor="Address"
            className="text-gray-500 text-sm font-normal leading-[140%] tracking-[-0.28px]"
          >
            Address
          </Label>
          <input
            type="text"
            id="Address"
            className="!bg-transparent !border-0 rounded-none focus-visible:outline-0 focus-visible:ring-0 shadow-none p-0 text-nase font-normal leading-[150%] tracking-[-0.32px] cursor-text"
            defaultValue={address}
            disabled={!!id}
          />
        </div>
        <div className="flex flex-col pb-2 gap-1 ">
          <Label
            htmlFor="Payment Type"
            className="text-gray-500 text-sm font-normal leading-[140%] tracking-[-0.28px]"
          >
            Payment Type
          </Label>
          <input
            type="text"
            id="Payment Type"
            className="!bg-transparent !border-0 rounded-none focus-visible:outline-0 focus-visible:ring-0 shadow-none p-0 text-nase font-normal leading-[150%] tracking-[-0.32px] cursor-text"
            defaultValue={peymentType}
            disabled={!!id}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
