<template>
  <div>
    <Sale v-for="sale in sales" :key="sale.id" :data="sale"></Sale>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from '@vue/composition-api'
import useItems from '~/composables/use-items'
import Sale from '~/components/Sale.vue'

export default defineComponent({
  name: 'Index',
  components: { Sale },
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
