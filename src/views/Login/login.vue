<template>
    <div class="body-login">
        <!-- Leftside -->
        <div class="login-leftside">
            <img class="login-img" src="../../assets/login-image.png">
        </div>

        <!-- Rightside -->
        <div class="login-rightside">
            <div class="login-card">
                <!-- <h1 class="login-title">Login</h1> -->

                <!-- Email -->
                <!-- <div class="login-email">
                    <label class="login-email-subtitle">Email</label>
                    <input  class="login-email-field" type="email" v-model="email" placeholder="E-Mail...">
                </div> -->

                <!-- Senha -->
                <!-- <div class="login-password">
                    <label class="login-password-subtitle">Senha</label>
                    <input class="login-password-field" type="password" v-model="senha" placeholder="Senha...">
                    <router-link to="/forgot-password" class="forgot-password-login">Esqueci minha senha</router-link>
                </div> -->

                <!-- Button Login e Cadastro -->
                <!-- <div class="login-wrapper-btn">
                    <button class="btn-login" @click="getLogin">Login</button>
                    <div class="login-wrapper-cadastro-souGym">
                        <router-link tag="button" to="/cadastro" class="btn-cadastro">Ir para Cadastro</router-link>
                        <router-link tag="button" to="/login-gym" class="btn-to-gym">Sou Academia</router-link>
                    </div>
                </div> -->

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
                alert(data.status)
            })
            .catch(err => {
                this.alert(err)       
            })
        }
    }
}
</script>