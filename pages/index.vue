<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-container>
        <ShowNumberArea :number="showNumber.show" />
        <ButtonsArea :calc-status="calcStatus" @onClick="handleClick" />
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import _ from 'big.js'
import { Calc } from '@/enum/calc'

interface ShowNumber {
  show: string
  calc: string[]
}

interface CalcStatus {
  isCalc: boolean
  calcType: string
}
const showNumber = reactive<ShowNumber>({
  show: '0',
  calc: ['0'],
})
const firstNumber = ref<number>(0)
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

const calcStatus = reactive<CalcStatus>({ isCalc: false, calcType: '' })

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
  if (calcs.value.includes(e)) handleCalc(e)
  if (numbersKeys.value.includes(e)) {
    handleNumber(e)
    showNumber.show = showNumber.calc.join('')
  }
}

const handleCalc = (key: string): void => {
  switch (key) {
    case 'ac':
      showNumber.calc = ['0']
      calcStatus.calcType = ''
      firstNumber.value = 0
      showNumber.show = showNumber.calc.join('')
      break
    case 'plu-min':
      if (calcStatus.isCalc) {
        showNumber.calc = ['0']
        showNumber.show = '0'
        calcStatus.isCalc = false
      }
      if (showNumber.show === '0') {
        showNumber.calc[0] !== '-'
          ? showNumber.calc.unshift('-')
          : showNumber.calc.shift()
        showNumber.show = showNumber.calc.join('')
      } else {
        const ary: string[] = showNumber.show.split('')
        ary[0] !== '-' ? ary.unshift('-') : ary.shift()
        showNumber.show = ary.join('')
      }
      break
    case 'percent':
      showNumber.show = String(_(Number(showNumber.show)).div(100))
      showNumber.calc = showNumber.show.split('')
      calcStatus.isCalc = true
      break
    case 'divide':
      multiCalc()
      calcStatus.calcType = Calc.divide
      saveFirstNumber()
      break
    case 'times':
      multiCalc()
      calcStatus.calcType = Calc.times
      saveFirstNumber()
      break
    case 'minus':
      multiCalc()
      calcStatus.calcType = Calc.minus
      saveFirstNumber()
      break
    case 'plus':
      multiCalc()
      calcStatus.calcType = Calc.plus
      saveFirstNumber()
      break
    case 'equal': {
      const answer = calc(
        firstNumber.value,
        Number(showNumber.show),
        calcStatus.calcType
      )
      showNumber.show = String(answer)
      calcStatus.calcType = ''
      // firstNumber.value = 0
      // if( typeof answer !== 'string' ) firstNumber.value = answer
      break
    }
    default:
      break
  }
}
const multiCalc = (): void => {
  // console.log(firstNumber.value)
  if (calcStatus.calcType !== '') {
    const answer: number | string = calc(
      firstNumber.value,
      Number(showNumber.show),
      calcStatus.calcType
    )
    showNumber.show = String(answer)
  }
}

const saveFirstNumber = (): void => {
  if (firstNumber.value === 0) {
    firstNumber.value = Number(showNumber.show)
  }
  calcStatus.isCalc = true
}

const handleNumber = (key: string): void => {
  if (calcStatus.isCalc) {
    showNumber.calc = ['0']
    calcStatus.isCalc = false
  }
  const num: string = key === 'ten' ? '.' : key
  if (
    showNumber.calc[0] === '0' &&
    showNumber.calc.length === 1 &&
    num !== '.'
  ) {
    showNumber.calc.shift()
  } else if (
    showNumber.calc[1] === '0' &&
    showNumber.calc[0] === '-' &&
    num !== '.'
  ) {
    showNumber.calc.splice(1, 1)
  }
  showNumber.calc.push(num)
}

const calc = (
  firstNumber: number,
  secondNumber: number,
  calcType: string
): number | string => {
  switch (calcType) {
    case 'plus':
      return Number(_(firstNumber).plus(secondNumber))
    case 'minus':
      return Number(_(firstNumber).minus(secondNumber))
    case 'times':
      return Number(_(firstNumber).times(secondNumber))
    case 'divide':
      if (secondNumber === 0) return 'Infinity'
      return Number(_(firstNumber).div(secondNumber))
    default:
      return 0
  }
}
</script>
