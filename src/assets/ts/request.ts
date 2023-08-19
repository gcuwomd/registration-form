import type { FormInstance,UploadInstance } from "element-plus";
import { genFileId, ElMessage } from "element-plus";
import { ref } from "vue";
import { baseAxios } from "../../const";
import formdata from "../../views/RegistrationForm.vue"
const upload = ref<UploadInstance>();
// 提交
export const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid: any, fields: any) => {
      if (valid) {
        // 校验成功
        // const volunteer = [
        //   {
        //     level: "1",
        //     volunteer: form.firstIntention,
        //   },
        //   {
        //     level: "2",
        //     volunteer: form.secondIntention,
        //   },
        // ];
        // const formdata = {
        //   id: form.id,
        //   username: form.username,
        //   introduction: form.introduction,
        //   major: form.major,
        //   college: form.college,
        //   phone: form.phone,
        //   gender: form.gender,
        //   volunteer: volunteer,
        // };
        baseAxios.post("/user/register", formdata).then(() => {
          ElMessage({
            message: "报名成功！",
            type: "success",
          });
        });
        upload.value!.submit();
      } else {
        // 校验失败
        ElMessage.error('报名失败！')
      }
    });
  };