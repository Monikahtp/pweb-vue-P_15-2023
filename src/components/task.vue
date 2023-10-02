<template>
  <div class="wrapp round basic-shadow flex column" :class="{
    'border-red': task.priority === 'high',
    'border-yellow': task.priority === 'med',
    'border-green': task.priority === 'low',
  }" ref="taskComponent">
    <taskDetail :task="task" v-show="taskDetail" @tutup="tutup" class="detail" @ngapus="ngapus"/>
    <div class="wrap-atas flex column" :class="{'low-opacity': this.task.status}">
      <div class="atas flex ycenter">
        <h2 :class="{ 'strike-through': this.task.status }">{{ task.title }}</h2>
      </div>
      <div class="desc">
        <p>{{ task.desc }}</p>
      </div>
      <div class="line extreme-round"></div>
    </div>
    <button
      class="button extreme-round done"
      :class="{
        'border-red': task.priority === 'high' && !isHovered,
        'border-yellow': task.priority === 'med' && !isHovered,
        'border-green': task.priority === 'low' && !isHovered,
        'bg-red': task.priority === 'high' && isHovered,
        'bg-yellow': task.priority === 'med' && isHovered,
        'bg-green': task.priority === 'low' && isHovered,
        'low-opacity': task.status
      }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @click="markAsDone"
    >
      Done
    </button>
  </div>
</template>

<script>
import taskEdit from '@/components/taskEdit.vue';
import taskDetail from '@/components/taskDetail.vue';

export default {
  data() {
    return {
      isHovered: false,
      taskDetail: false,
    };
  },
  props: {
    task: Object,
  },
  methods: {
    markAsDone() {
      this.$emit('mark-as-done', this.task.id);
    },
    ngedit(){
        this.editMenu=false
    },
    ngapus(){
        this.editMenu=false
        this.$emit('ngapus', this.task.id)
    },
    openTaskDetail(event) {
      const taskComponentElement = this.$refs.taskComponent;

      const taskDetailElement = taskComponentElement.querySelector('.detail');
      const taskDoneElement = taskComponentElement.querySelector('.done');

      if (taskComponentElement.contains(event.target) && !taskDetailElement.contains(event.target) && !taskDoneElement.contains(event.target)) {
        this.taskDetail = true;
      }
    },
    tutup(){
        this.taskDetail=false;
    }
  },
  components: {
    taskEdit,
    taskDetail
  },
  mounted() {
    document.addEventListener('click', this.openTaskDetail);
    console.log(this.task)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.openTaskDetail);
  },
};
</script>

<style lang="scss" scoped>
.wrapp {
  background-color: var(--putih);
  padding: 20px;
  width: 400px;
  height: 200px;
  justify-content: space-between;

  .wrap-atas {
    gap: 15px;
  }

  .atas {
    justify-content: space-between;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: rgb(223, 223, 223);
  }

  .button {
    align-self: flex-end;
    padding: 4px 8px;
  }

  /* Add styles for 'strike-through' class */
  .strike-through {
    text-decoration: line-through;
  }

  /* Add styles for 'low-opacity' class */
  .low-opacity {
    opacity: 0.5;
  }
}
</style>
