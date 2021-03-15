import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./hooks/useStyles";
import PlayArea from "./components/PlayArea";
import HighAndLowButtons from "./components/HighAndLowButtons";
import GameProgressButton from "./components/GameProgressButton";
import Message from "./components/Message";

const initialDeck = getDeck();

function getDeck() {
  const suits = ["♠", "♣", "♦", "❤"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const deck = [];
  suits.map((suit) => ranks.map((rank) => deck.push({ suit: suit, rank: rank })));
  return deck;
}

function getRankNum(rank) {
  switch (rank) {
    case "A":
      return 1;
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;
    default:
      return Number(rank);
  }
}

export default function HighAndLow() {
  const classes = useStyles();
  const [deck, setDeck] = useState(initialDeck);
  const [firstCard, setFirstCard] = useState(getCard);
  const [secondCard, setSecondCard] = useState(null);
  const [isWin, setIsWin] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);

  function getCard() {
    const index = Math.floor(Math.random() * deck.length);
    const cardObj = deck[index];
    const newDeck = deck.slice();
    newDeck.splice(index, 1);
    setDeck(newDeck);
    return cardObj;
  }

  function checkHigh() {
    const _secondCard = getCard();
    setSecondCard(_secondCard);

    const isWin = getRankNum(firstCard.rank) < getRankNum(_secondCard.rank);
    setIsWin(isWin);

    isWin ? setWinCount(winCount + 1) : setLoseCount(loseCount + 1);
    setAnswered(true);
  }

  function checkLow() {
    const _secondCard = getCard();
    setSecondCard(_secondCard);

    const isWin = getRankNum(firstCard.rank) >= getRankNum(_secondCard.rank);
    setIsWin(isWin);

    isWin ? setWinCount(winCount + 1) : setLoseCount(loseCount + 1);
    setAnswered(true);
  }

  /* 
  // for debug
  useEffect(() => {
    console.log(deck);
  }, [deck]);
 */

  function next() {
    if (deck.length === 0) {
      setIsGameFinished(true);
    } else {
      const _secondCard = Object.assign({}, secondCard);
      setFirstCard(_secondCard);
      setSecondCard(null);
      setAnswered(false);
    }
  }

  function getButtons() {
    // prettier-ignore
    return answered ? <GameProgressButton onClickNext={next} isTheLatGame={deck.length === 0} />
                    : <HighAndLowButtons onClickHigh={checkHigh} onClickLow={checkLow} />;
  }

  function getMessage() {
    let message = [];
    if (isGameFinished) {
      message.push("Thank you for playing!");
      message.push(`Win: ${winCount} Lose: ${loseCount}`);
    } else if (answered) {
      message.push(isWin ? "Win!" : "Lose!");
    } else {
      message.push("High and Low?");
    }

    return <Message>{message}</Message>;
  }

  return (
    <Box>
      <PlayArea firstCard={firstCard} secondCard={secondCard} />
      <Box className={classes.messageArea}>
        {getMessage()}
        {!isGameFinished && getButtons()}
      </Box>
    </Box>
  );
}
