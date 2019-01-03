$(document).ready(function(){
    $('.sidenav').sidenav({
        edge: 'left',
        draggable: true
    });
  });

var Home = { template: `<div class="center">
<h1 >contenuto home</h1>
<h2>{{mess}}</h2>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div>`,
              data(){
                  return{
                    mess: 'Ciao Mondo'
                  }
              }        
}
var About = { template: `<div class="row">
<div class="center"><img class="circle" src="http://www.gravatar.com/avatar/2018?d=robohash&s=300"></div>
<div class="col s6 ">
<h3 class="center">Bio</h3>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div class="col s6">
<h3 class="center">Skill</h3>
<div class="row.skill">
<div ><p class="skill">Prog.</p></div>
<div class="progress">
<div class="determinate" style="width: 70%"></div>
</div>
</div>
<div class="row.skil">
<div ><p class="skill">Grafica 2d</p></div>
<div class="progress">
<div class="determinate" style="width: 90%"></div>
</div>
</div>
<div class="row.skill">
<div><p class="skill">Grafica 3d</p></div>
<div class="progress">
<div class="determinate" style="width: 60%"></div>
</div>
</div>
<div class="row.skill">
<div><p class="skill">Web Design</p></div>
<div class="progress">
<div class="determinate" style="width: 100%"></div>
</div>
</div>
<div class="row.skill">
<div><p class="skill">database</p></div>
<div class="progress">
<div class="determinate" style="width: 40%"></div>
</div>
</div>`}

var Portfolio = { template: `<div class="row">
<h1 class="center">PORTFOLIO</h1> 
<div class="col s12 m4">
<div class="card ">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://via.placeholder.com/360x270">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div> 
  <div class="col s12 m4">
<div class="card ">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://via.placeholder.com/360x270">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div> 
  <div class="col s12 m4">
<div class="card ">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://via.placeholder.com/360x270">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div> 
  <div class="col s12 m4">
<div class="card ">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://via.placeholder.com/360x270">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div> 
  <div class="col s12 m4">
<div class="card ">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://via.placeholder.com/360x270">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div> 
  <div class="col s12 m4">
<div class="card ">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://via.placeholder.com/360x270">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div> 
  </div>`}
  
var Contatti = { template: `<div class="row">
<h3 class="center">Contattami usando il form sotto</h3>
<form class="col s6 myForm">
<div class="input-field col s12">
<input  type="text" id="nome" class="validate" >
<label for="nome">Nome</label>
</div>
<div class="input-field col s12">
<input  type="email" id="email"  class="validate" >
<label for="email">Email</label>
</div>
<div class="input-field col s12"> 
<input  type="text" id="oggetto"  class="validate" >
<label for="oggetto">Oggetto</label>
</div>
<div class="input-field col s12">
<textarea id="textarea1" class="materialize-textarea"></textarea>
<label for="textarea1">Email</label>
</div>
<button class="btn indigo">Invia</button>
</form>
</div>` }

var routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contatti', component: Contatti }
  ]

  var router = new VueRouter({
    routes // short for `routes: routes`
  })

new Vue ({
    router,
    el: '#app',
    data:{
        
    }
}).$mount('#app')
