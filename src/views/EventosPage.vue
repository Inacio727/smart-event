<script setup>
import { eventos } from "@/data/eventos";
import EventCard from "@/components/EventCard.vue";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
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
        <EventCard
        v-for="e in eventos"
        :key="e.id"
        :evento="e"
        >
        </EventCard>
    </IonContent>
  </IonPage>
</template>
