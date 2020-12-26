<template>
<div>
    <div allign="center">
        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Họ:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" disabled v-model="lastName"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Tên:"
        label-for="input-horizontal" >
            <b-form-input id="input-horizontal" v-model="firstName"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Email:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" v-model="email"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Địa chỉ thường trú:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" v-model="identityCard"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Căn cước công dân:   "
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" v-model="location"> 
            </b-form-input> 
        </b-form-group>

        <div>
            <b-button @click="isChange=!isChange, updateUserInfo()">Thay đổi hồ sơ
            </b-button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data : () => {
        return {
            isChange: false,
            lastName: "Nguyễn"
        }
    },
    method : {
        updateUserInfo() {
            axios.post("http://localhost:8081/api/user/update-profile/")
        }
    }         
}
</script>