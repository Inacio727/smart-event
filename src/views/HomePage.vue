<template>
  <IonPage>
    <IonContent :fullscreen="true" class="ion-padding">
      <h1>SmartEvent</h1>
      <IonButton router-link="/eventos">
        Ver Eventos
      </IonButton>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton} from '@ionic/vue';
</script>