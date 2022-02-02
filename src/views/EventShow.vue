<template>
  <h1>Hello Show Event</h1>
  <div>
    <router-link :to="{ name: 'event-create' }">Create</router-link>
  </div>
</template>

<script>
import EventCreate from '@/components/EventCreate.vue';
export default {
	props: {
		EventCreate, 
		},
	}
};
</script>

<style>
</style>