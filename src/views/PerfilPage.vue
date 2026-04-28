<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
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
          <IonBackButton default-href="/"/>
        </IonButtons>
        <IonTitle>Pagina do seu Perfil!</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonItem>
        <IonLabel position="stacked">Nome</IonLabel>
        <IonInput v-model="nome"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Bio</IonLabel>
        <IonInput v-model="bio"></IonInput>
      </IonItem>
    </IonContent>
  </IonPage>
</template>
