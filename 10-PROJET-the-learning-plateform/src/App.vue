<template>
  <the-header></the-header>
  <div class="container">
    <navbar-choice 
      :storedResourcesIsActive="storedResourcesIsActive"
      :addresourcesIsActive="addresourcesIsActive"
      @switch-panel="switchPanel">
    </navbar-choice>
    <keep-alive>
      <div v-if="showAddResourcePanel === false">
        <card-resource 
          v-for="resource in resources" 
          :key="resource.title"
          :title="resource.title"
          :description="resource.description"
          :link="resource.link"
          @delete-resource="deleteResource">
        </card-resource>
      </div>
      <new-resource v-else 
        @send-new-resource="addNewResource">
      </new-resource>
    </keep-alive>
    <error-message 
      v-if="showErrorMessage"
      @disable-error="disableError">
    </error-message>
  </div>
</template>

<script>
import NavbarChoice from './components/NavbarChoice.vue';
import CardResource from './components/CardResource.vue';
import NewResource from './components/NewResource.vue';

export default {
  components: {
    NavbarChoice,
    CardResource,
    NewResource
  },
  data() {
    return {
      storedResourcesIsActive: true,
      addresourcesIsActive: false,
      showAddResourcePanel: false,
      showErrorMessage: false,
      resources: [
        {
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org/'
        },
        {
          title: 'Udemy - Master Vue',
          description: 'a great Vue course, by Schartzmuller',
          link: 'https://www.udemy.com/course/vuejs-2-the-complete-guide'
        }
      ]
    } 
  },
  methods: {
    switchPanel() {
      this.showAddResourcePanel = !this.showAddResourcePanel;
      this.storedResourcesIsActive = !this.storedResourcesIsActive;
      this.addresourcesIsActive = !this.addresourcesIsActive;
    },
    addNewResource(title, description, link) {
      if (title === "") {
        this.showErrorMessage = true;
        // this.showAddResourcePanel = false;
        // this.storedResourcesIsActive = !this.storedResourcesIsActive;
        // this.addresourcesIsActive = !this.addresourcesIsActive;
      }
      else {
        this.resources.unshift( {title, description, link} );
        this.showAddResourcePanel = false;
        this.storedResourcesIsActive = !this.storedResourcesIsActive;
        this.addresourcesIsActive = !this.addresourcesIsActive;
      }
    },
    disableError() {
      this.showErrorMessage = !this.showErrorMessage
    },
    deleteResource(resourceId) {
      const resourceToDelete = this.resources.find(resource => resource.id === resourceId)
      const indexResourceToDelete = this.resources.indexOf(resourceToDelete)
      this.resources.splice(indexResourceToDelete, 1)
    }
  }

}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

.container {
  width: 500px;
  margin: 24px auto;
}
</style>