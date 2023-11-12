import Coby from "../../../assets/coby-white.png";
import Torrey from "../../../assets/torrey-craig.png";
import Lonzo from "../../../assets/lonzo-ball.png";
import Andre from "../../../assets/andre-drummond.png";
import Jevon from "../../../assets/jevon-karter.png";
import Alex from "../../../assets/alex-caruso.png";
import Zach from "../../../assets/zach-lavine.png";
import Nikola from "../../../assets/nikola-vucevic.png";
import Demar from "../../../assets/demar-derozan.png";
import Carlik from "../../../assets/carlik-jones.png";
import Terry from "../../../assets/terry-taylor.png";
import Patrick from "../../../assets/patrick-williams.png";
import axios from "axios";

import { useTranslation } from "react-i18next";
import MemberItem from "./MemberItem";
import "./TeamMembers.css";
import { useEffect, useState } from "react";



interface Player {
  id: number;
  fullName: string;
  about: string;
  shirtNumber: string;

}


const playerImports: String[] = [
  Coby,
  Torrey,
  Lonzo,
  Andre,
  Jevon,
  Alex,
  Zach,
  Nikola,
  Demar,
  Carlik,
  Terry,
  Patrick,
];

export const TeamMembers = () => {
  const { t } = useTranslation();
  const [teamData, setTeamData] = useState<Player[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/players-list").then((res) => {
      setTeamData(res.data.players);
    });
  }, []);

  return (
    <div className="container">
      <div className="main">
        <h3>{t("TEAM")}</h3>
        <div className="members">
          {teamData.map((player, i) => (
            <MemberItem
              key={player.id}
              playerImg={playerImports[i]}
              playerName={player.fullName}
              playerNum={player.shirtNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
