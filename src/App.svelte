<script>
  import Form from "@svelteschool/svelte-forms";
  import { Accordion, AccordionItem } from 'svelte-collapsible';
  import { writable } from "svelte/store";

  let zipcode = "";

  let numclinics = 10;

  let apiData = [];

  let filteredData = [];

  async function handleSubmit(zipcode) {
    let url1 = "https://orbitron-dev.azurewebsites.net/nearest/";
    let url2 = "/clinics/to/";

    let endpoint = url1.concat(20).concat(url2).concat(zipcode);

    let headers = new Headers();
    headers.append("Content-Type", "Application/Json");

    let requestOptions = {
      method: 'GET',
      headers: headers,
	  redirect: 'follow',
    };

    await fetch(endpoint)
//    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(json => (apiData = json))
	  .catch(error => console.log('error', error));

	const key = 'name';

	const arrayUniqueByKey = [...new Map(apiData.map(item =>
	[item[key], item])).values()];

	filteredData = arrayUniqueByKey;
  }

  async function loadMore(zipcode) {
    let url1 = "https://orbitron-dev.azurewebsites.net/nearest/";
    let url2 = "/clinics/to/";

    let endpoint = url1.concat(20).concat(url2).concat(zipcode);

    let headers = new Headers();
    headers.append("Content-Type", "Application/Json");

    let requestOptions = {
      method: 'GET',
      headers: headers,
	  redirect: 'follow',
    };

    await fetch(endpoint)
//    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(json => (apiData = json))
	  .catch(error => console.log('error', error));

	const key = 'name';

	const arrayUniqueByKey = [...new Map(apiData.map(item =>
	[item[key], item])).values()];

	filteredData = arrayUniqueByKey;
  }

</script>

