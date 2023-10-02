<template>
  <div class="absolute">
    <navBar/>
  </div>
  <router-view style="background-color: rgba(224, 234, 255, 1); width: 100vw; height: 100vh"/>
</template>

<script>
import navBar from '@/components/navBar-abt.vue';

export default {
  components: {
    navBar
  },
};
</script>

<style lang="scss">
:root{
  --red: rgb(237, 106, 94);
  --green: rgb(97, 195, 84);
  --yellow: rgb(245, 189, 80);
  --putih: #ffffff;
  --blue: rgba(55, 68, 189, 1); 
}

*{
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}

.absolute{
  position: absolute;
}


.flex{
  display: flex;
}

.column{
  flex-direction: column;
}

.column-reverse{
  flex-direction: column-reverse;
}

.flex-reverse{
  flex-direction: row-reverse;
}

.xcenter{
  justify-content: center;
}

.ycenter{
  align-content: center;
  align-items: center;
}

.basic-shadow{
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.power-shadow{
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}

.round{
  border-radius: 10px;
}

.extreme-round{
  border-radius: 30px;
}

.text-red{
  color: var(--red);
}

.text-green{
  color: var(--green);
}

.text-yellow{
  color: var(--yellow);
}

.text-blue{
  color: var(--blue)
}

.text-putih{
  color: var(--putih)
}

.bg-red{
  background-color: var(--red);
  border:2px solid var(--red);
  color: var(--putih)
}

.bg-green{
  background-color: var(--green);
  border:2px solid var(--green);
  color: var(--putih);
}

.bg-yellow{
  background-color: var(--yellow);
  border:2px solid var(--yellow);
  color: var(--putih);
}

.bg-blue{
  background-color: var(--blue);
  border:2px solid var(--blue);
  color: var(--putih);
}

.border-red{
  background-color: var(--putih);
  border:2px solid var(--red);
}

.border-yellow{
  background-color: var(--putih);
  border:2px solid var(--yellow);
}

.border-green{
  background-color: var(--putih);
  border:2px solid var(--green);
}

.border-blue{
  background-color: var(--putih);
  border:2px solid var(--blue);
}

.button{
  padding: 4px 8px;
  font-size: 12px;
  transition: 0.5s;
  font-weight: 800;
}

.button:hover{
  scale: 1.1;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
