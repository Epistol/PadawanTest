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

  const addSale = async (sale: object, items: object) => {
    // Adding the Sale first
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    }

    await axios
      .post(`http://localhost:8000/sales`, sale, axiosConfig)
      .then((res) => {
        addItems(res.data.id, items)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const asyncForEach = async (arrayData: any, callback: any) => {
    for (let index = 0; index < arrayData.length; index++) {
      await callback(arrayData[index], index, arrayData)
    }
  }

  const addItems = async (saleId: number, items: any) => {
    // Adding the Sale first
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    }

    const itemsModified = items.content.map((item: any) => {
      item.sale_id = saleId
      return item
    })

    asyncForEach(itemsModified, async (item: any) => {
      await axios
        .post(`http://localhost:8000/items`, item, axiosConfig)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err)
        })
    })
  }

  return {
    // @ts-ignore
    ...toRefs(apiState),
    // @ts-ignore
    ...toRefs(globalState),
    fetchSales,
    fetchItems,
    addSale,
    addItems,
  }
}
