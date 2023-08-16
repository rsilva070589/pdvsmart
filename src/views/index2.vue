<template>
    <div class="layout-px-spacing dash_2">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Sales</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>

            <ul class="navbar-nav flex-row ms-auto">
                <li class="nav-item more-dropdown">
                    <div class="dropdown custom-dropdown-icon">
                        <a href="javascript:;" class="nav-link dropdown-toggle" id="ddlSettings" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Settings</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlSettings">
                            <li><a class="dropdown-item" data-value="Settings" href="javascript:void(0);">Settings</a></li>
                            <li><a class="dropdown-item" data-value="Mail" href="javascript:void(0);">Mail</a></li>
                            <li><a class="dropdown-item" data-value="Print" href="javascript:void(0);">Print</a></li>
                            <li><a class="dropdown-item" data-value="Download" href="javascript:void(0);">Download</a></li>
                            <li><a class="dropdown-item" data-value="Share" href="javascript:void(0);">Share</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </teleport>
        
  <div   class="table-light table-responsive" 
        style="margin: 0px; display: flex; padding: 5px;">
    <div   style="margin: 0px;  padding: 10px;" >
        Empresa
            <select   class="mb-4 form-select form-select-lg w-100"   
                    v-model="store.filtro.empresa"            
                    >
                    <option value="CENTRAL">TODAS</option>
                    <option value="CAETES">CAETES</option>
                    <option value="CURITIBA">CURITIBA</option>
                    <option value="AFONSOPENA">AFONSOPENA</option>
            </select>
        </div> 

        <div style="margin: 0px;  padding: 10px; width: 200px;" > 
              Data Inicial
            <input type="date" v-model="store.filtro.dataInicial"    class="mb-4 form-data form-select-lg w-100"> 
        </div> 

        <div style="margin: 0px;  padding: 10px; width: 200px;" >
            Data Final
            <input 
                type="date" data-date-format="DD MM YYYY" v-model="store.filtro.dataFinal"  class="mb-4 form-data form-select-lg w-100" 
                >  
        </div> 

        <div style="margin: 0px;  padding: 10px;" >
            <button class="btn btn-primary mt-4" @click="filtros()"  >atualizar</button>
        </div>
  </div>
  
  
        <div v-if="1==2">
            {{ store.relLoja?.map(x => x)}}
            <br>
            <span style="color: blueviolet;">{{ store.relVendedores.map(x => x.loginfuncionario)}}</span>
            <br>
            <span style="color: rgb(226, 86, 43);">{{ store.relAnual}}</span>
        </div>

        <div class="row layout-top-spacing">
            <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-statistics">
                    <div class="widget-heading">
                        <h5>Vendas</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlStatistics" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlStatistics">
                                    <li><a href="javascript:;" class="dropdown-item">View</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Download</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <div class="row">
                            <div class="col-6">
                                <div class="w-detail">
                                    <p class="w-title">Total de Vendas</p>
                                    <p class="w-stats">R$ {{ formataDinheiro( somaValor(store.relLoja?.map(x => x.vl_total_nf))) }}</p>
                                </div>
                                <apex-chart v-if="total_visit_options" height="58" type="line" :options="total_visit_options" :series="total_visit_series"></apex-chart>
                            </div>
                            <div class="col-6">
                                <div class="w-detail">
                                    <p class="w-title">Total Descontos</p>
                                    <p class="w-stats">R${{ formataDinheiro(somaValor(store.relLoja?.map(x => x.vl_desconto))) }}</p>
                                </div>
                                <apex-chart v-if="paid_visit_options" height="58" type="line" :options="paid_visit_options" :series="paid_visit_series"></apex-chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-expenses">
                    <div class="widget-heading">
                        <h5>Qtde. Vendas</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlExpenses" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlExpenses">
                                    <li><a href="javascript:;" class="dropdown-item">This Week</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Last Week</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Last Month</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="widget-content">
                        <p class="value">
                            {{ somaValor(store.relLoja.map(x => x.quantidadevenda)) }}
                             
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-trending-up"
                            >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                        </p>
                        <div class="w-progress-stats">
                            <div class="progress">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" class="progress-bar bg-gradient-secondary" style="width: 100%"></div>
                            </div>
                            <div class="w-icon"> </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-total-balance">
                    <div class="widget-content">
                        <div class="account-box">
                            <div class="info">
                                <div class="inv-title">
                                    <h5>Total Final</h5>
                                </div>
                                <div class="inv-balance-info">
                                    <p class="inv-balance">R$ {{ formataDinheiro(somaValor( store.relLoja.map(x => x.totalgeral)) ) }}</p>
                                    
                                </div>
                            </div>
                            <div class="acc-action">
                                <div>
                                    <a href="javascript:void(0);"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-plus"
                                        >
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line></svg
                                    ></a>
                                    <a href="javascript:void(0);"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-credit-card"
                                        >
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line></svg
                                    ></a>
                                </div>
                                <a href="javascript:void(0);">Upgrade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

            
  
        <div class="row layout-top-spacing"> 
            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" v-if="store.relVendedores.length > 0"> 
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Ranking Vendedores</h4>
                                    <apex-chart v-if="store.relVendedores.length > 0" height="350" type="bar" 
                                                     :options="options_5" 
                                                     :series=" [{name: 'vendas' ,data: store.relVendedores.map(x => x.quantidadevenda)}] ">
                                    </apex-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" v-if="store.relLoja.length > 0"> 
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vendas Por Empresa</h4>
                                    <apex-chart v-if="store.relLoja.length > 0" height="350" type="bar" 
                                                     :options="chartOptions" 
                                                     :series=" [{name: 'vendas' ,data: store.relLoja.map(x => x.totalgeral)}] ">
                                    </apex-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" v-if="store.relAnual.length > 0"> 
                <div class="widget widget-unique-visitors">
                    <div class="widget-heading">
                        <h5>Vendas Total Mensal</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlVisitors" class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlVisitors">
                                    <li><a href="javascript:;" class="dropdown-item">View</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Update</a></li>
                                    <li><a href="javascript:;" class="dropdown-item">Download</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="widget-content">
                        <apex-chart v-if="unique_visitor_options" height="350" type="bar" 
                            :options="unique_visitor_options" 
                            :series=" [{name: 'vendas' ,data: store.relAnual.map(x => x.total)}]  "
                            >
                        </apex-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import '@/assets/sass/widgets/widgets.scss';
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';
    import { indexStore } from './../store/indexStore' 
    import ApexChart from 'vue3-apexcharts';    
    import { useMeta } from '@/composables/use-meta';
    import axios from 'axios';
    useMeta({ title: 'Widgets' });
 
    const store = indexStore();  

    store.relLoja = []
    store.relVendedores = []
    store.relAnual = []

 

    store.filtro= {
        empresa: 'CENTRAL',
        dataInicial: '2023-08-01',
        dataFinal: '2023-08-15'
    }

    function filtros(){
        getTypeRel('BancoDadosLojaoModa.fdb',store.filtro.empresa,store.filtro.dataInicial,store.filtro.dataFinal,1)
        getTypeRel('BancoDadosLojaoModa.fdb',store.filtro.empresa,store.filtro.dataInicial,store.filtro.dataFinal,2)
        getTypeRel('BancoDadosLojaoModa.fdb',store.filtro.empresa,store.filtro.dataInicial,store.filtro.dataFinal,3)
    }
    
    
    
    async function getTypeRel (DataBaseCliente,ComboEmpresas,DataInicial,DataFinal,TypeRel) {
            let data = JSON.stringify({
            "databasecliente": DataBaseCliente,
            "comboempresas": ComboEmpresas,
            "datainicial": dataAtualFormatada(DataInicial),
            "datafinal": dataAtualFormatada(DataFinal),
            "typerel": TypeRel
            });

            const dados = 'dados vai'

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://easypedidos.sytes.net:8082/evento/report',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Basic dGVzdHNlcnZlcjp0ZXN0c2VydmVy'
            },
            data : data
            };

            await axios.request(config)
            .then((response) => {   
                if(TypeRel == 1){ 
                    store.relLoja = response.data.dados 
                }
                if(TypeRel == 2){
                    store.relVendedores = response.data.dados 
                }
                if(TypeRel == 3){ 
                    store.relAnual = response.data.dados 
                } 
                return response  
            
            })
            .catch((error) => {
            console.log(error);
            });

         
    } 
  
    function dataAtualFormatada(d){ 
    var data =  new Date(d),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"-"+mesF+"-"+anoF;
    }

    function somaValor(array) { 
        var arr =  array     
        var sum = 0; 
        for(var i =0;i<arr.length;i++){ 
          sum+=arr[i]; 
        }   
        return (sum)
      }

      function formataDinheiro(item) {
         let venda = item;
         if (!!venda && venda.toString().includes(",")) {
           venda = venda.toString().replace(",", ".");
         }
         return parseFloat(venda)
           .toFixed(2)
           .replace(".", ",")
           .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    }

 
  
    //Simple Bar
  
       //Simple Bar
       const options_5 = computed(() => {
 
        return {
            chart:      { toolbar: { show: false } },
            dataLabels: { enabled: true, formatter: function (val) {return "R$ " +val },style: {fontSize: '11px',colors: ["#000000"]
              } },
            plotOptions:{ bar: { horizontal: true,columnWidth: '90%',barHeight: '90%' } },
            xaxis:      { categories: store.relVendedores.map(x => x.loginfuncionario) },
            grid:       { borderColor:  '#e0e6ed' },
            tooltip:    { theme:  'light' },
        };
    });
      //Simple Bar
    

    //unique visitors
    const unique_visitor_series = ref([
        { name: 'Vendas', data: store.relAnual.map(x => x.total)}, 
    ]);
    const unique_visitor_options = computed(() => {
        
        return {
            chart: { height: 350,      type: 'bar'},
            dataLabels: { enabled: true, formatter: function (val) {return "R$ " +val },offsetY: -20,
              style: {
                fontSize: '11px',
                colors: ["#000000"]
              }              
            },
            
            stroke: { show: true, width: 2, colors: ['transparent'] },
            colors: ['#5c1ac3', '#ffbb44','#A52A2A','#5F9EA0'],
            dropShadow: { enabled: true, opacity: 0.3, blur: 1, left: 1, top: 1, color: '#515365' },
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            legend: { position: 'bottom', horizontalAlign: 'center', fontSize: '14px', markers: { width: 12, height: 12 }, itemMargin: { horizontal: 0, vertical: 8 } },
            grid: { borderColor:  '#e0e6ed' },
            xaxis: {
                categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                axisBorder: { show: true, color:   '#e0e6ed' },
                
            },
            yaxis: {
                tickAmount: 6,
            },
            fill: {
                type: 'gradient',
                gradient: { shade:  'light', type: 'vertical', shadeIntensity: 0.3, inverseColors: false, opacityFrom: 1, opacityTo: 0.8, stops: [0, 100] },
            },
            tooltip: {
                theme:  'light',
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        };
    });


// vendas por empresa
 
 
const chartOptions = computed(() => {

    return {
        chart: {
              height: 350,
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            colors: ['#5c1ac3', '#ffbb44','#A52A2A','#5F9EA0','#8B008B','#483D8B','#2F4F4F','#DCDCDC'],
            plotOptions: {
              bar: {
                columnWidth: '80%',
                distributed: true,
              }
            },
            dataLabels: { enabled: true, formatter: function (val) {return "R$ " +val },style: {fontSize: '11px',colors: ["#000000"]
              } },
            legend: {
              show: false
            }, 
            xaxis:      { categories: store.relLoja.map(x => x.identificacaointegracao) }
    }
             
          })

 //Statistics
 const total_visit_series = ref([{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }]);
    const total_visit_options = computed(() => {
     
        return {
            chart: { sparkline: { enabled: true }, dropShadow: { enabled: true, top: 3, left: 1, blur: 3, color: '#009688', opacity: 0.7 } },
            stroke: { curve: 'smooth', width: 2 },
            markers: { size: 0 },
            colors: ['#009688'],
            grid: { padding: { top: 0, bottom: 0, left: 0 } },
            tooltip: {
                theme:   'light',
                x: { show: false },
                y: {
                    title: {
                        formatter: function formatter() {
                            return '';
                        },
                    },
                },
            },
            responsive: [{ breakPoint: 576, options: { chart: { height: 95 }, grid: { padding: { top: 45, bottom: 0, left: 0 } } } }],
        };
    });   
    
    const paid_visit_series = ref([{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }]);
    const paid_visit_options = computed(() => {
         
        return {
            chart: { sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, color: '#e2a03f', opacity: 0.7 } },
            stroke: { curve: 'smooth', width: 2 },
            markers: { size: 0 },
            colors: ['#e2a03f'],
            grid: { padding: { top: 0, bottom: 0, left: 0 } },
            tooltip: {
                theme:  'light',
                x: { show: false },
                y: {
                    title: {
                        formatter: function formatter() {
                            return '';
                        },
                    },
                },
            },
            responsive: [{ breakPoint: 576, options: { chart: { height: 95 }, grid: { padding: { top: 35, bottom: 0, left: 0 } } } }],
        };
    });



</script>

<style>    
</style>
