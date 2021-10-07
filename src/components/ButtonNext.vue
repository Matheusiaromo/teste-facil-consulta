<template>
 <button class="btn my-btn" :class="{amarelo: yellow}">{{texto}}</button>
</template>

<script>
export default {
  name: "ButtonNext",
  props: [
    "texto",
    "rota",
    "form",
    "yellow"
  ],
  methods: {
    
  },
}
</script>

<style>
.my-btn {
  background-color: var(--roxo-iv);
  color: #fff;
  font-weight: 500;
  width: 100%;
  border-radius: 15px;
  font-size: 20px;
  transform: scale(1);
  transition: .5s;
}

.amarelo {
  background: #fbde40;
  color: var(--roxo-iv);
}


.my-btn:hover {
  transform: scale(1.02);
  color: #fff;

}

.amarelo:hover {
   color: var(--roxo-iv);;
}
</style>