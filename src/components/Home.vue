<script setup>
import axios from 'axios'
import {ref,onMounted } from 'vue'

const amiibos = ref([])

onMounted(async () => {
    const allAmiibos = await axios.get('https://www.amiiboapi.com/api/amiibo/?type=figure')
    amiibos.value = allAmiibos.data.amiibo.sort(() => 0.5 - Math.random())
})
</script>

<template>

    <section id="banner">
		<header>
			<h2>Hey.Bienvenue sur ma collection</h2>
		</header>
	</section>

    <section id="intro" class="container">
		<div class="row">
		    <div class="col-4 col-12-medium" v-for="amiibo in amiibos.slice(0, 3)" :key="amiibo.tail">
				<section class="middle">
					<img :src="amiibo.image" />
					<header>
						<h2>{{ amiibo.character }}</h2>
					</header>
					<p>{{ amiibo.gameSeries }}</p>
				</section>
			</div>
		</div>						
		<footer>
			<ul class="actions">
				<li><router-link :to="{ name: 'list' }" class="button large">Liste complète</router-link></li>
			</ul>
		</footer>
	</section>

</template>