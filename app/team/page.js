"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../components/features/team/components/TeamPage.css";
import teamImg from "../../components/features/team/assets/image.jpg";
import Members from "../card-stack/imagess/page";
const teams = [
  { name: "Tech Team",id: "M_001", image: teamImg},
  { name: "PR Team", id: "M_002", image: teamImg},
  { name: "Content Team", id: "M_003", image: teamImg},
  { name: "Design Team", id: "M_004", image: teamImg},
  { name: "Event Team", id: "M_005", image: teamImg},
  { name: "Social Media Team", id: "M_006", image: teamImg},
];

const TeamPage = () => {
  const percentRef = useRef(null);
  const titleBarRef = useRef(null);
  const [showMembers, setShowMembers] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent =
        docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      
      if (percentRef.current) {
        percentRef.current.textContent = `${scrollPercent
          .toString()
          .padStart(2, "0")}%`;
      }

      if (titleBarRef.current) {
        if (scrollTop > 60) {
          titleBarRef.current.classList.add("shrink");
        } else {
          titleBarRef.current.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="team-container ">
      
        {/* <div className="header">
          <span className="header-start font-[Neue] text-xs">MEET THE TEAM</span>
          <span ref={percentRef} className="scroll-percent font-[Neue] text-xs">
            00%
          </span>
          <span className="header-end font-[Neue] text-xs">MENU ●</span>
        </div> */}

        <div className="view-controls ">
          <span
            onClick={() => setShowMembers(false)}
            className={`font-[Neue] text-sm cursor-pointer ${!showMembers ? "" : "faded"
              }`}
          >
            TEAM
          </span>

          <span className="mx-1 font-[Neue] text-sm">/</span>

          <span
            onClick={() => setShowMembers(true)}
            className={`font-[Neue] text-sm cursor-pointer ${showMembers ? "" : "faded"
              }`}
          >
            MEMBERS
          </span>
        </div>

  

      {showMembers ? (
        <Members  className=''/>
      ) : (
        <div className="team-grid ">
          {teams.map((team, index) => (
            <Link 
              href={`/card-stack/teacher?name=${encodeURIComponent(team.name)}`}
            key={index} className="team-card ">
              <div className="placeholder " style={{ position: 'relative' }}>
                <Image src={team.image} alt={team.name} className="team-image" fill sizes="(max-width: 800px) 50vw, 30vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex justify-between items-center pt-1">
                <h4 className="team-name xl:text-sm lg:text-sm text-xs font-[Neue] ">{team.id}</h4>
                <h4 className="team-name xl:text-sm lg:text-sm text-xs font-[Neue] ">{team.name}</h4>
              </div>
              
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamPage;
