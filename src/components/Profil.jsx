import {useEffect, useState} from 'react'
import axios from 'axios';
import '../style/profile.scss'
import Nutrition from './Nutrition';
import ActivityChart from './ActivityChart';
import PerformanceChart from './PerformanceChart';
import Session from './Session';
import TargetChart from './TargetChart';



function Profil() {
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userSessions, setUserSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const userId = 12;

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        const responseActivity = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        const responseSessions = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        const responsePerformance = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        setUserData(response.data.data);
        setUserActivity(responseActivity.data.data);
        setUserSessions(responseSessions.data.data);
        setUserPerformance(responsePerformance.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    }

    fetchUserData();
    return () => {
    };
  }, [userId]);

  return (
    <div className='dashboard'>
    {userData ? (
      <>
      <div>
        <h2 className='title__name'><span>Bonjour</span> {`${userData.userInfos.firstName}`}</h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className='dashboard__container'>
        <div className='dashboard__container__charts'>
        <ActivityChart data={userActivity.sessions}/>
          <div className='dashboard__container__charts__align'>
            <Session data={userSessions.sessions}/>
            <PerformanceChart data={userPerformance.data} />
            <TargetChart data={userData.todayScore}/>
          </div>
        </div>
        <div className='dashboard__container__nutrition'>
        <Nutrition data={userData.keyData}/>
        </div>
      </div>
      
      </>
    ) : (
      <p>Chargement...</p>
    )}
  </div>
)
}

export default Profil