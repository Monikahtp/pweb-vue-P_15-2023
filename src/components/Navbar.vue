<template>
    <div class="navbar">
        <router-link to="/" class="logo"></router-link>
        <router-link to="/home" class="home-link"><i class="fas fa-home"></i></router-link>
        <router-link to="/about" class="about-link"><i class="fas fa-users"></i></router-link>


        <div class="nav-links">
            <!-- <router-link v-for="(link, index) in links" :class="{active: link.path == $route.path}" :key="index" :to="link.path">{{ link.name }}</router-link> -->
            <AddBoardBtn />
        </div>
    </div>
</template>

<script>
import AddBoardBtn from '@/components/AddBoardBtn.vue';

export default {
    components: {
        AddBoardBtn
    },
    data: () => ({
        links: [
            {
                name: 'home',
                path: '/'                
            },
            {
                name: 'about',
                path: '/about'
            }
        ]
    })
}
</script>