<!-- <main>
  <center>
    <img src="https://github.com/sparkfish/orbitron/raw/dev/orbitron.svg" style='max-width:30%;' align='middle' alt='The Orbitron logo'>
    <h2>Enter a ZIP code and number of results below to see vaccine clinics in the area.<h2>
	<h3> Click to expand results. </h3>
	<Form>
	  <fieldset>
	    <input
	      placeholder="ZIP code"
	      type="text"
	      name="zipcode"
	      bind:value={zipcode}/>
	    <br>
	    <input
	      placeholder="number of clinics"
	      type="number"
	      name="numclinics"
	      bind:value={numclinics}/>
	  </fieldset>
	</Form>

	<button type="submit" on:click={handleSubmit(zipcode)}>
	  Find {numclinics ? numclinics : ""} {numclinics == 1 ? "clinic" : "clinics"} near {zipcode ? zipcode : "me"}
	</button>

	{ #if apiData.length > 0 }
	  <Accordion>
	    { #each apiData as item }
	    <AccordionItem key={item.name}>
	      <div slot='header' class='header'>
		<div>
		  <h2>{ item.name }</h2>
		  <br>
		  <h3>{ item.phone }</h3>
		</div>
	      </div>
	      <p slot='body' class='body'>
		{ item.vaccine }
		<br><br>
		{ item.address }
		<br>
		{ item.city }, { item.state }
		<br>
		{ item.zip }
	      </p>
	    </AccordionItem>
	    { /each }
	  </Accordion>
	{ /if }
  </center>
</main> -->

<main>
	<header class="header">
			<img class="header-img" src="https://github.com/sparkfish/orbitron/raw/dev/orbitron.svg" alt='The Orbitron logo'>
	</header>
	<div class="hero">
		<div class="hero-left">
			<div class="hero-left-text">
				<h1 class="hero-left-text-title">Covid-19 Vaccine Finder</h1>
				<h3 class="hero-left-text-info">Find a location near you, then call or visit their website to make an appointment.</h3>
			</div>
			<p class="hero-sponsor">Powered by <span class="hero-sponsor-name">Orbitron</span></p>
		</div>
		<div class="hero-right">
			<img class="hero-img" src="http://sparkfish.github.io/svelte-orb-vax/baby.jpg" align='middle' alt='Family'>
		</div>
	</div>
	<div class="form">
		<h2 class="form-title">Search for a clinic near you</h2>
		<Form>
			<input
			class="form-input"
			placeholder="ZIP code"
			type="text"
			name="zipcode"
			bind:value={zipcode}/>
		</Form>
		<button class="form-button" type="submit" on:click={handleSubmit(zipcode)}>
			Search
		</button>
	</div>
	<div class="results">
		<ol>
			{ #if filteredData.length > 0 }
			{ #each filteredData as item }
				<li class="result">
					<div class="result-header">
						<h2 class="result-header-name">{ item.name }</h2>
						<h3 class="result-header-phone">{ item.phone }</h3>
					</div>
					<p class='result-body'>
						{ item.address }
						{ item.city }, { item.state }
						{ item.zip }
					</p>
				</li>
			{ /each }
			{ /if }
		</ol>
		{ #if filteredData.length > 10 }
			<button class="load-more" id="load-more" type="submit" on:click={loadMore(zipcode)}>
				Show More Results
			</button>
		{ /if }
	</div>
</main>

<style>
.header {
	display: flex;
}
.header-img {
	max-width: 7rem;
	margin: auto;
	margin-top: 0.5rem;
}
.hero {
	display: flex;
	flex-direction: column-reverse;
	color: #022B3A;
	margin-top: 1rem;
}
.hero-left {
	background-color: #BFDBF7;
	padding-left: 1rem;
}
.hero-left-text {
	display: flex;
	flex-direction: column;
}
.hero-left-text-title {
	font-size: 2rem;
	margin: 1rem 0;
}
.hero-left-text-info {
	font-size: 1rem;
	margin: 0;
	padding-right: 1rem;
}
.hero-sponsor {
	display: flex;
	justify-content: flex-end;
	padding-right: 1rem;
	color: #022B3A;
}
.hero-sponsor-name {
	color: #cd5c5c;
	margin-left: .2rem;
	font-weight: bold;
}
.hero-right {

}
.hero-img {
	max-width: 100%;
}
.form {
	display: flex;
	flex-direction: column;
	padding: 0 0 2rem 1em;
}
.form-title {
	margin: 2rem 0 1rem 0;
	color: #022B3A;
	font-size: 1.4rem;
}
.form-input {
	border: none;
	border-bottom: solid 1px #022B3A;
	margin-bottom: 1rem;
	width: 95%;
}
.form-button {
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 95%;
}
.results {
	
}
.result {
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #022B3A;
	width: 90%;
}
.result-header {
	color: #022B3A;
}
.result-header-name {
	margin: 0;
	font-size: 1.2rem;
}
.result-header-phone {
	margin: 0;
	font-size: 1rem;
	color: #cd5c5c;
}
.result-body {
	color: #022B3A;
	margin: 0;
	margin-top: .5rem;
	font-size: .9rem;
}
.load-more {
	display: block;
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 90%;
    margin-left: auto;
    margin-right: auto;
	margin-bottom: 1rem;
}
  
@media (min-width: 600px) {
.header {
	display: flex;
}
.header-img {
	max-width: 9rem;
	margin: auto;
	margin-top: 0.5rem;
}
.hero {
	display: flex;
	flex-direction: column-reverse;
	color: #022B3A;
	margin-top: 1rem;
}
.hero-left {
	background-color: #BFDBF7;
	padding-left: 1rem;
}
.hero-left-text {
	display: flex;
	flex-direction: column;
}
.hero-left-text-title {
	font-size: 2rem;
	margin: 1rem 0;
}
.hero-left-text-info {
	font-size: 1rem;
	margin: 0;
	padding-right: 1rem;
}
.hero-sponsor {
	display: flex;
	justify-content: flex-end;
	padding-right: 1rem;
	color: #022B3A;
}
.hero-sponsor-name {
	color: #cd5c5c;
	margin-left: .2rem;
	font-weight: bold;
}
.hero-right {

}
.hero-img {
	max-width: 100%;
	height: 25rem;
    width: 100vw;
}
.form {
	display: flex;
	flex-direction: column;
	padding: 0 0 2rem 2em;
}
.form-title {
	margin: 2rem 0 1rem 0;
	color: #022B3A;
	font-size: 1.4rem;
}
.form-input {
	border: none;
	border-bottom: solid 1px #022B3A;
	margin-bottom: 1rem;
	width: 95%;
}
.form-button {
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 45%;
}
.results {
	
}
.result {
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #022B3A;
	width: 95%;
}
.result-header {
	color: #022B3A;
}
.result-header-name {
	margin: 0;
	font-size: 1.2rem;
}
.result-header-phone {
	margin: 0;
	font-size: 1rem;
	color: #cd5c5c;
}
.result-body {
	color: #022B3A;
	margin: 0;
	margin-top: .5rem;
	font-size: .9rem;
}
.load-more {
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 43%;
    margin-left: 2rem;
	margin-bottom: 1rem;
}
}
@media (min-width: 900px) {
.header {
	display: flex;
}
.header-img {
	max-width: 11rem;
	margin: auto;
	margin-top: 0.5rem;
}
.hero {
	display: flex;
	flex-direction: row;
	color: #022B3A;
}
.hero-left {
	background-color: #BFDBF7;
	padding-left: 1rem;
	display: flex;
	flex-direction: column;
}
.hero-left-text {
	display: flex;
	flex-direction: column;
	width: 40vw;
	padding-top: 2rem;
}
.hero-left-text-title {
	font-size: 3rem;
	margin: 1rem 0;
}
.hero-left-text-info {
	font-size: 1.5rem;
	margin: 0;
	padding-right: 1rem;
}
.hero-sponsor {
	display: flex;
	justify-content: flex-end;
	padding-right: 1rem;
	color: #022B3A;
	margin-top: auto;
	font-size: 1.2rem;
}
.hero-sponsor-name {
	color: #cd5c5c;
	margin-left: .2rem;
	font-weight: bold;
}
.hero-right {

}
.hero-img {
	max-width: 100%;
}
.form {
	display: flex;
	flex-direction: column;
	padding: 0 0 2rem 1em;
	margin: 2rem auto 0 auto;
}
.form-title {
	margin: 2rem 0 1rem 0;
	color: #022B3A;
	font-size: 2rem;
}
.form-input {
	border: none;
	border-bottom: solid 1px #022B3A;
	margin-bottom: 1rem;
	width: 95%;
	font-size: 1.2rem;
}
.form-button {
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 40%;
	font-size: 1.2rem;
}
::marker {
    font-size: 1.3rem;
}
.results {
	
}
.result {
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #022B3A;
	width: 95%;
}
.result-header {
	color: #022B3A;
}
.result-header-name {
	margin: 0;
	font-size: 1.6rem;
}
.result-header-phone {
	margin: 0;
	font-size: 1.3rem;
}
.result-body {
	color: #022B3A;
	margin: 0;
	margin-top: .5rem;
	font-size: 1.1rem;
}
.load-more {
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 40%;
	font-size: 1.2rem;
    margin-left: 1rem;
	margin-bottom: 1rem;
}
}
@media (min-width: 1200px) {
.header {
	display: flex;
}
.header-img {
	max-width: 11rem;
	margin: auto;
	margin-top: 0.5rem;
}
.hero {
	display: flex;
	flex-direction: row;
	color: #022B3A;
}
.hero-left {
	background-color: #BFDBF7;
	padding-left: 1rem;
	display: flex;
	flex-direction: column;
}
.hero-left-text {
	display: flex;
	flex-direction: column;
	width: 45vw;
    padding-top: 4rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
}
.hero-left-text-title {
	font-size: 3rem;
	margin: 1rem 0;
}
.hero-left-text-info {
	font-size: 1.5rem;
	margin: 0;
	padding-right: 1rem;
}
.hero-sponsor {
	display: flex;
	justify-content: flex-end;
	padding-right: 1rem;
	color: #022B3A;
	margin-top: auto;
	font-size: 1.2rem;
}
.hero-sponsor-name {
	color: #cd5c5c;
	margin-left: .2rem;
	font-weight: bold;
}
.hero-right {

}
.hero-img {
	max-width: 100%;
	height: 30rem;
}
.form {
	display: flex;
	flex-direction: column;
	padding: 0 0 2rem 3em;
	margin: 2rem auto 0 auto;
}
.form-title {
	margin: 2rem 0 1rem 0;
	color: #022B3A;
	font-size: 2rem;
}
.form-input {
	border: none;
	border-bottom: solid 1px #022B3A;
	margin-bottom: 1rem;
	width: 95%;
	font-size: 1.2rem;
}
.form-button {
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 25%;
	font-size: 1.2rem;
}
::marker {
    font-size: 1.3rem;
}
.results {
	margin-left: 1rem;
}
.result {
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #022B3A;
	width: 95%;
}
.result-header {
	color: #022B3A;
}
.result-header-name {
	margin: 0;
	font-size: 1.6rem;
}
.result-header-phone {
	margin: 0;
	font-size: 1.3rem;
}
.result-body {
	color: #022B3A;
	margin: 0;
	margin-top: .5rem;
	font-size: 1.1rem;
}
.load-more {
	background-color: #022B3A;
	color: #FFFFFF;
	border: none;
	width: 25%;
	font-size: 1.2rem;
    margin-left: 2rem;
	margin-bottom: 1rem;
}
}
@media (min-width: 1800px) {

}
</style>