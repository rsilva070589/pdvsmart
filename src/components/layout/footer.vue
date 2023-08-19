<template>
    <!-- BEGIN FOOTER -->
    <div class="footer-wrapper">
        <div class="footer-section f-section-1">
            <p class="">  <a target="_blank" href="https://arrangic.com">
                Copyright © variavelano PdvSmart Automação Comercial</a>
                Todos direitos reservados</p>
        </div>
        <div class="footer-section f-section-2">
            <p class="">
                {{store.versao}}
           
            </p>
        </div>
    </div>
    <!-- END FOOTER -->
</template>

<script setup> 
    import { indexStore, useUserStore } from '../../store/indexStore' 
   

    const store = indexStore();
</script>