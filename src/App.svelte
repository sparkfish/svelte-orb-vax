<script>
  import Form from "@svelteschool/svelte-forms";
  import { Accordion, AccordionItem } from 'svelte-collapsible';

  let zipcode = "";

  let numclinics = 0;

  let apiData = [];

  async function handleSubmit(zipcode) {
    let url1 = "https://orbitron-dev.azurewebsites.net/nearest/";
    let url2 = "/clinics/to/";

    let endpoint = url1.concat(numclinics).concat(url2).concat(zipcode);

    let headers = new Headers();
    headers.append("Content-Type", "Application/Json");

    let requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    fetch(endpoint)
//    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(json => (apiData = json))
      .catch(error => console.log('error', error));
  }

</script>

<main>
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
</main>

<style>
fieldset {
  font-size: 1.5rem;
}


fieldset {
  padding: 10px 0;
  border: none;
}

:global(.accordion) {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

:global(.accordion-item) {
  border-bottom: 1px solid rgb(100, 120, 140);
}

.header {
  display: flex;
  align-items: center;
  padding: 0.5em;
}

.header h2 {
  margin: 0;
  padding: 0;
  font-size: 1em;
}

.header h3 {
  font-size: 0.8em;
}
.body {
  padding: 0.5em;
  margin: 0;
  font-size: 0.8rem;
}

</style>
