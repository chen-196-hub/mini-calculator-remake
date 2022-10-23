<template>
  <v-card class="text-center py-3 my-3">
    {{ hello }}
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const hello = ref('hello')
</script>
