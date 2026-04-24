import React, { useState } from "react";

const InviteAndStatus = () => {
  const [members, setMembers] = useState([
    { name: "Yuvraj", status: "online" },
  ]);
  return (
    <div className=" flex flex-col pt-10 p-5">
      <h1 className=" text-(--text-muted) font-semibold">
        PEOPLE (<span className="text-sm">{members.length}</span>)
      </h1>

      {members.map(({ name, status }, i) => {
        return (
          <div key={i} className="flex  mt-5 gap-2  items-center">
            <div className=" rounded-full shrink-0 border w-10 h-10"></div>
            <div className="flex  flex-1 flex-col min-w-0 ">
              <div className="capitalize  break-all  ">{name}</div>
              <div className=" flex  items-center gap-1">
                <div
                  className={` rounded-full text-(--text-muted) ${status === "online" ? "bg-green-600" : "bg-red-600"}  w-2 h-2`}
                ></div>
                <span className=" leading-none text-sm"> {status}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InviteAndStatus;
