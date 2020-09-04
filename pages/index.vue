<template>
  <div>
    <Sale v-for="sale in sales" :key="sale.id" :data="sale"></Sale>
    <AddSale></AddSale>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import useItems from '~/composables/use-items'
import Sale from '~/components/Sale.vue'
import AddSale from '~/components/AddSale.vue'

export default defineComponent({
  name: 'Index',
  components: { Sale, AddSale },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    //@ts-ignore
    const { fetchSales, sales } = useItems({ ctx })

    onMounted(async () => {
      await fetchSales()
    })

    return { sales }
  },
})
</script>
