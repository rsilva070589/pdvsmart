import { ref } from 'vue'  
import { defineStore } from 'pinia'; 
 

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 
  
    const ulrprincipal = 'https://easypedidos.sytes.net:8083'
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
        filtro        
    }
    
});

export const useUserStore = defineStore('storeUser', {
    state: () => {
      return {
        empresas: null,
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

 