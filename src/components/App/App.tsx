import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes, VoteType } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = votes.good + votes.neutral + votes.bad;
  const positive = total > 0 ? Math.round((votes.good / total) * 100) : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} />
        {total === 0 ? (
          <Notification />
        ) : (
          <VoteStats votes={votes} total={total} positive={positive} />
        )}
      </div>
    </>
  );
}

export default App;
