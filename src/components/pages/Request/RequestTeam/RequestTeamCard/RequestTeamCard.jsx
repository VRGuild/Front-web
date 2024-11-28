import React, { useEffect, useState } from 'react';
import {
  Container,
  CheckBoxContainer,
  Label,
  MemberText,
  TeamDiscriptionContainer,
  DataContainer,
  RadarContainer,
} from './style';
import StRadar from '../../../../common/Radar/StRadar';

const RequestTeamCard = ({ data, index, setSelectedTeamId }) => {
  const desiredOrder = [
    'Client',
    'Planner',
    'Design',
    'Communication',
    'AI',
    'Server',
  ];
  const [radarPoints, setRadarPoints] = useState();
  const getPointAvgsInOrder = () => {
    return desiredOrder.map((category) => {
      const point = data.radarPoints.find(
        (item) => item.categoryName === category,
      );
      return point ? point.pointAvg : null;
    });
  };
  const handleCheckBox = () => {
    setSelectedTeamId(data.teamId);
  };
  useEffect(() => {
    setRadarPoints(getPointAvgsInOrder());
  }, [data]);

  return (
    <Container>
      <CheckBoxContainer>
        <Label>팀{index + 1}</Label>
        <input type="checkbox" onChange={handleCheckBox} />
      </CheckBoxContainer>
      <DataContainer>
        <Label>팀장</Label>
        <MemberText>
          LV. {data.experienceValue} {data.nickname}
        </MemberText>
        <RadarContainer>
          <StRadar data={radarPoints}></StRadar>
        </RadarContainer>
        <Label>팀원</Label>
        {data.members.map((member) => (
          <MemberText key={member.nickname}>
            LV. {member.experienceValue} {member.nickname}
          </MemberText>
        ))}
        <TeamDiscriptionContainer>
          {data.teamIntroduction}
        </TeamDiscriptionContainer>
      </DataContainer>
    </Container>
  );
};

export default RequestTeamCard;
