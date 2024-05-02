import axios from 'axios';
import User from '../models/User'
import Activity from '../models/Activity'
import AverageSessions from '../models/AverageSessions'
import Performance from '../models/Performance'

const fetchData = async (url, model) => {
    try {
      const response = await axios.get(url);
      return model(response.data.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

const urlUserInfoById = (URL,id) => `${URL}/user/${id}`
const urlActivityById = (URL,id) => `${URL}/user/${id}/activity`
const urlAverageSessionsById = (URL,id) => `${URL}/user/${id}/average-sessions`
const urlPerformanceById = (URL,id) => `${URL}/user/${id}/performance`


export const getUserInfoByUserId = async (URL, id) => {
    try {
      const data = await fetchData(urlUserInfoById(URL, id), data => new User(data));
      return { isLoading: false, data, error: false };
    } catch (error) {
      return { isLoading: false, data: {}, error };
    }
  };
  
  export const getActivityByUserId = async (URL, id) => {
    try {
      const data = await fetchData(urlActivityById(URL, id), data => new Activity(data));
      return { isLoading: false, data, error: false };
    } catch (error) {
      return { isLoading: false, data: {}, error };
    }
  };
  
  export const getAverageSessionsByUserId = async (URL, id) => {
    try {
      const data = await fetchData(urlAverageSessionsById(URL, id), data => new AverageSessions(data));
      return { isLoading: false, data, error: false };
    } catch (error) {
      return { isLoading: false, data: {}, error };
    }
  };
  
  export const getPerformanceByUserId = async (URL, id) => {
    try {
      const data = await fetchData(urlPerformanceById(URL, id), data => new Performance(data));
      return { isLoading: false, data, error: false };
    } catch (error) {
      return { isLoading: false, data: {}, error };
    }
  };