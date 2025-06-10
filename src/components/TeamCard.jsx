import React from "react";
import { Briefcase, MapPin, Mail, ExternalLink } from "lucide-react";

const TeamCard = ({ name, bio, org, location, email, portfolio }) => {
  return (
    <div className="w-[260px] h-[300px] bg-base-200 rounded-box shadow-md overflow-hidden flex flex-col">
      {/* Contenido */}
      <div className="flex flex-col justify-between h-full p-4 gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-base-content leading-snug">{bio}</p>

          <div className="flex flex-col gap-1 text-sm mt-2">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-accent" />
              {org}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              {location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </div>
          </div>
        </div>

        {/* Link al portfolio */}
        {portfolio && (
          <a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary flex items-center gap-1 hover:underline mt-2"
          >
            Ver portfolio <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
