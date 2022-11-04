<script setup>
import {useRouter} from 'vue-router'
import axios from 'axios'
import {ref,onMounted } from 'vue'

const router = useRouter()

const amiibos = ref([])

onMounted(async () => {
    const allAmiibos = await axios.get('https://www.amiiboapi.com/api/amiibo/')
    amiibos.value = allAmiibos.data.amiibo
})
</script>

<template>
    <section id="main">
		<div class="container">

			<!-- Content -->
			<article class="box post">
								
			<header>
			    <h2>Ma Collection</h2>
				<p>(ici le nombre d'amiibo)</p>
			</header>

			<p>
				<table>
					<tr>
						<th>Character</th>
						<th>game Series</th>
						<th>Action</th>
					</tr>
					<tr v-for="amiibo in amiibos" :key="amiibo.tail">
						<td>{{ amiibo.character }}</td>
						<td>{{ amiibo.gameSeries }}</td>
						<td><button @click="router.push({ name: 'details', params: { id: amiibo.tail } })">voir</button></td>
					</tr>
				</table>
			</p>
								
		    </article>

	    </div>
	</section>
</template>