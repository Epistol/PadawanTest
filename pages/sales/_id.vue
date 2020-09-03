<template>
  <div>
    <div v-if="sale">
      <h1>
        {{ sale.title }}
      </h1>
      <span>{{ sale.description }}</span>
    </div>

    <div v-if="items">
      <v-container fluid>
        <v-row>
          <v-col v-for="item in items" :key="item.id" :cols="6">
            <Item :key="item.id" :data="item"></Item>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import useItems from '~/composables/use-items'
import Item from '~/components/Item.vue'

export default defineComponent({
  name: 'Sale',
  components: { Item },
  props: {
    data: Object,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    const slug: string = ctx.root.$route.params?.id
    //@ts-ignore
    const { fetchItems, items, fetchSales, sales } = useItems({ ctx })
    let sale = ref(null)

    onMounted(async () => {
      await fetchSales()
      await fetchItems(slug)
      sale.value = sales.value.find((sale: any) => (sale.id = slug))
    })

    return { slug, items, sales, sale }
  },
})
</script>
