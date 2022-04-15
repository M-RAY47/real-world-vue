<template>
	<div class="notification-bar">
		<p>{{ notifiction.message }}</p>
	</div>
</template>

<script>
export default {
	props: { 
		notifiction: {
			type: Object,
			required: true,
		}
	}
}
</script>

<style lang="scss" scoped>
.notifiction-bar {
  margin: 1em 0 1em;
}
</style>
