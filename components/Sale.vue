<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title> {{ propData.title }} </v-card-title>
    <v-card-text>
      {{ propData.description }}
    </v-card-text>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn color="purple" text> Explore </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import useItems from '~/composables/use-items'
export default defineComponent({
  name: 'Sale',
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
