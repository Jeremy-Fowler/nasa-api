import axios from 'axios'
import { AppState } from '../AppState'
import { APOD } from '../models/APOD'
import { logger } from '../utils/Logger'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})

const apiKey = 'apod?api_key=w587nM7wFTtxxIgueRbxzuByVObMKcbUUKAwh24b'

class APODService {
  async getAPOD(date) {
    const res = await nasaApi.get(`${apiKey}&date=${date}`)
    logger.log('the res', res)
    AppState.date = new APOD(res.data)
    logger.log('the date', AppState.date)
  }
}

export const apodService = new APODService()
