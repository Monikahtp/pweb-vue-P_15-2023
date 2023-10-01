<template>
    <span>
      <button @click="showModal = true" class="btn"><i class="fas fa-plus"></i></button>
      <Modal
        v-if="showModal"
        title="Add Board"
        labelA="Board Title"
        labelB="Board Color"
        inputBtype="color"
        @close="showModal = false" 
        @submit="handleSubmit"
        />
    </span>
  </template>
  
  <script>
  import Modal from "@/components/Modal.vue"
  
  export default {
    components: {
      Modal
    },
    data: () => ({
        showModal: false
    }),
    methods: {
      handleSubmit(data){
        console.log(data)
      }
    }
  }
  </script>
  