import React from "react";

const UserInfo = () => {
  return (
    <div className="rounded-[16px] w-full shadow-[0_0_20px_20px_rgba(0,0,0,0.16)] max-w-[495px] bg-backgr text-white register-modal flex flex-col">
      <div></div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 bg-gray-600 rounded-[8px] p-2">
          <div className="bg-gray-700 p-3"></div>
          <div className="flex flex-col">
            <span className="text-xs">Наказанный игрок</span>
            <span>Tantoxz</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default UserInfo;
