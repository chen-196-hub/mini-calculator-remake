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

const calcs = ref<string[]>([
  'ac',
  'plu-min',
  'percent',
  'divide',
  'times',
  'minus',
  'plus',
  'equal',
])

const handleClick = (e: string = '0') => {
  if (calcs.value.includes(e)) {
    handleCalc(e)
  }
  if (numbersKeys.value.includes(e)) {
    handleNumber(e)
  }
  showNumber.show = showNumber.calc.join('')
}

const handleCalc = (key: string): void => {
  switch (key) {
    case 'ac':
      showNumber.calc = []
      break

    default:
      break
  }
}

const handleNumber = (key: string): void => {
  const num: string = key === 'ten' ? '.' : key
  showNumber.calc.push(num)
}
</script>
