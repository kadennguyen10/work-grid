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
        />
      </div>
    </div>
    <div class="grid">
      <div class="col m-2">
        <Button label="Submit" @click="unlock" />
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { ref } from "vue";

const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
import { gridTable } from "../assets/gridTable";

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
};
</script>

<style scoped></style>
