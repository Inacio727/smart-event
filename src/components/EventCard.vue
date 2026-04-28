<script setup>
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

defineProps(["evento"]);
defineEmits(["favoritar"]);
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>{{ evento.titulo }}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <p>{{ evento.descricao }}</p>
      <IonButton
        :router-link="'/eventos/' + evento.id"
        router-direction="forward"
      >
        Detalhes
      </IonButton>
    </IonCardContent>
  </IonCard>
</template>
