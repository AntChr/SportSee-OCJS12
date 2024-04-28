import { useGet } from './hooks.js'
import User from '../models/User'
import Activity from '../models/Activity'
import AverageSessions from '../models/AverageSessions'
import Performance from '../models/Performance'



const urlUserInfoById = (URL,id) => `${URL}/user/${id}`
const urlActivityById = (URL,id) => `${URL}/user/${id}/activity`
const urlAverageSessionsById = (URL,id) => `${URL}/user/${id}/average-sessions`
const urlPerformanceById = (URL,id) => `${URL}/user/${id}/performance`


export const useGetUserInfoByUserId = (URL,id) => useGet(urlUserInfoById(URL,id), data => new User(data))
export const useGetActivityByUserId = (URL,id) => useGet(urlActivityById(URL,id), data => new Activity(data))
export const useGetAverageSessionsByUserId = (URL,id) => useGet(urlAverageSessionsById(URL,id), data => new AverageSessions(data))
export const useGetPerformanceByUserId = (URL,id) => useGet(urlPerformanceById(URL,id), data => new Performance(data))