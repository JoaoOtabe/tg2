<template>
    <div class="body-cadastro">
        <!-- Leftside -->
        <div class="cadastro-leftside">
            <img class="cadastro-img" src="../../assets/login-image.png">
        </div>
        <!-- Rightside -->
        <div class="cadastro-rightside">
            <div class="cadastro-card">
                <h1 class="cadastro-title">Cadastre-se</h1>

                <!-- Email -->
                <div class="cadastro-email">
                    <h2 class="subtitle-login">Email</h2>
                    <input  class="input" type="email" v-model="email" placeholder="Insira seu e-mail...">
                </div>

                <!-- Senha -->
                <div class="cadastro-password">
                    <h2 class="subtitle-login">Senha</h2>
                    <input class="input" type="password" v-model="senha" placeholder="Insira sua senha...">
                </div>

                <!-- Confirmar Senha -->
                <div class="cadastro-password-confirm">
                    <h2 class="subtitle-login">Confirme a Senha</h2>
                    <input class="input" type="password" name="input-password" placeholder="Repita sua senha...">
                </div>

                <!-- Button Cadastro e Voltar para Login -->
                <div class="cadastro-wrapper-btn">
                        <button class="btn-cadastro" @click="getCadastro">Cadastre-se</button>
                        <router-link tag="button" to="/" class="btn-login">Voltar para Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: "",
            senha: "",
        }
    },
    methods: {
        getCadastro(){
            this.$http
            .post("Cadastro/usuario", {
                email: this.email,
                senha: this.senha
            })
            .then(({ data }) => {
                console.log(data)
                alert(data.status)
            })
            .catch(err => {
            console.log(err)
          })
        }
    }
}
</script>
