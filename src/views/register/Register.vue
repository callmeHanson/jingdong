<template>
  <div class="wrapper">
    <img class="wrapper__icon" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" />
    <div class="wrapper__input username">
      <input v-model="username" type="text" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input password">
      <input v-model="password" type="password" placeholder="请输入密码" autocomplete="new-password" />
    </div>
    <div class="wrapper__input repeat">
      <input v-model="repassword" type="password" placeholder="请确认密码" autocomplete="new-password" />
    </div>
    <div class="wrapper__register" @click="handleRegister">注册</div>
    <div class="wrapper__link">
      <span class="wrapper__link__login" @click="redirectToLogin">已有账户去登录</span>
    </div>
  </div>
  <Toast v-show="toastShow" :message="toastMessage"></Toast>
</template>
<script>
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast";
import { reactive, toRefs } from "@vue/reactivity";

const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const registerData = reactive({
    username: "",
    password: "",
    repassword: "",
  });

  const handleRegister = () => {
    post("/api/user/register", {
      username: registerData.username,
      password: registerData.password,
      repassword: registerData.repassword,
    })
      .then((resp) => {
        if (resp?.errno === 0) {
          router.push({ name: "Login" });
        } else {
          showToast("注册失败");
        }
      })
      .catch(() => {
        showToast("请求失败");
      });
  };
  const { username, password, repassword } = toRefs(registerData);
  return {
    username,
    password,
    repassword,
    handleRegister,
  };
};
const useLoginEffect = () => {
  const router = useRouter();
  const redirectToLogin = () => {
    router.push({ name: "Login" });
  };
  return { redirectToLogin };
};

export default {
  name: "Register",
  components: { Toast },
  setup() {
    const { toastShow, toastMessage, showToast } = useToastEffect();
    const { username, password, repassword, handleRegister } = useRegisterEffect(showToast);
    const { redirectToLogin } = useLoginEffect();
    return { toastShow, toastMessage, username, password, repassword, handleRegister, redirectToLogin };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  &__icon {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem;
  }
  &__input {
    margin: 0 0.4rem;
    height: 0.48rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    border-radius: 0.06rem;
    color: rgba(0, 0, 0, 0.5);
    input {
      outline: none;
      border: none;
      padding: 0 0 0 0.12rem;
      line-height: 0.48rem;
      width: 100%;
      font-size: 0.16rem;
      background: none;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    &.username,
    &.password {
      margin-bottom: 0.16rem;
    }
    &.repeat {
      margin-bottom: 0.32rem;
    }
  }
  &__register {
    margin: 0 0.4rem 0.16rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    font-size: 0.16rem;
    color: #ffffff;
    line-height: 0.48rem;
    text-align: center;
  }
  &__link {
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
}
</style>