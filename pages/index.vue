<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-container>
        <ShowNumberArea :number="showNumber.show" />
        <ButtonsArea @onClick="handleClick" />
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ShowNumber {
  show: string
  calc: string[]
}
const showNumber = reactive<ShowNumber>({
  show: '0',
  calc: [],
})
// const firstNumber = ref(0)
// const secondNumber = ref(0)
// const processKeys = ref()
const numbersKeys = ref([
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'ten',
])
// const calcs = ref<string[]>([
//   'ac',
//   'plu-min',
//   'percent',
//   'divide',
//   'times',
//   'minus',
//   'plus',
//   'equal',
// ])
const handleClick = (e: string = '0') => {
  if (e === 'ac') {
    showNumber.calc = []
  }
  if (numbersKeys.value.includes(e)) {
    const num: string = e === 'ten' ? '.' : e
    showNumber.calc.push(num)
  }
  showNumber.show = showNumber.calc.join('')
}
</script>
