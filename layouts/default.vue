<template>
  <v-app>
    <header class="toolbar">
      <v-container>
        <v-row align="center" justify="center">
          <v-col
            align="center"
            justify="center"
            class="items-center justify-center hidden-sm-and-down"
            cols="3"
            sm="0"
          >
            <nuxt-link :to="'/'">
              <v-btn text color="white">
                <v-icon left color="white">fa-utensils</v-icon>
                <span>Ventes</span>
              </v-btn>
            </nuxt-link>
          </v-col>
          <v-col :lg="3" :md="3" :sm="12" align="center" justify="center">
            <v-text-field hide-details label="Recherche" single-line solo></v-text-field>
          </v-col>
          <v-col :lg="3" :md="3" :sm="12" align="center" justify="center">
            <nuxt-link :to="'/'">
              <b style="color: red">Interenchères</b>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </header>
    <v-main>
      <v-container>
        <v-row class="mt-6 mb-6">
          <v-col :lg="7" :md="7" :sm="12">
            <nuxt />
          </v-col>
          <v-col :lg="4" :md="4" :sm="12" offset-md="1" :offset-sm="0" class>
            <!-- Widgets -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  computed,
  onMounted,
} from '@vue/composition-api'

export default defineComponent({
  name: 'DefaultLayout',
  components: {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    let url = ref('')
    let searchValue = ref('')

    onMounted(async () => {
      if (typeof window !== 'undefined') {
        const localeUrl = computed(() => window.location.href)
        url.value = localeUrl.value
      }
    })

    return {
      url,
      searchValue,
    }
  },
})
</script>

<style scoped>
.toolbar {
  background: #2b2b2b;
}
</style>
