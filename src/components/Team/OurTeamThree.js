import React from 'react';
import teamData from "../../data/Team/team-data.json";
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import TeamMemberTwo from './TeamMemberTwo';
import { useTranslation } from "react-i18next";
const OurTeamThree = () => {
const { t } = useTranslation('team');
  //  {t('header', {returnObjects: true}).map((dropdown, i)
  //{dataFeatures.map((feature, i) 
  //{t('header')}
  return (

    <section className="white-bg">
    <div className="container">
      <div className="row">
        <HeadingSection title={t('header')} tagline={t('subline')} text={t('text')}/>
      </div>
      <div className="row mt-50">
      {t('team', {returnObjects: true}).filter((team, i) => i <= 2).map((member, i) => (
              <TeamMemberTwo
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
              delay={i + 3}
            />
          )) }
      </div>
    </div>
  </section>

);
}
export default OurTeamThree;