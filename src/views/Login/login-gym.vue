<template>
    <div class="body-login-gym">
        <!-- Leftside -->
        <div class="login-leftside">
            <img class="login-img" src="../../assets/gym.jpg">
        </div>

        <!-- Rightside -->
        <div class="login-rightside">
            <div class="login-card">
                <h1 class="login-title">Login</h1>

                <!-- Email -->
                <div class="login-email">
                    <h2 class="subtitle-login">Email</h2>
                    <input  class="input" type="email" v-model="email" placeholder="E-Mail...">
                </div>

                <!-- Senha -->
                <div class="login-password">
                    <h2 class="subtitle-login">Senha</h2>
                    <input class="input" type="password" v-model="senha" placeholder="Senha...">
                    <router-link to="/forgot-password" class="forgot-password-login">Esqueci minha senha</router-link>
                </div>

                <!-- Button Login e Cadastro -->
                <div class="login-wrapper-btn">
                    <button class="btn-login" @click="getLogin">Login</button>
                    <a href="/cadastro-gym"><button class="btn-cadastro">Ir para Cadastro</button></a>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    data (){
        return{
            email: "",
            senha: ""
        }
    },
    methods: {
        getLogin() {
             this.$http
            .post("Consulta/cliente_login", {
                email: this.email,
                senha: this.senha
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