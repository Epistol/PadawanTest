<template>
  <div>
    <div v-if="sales.length">
      <h2>Ventes</h2>
      <template v-for="sale in sales">
        <Sale :data="sale" :key="sale.id" />
      </template>
    </div>

    <div v-if="items.length" id="items">
      <h2>Lôts</h2>
      <template>
        <v-col v-for="item in items" :key="item.id" :cols="6">
          <Item :key="item.id" :data="item"></Item>
        </v-col>
      </template>
    </div>

    <div v-if="!sales.length && !items.length">
      <p>Hmmm, on dirait qu'il n'existe rien ou que votre requête est vide.</p>
    </div>

    <div v-if="!sales.length && items.length">
      <h2>Ventes : 0</h2>
    </div>
    <div v-if="sales.length && !items.length">
      <h2>Lôts : 0</h2>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import useItems from '~/composables/use-items'
import Sale from '~/components/Sale.vue'
import Item from '~/components/Item.vue'

export default defineComponent({
  name: 'Result',
  components: { Item, Sale },
  props: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    //@ts-ignore
    const { items, searchQueryAction, sales, resetState } = useItems({
      ctx,
    })
    const query = ctx.root.$route?.query.query

    watch(
      () => ctx.root.$route?.query,
      (newQuery, prevQuery) => {
        //@ts-ignore
        searchQueryAction(newQuery.query)
      }
    )

    onMounted(async () => {
      if (query.length) {
        //@ts-ignore
        await searchQueryAction(query)
      }
    })

    return { query, items, sales }
  },
})
</script>
