(function(e){function t(t){for(var a,n,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},o={app:0},s=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02df":function(e,t,r){"use strict";r("0f13")},"034f":function(e,t,r){"use strict";r("85ec")},"06d6":function(e,t,r){"use strict";r("d1f9")},"0f13":function(e,t,r){},"1fc1":function(e,t,r){"use strict";r("66ce")},2092:function(e,t,r){},2418:function(e,t,r){"use strict";r("e73f")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],n=(r("034f"),r("2877")),i={},c=Object(n["a"])(i,o,s,!1,null,null,null),l=c.exports,u=r("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"my-container"},["FForm"!==e.$route.name&&"CadastroConcluido"!==e.$route.name?a("button",{staticClass:"previus-btn",on:{click:function(t){return e.$router.go(-1)}}},[a("img",{attrs:{src:r("c64c"),alt:""}})]):e._e(),a("keep-alive",[a("router-view")],1),"CadastroConcluido"===e.$route.name?a("span",{staticClass:"dev"},[e._v("Desenvolvido por - "),a("a",[e._v("Matheus Morais")])]):e._e()],1)},m=[],f={components:{},methods:{mudaForm:function(){this.$router.push({name:"SForm"})},voltaForm:function(){this.$router.go(-1)}}},p=f,v=(r("b8f3"),Object(n["a"])(p,d,m,!1,null,"69e0ddf0",null)),h=v.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.chave,staticClass:"meu-container"},[r("h1",{staticClass:"mb-4"},[e._v("Sobre o profissional")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("h4",{staticClass:"mb-3"},[e._v("Dados do profissional")]),e._v(" "+e._s(e.chave)+" "),r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Nome Completo*","label-for":"input-1"}},[r("b-form-input",{attrs:{maxlength:"48",id:"input-1",type:"text",placeholder:"Digite o nome completo",required:""},on:{change:function(t){return e.$v.form.nome.$touch()}},model:{value:e.form.nome,callback:function(t){e.$set(e.form,"nome",t)},expression:"form.nome"}}),e.$v.form.nome.$error&&!1===e.$v.form.nome.required?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e(),!0===e.$v.form.nome.required&&!0===e.$v.form.nome.$invalid?r("span",{staticClass:"error"},[e._v("Minimo 3 caracteres")]):e._e()],1),r("b-form-group",{attrs:{id:"input-group-2",label:"CPF*","label-for":"input-2"}},[r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"w-75",attrs:{id:"input-2",placeholder:"Digite um CPF",required:""},on:{change:function(t){return e.$v.form.cpf.$touch()}},model:{value:e.form.cpf,callback:function(t){e.$set(e.form,"cpf",t)},expression:"form.cpf"}}),e.$v.form.cpf.$error&&!1===e.$v.form.cpf.required?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e(),!0===e.$v.form.cpf.required&&!0===e.$v.form.cpf.$invalid?r("span",{staticClass:"error"},[e._v("CPF invalido")]):e._e()],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Número de celular*:","label-for":"input-3"}},[r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) # ####-####",expression:"'(##) # ####-####'"}],staticClass:"w-75",attrs:{id:"input-2",placeholder:"(00) 0 0000-0000",required:""},on:{change:function(t){return e.$v.form.numero.$touch()}},model:{value:e.form.numero,callback:function(t){e.$set(e.form,"numero",t)},expression:"form.numero"}}),e.$v.form.numero.$error&&!e.$v.form.numero.required?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e(),e.$v.form.numero.required&&e.$v.form.numero.$invalid?r("span",{staticClass:"error"},[e._v("Numero invalido")]):e._e()],1),r("div",{staticClass:"regiao"},[r("div",{staticClass:"w-50"},[r("label",{attrs:{for:"estadoField"}},[e._v("Estado*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.estado,expression:"form.estado"}],staticClass:"form-control",attrs:{id:"estadoField"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"estado",t.target.multiple?r:r[0])},function(t){return e.$v.form.estado.$touch()}]}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Selecione")]),e._l(e.estados,(function(t,a){return r("option",{key:a,domProps:{value:t.value}},[e._v(" "+e._s(t.texto)+" ")])}))],2),e.$v.form.estado.$error?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e()]),r("div",{staticClass:"w-50"},[r("label",{attrs:{for:"cidadeField"}},[e._v("Cidade*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.cidade,expression:"form.cidade"}],staticClass:"form-control",attrs:{id:"cidadeField"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"cidade",t.target.multiple?r:r[0])},function(t){return e.$v.form.cidade.$touch()}]}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Selecione")]),e._l(e.cidades[0][e.form.estado],(function(t,a){return r("option",{key:a,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2),e.$v.form.cidade.$error?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e()])]),r("div",{staticClass:"mt-4"},[r("Progresso",{attrs:{valor:50,atual:1}}),r("ButtonNext",{attrs:{texto:e.texto},nativeOn:{click:function(t){return e.proximoForm.apply(null,arguments)}}})],1)],1)],1),e._m(0)])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col my-auto d-sm-block d-none"},[a("img",{staticClass:"img w-100",attrs:{src:r("8c2b"),alt:""}})])}],g=r("b5ae"),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"progresso"},[r("b-progress",{staticClass:"bProgresso",staticStyle:{height:"20px"},attrs:{value:e.valor,max:100}}),r("span",[e._v(e._s(e.atual)+" de 2")])],1)])},C=[],x={name:"Progresso",props:["valor","atual"]},y=x,w=(r("06d6"),Object(n["a"])(y,$,C,!1,null,null,null)),k=w.exports,q={data:function(){return{texto:"Próximo",form:{nome:"",cpf:null,numero:"",estado:"",cidade:""},chave:this.$store.state.chaveLimpaForm,estados:[{texto:"Paraná",value:"Paraná"},{texto:"Rio Grande do Sul",value:"Rio Grande do Sul"},{texto:"Santa Catarina",value:"Santa Catarina"}],cidades:[{"Paraná":["Londrina","Maringá"],"Rio Grande do Sul":["Pelotas","Porto Alegre"],"Santa Catarina":["Florianópolis","Joinville"]}]}},validations:{form:{nome:{required:g["required"],mingLength:Object(g["minLength"])(3),maxLength:Object(g["maxLength"])(48)},cpf:{required:g["required"],mingLength:Object(g["minLength"])(14)},numero:{required:g["required"],mingLength:Object(g["minLength"])(16)},estado:{required:g["required"]},cidade:{required:g["required"]}}},methods:{proximoForm:function(){this.$v.$invalid?this.$store.dispatch("limpaForm"):(this.$store.dispatch("criarForm",this.form),this.$router.push({name:"SForm"}))}},components:{Progresso:k}},F=q,P=(r("02df"),Object(n["a"])(F,_,b,!1,null,null,null)),O=P.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"meu-container"},[r("h1",{staticClass:"mb-4"},[e._v("Sobre o atendimento")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("h4",[e._v("Detalhes do atendimento")]),r("b-form",[r("div",[r("label",{attrs:{for:"especialidadeField"}},[e._v("Especialidade principal*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.especialidade,expression:"form.especialidade"}],staticClass:"form-control",attrs:{id:"especialidadeField"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"especialidade",t.target.multiple?r:r[0])},function(t){return e.$v.form.especialidade.$touch()}]}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Selecione a especialidade")]),e._l(e.especialidades,(function(t,a){return r("option",{key:a},[e._v(" "+e._s(t)+" ")])}))],2),e.$v.form.especialidade.$error?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e()]),r("label",{staticClass:"sr-only",attrs:{for:"precoField"}},[e._v("Informe o preço da consulta*")]),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0 w-75",attrs:{prepend:"R$"}},[r("b-form-input",{attrs:{id:"precoField",placeholder:"Valor"},on:{change:function(t){return e.$v.form.valor.$touch()}},model:{value:e.form.valor,callback:function(t){e.$set(e.form,"valor",t)},expression:"form.valor"}})],1),e.$v.form.valor.$error&&!e.$v.form.valor.required?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e(),e.$v.form.valor.required&&e.$v.form.valor.$invalid?r("span",{staticClass:"error"},[e._v("Digite um valor entre 30 e 300")]):e._e(),r("label",{staticClass:"sr-only",attrs:{for:"checkbox-group"}},[e._v("Formas de pagamento da consulta*")]),r("b-form-checkbox-group",{staticClass:"mb-3 mt-2 check-person",attrs:{id:"checkbox-group",options:e.formasDePagamento,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},on:{change:function(t){return e.$v.form.pagamento.$touch()}},model:{value:e.form.pagamento,callback:function(t){e.$set(e.form,"pagamento",t)},expression:"form.pagamento"}},[e.seContem("Cartão de credito")?r("b-form-group",{staticClass:"my-form-group",attrs:{label:"Numero de parcelas"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[r("b-form-radio",{attrs:{"aria-describedby":a,name:"some-radios",value:"1x"},on:{change:function(t){return e.$v.form.parcelas.$touch()}},model:{value:e.form.parcelas,callback:function(t){e.$set(e.form,"parcelas",t)},expression:"form.parcelas"}},[e._v("1x")]),r("b-form-radio",{attrs:{"aria-describedby":a,name:"some-radios",value:"2x"},on:{change:function(t){return e.$v.form.parcelas.$touch()}},model:{value:e.form.parcelas,callback:function(t){e.$set(e.form,"parcelas",t)},expression:"form.parcelas"}},[e._v("2x")]),r("b-form-radio",{attrs:{"aria-describedby":a,name:"some-radios",value:"3x"},on:{change:function(t){return e.$v.form.parcelas.$touch()}},model:{value:e.form.parcelas,callback:function(t){e.$set(e.form,"parcelas",t)},expression:"form.parcelas"}},[e._v("3x")]),e.$v.form.parcelas.$error?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e()]}}],null,!1,2135088445)}):e._e()],1),e.$v.form.pagamento.$error?r("span",{staticClass:"error"},[e._v("Esse campo é requerido")]):e._e(),r("div",{staticClass:"mt-4"},[r("Progresso",{attrs:{valor:100,atual:2}}),r("ButtonNext",{attrs:{texto:e.texto},nativeOn:{click:function(t){return e.mandar.apply(null,arguments)}}},[e._v("mandar")])],1)],1)],1),e._m(0)])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col my-auto d-sm-block d-none"},[a("img",{staticClass:"img w-100",attrs:{src:r("ff3a"),alt:""}})])}],S=(r("caad"),r("2532"),r("716b")),N=r.n(S),D={data:function(){return{texto:"Proximo",form:{especialidade:"",valor:null,pagamento:[],parcelas:"1x"},especialidades:["Cardiologia","Dermatologia","Neurologia","Oftalmologia","Psiquiatria","Urologia"],formasDePagamento:[{item:"Dinheiro",name:"Em dinheiro"},{item:"Pix",name:"Pix"},{item:"Cartão de credito",name:"Cartão de credito"}]}},directives:{money:S["VMoney"]},validations:{form:{especialidade:{required:g["required"]},valor:{required:g["required"],between:Object(g["between"])(30,300)},pagamento:{required:g["required"]},parcelas:{required:g["required"]}}},methods:{seContem:function(e){var t=e;return this.form.pagamento.includes(t)},mandar:function(e){e.preventDefault(),this.$v.$invalid?this.$v.$touch():(this.$store.dispatch("criarForm",this.form),this.$router.push({name:"TForm"}))}},components:{Progresso:k}},M=D,R=(r("b426"),Object(n["a"])(M,E,j,!1,null,null,null)),L=R.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"meu-container"},[r("h1",{staticClass:"mb-4r"},[e._v("Revisão de cadastro")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"dados"},[r("div",[r("p",[e._v("Nome Completo")]),r("span",[e._v(e._s(this.$store.state.form.nome))])]),r("div",[r("p",[e._v("CPF")]),r("span",[e._v(e._s(this.$store.state.form.cpf))])]),r("div",[r("p",[e._v("Numero de celular ou telefone")]),r("span",[e._v(e._s(this.$store.state.form.numero))])]),r("div",[r("p",[e._v("Estado/Cidade")]),r("span",[e._v(e._s(this.$store.state.form.estado)+" - "+e._s(this.$store.state.form.cidade))])]),r("div",[r("p",[e._v("Especialidade principal")]),r("span",[e._v(e._s(this.$store.state.form.especialidade))])]),r("div",[r("p",[e._v("Preço da consulta")]),r("span",[e._v(e._s(e._f("formataValor")(this.$store.state.form.valor)))])]),r("div",[r("p",[e._v("Formas de pagamento da consulta")]),e._l(this.$store.state.form.pagamento,(function(t,a){return r("div",{key:a},[r("span",[e._v(e._s(t))])])})),e.seContem("Cartão de credito")?r("span",[e._v(" Em "+e._s(this.$store.state.form.parcelas)+" sem juros! ")]):e._e()],2)]),r("div",{staticClass:"text-center"},[r("ButtonNext",{attrs:{yellow:!0,texto:e.textoConcluir},nativeOn:{click:function(t){return e.finalizarCadastro.apply(null,arguments)}}}),r("br"),r("button",{staticClass:"mt-3 btn btn-edit",on:{click:e.editarDados}},[e._v(e._s(e.textoEditar))])],1)]),e._m(0)])])},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col my-auto d-sm-block d-none"},[a("img",{staticClass:"img w-100",attrs:{src:r("b4ad"),alt:""}})])}],V={data:function(){return{textoConcluir:"CADASTRAR PROFISSIONAL",textoEditar:"Editar cadastro",form:[]}},filters:{formataValor:function(e){return"R$ ".concat(e,",00")}},methods:{finalizarCadastro:function(){this.$router.push({name:"CadastroConcluido"})},editarDados:function(){this.$router.go(-2)},seContem:function(e){var t=e;return this.$store.state.form.pagamento.includes(t)}}},B=V,G=(r("7471"),Object(n["a"])(B,A,T,!1,null,null,null)),I=G.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"meu-container"},[a("h1",{staticClass:"mb-4 text-center"},[e._v("Profissional cadastrado")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"my-card my-card-first text-center",on:{click:e.cadastrarMais}},[a("img",{attrs:{src:r("ace9"),alt:""}}),a("h2",[e._v("Cadastrar mais profissionais")])])]),e._m(0)])])},U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 col-sm-6 text-center"},[a("div",{staticClass:"my-card text-center"},[a("img",{attrs:{src:r("86e6"),alt:""}}),a("h2",[e._v("Voltar para tela inicial")])])])}],z=r("1da1"),H=(r("96cf"),{data:function(){return{texto:"Contato"}},methods:{cadastrarMais:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({name:"FForm"});case 2:return t.next=4,e.$router.go();case 4:case"end":return t.stop()}}),t)})))()}}}),K=H,Q=(r("1fc1"),Object(n["a"])(K,J,U,!1,null,null,null)),W=Q.exports;a["default"].use(u["a"]);var X=[{path:"/",component:h,children:[{path:"",name:"FForm",component:O},{path:"pagina-2",name:"SForm",component:L},{path:"pagina-3",name:"TForm",component:I},{path:"cadastro-concluido",name:"CadastroConcluido",component:W}]}],Y=new u["a"]({mode:"history",base:"/",routes:X}),Z=Y,ee=r("2f62");a["default"].use(ee["a"]);var te=new ee["a"].Store({strict:!0,state:{chaveLimpaForm:!1,form:{nome:"",cpf:"",numero:"",estado:"",cidade:"",especialidade:"",valor:"",pagamento:"",parcelas:""}},mutations:{UPDATE_FORM:function(e,t){e.form=Object.assign(e.form,t)}},actions:{criarForm:function(e,t){e.commit("UPDATE_FORM",t)}},modules:{}}),re=r("5f5b"),ae=(r("f9e3"),r("2dd8"),r("b6d0")),oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("input",{staticClass:"btn my-btn",class:{amarelo:e.yellow},attrs:{type:"button",value:e.texto}})},se=[],ne={name:"ButtonNext",props:["texto","rota","form","yellow"],methods:{}},ie=ne,ce=(r("2418"),Object(n["a"])(ie,oe,se,!1,null,null,null)),le=ce.exports,ue=r("1dce"),de=r.n(ue);a["default"].use(de.a),a["default"].use(N.a,{precision:4}),a["default"].component("ButtonNext",le),a["default"].config.productionTip=!1,a["default"].use(re["a"]),a["default"].use(ae["a"]),new a["default"]({router:Z,store:te,render:function(e){return e(l)}}).$mount("#app")},"66ce":function(e,t,r){},7471:function(e,t,r){"use strict";r("2092")},"85ec":function(e,t,r){},"86a1":function(e,t,r){},"86e6":function(e,t,r){e.exports=r.p+"img/home.ea2edcbc.svg"},"8c2b":function(e,t,r){e.exports=r.p+"img/desktop-pagina-1.b5eccbee.png"},ab5a:function(e,t,r){},ace9:function(e,t,r){e.exports=r.p+"img/cadastrar.28bf255c.svg"},b426:function(e,t,r){"use strict";r("ab5a")},b4ad:function(e,t,r){e.exports=r.p+"img/desktop-pagina-3.280b16ed.png"},b8f3:function(e,t,r){"use strict";r("86a1")},c64c:function(e,t,r){e.exports=r.p+"img/Vector.a870089c.svg"},d1f9:function(e,t,r){},e73f:function(e,t,r){},ff3a:function(e,t,r){e.exports=r.p+"img/desktop-pagina-2.82910c03.png"}});
//# sourceMappingURL=app.5062bcb8.js.map