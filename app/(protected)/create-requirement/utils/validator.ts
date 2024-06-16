import * as yup from "yup";

export const yupMeet = yup.object().shape({
  position: yup.string().required("Vui lòng chọn component").default(""),
});

export const yupOrder = yup.object().shape({
  componentId: yup.string().required("Vui lòng chọn component").default(""),
});

export const yupSuportReport = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên dịch vụ").default(""),
  channel_source: yup.string().required("Vui lòng chọn Kênh").default(""),
  type_service_id: yup
    .string()
    .required("Vui lòng chọn Loại dịch vụ")
    .default(""),
  service_child_id: yup
    .string()
    .required("Vui lòng chọn Dịch vụ con")
    .default(""),
  service_detail_id: yup
    .string()
    .required("Vui lòng chọn Dịch vụ chi tiết")
    .default(""),
  receiving_department_id: yup
    .string()
    .required("Vui lòng chọn Bộ phận tiếp nhận")
    .default(""),
  team_id: yup.string().required("Vui lòng chọn Đội ngũ hỗ trợ ").default(""),
  user_id: yup.string().required("Vui lòng chọn Người xử lý").default(""),
});

export const yupEmpty = yup.object().shape({});
