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
import Error from './Error';



function Profil() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = 18;
  
  const userInfo = useGetUserInfoByUserId(URL_API, userId);
  const useractivity = useGetActivityByUserId(URL_API, userId);
  const userAverageSessions = useGetAverageSessionsByUserId(URL_API, userId);
  const userperformance = useGetPerformanceByUserId(URL_API, userId);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`${URL_API}/user/${userId}`);
        setUserData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
        setLoading(false);
      }
    }

    fetchUserData();
    return () => {
    };
  }, [userId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="dashboard">
    {loading ? ( 
      <Loader />
    ) : userData ? (
      <>
        <div>
          <h2 className="title__name">
            <span>Bonjour</span> {`${userInfo.data.firstName}`}
          </h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="dashboard__container">
          <div className="dashboard__container__charts">
            <ActivityChart data={useractivity.data.sessions} />
            <div className="dashboard__container__charts__align">
              <div className="average-sessions">
                <span>Durée moyenne des sessions</span>
                <Session data={userAverageSessions.data.sessions} />
              </div>
              <PerformanceChart data={userperformance.data} />
              <TargetChart data={userInfo.data.score} />
            </div>
          </div>
          <div className="dashboard__container__nutrition">
            <Nutrition data={userInfo.data.keyDatas} />
          </div>
        </div>
      </>
    ) : (
      <Error/>
    )}
  </div>
  )
}

export default Profil