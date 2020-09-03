import { reactive, toRefs, SetupContext } from '@vue/composition-api'
// import { apiState, globalState } from '~/types/State'
import axios from 'axios'

interface Options {
  ctx: SetupContext
}

interface ApiState {
  response: object
  error: object | null
  fetching: boolean
}
interface globalState {
  sales: object | null
  items: object | null
  item: object[] | null
}

export default function useItems({ ctx }: Options) {
  const apiState: ApiState = reactive({
    response: [],
    error: null,
    fetching: false,
  })

  const globalState: globalState = reactive({
    sales: {},
    items: {},
    item: [{}],
  })

  const fetchSales = async () => {
    apiState.fetching = true

    const { data } = await axios.get(`http://localhost:8000/sales`, {
      params: {},
    })
    globalState.sales = data
    return data
  }

  const fetchItems = async (id: string) => {
    apiState.fetching = true

    const { data } = await axios.get(`http://localhost:8000/items`, {
      params: {
        sale_id: id,
      },
    })
    globalState.items = data
    return data
  }

  return {
    // @ts-ignore
    ...toRefs(apiState),
    // @ts-ignore
    ...toRefs(globalState),
    fetchSales,
    fetchItems,
  }
}
