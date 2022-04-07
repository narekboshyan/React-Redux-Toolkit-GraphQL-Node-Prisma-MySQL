import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment-timezone'
import { selectCompany } from 'redux/reducers/company/selector'

export const useFormatDate = () => {
  const company = useSelector(selectCompany)

  const formatDate = useCallback(
    (date = new Date(), { format = 'MM/DD/YYYY', concatTimezone = false, timezone } = {}) => {
      const { zone = '', offset = '', standard = '' } = timezone || company.settings?.timezone || {}

      const newDate = moment.tz(date, zone).format(format)

      return concatTimezone && offset && standard ? `${newDate} ${standard}${offset}` : newDate
    },
    [company]
  )

  return { formatDate }
}

export default { useFormatDate }
