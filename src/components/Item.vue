<template>
    <div class="item">
        <div class="head">
            <span>
                <span class="priority">Priority:</span>
                <span class="badge" :style="{backgroundColor: priorityClr}">{{ item.priority }}</span>
            </span>
            <i class="fas fa-sort" :style="{color:clr}"></i>
        </div>
        <p class="title">{{ item.title }}</p>
        <p class="text-right">
            <button class="btn delete">delete</button>
        </p>
    </div>
</template>

<script>
export default {
    props: ['item', 'clr'],
    computed: {
        priorityClr(){
            if(this.item.priority == 'low'){
                return '#d0c6fc';
            } else if(this.item.priority == 'medium'){
                return '#80d5db';
            } else if(this.item.priority == 'high'){
                return '#d13667';
            }
        }
    }
}
</script>