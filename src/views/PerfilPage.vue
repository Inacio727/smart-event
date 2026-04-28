<script setup>
import { ref, watch } from 'vue';

const nome = ref('');

watch(nome, (novo) => {
  console.log('Nome alterado:', novo);
});
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-input v-model="nome" placeholder="Seu nome"></ion-input>
    </ion-content>
  </ion-page>
</template>