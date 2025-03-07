import React from "react";

interface TestimonyCardProps {
  testimony: string;
  avatar: string; // URL
  name: string;
  role: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  testimony,
  avatar,
  name,
  role,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Chat Bubble */}
      <div className="chat chat-start">
        <div className="chat-bubble max-w-xs bg-base-300 bg-opacity-25 p-6 text-base-content">
          {testimony}
        </div>
      </div>

      {/* Info */}
      <span className="mt-4 inline-flex items-center justify-start gap-4">
        {/* Avatar */}
        <div className="avatar">
          <div className="size-12 rounded-full">
            <img alt="Foto" src={avatar} />
          </div>
        </div>

        {/* Name & Job role */}
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <small className="font-light">{role}</small>
        </div>
      </span>
    </div>
  );
};

export default TestimonyCard;
