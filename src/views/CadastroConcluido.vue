<template>
     
     <div class="meu-container">
        <h1 class="mb-4 text-center">Profissional cadastrado</h1>
        <div class="row">           
            <div class="col">
                  <div @click="cadastrarMais"  class="my-card my-card-first text-center">
                      <img src="../assets/cadastrar.svg" alt="">
                      <h2>Cadastrar mais profissionais</h2>
                  </div>
            </div>
            <div class="col-12 col-sm-6 text-center">
         
                  <div class="my-card text-center">
                      <img src="../assets/home.svg" alt="">
                      <h2>Voltar para tela inicial</h2>
                  </div>
        
            </div>
        </div>
        
    </div>
        
            

</template>

<script>
export default {
    data(){
        return {
            texto: "Contato"
        }
    },
    methods: {
        async cadastrarMais(){
            await this.$router.push({name: "FForm"})
            await this.$router.go()
            
        }
    },
}
</script>

<style>
.my-card img{
    max-width: 100px;
    margin-bottom: 20px;
}

.my-card {
    padding: 40px 20px 40px 20px;
    background: #F1F1F1;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;    
width: 220px;
height: 240px;
transform: scale(0.96);
transition: .4s;
cursor: pointer;
}

.my-card:hover {
    transform: scale(1);
}



.my-card-first {
    margin-left: auto;
}

.my-card h2 {
    font-size: 20px;
    font-weight: 600;
}

@media (max-width: 600px)
{
  .my-card {
      margin: 0 auto;
      margin-bottom: 10px;
      display: flex;
      width: auto;
      height: auto;
      justify-content: space-around;
      align-items: center;
  }

  .my-card img {
      width: 50px;
      margin: 0px;
  }

    .my-card h2 {
        margin: 0px;
    }

}





</style>