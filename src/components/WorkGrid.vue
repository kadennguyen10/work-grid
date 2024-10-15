<template>
  <Panel
    header="Work Grid"
    :pt="{
      header: { class: 'bg-primary text-2xl' },
    }"
  >
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Grid 1"
          v-model="input1"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Grid 2"
          v-model="input2"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Grid 3"
          v-model="input3"
          @keyup.enter="unlock"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Result"
          v-model="input4"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <Button label="Submit" @click="unlock" />
      </div>
    </div>
  </Panel>
  <Panel
    header="E Acc"
    :pt="{
      header: { class: 'bg-primary text-2xl' },
    }"
  >
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Grid 1"
          v-model="inputE1"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Grid 2"
          v-model="inputE2"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Grid 3"
          v-model="inputE3"
          @keydown.enter="unlockE"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <InputText
          type="text"
          class="p-inputtext-lg"
          placeholder="Result E"
          v-model="inputE4"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <Button label="Submit" @click="unlockE" />
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { ref } from "vue";

const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const inputE1 = ref("");
const inputE2 = ref("");
const inputE3 = ref("");
const input4 = ref("");
const inputE4 = ref("");
import { gridTable, gridTableE } from "@/assets/gridTable";

const getCharIndex = (char: string) => {
  return char.toUpperCase().charCodeAt(0) - 65; // This will return 0 for 'A', 1 for 'B', etc.
};

const unlock = () => {
  const firstChar1 = getCharIndex(input1.value.charAt(0));
  const secondChar1 = parseInt(input1.value.charAt(1)) - 1;
  const firstChar2 = getCharIndex(input2.value.charAt(0));
  const secondChar2 = parseInt(input2.value.charAt(1)) - 1;
  const firstChar3 = getCharIndex(input3.value.charAt(0));
  const secondChar3 = parseInt(input3.value.charAt(1)) - 1;

  input1.value = gridTable[secondChar1][firstChar1].toString();
  input2.value = gridTable[secondChar2][firstChar2].toString();
  input3.value = gridTable[secondChar3][firstChar3].toString();
  input4.value =
    gridTable[secondChar1][firstChar1].toString() +
    gridTable[secondChar2][firstChar2].toString() +
    gridTable[secondChar3][firstChar3].toString();
};

const unlockE = () => {
  const firstChar1 = getCharIndex(inputE1.value.charAt(0));
  const secondChar1 = parseInt(inputE1.value.charAt(1)) - 1;
  const firstChar2 = getCharIndex(inputE2.value.charAt(0));
  const secondChar2 = parseInt(inputE2.value.charAt(1)) - 1;
  const firstChar3 = getCharIndex(inputE3.value.charAt(0));
  const secondChar3 = parseInt(inputE3.value.charAt(1)) - 1;

  inputE1.value = gridTableE[secondChar1][firstChar1].toString();
  inputE2.value = gridTableE[secondChar2][firstChar2].toString();
  inputE3.value = gridTableE[secondChar3][firstChar3].toString();
  inputE4.value =
    gridTableE[secondChar1][firstChar1].toString() +
    gridTableE[secondChar2][firstChar2].toString() +
    gridTableE[secondChar3][firstChar3].toString();
};
</script>

<style scoped></style>
