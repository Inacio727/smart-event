<script setup>
import { eventos } from '@/data/eventos';
import { IonContent, IonItem, IonList, IonPage } from '@ionic/vue';
</script>

<template>
    <IonPage>
        <IonContent>
            <IonList>
                <IonItem
                v-for="evento in eventos"
                :key="evento.id"
                :router-link="'/eventos/' + evento.id"
                >
                {{ evento.titulo }}
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage>
</template>