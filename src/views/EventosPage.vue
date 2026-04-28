<script setup>
import { eventos } from "@/data/eventos";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Veja aqui seus eventos!</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem
          v-for="evento in eventos"
          :key="evento.id"
          :router-link="'/eventos/' + evento.id"
        >
          {{ evento.titulo }}
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>
