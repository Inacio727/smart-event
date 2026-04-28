<script setup>
import { eventos } from "@/data/eventos";
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { computed } from "vue";

const favoritos = computed(() => eventos.filter((e) => e.favorito));
</script>

<template>
  <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton default-href="/"></IonBackButton>
            </IonButtons>
            <IonTitle>Página de Eventos Favoritos</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <div v-if="favoritos.length === 0">Nenhum favorito ainda</div>

      <IonList v-else>
        <IonItem v-for="x in favoritos" :key="x.id">
          {{ e.titulo }}
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>
