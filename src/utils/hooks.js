import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGet = (url, model) => {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(model(response.data.data))
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, data, error }
}