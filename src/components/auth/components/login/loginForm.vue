<script lang="ts" setup>
import loginRules from '../../rules/loginRules'
import authLogin from '../../actions/authLogin'
import type { ILogin } from '../../models/ILogin'
import routesConfig from '../../../../router/routesConfig'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref()
const loginModel = reactive<ILogin>({} as ILogin)


const setLogin = async (): Promise<void> => {
    form.value.validate(async (valid: boolean) => {
        if (!valid) {
            ElMessage.error('Por favor, rellene los campos correctamente')
            return
        }
        const status = await authLogin(loginModel)
        if (status) router.push(routesConfig.Home)
    })
}
</script>

<template>
    <el-form :model="loginModel" status-icon :rules="loginRules" ref="form" label-width="120px">
        <el-form-item label="Usuario" prop="username">
            <el-input v-model="loginModel.username" type="text" />
        </el-form-item>
        <el-form-item label="Contraseña" prop="password">
            <el-input v-model="loginModel.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" color="#245FA6" size="large" class="w-full" @click="setLogin">Iniciar
                Sesión</el-button>
        </el-form-item>
    </el-form>
</template>
