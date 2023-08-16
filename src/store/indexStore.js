import { ref } from 'vue' 
import { defineStore } from 'pinia';

export const indexStore = defineStore("rotas", () =>{
    const rotas = ref({ 
    }); 

    

    return {
        rotas      
        
    }
});