<template>
  <div>
    <v-fab-transition>
      <v-btn fab fixed large dark bottom right class="v-btn--example" @click="toggleDialog(true)">
        <v-icon x-large dark>mdi-gavel</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog max-width="500px" v-model="dialog">
      <v-card class="mx-auto">
        <v-form ref="form" v-model="valid" :lazy-validation="true" class="pa-4 pt-6">
          <v-text-field filled label="Titre de la vente" v-model="sale.title"></v-text-field>
          <v-textarea
            auto-grow
            clearable
            v-model="sale.description"
            rows="4"
            filled
            name="input-5-3"
            label="Description de la vente"
            value
          ></v-textarea>
          <v-card-text>Lots</v-card-text>

          <v-list>
            <v-list-item v-for="(item, id) in items.content" :key="id" link>
              <v-list-item-content>
                <v-text-field
                  filled
                  label="Description du lot"
                  v-model="item.description"
                  :value="item.description"
                ></v-text-field>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1" @click="removeItem(id)">mdi-minus</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-btn class="mx-2" fab dark small right bottom color="indigo" @click="addItem()">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="sendForm()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed,
  reactive,
} from '@vue/composition-api'
import useItems from '~/composables/use-items'

export default defineComponent({
  name: 'AddSale',
  components: {},
  props: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    //@ts-ignore
    const { fetchSales, addSale } = useItems({ ctx })
    const dialog = ref(false)
    const valid = ref(true)
    const items = reactive({ content: [{ description: '' }] })
    const sale = reactive({ title: '', description: '' })

    const addItem = () => {
      items.content.push({ description: '' })
    }

    const removeItem = (id: number) => {
      console.log('removeItem -> id', id)
      items.content.splice(id, 1)
    }

    const toggleDialog = (value: boolean) => {
      dialog.value = value
    }

    const sendForm = async () => {
      const data = await addSale(sale, items)
    }

    return {
      toggleDialog,
      dialog,
      valid,
      items,
      addItem,
      removeItem,
      sale,
      sendForm,
    }
  },
})
</script>
