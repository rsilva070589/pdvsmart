<template>
    <!-- BEGIN FOOTER -->
    <div class="footer-wrapper">
        <div class="footer-section f-section-1">
            <p class="">  <a target="_blank" href="https://arrangic.com">
                Todos direitos reservados a</a>
                PdvSmart@2023</p>
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