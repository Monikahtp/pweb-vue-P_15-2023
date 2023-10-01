<template>

      <div class="board" :style="{borderColor: board.color}">
            <div class="head">
            <span class="title">{{board.title}}</span>
            <span class="head-btns">
                <button class="btn"><i class="fas fa-plus"></i>add item</button>
                <i class="fas fa-trash"></i>
            </span>
            </div>
            <h2 class="msg" v-if="board.items.length === 0">No Items Yet!</h2>
            <div v-else>
            <Item v-for="(item, index) in board.items" :key="index" :item="item" :clr="board.color"/>
            </div>
        </div>
</template>

<script>
import Item from "@/components/Item.vue"
export default {
    components: {
        Item
    },
    props: {
        board: {
            required: true,
            type: Object
        }
    }
}
</script>