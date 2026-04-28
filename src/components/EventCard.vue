<script setup>
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';

defineProps(['evento']);
defineEmits(['favoritar']);
</script>

<template>
    <IonCard>
        <IonCardHeader>
            <IonCardTitle>{{ evento.titulo }}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
            <IonButton @click="$emit('favoritar')">
                Favoritar
            </IonButton>
        </IonCardContent>
    </IonCard>
</template>