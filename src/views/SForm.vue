<template>
     
     <div class="meu-container">
        <h1 class="mb-4">Sobre o atendimento</h1>
        <div class="row">           
            <div class="col">
              <h4>Detalhes do atendimento</h4>
              <b-form>             
                 <label for="estadoField">Especialidade principal*</label>
                 <select class="form-control" id="especialidadeField" v-model="form.especialidade">
                  <option value="" disabled selected>Selecione a especialidade</option>
                  <option  v-for="(item, index) in especialidades" :key="index">
                      {{item}}
                   </option>
                </select>

                <label class="sr-only" for="inline-form-input-username">Informe o preço da consulta*</label>
                <b-input-group prepend="R$" class="mb-2 mr-sm-2 mb-sm-0 w-75">
                  <b-form-input v-model="form.valor" v-money="money" id="inline-form-input-username" placeholder="Valor"></b-form-input>
                </b-input-group>

                <label class="sr-only" for="checkbox-group">Formas de pagamento da consulta*</label>
                <b-form-checkbox-group
                  id="checkbox-group"
                  v-model="form.pagamento"
                  :options="formasDePagamento"  
                  class="mb-3 mt-2 check-person"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
               >
                    <b-form-group class="my-form-group" v-if="seContem('Cartão de credito')" label="Numero de parcelas" v-slot="{ ariaDescribedby }">
                      <b-form-radio v-model="form.parcelas" :aria-describedby="ariaDescribedby" name="some-radios" value="1x">1x</b-form-radio>
                      <b-form-radio v-model="form.parcelas" :aria-describedby="ariaDescribedby" name="some-radios" value="2x">2x</b-form-radio>
                      <b-form-radio v-model="form.parcelas" :aria-describedby="ariaDescribedby" name="some-radios" value="3x">3x</b-form-radio>
                    </b-form-group>
                </b-form-checkbox-group>

                <div class="mt-4">
                 <Progresso :valor="100" :atual="2"></Progresso>
                 <ButtonNext @click.native="mandar" :texto="texto"></ButtonNext>
               </div>
              </b-form>
            </div>
            <div class="col my-auto d-sm-block d-none">
              <img class="img w-100" src="../assets/desktop-pagina-2.png" alt="">
            </div>
        </div>
            
    </div>
        
            

</template>


<script>

  import Progresso from '@/components/Progresso.vue'

  export default {
    data() {
      return {
        
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: false /* doesn't work with directive */
      },
        texto: "Proximo",
        form: {
          especialidade: "",
          valor: null,
          pagamento: [],
          parcelas: []
        },
        especialidades: [
          "Cardiologia", 
          "Dermatologia", 
          "Neurologia", 
          "Oftalmologia", 
          "Psiquiatria", 
          "Urologia"
       ],
       formasDePagamento: [
          { item: 'Dinheiro', name: 'Em dinheiro' },
          { item: 'Pix', name: 'Pix' },
          { item: 'Cartão de credito', name: 'Cartão de credito'},
        ]
    }
    },
    methods: {
      seContem(a){
        let b = a 
        return this.form.pagamento.includes(b)
      },
      mandar(){
        this.$store.dispatch("criarForm", this.form)
        this.$router.push({name: "TForm"})
      }
    },
    components: {
      Progresso
    }
  }
</script>

<style>

 .custom-checkbox {
  background: #F9F9F9;
  padding: 10px 20px 10px 20px;
  margin: 5px 0px 0px 0px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(30,60,90,.3);
}

.custom-control-label {
  margin-left: 10px;
  margin-top: 0px;
}

.my-form-group{
   background: #F9F9F9;
  margin-top: -5px;
  padding-bottom: 5px;
  border-radius: 10px;
}

 .col-form-label {
   margin-left: 45px;
 }

.custom-radio {
  margin-left: 50px;
}

.input-group-prepend .input-group-text{
  background-color: var(--roxo-iv);
  color: #fff;
  border-radius: 0px;
}



</style>