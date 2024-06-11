<script setup lang="ts">
import { pb } from '@/backend'
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsFavori } from '@/backend'

const maisonsListe = await allMaisonsFavori()
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>

  <MaisonCard v-for="maisonRecord in maisonsListe" :key="maisonRecord.id" v-bind="maisonRecord" />
</template>
