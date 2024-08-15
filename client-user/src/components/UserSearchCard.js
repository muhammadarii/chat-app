import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const UserSearchCard = ({ user, onClose }) => {
  const handleOnClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Link
      to={`/${user?._id}`}
      onClick={handleOnClick}
      className="flex items-center gap-3 p-2 lg:p-4 border-b hover:border hover:border-primary rounded cursor-pointer"
    >
      <Avatar width={50} height={50} name={user?.name} />
      <div>
        <div className="font-semibold text-ellipsis line-clamp-1">
          {user?.name}
        </div>
        <p className="text-sm text-ellipsis line-clamp-1">{user?.email}</p>
      </div>
    </Link>
  );
};

export default UserSearchCard;
