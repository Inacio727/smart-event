<script setup>
import { useRoute } from "vue-router";
import { eventos } from "@/data/eventos";
import { computed } from "vue";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const route = useRoute();

const evento = computed(() => eventos.find((e) => e.id == route.params.id));

function toggleFavorito() {
  evento.value.favorito = !evento.value.favorito;
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/eventos"></IonBackButton>
        </IonButtons>
        <IonTitle>Detalhes do Evento {{ evento.titulo }}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard v-if="evento">
        <IonCardHeader>
          <IonCardTitle>{{ evento.titulo }}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>{{ evento.descricao }}</p>

          <IonButton @click="toggleFavorito" expand="block">
            {{ evento.favorito ? "Remover dos favoritos" : "Favoritar" }}
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
