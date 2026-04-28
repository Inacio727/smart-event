<script setup>
import { useRoute } from 'vue-router';
import { eventos } from '@/data/eventos';
import { computed } from 'vue';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/vue';

const route = useRoute();

const evento = computed(() =>
    eventos.find(e => e.id == route.params.id)
);

function toggleFavorito() {
    evento.value.favorito = !evento.value.favorito;
}
</script>

<template>
    <IonPage>
        <IonContent class="ion-padding">
            <IonCard v-if="evento">
                <IonCardHeader>
                    <IonCardTitle>{{ evento.titulo }}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    {{ evento.descricao }}
                    <IonButton @click="toggleFavorito">
                        Favoritar
                    </IonButton>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
</template>