<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonPage,
  IonContent,
  IonInput,
} from "@ionic/vue";
import { ref, watch } from "vue";

const nome = ref("");

watch(nome, (novo) => {
  console.log("Nome alterado:", novo);
});
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/home" />
        </IonButtons>
        <IonTitle>Título</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonInput v-model="nome" placeholder="Seu nome"></IonInput>
    </IonContent>
  </IonPage>
</template>
