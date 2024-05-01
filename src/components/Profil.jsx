/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import axios from 'axios';
import '../style/profile.scss'
import { useGetUserInfoByUserId, useGetActivityByUserId, useGetAverageSessionsByUserId, useGetPerformanceByUserId } from '../utils/apiHandler'
import Nutrition from './Nutrition';
import ActivityChart from './ActivityChart';
import PerformanceChart from './PerformanceChart';
import Session from './Session';
import TargetChart from './TargetChart';
import Loader from './Loader';



function Profil() {
  const userId = 18; // c'est ici pour changer l'utilisateur qui sera affiché, soit 12 ou 18

  const [userInfo, setUserInfo] = useState({ isLoading: true, data: {}, error: false });
  const [useractivity, setUserActivity] = useState({ isLoading: true, data: {}, error: false });
  const [userAverageSessions, setUserAverageSessions] = useState({ isLoading: true, data: {}, error: false });
  const [userperformance, setUserPerformance] = useState({ isLoading: true, data: {}, error: false });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
          const Info = await useGetUserInfoByUserId(URL_API, userId);
          setUserInfo(Info);
          const Activity = await useGetActivityByUserId(URL_API, userId);
          setUserActivity(Activity)
          const AverageSessions = await useGetAverageSessionsByUserId(URL_API, userId);
          setUserAverageSessions(AverageSessions)
          const Performance = await useGetPerformanceByUserId(URL_API, userId);
          setUserPerformance(Performance)
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
  }, []);

  if (userInfo.error || useractivity.error || userAverageSessions.error || userperformance.error) 
  return <section>Oups il y a eu un problème</section>

  return (
    <div className="dashboard">
    {userInfo.isLoading ? (
        <Loader />
    ) : (
      <>
        <div>
          <h2 className="title__name">
            <span>Bonjour</span> {`${userInfo.data.firstName}`}
          </h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="dashboard__container">
          <div className="dashboard__container__charts">
           {useractivity.isLoading ? (
                  <Loader />
                ) : (
                  <ActivityChart data={useractivity.data.sessions} />
                )}
            <div className="dashboard__container__charts__align">
                {userAverageSessions.isLoading ? (
                  <Loader />
                ) : (
                  <div className="average-sessions">
                    <span>Durée moyenne des sessions</span>
                    <Session data={userAverageSessions.data.sessions} />
                  </div>
                )}
              {userperformance.isLoading ? (
                  <Loader />
                ) : (
              <PerformanceChart data={userperformance.data} />
                )}
                {userInfo.isLoading ? (
                  <Loader />
                ) : (
              <TargetChart data={userInfo.data.score} />
                )}
            </div>
          </div>
          <div className="dashboard__container__nutrition">
            <Nutrition data={userInfo.data.keyDatas} />
          </div>
        </div>
      </>
    )}
  </div>
  )
}

export default Profil