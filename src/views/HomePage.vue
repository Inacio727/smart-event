<template>
  <IonPage>
    <IonContent :fullscreen="true" class="ion-padding">
      <h1>SmartEvent</h1>
      <p>Descubra eventos na sua cidade</p>

      <IonButton expand="block" router-link="/eventos">
        Ver Eventos
      </IonButton>

      <IonButton expand="block" router-link="/favoritos">
        Favoritos
      </IonButton>

      <IonButton expand="block" router-link="/perfil">
        Perfil
      </IonButton>
      
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton} from '@ionic/vue';
</script>