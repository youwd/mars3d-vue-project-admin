<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <div class="enter-x min-w-64 min-h-64">
      <QrCode
        :value="qrCodeUrl"
        :imgsrc="qrCodeUrl"
        class="enter-x flex justify-center xl:justify-start"
        :width="280"
      />
      <Divider class="enter-x">{{ t('sys.login.scanSign') }}</Divider>
      <Button size="large" block class="mt-4 enter-x" @click="handleBackLogin">
        {{ t('sys.login.backSignIn') }}
      </Button>
    </div>
  </template>
</template>
<script lang="ts" setup>
  import { computed, onMounted, ref, unref } from 'vue';
  import LoginFormTitle from './LoginFormTitle.vue';
  import { Button, Divider } from 'ant-design-vue';
  import { QrCode } from '/@/components/Qrcode/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';
  import {
    useLoginState,
    LoginStateEnum,
    getScanLoginQrCode,
    checkScanLoginQrCode,
  } from './useLogin';

  // const qrCodeUrl =
  // 'data:image/png;base64,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';
  const qrCodeUrl = ref<String>('');
  const { notification } = useMessage();
  const userStore = useUserStore();
  onMounted(async () => {
    // 获取二维码
    const qrCode = await getScanLoginQrCode();
    qrCodeUrl.value = qrCode.data.data.qrCodeImgBase64;

    const qid = qrCode.data.data.qid;
    const qrCodeCheckResult = await checkScanLoginQrCode(qid);
    console.log(qrCodeCheckResult);

    if (qrCodeCheckResult.data.data.isSuccessLogin == true) {
      //await userStore.afterLoginAction(qrCodeCheckResult.data.data.loginVO.token);
      const userInfo = await userStore.login({
        password: "123456",
        username: "vben",
        mode: 'none', //不要默认的错误提示
      });
      notification.success({
        message: t('sys.login.loginSuccessTitle'),
        description: `${t('sys.login.loginSuccessDesc')}: `,
        duration: 3,
      });
    }
  });

  const { t } = useI18n();
  const { handleBackLogin, getLoginState } = useLoginState();

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.QR_CODE);
</script>
