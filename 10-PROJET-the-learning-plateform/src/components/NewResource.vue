<template>
  <base-card>
    <h2>Ajouter une nouvelle ressource :</h2>
    <form class="form-main">
      <div class="form-line">
        <label for="title">Title :</label>
        <input type="text" id="title" v-model="title">
      </div>
      <div class="form-line">
        <label for="description">Description :</label>
        <input type="textarea" id="description" v-model="description">
      </div>
      <div class="form-line">
        <label for="link">Link :</label>
        <input type="text" id="link" v-model="link">
      </div>
      <div class="form-line">
        <input class="blue-button" type="submit" value="Enregistrer" @click.prevent="sendNewResource">
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  emit: ['send-new-resource'],
  data() {
    return {
      title: '',
      description: '',
      link: ''
    }
  },
  methods: {
    sendNewResource() {
      this.$emit('send-new-resource', this.title, this.description, this.link)
    }
  }
}
</script>

<style scoped>
.form-main {
  display: table;
  width: 100%;
}
.form-line {
  display: table-row;
  /* width: 100%; */
}
label, input {
  display: table-cell;
  margin-bottom: 8px;
}
input {
  width: 100%;
}
.blue-button {
  background-color: rgb(85, 85, 255);
  color: white;
  border-radius: 5px; 
  border: none;
  padding: 4px;
}

</style>