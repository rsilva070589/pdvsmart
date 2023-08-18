"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[441],{4664:function(l,a,i){i.r(a),i.d(a,{default:function(){return Di}});i(26699);var e=i(66252),o=i(49963),s=i(3577),t=i(2262),n=i(31778),d=i(56296);const c={class:"container"},r=(0,e._)("ul",{class:"navbar-nav flex-row"},[(0,e._)("li",null,[(0,e._)("div",{class:"page-header"},[(0,e._)("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[(0,e._)("ol",{class:"breadcrumb"},[(0,e._)("li",{class:"breadcrumb-item"},[(0,e._)("a",{href:"javascript:;"},"Forms")]),(0,e._)("li",{class:"breadcrumb-item active","aria-current":"page"},[(0,e._)("span",null,"Validation")])])])])])],-1),v={class:"container"},m={class:"nav sidenav"},u={class:"sidenav-content"},p=(0,e.uE)('<a href="#basic" class="nav-link">Basic</a><a href="#email" class="nav-link">Email</a><a href="#select" class="nav-link">Select</a><a href="#custom_styles" class="nav-link">Custom Styles</a><a href="#browser_default" class="nav-link">Browser Default</a><a href="#tooltips" class="nav-link">Tooltips</a>',6),f=[p],_=(0,e.uE)('<div class="row layout-top-spacing"><div class="col-12"><div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> Documentation: <a target="_blank" href="https://getbootstrap.com/docs/5.0/forms/validation" class="text-info"> https://getbootstrap.com/docs/5.0/forms/validation </a></div></div></div>',1),b={class:"row layout-top-spacing"},y={id:"basic",class:"col-lg-12 layout-spacing"},g={class:"statbox panel box box-shadow"},h=(0,e._)("div",{class:"panel-heading"},[(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,e._)("h4",null,"Basic")])])],-1),k={class:"panel-body"},x=["onSubmit"],w={class:"row"},C={class:"col-md-12 form-group"},U=(0,e._)("label",{for:"fullName"},"Full Name",-1),S=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),P=(0,e._)("div",{class:"invalid-feedback"},"Please fill the name",-1),L=(0,e._)("button",{type:"submit",class:"btn mt-2 btn-primary"},"Submit form",-1),D={class:"code-section-container show-code"},T=(0,e._)("span",null,"Code",-1),V=[T],z={key:0,class:"code-section text-start"},q=(0,e._)("pre",null,'\x3c!-- Basic --\x3e\n<form novalidate class="simple-example" @submit.stop.prevent="submit_form1">\n    <div class="row">\n        <div class="col-md-12 form-group">\n            <label for="fullName">Full Name</label>\n            <input v-model="form1.name" id="fullName" type="text" class="form-control" :class="[is_submit_form1 ? (form1.name ? \'is-valid\' : \'is-invalid\') : \'\']" />\n            <div class="valid-feedback">Looks good!</div>\n            <div class="invalid-feedback">Please fill the name</div>\n        </div>\n    </div>\n    <button type="submit" class="btn mt-2 btn-primary">Submit form</button>\n</form>\n',-1),F={id:"email",class:"col-lg-12 layout-spacing"},Z={class:"statbox panel box box-shadow"},H=(0,e._)("div",{class:"panel-heading"},[(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,e._)("h4",null,"Email")])])],-1),A={class:"panel-body"},E=["onSubmit"],M={class:"row"},B={class:"col-md-12 form-group"},G=(0,e._)("label",{for:"e_mail"},"Email",-1),N=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),W=(0,e._)("div",{class:"invalid-feedback"},"Please fill the Email",-1),j=(0,e._)("button",{class:"btn btn-primary form-group mt-2",type:"submit"},"Submit form",-1),O={class:"code-section-container show-code"},Q=(0,e._)("span",null,"Code",-1),Y=[Q],R={key:0,class:"code-section text-start"},$=(0,e._)("pre",null,'\x3c!-- Email --\x3e\n<form class="email" novalidate @submit.stop.prevent="submit_form2">\n    <div class="row">\n        <div class="col-md-12 form-group">\n            <label for="e_mail">Email</label>\n            <input\n                v-model="form2.email"\n                type="email"\n                class="form-control"\n                id="e_mail"\n                :class="[is_submit_form2 ? (form2.email && email_validate(form2.email) ? \'is-valid\' : \'is-invalid\') : \'\']"\n            />\n            <div class="valid-feedback">Looks good!</div>\n            <div class="invalid-feedback">Please fill the Email</div>\n        </div>\n    </div>\n    <button class="btn btn-primary form-group mt-2" type="submit">Submit form</button>\n</form>\n',-1),I={id:"select",class:"col-lg-12 layout-spacing"},J={class:"statbox panel box box-shadow"},K=(0,e._)("div",{class:"panel-heading"},[(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,e._)("h4",null,"Select")])])],-1),X={class:"panel-body"},ll=["onSubmit"],al={class:"row"},il={class:"col-md-12"},el={id:"select_menu",class:"form-group form-group"},ol=(0,e._)("option",{value:""},"Open this select menu",-1),sl=(0,e._)("option",{value:"1"},"One",-1),tl=(0,e._)("option",{value:"2"},"Two",-1),nl=(0,e._)("option",{value:"3"},"Three",-1),dl=[ol,sl,tl,nl],cl=(0,e._)("div",{class:"valid-feedback"},"Example valid custom select feedback",-1),rl=(0,e._)("div",{class:"invalid-feedback"},"Please Select the field",-1),vl=(0,e._)("button",{class:"btn btn-primary mt-2",type:"submit"},"Submit form",-1),ml={class:"code-section-container show-code"},ul=(0,e._)("span",null,"Code",-1),pl=[ul],fl={key:0,class:"code-section text-start"},_l=(0,e._)("pre",null,'\x3c!-- Select --\x3e\n<form class="select" novalidate @submit.stop.prevent="submit_form3">\n    <div class="row">\n        <div class="col-md-12">\n            <div id="select_menu" class="form-group form-group">\n                <select v-model="form3.select" class="form-select" :class="[is_submit_form3 ? (form3.select ? \'is-valid\' : \'is-invalid\') : \'\']">\n                    <option value="">Open this select menu</option>\n                    <option value="1">One</option>\n                    <option value="2">Two</option>\n                    <option value="3">Three</option>\n                </select>\n                <div class="valid-feedback">Example valid custom select feedback</div>\n                <div class="invalid-feedback">Please Select the field</div>\n            </div>\n        </div>\n    </div>\n    <button class="btn btn-primary mt-2" type="submit">Submit form</button>\n</form>\n',-1),bl={id:"custom_styles",class:"col-lg-12 layout-spacing col-md-12"},yl={class:"statbox panel box box-shadow"},gl=(0,e._)("div",{class:"panel-heading"},[(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,e._)("h4",null,"Custom styles")])])],-1),hl={class:"panel-body"},kl=["onSubmit"],xl={class:"row"},wl={class:"col-md-4 form-group"},Cl=(0,e._)("label",{for:"validationCustom01"},"First name",-1),Ul=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),Sl=(0,e._)("div",{class:"invalid-feedback"},"Please fill the first name",-1),Pl={class:"col-md-4 form-group"},Ll=(0,e._)("label",{for:"validationCustom02"},"Last name",-1),Dl=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),Tl=(0,e._)("div",{class:"invalid-feedback"},"Please fill the last name",-1),Vl={class:"col-md-4 form-group"},zl=(0,e._)("label",{for:"validationCustomUsername"},"Username",-1),ql={class:"input-group"},Fl=(0,e._)("span",{class:"input-group-text",id:"inputGroupPrepend"},"@",-1),Zl=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),Hl=(0,e._)("div",{class:"invalid-feedback"},"Please choose a username.",-1),Al={class:"row"},El={class:"col-md-6 form-group"},Ml=(0,e._)("label",{for:"validationCustom03"},"City",-1),Bl=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),Gl=(0,e._)("div",{class:"invalid-feedback"},"Please provide a valid city.",-1),Nl={class:"col-md-3 form-group"},Wl=(0,e._)("label",{for:"validationCustom04"},"State",-1),jl=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),Ol=(0,e._)("div",{class:"invalid-feedback"},"Please provide a valid state.",-1),Ql={class:"col-md-3 form-group"},Yl=(0,e._)("label",{for:"validationCustom05"},"Zip",-1),Rl=(0,e._)("div",{class:"valid-feedback"},"Looks good!",-1),$l=(0,e._)("div",{class:"invalid-feedback"},"Please provide a valid zip.",-1),Il={class:"form-group form-group"},Jl={class:"form-check ps-0"},Kl={class:"custom-control custom-checkbox checkbox-success"},Xl=(0,e._)("label",{class:"custom-control-label",for:"invalidCheck"},"Agree to terms and conditions",-1),la=(0,e._)("div",{class:"invalid-feedback"},"You must agree before submitting.",-1),aa=(0,e._)("button",{class:"btn btn-primary mt-3",type:"submit"},"Submit form",-1),ia={class:"code-section-container show-code"},ea=(0,e._)("span",null,"Code",-1),oa=[ea],sa={key:0,class:"code-section text-start"},ta=(0,e._)("pre",null,'\x3c!-- Custom --\x3e\n<form class="needs-validation" novalidate @submit.stop.prevent="submit_form4">\n    <div class="row">\n        <div class="col-md-4 form-group">\n            <label for="validationCustom01">First name</label>\n            <input\n                type="text"\n                v-model="form4.first_name"\n                class="form-control"\n                :class="[is_submit_form4 ? (form4.first_name ? \'is-valid\' : \'is-invalid\') : \'\']"\n                id="validationCustom01"\n                placeholder="First name"\n            />\n            <div class="valid-feedback">Looks good!</div>\n            <div class="invalid-feedback">Please fill the first name</div>\n        </div>\n        <div class="col-md-4 form-group">\n            <label for="validationCustom02">Last name</label>\n            <input\n                type="text"\n                v-model="form4.last_name"\n                class="form-control"\n                :class="[is_submit_form4 ? (form4.last_name ? \'is-valid\' : \'is-invalid\') : \'\']"\n                id="validationCustom02"\n                placeholder="Last name"\n            />\n            <div class="valid-feedback">Looks good!</div>\n            <div class="invalid-feedback">Please fill the last name</div>\n        </div>\n        <div class="col-md-4 form-group">\n            <label for="validationCustomUsername">Username</label>\n            <div class="input-group">\n                <span class="input-group-text" id="inputGroupPrepend">@</span>\n                <input\n                    type="text"\n                    v-model="form4.username"\n                    class="form-control"\n                    :class="[is_submit_form4 ? (form4.username ? \'is-valid\' : \'is-invalid\') : \'\']"\n                    id="validationCustomUsername"\n                    placeholder="Username"\n                    aria-describedby="inputGroupPrepend"\n                />\n                <div class="valid-feedback">Looks good!</div>\n                <div class="invalid-feedback">Please choose a username.</div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-6 form-group">\n            <label for="validationCustom03">City</label>\n            <input\n                type="text"\n                v-model="form4.city"\n                class="form-control"\n                :class="[is_submit_form4 ? (form4.city ? \'is-valid\' : \'is-invalid\') : \'\']"\n                id="validationCustom03"\n                placeholder="City"\n            />\n            <div class="valid-feedback">Looks good!</div>\n            <div class="invalid-feedback">Please provide a valid city.</div>\n        </div>\n        <div class="col-md-3 form-group">\n            <label for="validationCustom04">State</label>\n            <input\n                type="text"\n                v-model="form4.state"\n                class="form-control"\n                :class="[is_submit_form4 ? (form4.state ? \'is-valid\' : \'is-invalid\') : \'\']"\n                id="validationCustom04"\n                placeholder="State"\n            />\n            <div class="valid-feedback">Looks good!</div>\n            <div class="invalid-feedback">Please provide a valid state.</div>\n        </div>\n        <div class="col-md-3 form-group">\n            <label for="validationCustom05">Zip</label>\n            <input\n                type="text"\n                v-model="form4.zip"\n                class="form-control"\n                :class="[is_submit_form4 ? (form4.zip ? \'is-valid\' : \'is-invalid\') : \'\']"\n                id="validationCustom05"\n                placeholder="Zip"\n            />\n            <div class="valid-feedback">Looks good!</div>\n            <div class="invalid-feedback">Please provide a valid zip.</div>\n        </div>\n    </div>\n    <div class="form-group form-group">\n        <div class="form-check ps-0">\n            <div class="custom-control custom-checkbox checkbox-success">\n                <input\n                    type="checkbox"\n                    v-model="form4.is_terms"\n                    class="custom-control-input"\n                    :class="[is_submit_form4 ? (form4.is_terms ? \'is-valid\' : \'is-invalid\') : \'\']"\n                    id="invalidCheck"\n                />\n                <label class="custom-control-label" for="invalidCheck">Agree to terms and conditions</label>\n                <div class="invalid-feedback">You must agree before submitting.</div>\n            </div>\n        </div>\n    </div>\n    <button class="btn btn-primary mt-3" type="submit">Submit form</button>\n</form>\n',-1),na={id:"browser_default",class:"col-lg-12 layout-spacing col-md-12"},da={class:"statbox panel box box-shadow"},ca=(0,e._)("div",{class:"panel-heading"},[(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,e._)("h4",null,"Browser defaults")])])],-1),ra={class:"panel-body"},va=["onSubmit"],ma={class:"row"},ua={class:"col-md-4 form-group"},pa=(0,e._)("label",{for:"validationDefault01"},"First name",-1),fa={class:"col-md-4 form-group"},_a=(0,e._)("label",{for:"validationDefault02"},"Last name",-1),ba={class:"col-md-4 form-group"},ya=(0,e._)("label",{for:"validationDefaultUsername"},"Username",-1),ga={class:"input-group"},ha=(0,e._)("span",{class:"input-group-text",id:"inputGroupPrepend2"},"@",-1),ka={class:"row"},xa={class:"col-md-6 form-group"},wa=(0,e._)("label",{for:"validationDefault03"},"City",-1),Ca={class:"col-md-3 form-group"},Ua=(0,e._)("label",{for:"validationDefault04"},"State",-1),Sa={class:"col-md-3 form-group"},Pa=(0,e._)("label",{for:"validationDefault05"},"Zip",-1),La={class:"form-group form-group"},Da={class:"custom-control custom-checkbox checkbox-primary"},Ta=(0,e._)("label",{class:"custom-control-label",for:"invalidCheck2"},"Agree to terms and conditions",-1),Va=(0,e._)("div",{class:"invalid-feedback"},"Agree to terms and conditions",-1),za=(0,e._)("button",{class:"btn btn-primary mt-3",type:"submit"},"Submit form",-1),qa={class:"code-section-container show-code"},Fa=(0,e._)("span",null,"Code",-1),Za=[Fa],Ha={key:0,class:"code-section text-start"},Aa=(0,e._)("pre",null,'\x3c!-- Browser defaults --\x3e\n<form @submit.stop.prevent="submit_form5">\n    <div class="row">\n        <div class="col-md-4 form-group">\n            <label for="validationDefault01">First name</label>\n            <input type="text" v-model="form5.first_name" class="form-control" id="validationDefault01" placeholder="First name" required />\n        </div>\n        <div class="col-md-4 form-group">\n            <label for="validationDefault02">Last name</label>\n            <input type="text" v-model="form5.last_name" class="form-control" id="validationDefault02" placeholder="Last name" required />\n        </div>\n        <div class="col-md-4 form-group">\n            <label for="validationDefaultUsername">Username</label>\n            <div class="input-group">\n                <span class="input-group-text" id="inputGroupPrepend2">@</span>\n                <input\n                    type="text"\n                    v-model="form5.username"\n                    class="form-control"\n                    id="validationDefaultUsername"\n                    placeholder="Username"\n                    aria-describedby="inputGroupPrepend2"\n                    required\n                />\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-6 form-group">\n            <label for="validationDefault03">City</label>\n            <input type="text" v-model="form5.city" class="form-control" id="validationDefault03" placeholder="City" required />\n        </div>\n        <div class="col-md-3 form-group">\n            <label for="validationDefault04">State</label>\n            <input type="text" v-model="form5.state" class="form-control" id="validationDefault04" placeholder="State" required />\n        </div>\n        <div class="col-md-3 form-group">\n            <label for="validationDefault05">Zip</label>\n            <input type="text" v-model="form5.zip" class="form-control" id="validationDefault05" placeholder="Zip" required />\n        </div>\n    </div>\n    <div class="form-group form-group">\n        <div class="custom-control custom-checkbox checkbox-primary">\n            <input type="checkbox" v-model="form5.is_terms" class="custom-control-input" id="invalidCheck2" required />\n            <label class="custom-control-label" for="invalidCheck2">Agree to terms and conditions</label>\n            <div class="invalid-feedback">Agree to terms and conditions</div>\n        </div>\n    </div>\n    <button class="btn btn-primary mt-3" type="submit">Submit form</button>\n</form>\n',-1),Ea={id:"tooltips",class:"col-lg-12 layout-spacing col-md-12"},Ma={class:"statbox panel box box-shadow"},Ba=(0,e._)("div",{class:"panel-heading"},[(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,e._)("h4",null,"Tooltips")])])],-1),Ga={class:"panel-body"},Na=["onSubmit"],Wa={class:"row"},ja={class:"col-md-4 mb-5 position-relative"},Oa=(0,e._)("label",{for:"validationTooltip01"},"First name",-1),Qa=(0,e._)("div",{class:"valid-tooltip"},"Looks good!",-1),Ya=(0,e._)("div",{class:"invalid-tooltip"},"Please fill the first name",-1),Ra={class:"col-md-4 mb-5 position-relative"},$a=(0,e._)("label",{for:"validationTooltip02"},"Last name",-1),Ia=(0,e._)("div",{class:"valid-tooltip"},"Looks good!",-1),Ja=(0,e._)("div",{class:"invalid-tooltip"},"Please fill the last name",-1),Ka={class:"col-md-4 mb-5 position-relative"},Xa=(0,e._)("label",{for:"validationTooltipUsername"},"Username",-1),li={class:"input-group"},ai=(0,e._)("span",{class:"input-group-text",id:"validationTooltipUsernamePrepend"},"@",-1),ii=(0,e._)("div",{class:"valid-tooltip"},"Looks good!",-1),ei=(0,e._)("div",{class:"invalid-tooltip"},"Please choose a unique and valid username.",-1),oi={class:"row"},si={class:"col-md-6 mb-5 position-relative"},ti=(0,e._)("label",{for:"validationTooltip03"},"City",-1),ni=(0,e._)("div",{class:"valid-tooltip"},"Looks good!",-1),di=(0,e._)("div",{class:"invalid-tooltip"},"Please provide a valid city.",-1),ci={class:"col-md-3 mb-5 position-relative"},ri=(0,e._)("label",{for:"validationTooltip04"},"State",-1),vi=(0,e._)("div",{class:"valid-tooltip"},"Looks good!",-1),mi=(0,e._)("div",{class:"invalid-tooltip"},"Please provide a valid state.",-1),ui={class:"col-md-3 mb-5 position-relative"},pi=(0,e._)("label",{for:"validationTooltip05"},"Zip",-1),fi=(0,e._)("div",{class:"valid-tooltip"},"Looks good!",-1),_i=(0,e._)("div",{class:"invalid-tooltip"},"Please provide a valid zip.",-1),bi={class:"form-group form-group position-relative"},yi={class:"custom-control custom-checkbox checkbox-success"},gi=(0,e._)("label",{class:"custom-control-label",for:"invalidCheck3"},"Agree to terms and conditions",-1),hi=(0,e._)("div",{class:"invalid-tooltip"},"Agree to terms and conditions",-1),ki=(0,e._)("button",{class:"btn btn-primary mt-2",type:"submit"},"Submit form",-1),xi={class:"code-section-container show-code"},wi=(0,e._)("span",null,"Code",-1),Ci=[wi],Ui={key:0,class:"code-section text-start"},Si=(0,e._)("pre",null,'\x3c!-- tooltips --\x3e\n<form class="needs-validation" novalidate @submit.stop.prevent="submit_form6">\n    <div class="row">\n        <div class="col-md-4 mb-5 position-relative">\n            <label for="validationTooltip01">First name</label>\n            <input\n                type="text"\n                v-model="form6.first_name"\n                class="form-control"\n                :class="[is_submit_form6 ? (form6.first_name ? \'is-valid\' : \'is-invalid\') : \'\']"\n                id="validationTooltip01"\n                placeholder="First name"\n            />\n            <div class="valid-tooltip">Looks good!</div>\n            <div class="invalid-tooltip">Please fill the first name</div>\n        </div>\n        <div class="col-md-4 mb-5 position-relative">\n            <label for="validationTooltip02">Last name</label>\n            <input\n                type="text"\n                v-model="form6.last_name"\n                class="form-control"\n                :class="[is_submit_form6 ? (form6.last_name ? \'is-valid\' : \'is-invalid\') : \'\']"\n                id="validationTooltip02"\n                placeholder="Last name"\n            />\n            <div class="valid-tooltip">Looks good!</div>\n            <div class="invalid-tooltip">Please fill the last name</div>\n        </div>\n        <div class="col-md-4 mb-5 position-relative">\n            <label for="validationTooltipUsername">Username</label>\n            <div class="input-group">\n                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>\n                <input\n                    type="text"\n                    v-model="form6.username"\n                    class="form-control"\n                    :class="[is_submit_form6 ? (form6.username ? \'is-valid\' : \'is-invalid\') : \'\']"\n                    id="validationTooltipUsername"\n                    placeholder="Username"\n                    aria-describedby="validationTooltipUsernamePrepend"\n                />\n                <div class="valid-tooltip">Looks good!</div>\n                <div class="invalid-tooltip">Please choose a unique and valid username.</div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-6 mb-5 position-relative">\n            <label for="validationTooltip03">City</label>\n            <input\n                type="text"\n                v-model="form6.city"\n                :class="[is_submit_form6 ? (form6.city ? \'is-valid\' : \'is-invalid\') : \'\']"\n                class="form-control"\n                id="validationTooltip03"\n                placeholder="City"\n            />\n            <div class="valid-tooltip">Looks good!</div>\n            <div class="invalid-tooltip">Please provide a valid city.</div>\n        </div>\n        <div class="col-md-3 mb-5 position-relative">\n            <label for="validationTooltip04">State</label>\n            <input\n                type="text"\n                v-model="form6.state"\n                :class="[is_submit_form6 ? (form6.state ? \'is-valid\' : \'is-invalid\') : \'\']"\n                class="form-control"\n                id="validationTooltip04"\n                placeholder="State"\n            />\n            <div class="valid-tooltip">Looks good!</div>\n            <div class="invalid-tooltip">Please provide a valid state.</div>\n        </div>\n        <div class="col-md-3 mb-5 position-relative">\n            <label for="validationTooltip05">Zip</label>\n            <input\n                type="text"\n                v-model="form6.zip"\n                :class="[is_submit_form6 ? (form6.zip ? \'is-valid\' : \'is-invalid\') : \'\']"\n                class="form-control"\n                id="validationTooltip05"\n                placeholder="Zip"\n            />\n            <div class="valid-tooltip">Looks good!</div>\n            <div class="invalid-tooltip">Please provide a valid zip.</div>\n        </div>\n    </div>\n    <div class="form-group form-group position-relative">\n        <div class="custom-control custom-checkbox checkbox-primary">\n            <input\n                type="checkbox"\n                v-model="form6.is_terms"\n                class="custom-control-input"\n                id="invalidCheck3"\n                :class="[is_submit_form6 ? (form6.is_terms ? \'is-valid\' : \'is-invalid\') : \'\']"\n            />\n            <label class="custom-control-label" for="invalidCheck3">Agree to terms and conditions</label>\n            <div class="invalid-tooltip">Agree to terms and conditions</div>\n        </div>\n    </div>\n    <button class="btn btn-primary mt-2" type="submit">Submit form</button>\n</form>\n',-1);var Pi={__name:"validation",setup(l){(0,d.j)({title:"Form Validation"});const a=(0,t.iH)([]),i=(0,t.iH)({name:""}),p=(0,t.iH)(!1),T=(0,t.iH)({email:""}),Q=(0,t.iH)(!1),ol=(0,t.iH)({select:""}),sl=(0,t.iH)(!1),tl=(0,t.iH)({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),nl=(0,t.iH)(!1),ul=(0,t.iH)({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),ea=(0,t.iH)(!1),Fa=(0,t.iH)({first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1}),wi=(0,t.iH)(!1),Pi=l=>{a.value.includes(l)?a.value=a.value.filter((a=>a!=l)):a.value.push(l)},Li=l=>{const a=/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;return a.test(l)},Di=()=>{p.value=!0,i.value.name&&Zi("Form submitted successfully.")},Ti=()=>{Q.value=!0,Li(T.value.email)&&Zi("Form submitted successfully.")},Vi=()=>{sl.value=!0,ol.value.select&&Zi("Form submitted successfully.")},zi=()=>{nl.value=!0,tl.value.first_name&&tl.value.last_name&&tl.value.username&&tl.value.city&&tl.value.state&&tl.value.zip&&tl.value.is_terms&&Zi("Form submitted successfully.")},qi=()=>{ea.value=!0,ul.value.first_name&&ul.value.last_name&&ul.value.username&&ul.value.city&&ul.value.state&&ul.value.zip&&ul.value.is_terms&&Zi("Form submitted successfully.")},Fi=()=>{wi.value=!0,Fa.value.first_name&&Fa.value.last_name&&Fa.value.username&&Fa.value.city&&Fa.value.state&&Fa.value.zip&&Fa.value.is_terms&&Zi("Form submitted successfully.")},Zi=(l="",a="success")=>{const i=window.Swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3});i.fire({icon:a,title:l,padding:"10px 20px"})};return(l,t)=>{const d=(0,e.Q2)("scroll-spy-active"),ea=(0,e.Q2)("scroll-spy-link"),Zi=(0,e.Q2)("scroll-spy");return(0,e.wg)(),(0,e.iD)("div",c,[((0,e.wg)(),(0,e.j4)(e.lR,{to:"#breadcrumb"},[r])),(0,e._)("div",v,[(0,e._)("div",m,[(0,e.wy)(((0,e.wg)(),(0,e.iD)("div",u,f)),[[d],[ea]])]),_,(0,e.wy)(((0,e.wg)(),(0,e.iD)("div",b,[(0,e._)("div",y,[(0,e._)("div",g,[h,(0,e._)("div",k,[(0,e._)("form",{novalidate:"",class:"simple-example",onSubmit:(0,o.iM)(Di,["stop","prevent"])},[(0,e._)("div",w,[(0,e._)("div",C,[U,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>i.value.name=l),id:"fullName",type:"text",class:(0,s.C_)(["form-control",[p.value?i.value.name?"is-valid":"is-invalid":""]])},null,2),[[o.nr,i.value.name]]),S,P])]),L],40,x),(0,e._)("div",D,[(0,e._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[1]||(t[1]=l=>Pi("code1"))},V),a.value.includes("code1")?((0,e.wg)(),(0,e.iD)("div",z,[(0,e.Wm)(n.Z,null,{default:(0,e.w5)((()=>[q])),_:1})])):(0,e.kq)("",!0)])])])]),(0,e._)("div",F,[(0,e._)("div",Z,[H,(0,e._)("div",A,[(0,e._)("form",{class:"email",novalidate:"",onSubmit:(0,o.iM)(Ti,["stop","prevent"])},[(0,e._)("div",M,[(0,e._)("div",B,[G,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>T.value.email=l),type:"email",class:(0,s.C_)(["form-control",[Q.value?T.value.email&&Li(T.value.email)?"is-valid":"is-invalid":""]]),id:"e_mail"},null,2),[[o.nr,T.value.email]]),N,W])]),j],40,E),(0,e._)("div",O,[(0,e._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[3]||(t[3]=l=>Pi("code2"))},Y),a.value.includes("code2")?((0,e.wg)(),(0,e.iD)("div",R,[(0,e.Wm)(n.Z,null,{default:(0,e.w5)((()=>[$])),_:1})])):(0,e.kq)("",!0)])])])]),(0,e._)("div",I,[(0,e._)("div",J,[K,(0,e._)("div",X,[(0,e._)("form",{class:"select",novalidate:"",onSubmit:(0,o.iM)(Vi,["stop","prevent"])},[(0,e._)("div",al,[(0,e._)("div",il,[(0,e._)("div",el,[(0,e.wy)((0,e._)("select",{"onUpdate:modelValue":t[4]||(t[4]=l=>ol.value.select=l),class:(0,s.C_)(["form-select",[sl.value?ol.value.select?"is-valid":"is-invalid":""]])},dl,2),[[o.bM,ol.value.select]]),cl,rl])])]),vl],40,ll),(0,e._)("div",ml,[(0,e._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[5]||(t[5]=l=>Pi("code3"))},pl),a.value.includes("code3")?((0,e.wg)(),(0,e.iD)("div",fl,[(0,e.Wm)(n.Z,null,{default:(0,e.w5)((()=>[_l])),_:1})])):(0,e.kq)("",!0)])])])]),(0,e._)("div",bl,[(0,e._)("div",yl,[gl,(0,e._)("div",hl,[(0,e._)("form",{class:"needs-validation",novalidate:"",onSubmit:(0,o.iM)(zi,["stop","prevent"])},[(0,e._)("div",xl,[(0,e._)("div",wl,[Cl,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=l=>tl.value.first_name=l),class:(0,s.C_)(["form-control",[nl.value?tl.value.first_name?"is-valid":"is-invalid":""]]),id:"validationCustom01",placeholder:"First name"},null,2),[[o.nr,tl.value.first_name]]),Ul,Sl]),(0,e._)("div",Pl,[Ll,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=l=>tl.value.last_name=l),class:(0,s.C_)(["form-control",[nl.value?tl.value.last_name?"is-valid":"is-invalid":""]]),id:"validationCustom02",placeholder:"Last name"},null,2),[[o.nr,tl.value.last_name]]),Dl,Tl]),(0,e._)("div",Vl,[zl,(0,e._)("div",ql,[Fl,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=l=>tl.value.username=l),class:(0,s.C_)(["form-control",[nl.value?tl.value.username?"is-valid":"is-invalid":""]]),id:"validationCustomUsername",placeholder:"Username","aria-describedby":"inputGroupPrepend"},null,2),[[o.nr,tl.value.username]]),Zl,Hl])])]),(0,e._)("div",Al,[(0,e._)("div",El,[Ml,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=l=>tl.value.city=l),class:(0,s.C_)(["form-control",[nl.value?tl.value.city?"is-valid":"is-invalid":""]]),id:"validationCustom03",placeholder:"City"},null,2),[[o.nr,tl.value.city]]),Bl,Gl]),(0,e._)("div",Nl,[Wl,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=l=>tl.value.state=l),class:(0,s.C_)(["form-control",[nl.value?tl.value.state?"is-valid":"is-invalid":""]]),id:"validationCustom04",placeholder:"State"},null,2),[[o.nr,tl.value.state]]),jl,Ol]),(0,e._)("div",Ql,[Yl,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=l=>tl.value.zip=l),class:(0,s.C_)(["form-control",[nl.value?tl.value.zip?"is-valid":"is-invalid":""]]),id:"validationCustom05",placeholder:"Zip"},null,2),[[o.nr,tl.value.zip]]),Rl,$l])]),(0,e._)("div",Il,[(0,e._)("div",Jl,[(0,e._)("div",Kl,[(0,e.wy)((0,e._)("input",{type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=l=>tl.value.is_terms=l),class:(0,s.C_)(["custom-control-input",[nl.value?tl.value.is_terms?"is-valid":"is-invalid":""]]),id:"invalidCheck"},null,2),[[o.e8,tl.value.is_terms]]),Xl,la])])]),aa],40,kl),(0,e._)("div",ia,[(0,e._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[13]||(t[13]=l=>Pi("code4"))},oa),a.value.includes("code4")?((0,e.wg)(),(0,e.iD)("div",sa,[(0,e.Wm)(n.Z,null,{default:(0,e.w5)((()=>[ta])),_:1})])):(0,e.kq)("",!0)])])])]),(0,e._)("div",na,[(0,e._)("div",da,[ca,(0,e._)("div",ra,[(0,e._)("form",{onSubmit:(0,o.iM)(qi,["stop","prevent"])},[(0,e._)("div",ma,[(0,e._)("div",ua,[pa,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[14]||(t[14]=l=>ul.value.first_name=l),class:"form-control",id:"validationDefault01",placeholder:"First name",required:""},null,512),[[o.nr,ul.value.first_name]])]),(0,e._)("div",fa,[_a,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[15]||(t[15]=l=>ul.value.last_name=l),class:"form-control",id:"validationDefault02",placeholder:"Last name",required:""},null,512),[[o.nr,ul.value.last_name]])]),(0,e._)("div",ba,[ya,(0,e._)("div",ga,[ha,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[16]||(t[16]=l=>ul.value.username=l),class:"form-control",id:"validationDefaultUsername",placeholder:"Username","aria-describedby":"inputGroupPrepend2",required:""},null,512),[[o.nr,ul.value.username]])])])]),(0,e._)("div",ka,[(0,e._)("div",xa,[wa,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[17]||(t[17]=l=>ul.value.city=l),class:"form-control",id:"validationDefault03",placeholder:"City",required:""},null,512),[[o.nr,ul.value.city]])]),(0,e._)("div",Ca,[Ua,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[18]||(t[18]=l=>ul.value.state=l),class:"form-control",id:"validationDefault04",placeholder:"State",required:""},null,512),[[o.nr,ul.value.state]])]),(0,e._)("div",Sa,[Pa,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[19]||(t[19]=l=>ul.value.zip=l),class:"form-control",id:"validationDefault05",placeholder:"Zip",required:""},null,512),[[o.nr,ul.value.zip]])])]),(0,e._)("div",La,[(0,e._)("div",Da,[(0,e.wy)((0,e._)("input",{type:"checkbox","onUpdate:modelValue":t[20]||(t[20]=l=>ul.value.is_terms=l),class:"custom-control-input",id:"invalidCheck2",required:""},null,512),[[o.e8,ul.value.is_terms]]),Ta,Va])]),za],40,va),(0,e._)("div",qa,[(0,e._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[21]||(t[21]=l=>Pi("code5"))},Za),a.value.includes("code5")?((0,e.wg)(),(0,e.iD)("div",Ha,[(0,e.Wm)(n.Z,null,{default:(0,e.w5)((()=>[Aa])),_:1})])):(0,e.kq)("",!0)])])])]),(0,e._)("div",Ea,[(0,e._)("div",Ma,[Ba,(0,e._)("div",Ga,[(0,e._)("form",{class:"needs-validation",novalidate:"",onSubmit:(0,o.iM)(Fi,["stop","prevent"])},[(0,e._)("div",Wa,[(0,e._)("div",ja,[Oa,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[22]||(t[22]=l=>Fa.value.first_name=l),class:(0,s.C_)(["form-control",[wi.value?Fa.value.first_name?"is-valid":"is-invalid":""]]),id:"validationTooltip01",placeholder:"First name"},null,2),[[o.nr,Fa.value.first_name]]),Qa,Ya]),(0,e._)("div",Ra,[$a,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[23]||(t[23]=l=>Fa.value.last_name=l),class:(0,s.C_)(["form-control",[wi.value?Fa.value.last_name?"is-valid":"is-invalid":""]]),id:"validationTooltip02",placeholder:"Last name"},null,2),[[o.nr,Fa.value.last_name]]),Ia,Ja]),(0,e._)("div",Ka,[Xa,(0,e._)("div",li,[ai,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[24]||(t[24]=l=>Fa.value.username=l),class:(0,s.C_)(["form-control",[wi.value?Fa.value.username?"is-valid":"is-invalid":""]]),id:"validationTooltipUsername",placeholder:"Username","aria-describedby":"validationTooltipUsernamePrepend"},null,2),[[o.nr,Fa.value.username]]),ii,ei])])]),(0,e._)("div",oi,[(0,e._)("div",si,[ti,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[25]||(t[25]=l=>Fa.value.city=l),class:(0,s.C_)([[wi.value?Fa.value.city?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip03",placeholder:"City"},null,2),[[o.nr,Fa.value.city]]),ni,di]),(0,e._)("div",ci,[ri,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[26]||(t[26]=l=>Fa.value.state=l),class:(0,s.C_)([[wi.value?Fa.value.state?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip04",placeholder:"State"},null,2),[[o.nr,Fa.value.state]]),vi,mi]),(0,e._)("div",ui,[pi,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[27]||(t[27]=l=>Fa.value.zip=l),class:(0,s.C_)([[wi.value?Fa.value.zip?"is-valid":"is-invalid":""],"form-control"]),id:"validationTooltip05",placeholder:"Zip"},null,2),[[o.nr,Fa.value.zip]]),fi,_i])]),(0,e._)("div",bi,[(0,e._)("div",yi,[(0,e.wy)((0,e._)("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=l=>Fa.value.is_terms=l),class:(0,s.C_)(["custom-control-input",[wi.value?Fa.value.is_terms?"is-valid":"is-invalid":""]]),id:"invalidCheck3"},null,2),[[o.e8,Fa.value.is_terms]]),gi,hi])]),ki],40,Na),(0,e._)("div",xi,[(0,e._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:t[29]||(t[29]=l=>Pi("code6"))},Ci),a.value.includes("code6")?((0,e.wg)(),(0,e.iD)("div",Ui,[(0,e.Wm)(n.Z,null,{default:(0,e.w5)((()=>[Si])),_:1})])):(0,e.kq)("",!0)])])])])])),[[Zi]])])])}}};const Li=Pi;var Di=Li}}]);
//# sourceMappingURL=forms-validation.138fcd50.js.map