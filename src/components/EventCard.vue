<script setup>
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";
import { useRouter } from "vue-router";

defineProps(["evento"]);
defineEmits(["favoritar"]);
</script>

<template>
  <IonCard
    :router-link="'/eventos/' + evento.id"
    router-direction="forward"
    button
  >
    <IonCardHeader>
      <IonCardTitle>{{ evento.titulo }}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <p>{{ evento.descricao }}</p>

      <IonButton @click="$emit('favoritar')"> Favoritar </IonButton>
      <IonButton
        :router-link="'/eventos/' + evento.id"
        router-direction="forward"
      >
        Detalhes
      </IonButton>
    </IonCardContent>
  </IonCard>
</template>
