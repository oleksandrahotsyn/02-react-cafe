// import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
// import type { Votes, VoteType } from "../../types/votes";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

function App() {
  // const [votes, setVotes] = useState<Votes>({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  // const resetVotes = () => {
  //   setVotes({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
        <VoteStats />
        <Notification />
      </div>
    </>
  );
}

export default App;
