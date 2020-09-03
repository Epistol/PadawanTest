<template>
  <div>
    <Sale v-for="sale in sales" :key="sale.id" :data="sale"></Sale>

    <v-fab-transition>
      <v-btn fab large dark bottom right class="v-btn--example">
        <v-icon x-large dark>gavel</v-icon>
      </v-btn>
    </v-fab-transition>
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
