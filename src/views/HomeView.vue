<template >
  <div class="wrap-home">
    <div class="absolute">
      <navBar @nginput="this.input=!this.input" class="masuk"/>
    </div>
    <div class="absolute" :class="{'nginput': input}">
      <inputTask v-if="input" @done="filterData(this.priority)" class="masuk"/>
    </div>
    <div class="wrappp flex column" @click="this.input=false">
      <div class="buton flex xcenter ycenter">
          <div class="extreme-round all basic-shadow button" @click="filterData('all')" :class="{'bg-blue':this.priority==='all', 'border-blue':this.priority!=='all'}">All</div>
          <div class="extreme-round high basic-shadow button" @click="filterData('high')" :class="{'bg-red':this.priority==='high', 'border-red':this.priority!=='high'}">High</div>
          <div class="extreme-round medium basic-shadow button" @click="filterData('med')" :class="{'bg-yellow':this.priority==='med', 'border-yellow':this.priority!=='med'}">Medium</div>
          <div class="extreme-round low basic-shadow button" @click="filterData('low')" :class="{'bg-green':this.priority==='low', 'border-green':this.priority!=='low'}">Low</div>
          <div class="extreme-round done basic-shadow button" @click="filterData('done')" :class="{'bg-blue':this.priority==='done', 'border-blue':this.priority!=='done'}">Done</div>
      </div>
      <div class="task flex" >
        <task
          v-for="(item, index) in sortingTaskData"
          :task="item" 
          :key="index"
          @mark-as-done="markTaskAsDone"
          @ngapus="ngapus"
        />
      </div>
    </div>
  </div>
</template>

<script>
import task from '@/components/task.vue';
import inputTask from '@/components/inputTask.vue';
import navBar from '@/components/navBar.vue';

export default {
  components: {
    task,
    inputTask,
    navBar
  },
  data(){
    return{
      taskData: [],
      input: false,
      priority: "all",
    }
  },
  computed: {
    sortingTaskData() {
      // Sort the taskData array based on priority and status
      return this.taskData.sort((a, b) => {
        // Compare priority first
        if (a.priority === "high" && b.priority !== "high") return -1;
        if (a.priority !== "high" && b.priority === "high") return 1;
        if (a.priority === "med" && b.priority === "low") return -1;
        if (a.priority === "low" && b.priority === "med") return 1;

        // If priority is the same, compare status
        if (a.status === true && b.status === false) return -1;
        if (a.status === false && b.status === true) return 1;

        // If both priority and status are the same, maintain their original order
        return 0;
      });
    },
    filteredTaskData() {
      if (this.priority === 'all') {
        return this.taskData; // Show all tasks
      } else if (this.priority === 'done') {
        return this.taskData.filter((task) => task.status === true); // Show completed tasks
      } else {
        return this.taskData.filter((task) => task.priority === this.priority); // Show tasks with the selected priority
      }
    }
  },
  methods:{
    retrieveFormData() {
      // Iterate through localStorage keys
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key matches the pattern "formData_"
        if (key.startsWith('task_')) {
          // Parse and add the data to the formDataList array
          const formData = JSON.parse(localStorage.getItem(key));
          this.taskData.push(formData);
        }
      }
    },
    markTaskAsDone(taskId) {
      // Find the task with the matching ID and update its status
      const taskToUpdate = this.taskData.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.status = true;
      }
      localStorage.setItem(`task_${taskToUpdate.id}`, JSON.stringify(taskToUpdate));
      

    },
    ngapus(taskId){
      const taskToUpdate = this.taskData.find((task) => task.id === taskId);
      if (taskToUpdate){
        localStorage.removeItem(`task_${taskId}`);
        this.taskData.pop(`task_${taskId}`)
      }

      this.taskData=[]

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key matches the pattern "formData_"
        if (key.startsWith('task_')) {
          // Parse and add the data to the formDataList array
          const formData = JSON.parse(localStorage.getItem(key));
          this.taskData.push(formData);
        }
      }

      this.taskData=this.sortingTaskData

      this.$forceUpdate()
    },
    closeEditMenuOnClickOutside(event) {
      // Check if the click event target is not within the ".menu" element
      if (!event.target.closest('.masuk')) {
        this.input = false;
      }
    },
    filterData(arg){
      this.priority=arg

      this.taskData=[]

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key matches the pattern "formData_"
        if (key.startsWith('task_')) {
          // Parse and add the data to the formDataList array
          const formData = JSON.parse(localStorage.getItem(key));
          this.taskData.push(formData);
        }
      }

      this.input=false

      this.taskData=this.filteredTaskData
    }
  },
  created() {
    // Retrieve form data from localStorage when the component is created
    this.retrieveFormData();
    // console.log(this.taskData)
  },
  mounted() {
    // Add a click event listener to the document to handle clicks outside of ".menu"
    document.addEventListener('click', this.closeEditMenuOnClickOutside);
  },
  beforeUnmount() {
    // Remove the click event listener when the component is about to be destroyed
    document.removeEventListener('click', this.closeEditMenuOnClickOutside);
  },
};
</script>

<style lang="scss" scoped>
.wrap-home{
  position: relative;
  height: 100%;
}

.absolute{
  position: absolute;
  transition: 0.5s;
}

.nginput{
  background-color: rgba(0, 0, 0, 0.334);
  width: 100vw;
  height: 100%;
  z-index: 97;
}
.wrappp{
  background-color: rgba(224, 234, 255, 1);
  width: 100vw;
  height: 100vh;
  padding: 20px 40px;
  gap: 20px;
}

.task{
  margin-left: 50px;
  gap: 30px;
  flex-wrap:wrap;
  z-index: 80;
}

.buton{
  margin-left: 50px;
  gap: 10px;
  width: fit-content;

  .button{
    padding: 4px 16px;
  }
}
</style>