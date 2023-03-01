import React from "react";
import styled from "styled-components";

const house = "기숙사이름";

const houseData = {
  그리핀도르:
    "그리핀도르에서는 용기, 용맹, 대담성, 기사도 정신을 중요하게 생각합니다. 그리핀도르의 학생들은 때때로 무모할 정도로 용감합니다. 그리핀도르는 용맹함과 고결함을 포함한, 명예를 위한 강력한 규율을 지니고 있습니다. 그들은 자신들의 생각을 말하는 것을 주저하지 않으며 자신들의 신념을 지키기 위해 맞서 싸우기도 합니다.",
  후플푸프:
    "후플푸프에서는 헌신, 인내, 정의, 충성심을 중요하게 생각합니다. 후플푸프의 학생들은 포용적이며 관대하고, 자신이나 친구들의 특별한 적성보다는 공정한 경기, 좋은 정신과 열정을 더 가치있게 여깁니다. 그들은 옳고 그름에 있어 강한 관념을 지니고 있으며 친절하며 정직하기 위해 노력합니다.",
  레번클로:
    "래번클로에서는 지성, 창의력, 학식, 재치를 중요하게 생각합니다. 래번클로의 학생들은 이성적, 논리적인 성향이 있으며 학문적 수양에 대해 탐구합니다. 그들은 방대한 책 지식과 더불어 자신들의 생각이 갖고있는 독창성에 대해 자부심을 느낍니다.",
  슬리데린:
    "슬리데린에서는 야망과 노련함, 지도력, 기지를 중요하게 생각합니다.  슬리데린의 학생들은 야망 있고 빈틈없으며, 성취 지향적이고 사회적 지위를 의식하는 경향이 있습니다. 그들은 또한 자기 보호에 대해 강렬한 감각을 지니고 있어 모든 가능성을 고려하기 때문에 어떤 행동을 하기 전 주저하는 경향을 지닙니다.",
};

const BackLayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ResultFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 10px solid red;
  width: 40vw;
  height: 40vh;
`;
const HouseContainer = styled.div`
  font-family: "lightFont";
  font-size: 45px;
  margin: 20px;
`;

const HouseExplain = styled.div`
  font-family: "lightFont";
  font-size: 20px;
`;

function HouseResult() {
  return (
    <BackLayer>
      <ResultFrame>
        <div>당신의 기숙사는</div>
        <HouseContainer>{house}</HouseContainer>
        <div>입니다</div>
        <HouseExplain>이 기숙사는... </HouseExplain>
      </ResultFrame>
    </BackLayer>
  );
}

export default HouseResult;
