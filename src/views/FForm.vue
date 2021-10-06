<template>
     
       <div class="meu-container">
          <h1 class="mb-4">Sobre o profissional</h1>
          <div class="row">           
            <div class="col">
              <h4 class="mb-3">Dados do profissional</h4>
              <b-form @submit.prevent="proximo">
              <b-form-group
                id="input-group-1"
                label="Nome Completo*"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.nome"
                  type="text"
                  placeholder="Digite o nome completo"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="CPF*" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.cpf"
                  placeholder="Digite um CPF"
                  required
                  class="w-75"
                  v-mask="'###.###.###-##'"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Número de celular*:" label-for="input-3">
                <b-form-input
                  id="input-2"
                  v-model="form.numero"
                  placeholder="(00) 0 0000-0000"
                  required
                  class="w-75"
                  v-mask="'(##) # ####-####'"
                ></b-form-input>
              </b-form-group>

              
               <div class="regiao">
                  <div class="w-50">
                    <label for="estadoField">Estado*</label>
                      <select class="form-control" id="estadoField" v-model="form.estado">
                        <option value="" disabled selected>Selecione</option>
                        <option  v-for="(estado, index) in estados" :key="index" :value="estado.value">
                          {{estado.texto}}
                        </option>
                      </select>
                  </div>
              
                  <div class="w-50">
                      <label for="cidadeField">Cidade*</label>
                      <select class="form-control" id="cidadeField" v-model="form.cidade">
                        <option value="" disabled selected>Selecione</option>
                        <option v-for="(cidade, index) in cidades[0][form.estado]" :key="index" :value="cidade">
                          {{cidade}}
                        </option>              
                      </select>
                  </div>
               </div>
               <div class="mt-4">
                 <Progresso :valor="50" :atual="1"></Progresso>
                 <ButtonNext @click.native="mandar" :texto="texto"></ButtonNext>
               </div>
            </b-form>
            
            </div>
            <div class="col my-auto">
              <img class="img w-100" src="../assets/desktop-pagina-1.png" alt="">
            </div>
          </div>
       </div>
        
</template>

<script>

  import Progresso from '@/components/Progresso.vue'

  export default {
    data() {
      return {
        texto: "Próximo",
        form: {
          nome: "",
          cpf: null,
          numero: "",
          estado: "",
          cidade: ""      
        },
        estados: [
      { 
        texto: "Paraná", 
        value: "Paraná"
      },
      { 
        texto: "Rio Grande do Sul", 
        value: "Rio Grande do Sul"
      },
      { 
        texto: "Santa Catarina", 
        value: "Santa Catarina"
      }
    ],
        cidades: [
          {
            "Paraná": ["Londrina", "Maringá"],
            "Rio Grande do Sul": ["Pelotas", "Porto Alegre"],
            "Santa Catarina": ["Florianópolis", "Joinville"]
          }
        ]  
      }
    },
    methods: {
      mandar(){

        this.$store.dispatch("criarForm", this.form)
        this.$router.push({name: "SForm"})
      },
      atualizaForm(){
        this.form.nome = this.$store.state.nome
      }

    },
    components: {
      Progresso
    },
    created() {
      this.atualizaForm()
    }
  }
</script>

<style>
.regiao {
  display: flex;
  gap: 20px;
}





</style>