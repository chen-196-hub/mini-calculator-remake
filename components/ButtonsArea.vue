<template>
  <v-card class="text-center">
    <v-row v-for="r in keyContent" :key="r" no-gutters>
      <v-col v-for="n in r" :key="n" :cols="n === '0' ? 6 : 3">
        <v-card class="pa-2" tile>
          <v-btn x-large rounded>
            {{ n }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const keyContent = ref<string[][]>([
  ['AC', '+/-', '%', '➗'],
  ['7', '8', '9', '✖️'],
  ['4', '5', '6', '➖'],
  ['1', '2', '3', '➕'],
  ['0', '.', '🟰'],
])
</script>
