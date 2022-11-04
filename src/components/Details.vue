<script setup>
import axios from 'axios'
import {ref,onMounted } from 'vue'
import {useRoute} from "vue-router"

const route = useRoute()

const currentAmiibo = ref({})

const {id} = route.params 

onMounted(async () => {
    const amiibo = await axios.get('https://www.amiiboapi.com/api/amiibo/?tail=' + id)
    currentAmiibo.value = amiibo.data.amiibo[0]

    console.log(currentAmiibo)
})
</script>

<template>
    <section id="main">
		<div class="container">
			<div class="row">
				<div class="col-4 col-12-medium">

				    <!-- Sidebar -->
					<section class="box">
						<header>
							<h3>Infos</h3>
						</header>

					    <p> amiiboSeries: <b>{{ currentAmiibo.amiiboSeries }}</b> <br />
						character: {{ currentAmiibo.character }}<br />
						gameSeries: {{ currentAmiibo.gameSeries }}<br />
						type: {{ currentAmiibo.type }}
						</p>
										
					</section>

					<section class="box">
						<header>
							<h3>Dates sorties</h3>
						</header>
										
                        <ul class="divided">
                            <li v-for="(release, key) in currentAmiibo.release" :key="key">{{ key }}: {{ release }}</li>
                        </ul>				
					</section>

				</div>
			    <div class="col-8 col-12-medium imp-medium">

					<!-- Content -->
					<article class="box post">
						<a href="#" class="featured"><img :src="currentAmiibo.image" :alt="currentAmiibo.name" /></a>
							<header>
								<h2>{{ currentAmiibo.name }}</h2>
								<p>{{ currentAmiibo.type }}</p>
							</header>		
					</article>

				</div>
			</div>
		</div>
	</section>
</template>