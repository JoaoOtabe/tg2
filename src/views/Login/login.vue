<template>
    <div class="body-login">
        <!-- Leftside -->
        <div class="login-leftside">
            <img class="login-img" src="../../assets/login-image.png">
        </div>

        <!-- Rightside -->
        <div class="login-rightside">
            <div class="login-card">
                <h1 class="login-title">Login</h1>

                <!-- Email -->
                <div class="login-email">
                    <label class="login-email-subtitle">Email</label>
                    <input  class="input" type="email" v-model="email" placeholder="E-Mail...">
                </div>

                <!-- Senha -->
                <div class="login-password">
                    <label class="login-password-subtitle">Senha</label>
                    <input class="input" type="password" v-model="senha" placeholder="Senha...">
                    <!-- <router-link to="/forgot-password" class="forgot-password-login">Esqueci minha senha</router-link> -->
                </div>

                <!-- Button Login e Cadastro -->
                <div class="login-wrapper-btn">

                    <button class="btn-login" @click="getLogin">Login</button>
                    <a href="/cadastro"><button class="btn-cadastro">Ir para Cadastro</button></a>

                    <a href="/login-gym"><button class="btn-gym">Sou Academia</button></a>
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
            .post("Consulta/usuario_login", {
                email: this.email,
                senha: this.senha
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => {
                alert("Erro!", err)       
            })
        }
    }
}
</script>