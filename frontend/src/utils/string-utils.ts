/* eslint-disable */
import moment from 'moment'

export default class StringUtils {
  public static dateFormat(date?: string | Date): string {
    return moment(date).format("YYYY년 MM월 DD일")
  }
}