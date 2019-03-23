<template>
    <div class="body-forgot-password">
        <div class="overlay-login"></div>
        <div class="leftside-login">
            <img class="login-img" src="../../assets/login-image.png">
        </div>
        <div class="rightside-login">
            <div class="card-login">
                <h1 class="title-login">Recuperar Senha</h1>
                <div class="input-login">
                    <h2 class="subtitle-login">Usuário</h2>
                    <input  class="input" type="email"  v-model="email" name="input-email" placeholder="E-Mail...">
                </div>
                <div class="wrapper-btn-login">
                    <form class="form-btn-login" method="GET" action="/login">
                        <button class="btn-login" @click="getSenha">Recuperar senha</button>
                        <!-- class back to login; diferenciar as classes e editar os espaçamentos; editar tela de cadastro -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return{
            email: ""
        }
    },
    methods: {
        getSenha() {
            this.$http
            .post("Consulta/recuperar_senha", {
                email: this.email
            })
            .then(({ data }) => {
                console.log(data)
                alert(data.status)
            })
            .catch(err => {
                this.alert(err)       
            })
        }
    }
}
</script>
