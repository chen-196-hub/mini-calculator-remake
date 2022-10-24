<template>
  <v-card class="text-center py-3 my-3">
    {{ props.show || 0 }}
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  show: string
}
const props = defineProps<Props>()
</script>
