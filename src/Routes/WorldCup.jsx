import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const items = [
  {
    name: "가브리살",
    src: require("../img/가브리살.jpg"),
  },
  {
    name: "곰탕",
    src: require("../img/곰탕.jpg"),
  },
  {
    name: "기스면",
    src: require("../img/기스면.jpg"),
  },
  {
    name: "김밥",
    src: require("../img/김밥.jpg"),
  },
  {
    name: "낫토",
    src: require("../img/낫토.jpg"),
  },
  {
    name: "닭도리탕",
    src: require("../img/닭도리탕.jpg"),
  },
  {
    name: "동파육",
    src: require("../img/동파육.jpg"),
  },
  {
    name: "돼지갈비찜",
    src: require("../img/돼지갈비찜.jpg"),
  },
  {
    name: "두부김치",
    src: require("../img/두부김치.jpg"),
  },
  {
    name: "라면",
    src: require("../img/라면.jpg"),
  },
  {
    name: "랍스터 버터구이",
    src: require("../img/랍스터 버터구이.jpg"),
  },
  {
    name: "물떡",
    src: require("../img/물떡.jpg"),
  },
  {
    name: "미소라멘",
    src: require("../img/미소라멘.jpg"),
  },
  {
    name: "버팔로윙",
    src: require("../img/버팔로윙.jpg"),
  },
  {
    name: "빈대떡",
    src: require("../img/빈대떡.jpg"),
  },
  {
    name: "산낙지",
    src: require("../img/산낙지.jpg"),
  },
  {
    name: "상추튀김",
    src: require("../img/상추튀김.jpg"),
  },
  {
    name: "소시지야채볶음",
    src: require("../img/소시지야채볶음.jpg"),
  },
  {
    name: "스키야키",
    src: require("../img/스키야키.jpg"),
  },
  {
    name: "안동국시",
    src: require("../img/안동국시.jpg"),
  },
  {
    name: "오일 파스타",
    src: require("../img/오일 파스타.jpg"),
  },
  {
    name: "우렁쌈밥",
    src: require("../img/우렁쌈밥.jpg"),
  },
  {
    name: "잡채밥",
    src: require("../img/잡채밥.jpg"),
  },
  {
    name: "추어탕",
    src: require("../img/추어탕.jpg"),
  },
  {
    name: "치즈 계란말이",
    src: require("../img/치즈 계란말이.jpg"),
  },
  {
    name: "치킨",
    src: require("../img/치킨.jpg"),
  },
  {
    name: "케밥",
    src: require("../img/케밥.jpg"),
  },
  {
    name: "코다리찜",
    src: require("../img/코다리찜.jpg"),
  },
  {
    name: "타코",
    src: require("../img/타코.jpg"),
  },
  {
    name: "탕수육",
    src: require("../img/탕수육.jpg"),
  },
  {
    name: "튀김덮밥",
    src: require("../img/튀김덮밥.jpg"),
  },
  {
    name: "훈제오리",
    src: require("../img/훈제오리.jpg"),
  },
];

const WcTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`;

const GameBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  .flex-1 {
    flex: 1;
    min-width: 480px;
    overflow: hidden;
    background-color: black;
    cursor: pointer;
    position: relative;
  }
  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
  .name {
    position: absolute;
    text-align: center;
    min-width: 80px;
    left: 50%;
    bottom: 20px;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 2em;
    padding: 1rem 1em;
    transform: translateX(-50%);
  }
`;

function WorldCup() {
  //let { round } = useParams();
  const title = useLocation().state.title;
  let round = parseInt(useLocation().state.round);
  const [item, setItem] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [roundCount, setRoundCount] = useState(round / 2);
  const clickHandler = (food) => () => {
    let newRound = roundCount;
    if (winners.length + 1 === newRound) {
      setRoundCount(newRound / 2);
    }
    if (item.length <= 2) {
      if (winners.length === 0) {
        //결승전일때
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setItem(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (item.length > 2) {
      setWinners([...winners, food]);
      setDisplays([item[2], item[3]]);
      setItem(item.slice(2));
    }
  };
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setItem(items);
    setDisplays([items[0], items[1]]);
  }, []);
  return (
    <>
      <WcTitle>{title}</WcTitle>
      <p>
        {winners.length + 1}/{roundCount}
      </p>
      <GameBox>
        {displays.map((d) => {
          return (
            <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
              <img src={d.src} alt={d.name} className="item-img" />
              <p className="name">{d.name}</p>
            </div>
          );
        })}
      </GameBox>
    </>
  );
}
export default WorldCup;
