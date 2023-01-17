<script setup>
import Counter from "~/components/Counter.vue";
import { useCounter, userState } from "~/composables/states";
const counter = useCounter();
const user = userState();
function handleState() {
  user.value.name = "Juanjo";
}
</script>
<template>
  <div id="main">
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    Name: {{ user.name }}
    <button @click="handleState">Change name</button>
  </div>
  <Counter id="counter" />
</template>
