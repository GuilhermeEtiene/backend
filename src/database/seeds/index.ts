import { setUserDefault } from '../seeds/user'

const initialValuesDefault = async connection => {
  await setUserDefault(connection)
}

export { initialValuesDefault }
