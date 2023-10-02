<template>
    <div class="not-found">
        <div class="circle">
            <div class="background">
                <div class="content flex column">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                    <button class="btn"><router-link to="/" style="text-decoration: none;"><h5 style="color: var(--putih);">Go Back</h5></router-link></button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
export default {};
</script>

<style scoped lang="scss">
.not-found {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: static;
}
.circle {
  position: absolute;
  background-color: #87adff77;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, .3);

}

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #ffffff;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
  border-top: 3px solid rgb(234, 223, 223);
}



.content {

  text-align: center;
  position: relative;
  gap: 20px;
  margin-top: -20px;

  .btn{
    color: var(--putih)
  }
}

h1 {
  color: var(--blue);
  opacity: 1;
  font-size: 4em;
  margin: 0;
}

p {
  color: rgb(0, 0, 0);
  font-size: 1.5em;
  margin: 0;
  margin-top: -10px;
}
.btn{
  border: none;
  outline: none;
  padding: .5em .7em;
  border-radius: 3px;
  background-color: var(--blue);
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

router-link {
  font-size: 1.2em;
  text-decoration: none;
  color: var(--putih)
}
</style>
