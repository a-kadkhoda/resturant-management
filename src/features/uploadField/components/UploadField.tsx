"use client";
import { Edit, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface UploadFieldPros {
  title: string;
  photo: string | null;
  mode?: string | null;
}

const UploadField: React.FC<UploadFieldPros> = ({ title, photo, mode }) => {
  const [file, setFile] = useState<string | null>(photo);
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-500 text-sm font-normal leading-[140%] tracking-[-0.28px]">
        {title}
      </span>
      {file ? (
        <div className="relative w-max h-max">
          {mode !== "view" && (
            <Edit
              size={12}
              className="absolute bg-dark-500 top-0 right-0 cursor-pointer hover:bg-primary-700 transition-colors"
              onClick={() => setFile(null)}
            />
          )}
          <Image
            src={file}
            width={1920}
            className="size-[60px] rounded-full"
            height={1080}
            alt="profile"
          />
        </div>
      ) : (
        <div className=" relative w-full p-4 rounded-lg border border-dashed  border-primary-500 h-[160px] flex flex-col gap-2 justify-center items-center">
          <div className="size-10 p-2.5 rounded-lg bg-primary-500 text-white flex justify-center items-center">
            <Upload />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>
              Drag & Drop or{" "}
              <span className="text-primary-500">choose file </span>
              to upload
            </span>
            <span className="text-gray-500">Suppoted formats : jpeg, png</span>
          </div>

          <input
            type="file"
            className="absolute size-full top-0 left-0 inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadField;
