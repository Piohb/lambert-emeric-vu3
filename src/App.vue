<script setup>
</script>

<template>
  <section id="header">

    <h1>
      <router-link :to="{ name: 'home' }">AmiiVue</router-link>
    </h1>

    <nav id="nav">
			<ul>
				<li><router-link :to="{ name: 'home' }" active-class="current">Home</router-link></li>
				<li><router-link :to="{ name: 'list' }" active-class="current">Liste Amiibo</router-link></li>
			</ul>
		</nav>

    <router-view v-if="$route.name === 'home'"></router-view>

  </section>

  <router-view v-if="$route.name !== 'home'"></router-view>
  
  <section id="footer">
		<div class="container">
			<div class="row">						
				<div class="col-12">

					<!-- Copyright -->
					<div id="copyright">
						<ul class="links">
							<li>&copy;AmiiVue ~ Ynov Lyon . All rights reserved.</li>
              <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</div>			

				</div>
			</div>
		</div>
	</section>		

</template>

<style scoped>
</style>
