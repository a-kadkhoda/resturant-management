import Input from "@/components/input/Input";
import { ParamValue } from "next/dist/server/request/params";
import Link from "next/link";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import UploadField from "@/features/uploadField/components/UploadField";
import { EmployeeInfo } from "@/app/(dashboard)/employee/view-employee/[id]/page";

interface EmployeeDetailsProps {
  id?: ParamValue;
  mode?: string | null;
  data?: EmployeeInfo;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({
  mode,
  id,
  data,
}) => {
  return (
    <div className="w-full h-full border rounded-lg p-4 flex flex-col gap-4 justify-between">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Input
          type="text"
          label="Employee Name"
          isDisabeled={!!id && mode === "view"}
          defaultValue={data?.fullName}
        />
        <Input
          type="text"
          label="Email Address"
          isDisabeled={!!id && mode === "view"}
          defaultValue={data?.emailName}
        />
        <Input
          type="text"
          label="Phone Number"
          isDisabeled={!!id && mode === "view"}
          defaultValue={data?.phoneNumber}
        />
        {!!id && mode === "edit" ? (
          <div className="flex flex-col gap-2">
            <span>Status</span>
            <RadioGroup defaultValue={data?.status} className="flex gap-4">
              <div className="flex items-center space-x-2 gap-2">
                <RadioGroupItem
                  value="Active"
                  id="Active"
                  className="data-[state=checked]:border-primary-500 "
                />
                <Label htmlFor="Active">Active</Label>
              </div>
              <div className="flex items-center space-x-2 gap-2">
                <RadioGroupItem
                  value="Inactive"
                  id="Inactive"
                  className="data-[state=checked]:border-primary-500 "
                />
                <Label htmlFor="Inactive">Inactive</Label>
              </div>
            </RadioGroup>
          </div>
        ) : (
          <Input
            type="Status"
            label="Employee Name"
            isDisabeled={!!id && mode === "view"}
            defaultValue={data?.status}
          />
        )}
      </div>
      <UploadField
        title={mode === "view" ? "photo" : "upload photo"}
        photo={id ? "/profile.png" : null}
        mode={mode}
      />
      {data && mode === "view" ? (
        <Link
          href={"/employee"}
          className="h-msx bg-primary-500 hover:bg-primary-700 text-white cursor-pointer border text-base leading-[150%] tracking-[-0.32px] px-4 py-3 w-max rounded-lg self-end "
        >
          Back
        </Link>
      ) : (
        <div className="flex gap-2 self-end">
          <Link
            href={"/employee"}
            className="h-full bg-transparent dark:text-white text-dark-500 cursor-pointer border text-base leading-[150%] tracking-[-0.32px] px-4 py-3 w-max rounded-lg "
          >
            Cancel
          </Link>
          <button className="h-full  bg-primary-500 hover:bg-primary-700 text-white cursor-pointer border text-base leading-[150%] tracking-[-0.32px] px-4 py-3 w-max rounded-lg">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
