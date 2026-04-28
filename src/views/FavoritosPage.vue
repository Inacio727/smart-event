<script setup>

import { eventos } from '@/data/eventos';
import { IonContent, IonItem, IonList, IonPage } from '@ionic/vue';
import { computed } from 'vue';

const favoritos = computed(() =>
    eventos.filter(e => e.favorito)
);
</script>

<template>
    <IonPage>
        <IonContent class="ion-padding">
            <div v-if="favoritos.length === 0">
                Nenhum favorito ainda
            </div>

            <IonList v-else>
                <IonItem v-for="x in favoritos" :key="x.id">
                    {{ e.titulo }}
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage>
</template>