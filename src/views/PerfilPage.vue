<script setup>
import { IonContent, IonInput, IonPage } from '@ionic/vue';
import { ref, watch } from 'vue';

const nome = ref('');

watch(nome, (novo) => {
    console.log('Nome alterado:', novo);
});
</script>

<template>
    <IonPage>
        <IonContent class="ion-padding">
            <IonInput v-model="nome" placeholder="Seu nome"></IonInput>
        </IonContent>
    </IonPage>
</template>