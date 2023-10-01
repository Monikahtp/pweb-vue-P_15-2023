<template>
  <div>
    <div class="action-buttons">
      <button class="btn add">ALL</button>
      <button class="btn add">HIGH</button>
      <button class="btn add">MEDIUM</button>
      <button class="btn add">LOW</button>
      <button class="btn add">DONE</button>
    </div>
    <div>
      <h2 class="msg" v-if="boards.length === 0">You Don't Have Any Boards</h2>
      <div class="boards-container" v-else>
        <Board v-for="(board, index) in boards" :key="index" :board="board" />
      </div>
    </div>
  </div>
</template>


<script>
import Board from "@/components/Board.vue";

export default {
  components: {
    Board
  },
  data() {
    return {
      boards: [
        {
          title: "Test Board",
          color: "green",
          items: [
            {
              title: "Test Item 1",
              priority: "high"
            },
            {
              title: "Test Item 2",
              priority: "medium"
            },
            {
              title: "Test Item 3",
              priority: "low"
            }
          ]
        }
      ]
    };
  }
};
</script>