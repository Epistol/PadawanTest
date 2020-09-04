<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>{{ propData.description }}</v-card-text>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text color="red">Déposer un ordre</v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent({
  name: 'Item',
  components: {},
  props: {
    data: Object,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    const propData = computed(() => props.data)
    return { propData }
  },
})
</script>
