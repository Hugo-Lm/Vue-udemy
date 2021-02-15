<template>
  <base-card>
    <div class="top-card">
      <h2>{{ title }}</h2>
      <div class="button-div">
        <button @click="deleteResource">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
    <p>{{ description }}</p>
    <a :href="link">View resource</a>
  </base-card>
</template>


<script>
export default {
  emits: ['delete-resource'],
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteResource() {
      this.$emit('delete-resource', this.title)
    }
  }
}
</script>

<style scoped>
.top-card {
  display: flex;
  justify-content: space-between;
}

.top-card h2 {
  margin: 0;
}

.button-div {
  margin: auto 0;
}
.button-div button {
  background-color: rgb(255, 78, 78);
  color: white;
  border-radius: 50%; 
  border: none;
  padding: 4px;
  width: 23px;
  height: 23px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.button-div button:hover {
  background-color: rgb(240, 38, 38);
}
</style>