<template>
  <v-card class="text-center py-3 my-3">
    <v-card-title> {{ number }} </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  number?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  number: '0',
})
</script>
