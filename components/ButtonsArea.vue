<template>
  <v-card class="text-center">
    <v-row v-for="r in keyContent" :key="r.key" no-gutters>
      <v-col v-for="n in r" :key="n.key" :cols="n.key === '0' ? 6 : 3">
        <v-card class="py-2 px-5" tile>
          <v-btn x-large rounded width="100%" @click="$emit('onClick', n.key)">
            {{ n.value }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface KeyContent {
  key: string
  value: string
}

const keyContent = ref<KeyContent[][]>([
  [
    { key: 'ac', value: 'AC' },
    { key: 'plu-min', value: '+/-' },
    { key: 'percent', value: '%' },
    { key: 'divide', value: '➗' },
  ],
  [
    { key: '7', value: '7' },
    { key: '8', value: '8' },
    { key: '9', value: '9' },
    { key: 'times', value: '✖️' },
  ],
  [
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: '6', value: '6' },
    { key: 'minus', value: '➖' },
  ],
  [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: 'plus', value: '➕' },
  ],
  [
    { key: '0', value: '0' },
    { key: 'ten', value: '.' },
    { key: 'equal', value: '🟰' },
  ],
])
</script>
