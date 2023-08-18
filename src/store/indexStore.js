import { ref } from 'vue'  
import { defineStore } from 'pinia'; 
 

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 
  
    const ulrprincipal = 'https://easypedidos.sytes.net:8083'
    const versao = 'versao: 1.0'
    const login = {
        email: null,
        senha: null
    }
    const empresas = []
    const filtro = {
        empresa: 'CENTRAL'
    }

    return {
        rotas ,
        login,
        ulrprincipal ,
        empresas,
        filtro,
        versao   
    }
    
});

export const useUserStore = defineStore('storeUser', {
    state: () => {
      return {
        empresas: false,
        email: null, 
        senha: null,
        accessToken: 'xxxxxxxxxxxxx'
      }
    },
    actions: {
      setToken (value) {
        this.accessToken = value
      }
    },
    persist: {
      enabled: true
    }
  })

 