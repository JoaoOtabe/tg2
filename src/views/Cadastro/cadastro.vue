<template>
    <div class="body-cadastro">
        <div class="overlay-login"></div>
        <div class="leftside-login">
            <img class="login-img" src="../../assets/login-image.png">
        </div>
        <div class="rightside-login">
            <div class="card-login">
                <h1 class="title-login">Cadastre-se</h1>
                <div class="input-login">
                    <h2 class="subtitle-login">Usuário</h2>
                    <input  class="input" type="email" name="input-email" placeholder="E-Mail...">
                </div>
                <div class="input-login">
                    <h2 class="subtitle-login">Senha</h2>
                    <input class="input" type="password" name="input-password" placeholder="Senha...">
                </div>
                <div class="input-login">
                    <h2 class="subtitle-login">Confirme a Senha</h2>
                    <input class="input" type="password" name="input-password" placeholder="Senha...">
                </div>
                <div class="wrapper-btn-login">
                    <form class="form-btn-login" method="GET" action="main-page">
                        <button class="btn-cadastro">Cadastre-se</button>
                    </form>
                    <form class="form-btn-login" method="GET" action="login">
                        <button class="btn-login">Voltar para Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
