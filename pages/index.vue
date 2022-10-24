<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-container>
        <ShowNumberArea :show="a" />
        <ButtonsArea @onClick="(e) => (a = e)" />
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const a = ref('')
</script>
