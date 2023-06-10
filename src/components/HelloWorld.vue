<script setup>
import ClientService from '../service/ClientService'
import { ref, onMounted } from 'vue'
import EasyDataTable from 'vue3-easy-data-table';
import html2pdf from "html2pdf.js";

const headers = [
  { text: "First name", value: "firstName" },
  { text: "Last name", value: "lastName" },
  { text: "NUMBER", value: "walletBalance" }
]

const fName = ref('');
const fNameEnds = ref('');
const lNameEnds = ref('');
const fbalance = ref('');



const bookList = ref(new Array)

const getClientsData = async () => {
  await ClientService.getClientsData().then((response) => {
    bookList.value = response.data
  })
}

const filter = async () => {
  await ClientService.getFilteredClientsData().then((response) => {
    bookList.value = response.data
  })
}

const firstNameList = async () => {
  console.log(fName.value)
  await ClientService.firstNameList(fName.value).then((response) => {
    bookList.value = response.data
  })
}

const firstNameEndsWith = async () => {
  console.log(fName.value)
  await ClientService.firstNameEndsWith(fNameEnds.value).then((response) => {
    bookList.value = response.data
  })
}

const lastNameEndsWith = async () => {
  console.log(fName.value)
  await ClientService.lastNameEndsWith(lNameEnds.value).then((response) => {
    bookList.value = response.data
  })
}

const balance = async () => {
  console.log(fName.value)
  await ClientService.balance(fbalance.value).then((response) => {
    bookList.value = response.data
  })
}




const exportToPDF = async () => {
      html2pdf(document.getElementById("element-to-convert"), {
				margin: 1,
  			filename: "html.pdf",
			});
    }


onMounted(getClientsData)
</script>


<template >

  <div style="display:flex;margin-bottom:10%">
  <form @submit.prevent="getClientsData">
    <button type="submit" class="btn btn-primary">Lista wszystkich</button>
  </form>
  <br>
  <form @submit.prevent="filter">
    <button type="submit" class="btn btn-primary">Lista limitowana</button>
  </form>
  <br>
  <form @submit.prevent="firstNameList(fName)">
    <input v-model="fName" type="text">
    <br>
    <button type="submit" class="btn btn-primary">Filtr pierwsze imie</button>
  </form>
  </div>
  <div style="display:flex;margin-bottom:10%">
      <form @submit.prevent="firstNameEndsWith(fNameEnds)">
        <input v-model="fNameEnds" type="text">
        <br>
        <button type="submit" class="btn btn-primary">Pierwsze imie końszy sie na </button>
      </form>
  <br>
  <form @submit.prevent="lastNameEndsWith(lNameEnds)">
    <input v-model="lNameEnds" type="text">
    <br>
    <button type="submit" class="btn btn-primary">Nazwisko imie końszy sie na </button>
  </form>
  <br>
  <form @submit.prevent="balance(fbalance)">
    <input v-model="fbalance" type="text">
    <br>
    <button type="submit" class="btn btn-primary">Stan konta</button>
  </form>
  </div>
  <div id="element-to-convert">
  <EasyDataTable :headers="headers" :items="bookList" />
  </div>
  <div>
    <form @submit.prevent="exportToPDF">
      <br>
      <button type="submit" class="btn btn-primary">Export to pdf</button>
    </form>
  </div>
  
</template>