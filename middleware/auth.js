import { AUTHENTICATE } from '../store/mutation-types'

export default function ({ store }) {
  store.commit(AUTHENTICATE)
}
