<template>
  <div class="container-fluid">
    <div class="row sizing img" :style="{ 'background-image': 'url(' + apod.img + ')' }">
      <div class="col">
        <form @submit.prevent="getAPOD">
          <input
            v-model="state.newDate"
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2021-09-21"
          >
          <button type:submit>
            Submit
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col text-white">
        <!-- {{ apod.explanation }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { apodService } from '../services/APODService.js'
import { logger } from '../utils/Logger'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      newDate: ''
    })
    return {
      state,
      apod: computed(() => AppState.date),
      async getAPOD() {
        try {
          await apodService.getAPOD(state.newDate)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.img{
 background-size: cover;
}

.sizing{
min-height: 90vh
}
</style>
